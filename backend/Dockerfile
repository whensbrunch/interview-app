##############################################
# Base image - regular alpine image not 
# compatible with libc needed by prisma2
# Source: https://github.com/jeanblanchard/docker-alpine-glibc/blob/master/Dockerfile
# Source: https://github.com/prisma/prisma2/issues/702
FROM alpine:3.11.2 as base

ENV LANG=C.UTF-8
ENV GLIBC_VERSION 2.30-r0

# Download and install glibc
RUN apk add --update curl && \
	curl -Lo /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub && \
	curl -Lo glibc.apk "https://github.com/sgerrand/alpine-pkg-glibc/releases/download/${GLIBC_VERSION}/glibc-${GLIBC_VERSION}.apk" && \
	curl -Lo glibc-bin.apk "https://github.com/sgerrand/alpine-pkg-glibc/releases/download/${GLIBC_VERSION}/glibc-bin-${GLIBC_VERSION}.apk" && \
	apk add glibc-bin.apk glibc.apk && \
	/usr/glibc-compat/sbin/ldconfig /lib /usr/glibc-compat/lib && \
	echo 'hosts: files mdns4_minimal [NOTFOUND=return] dns mdns4' >> /etc/nsswitch.conf && \
	apk del curl && \
	rm -rf glibc.apk glibc-bin.apk /var/cache/apk/*


RUN apk add nodejs npm python g++ make && rm -rf /var/cache/apk/*

################################################

FROM node:10.13.0 as builder

WORKDIR /server
COPY package* ./
RUN npm install

COPY tsconfig.json ./
COPY ./src ./src
COPY ./prisma ./prisma
RUN npm run build

FROM base
WORKDIR /server
COPY --from=builder /server/node_modules/ ./node_modules/
COPY --from=builder /server/dist/ ./
COPY package* ./
copy tsconfig.json ./

EXPOSE 5000
USER 1000
ENV PORT 5000
ENV NODE_ENV production
ENV API_ENDPOINT /api/v1
ENV DATABASE_CONNECTION postgresql://override-me:3306/dev
CMD npm run prod