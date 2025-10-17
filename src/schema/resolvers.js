import { GraphQLError } from 'graphql';
import { fetchWeatherData } from '../services/buienradar.js';
import { logger } from '../utils/logger.js';

const resolvers = {
  Query: {
    weatherData: async () => {
      try {
        return await fetchWeatherData();
      } catch (err) {
        logger.error('Failed to fetch weather data', { err });

        throw new GraphQLError('Failed to fetch weather data', {
          extensions: {
            code: 'EXTERNAL_API_ERROR',
            http: { status: 502 },
          },
        });
      }
    },
  },
};

export default resolvers;
