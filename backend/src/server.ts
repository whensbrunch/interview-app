import { GraphQLServer } from 'graphql-yoga'
import { schema } from './schema'
import { createContext } from './context'
import config from './config';

new GraphQLServer({ schema, context: createContext }).start(
  {
    port: config.port,
    endpoint: config.endpoint
  },
  () => console.log(`Server ready at: http://localhost:${config.port}`)
);
