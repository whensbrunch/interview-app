FROM node:10.13.0 as build

WORKDIR /app
COPY package*.json /app/
RUN npm install

COPY src/ /app/src/
COPY *.json /app/
COPY *.js /app/

RUN npm run build

COPY public/ /app/public/

FROM nginx:1.16.0-alpine

COPY --from=build /app/public /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]