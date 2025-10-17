import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './src/schema/typeDefs.js';
import resolvers from './src/schema/resolvers.js';
import { PORT } from './src/config/index.js';
import { logger } from './src/utils/logger.js';

async function start() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    formatError(formattedError, error) {
      logger.error('GraphQL error', { formattedError, error });

      if (formattedError?.extensions?.code === 'EXTERNAL_API_ERROR') {
        return formattedError;
      }

      return {
        ...formattedError,
        message: 'Internal server error',
      };
    },
  });

  // Handle unhandled errors so the process doesn't crash
  process.on('unhandledRejection', (reason) => logger.error('Unhandled promise rejection', { reason }));
  process.on('uncaughtException', (err) => logger.error('Uncaught exception', { err }));

  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port: PORT },
    });

    logger.info(`GraphQL server ready at: ${url}`);
    return { url };
  } catch (err) {
    logger.error('Failed to start server', { err });
    throw err;
  }
};

start();
