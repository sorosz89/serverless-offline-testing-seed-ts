import type { Config } from 'jest';

export const baseConfig: Config = {
  verbose: true,
  preset: 'ts-jest',
  setupFiles: ['dotenv/config'],
};
