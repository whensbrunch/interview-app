
export default {
  port: process.env.PORT || 5000,
  endpoint: process.env.API_ENDPOINT || '/api/v1',
  database: process.env.DATABASE_CONNECTION || 'postgresql://root:prisma@localhost:3306/dev'
};