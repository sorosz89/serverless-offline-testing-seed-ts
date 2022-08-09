import type { Config } from 'jest';
import { baseConfig } from './jest.config';

const config: Config = {
  ...baseConfig,
  testMatch: ['**/__test__/e2e/**/*.[jt]s?(x)'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './test-report',
        filename: 'e2e-test-report.html',
        openReport: false,
      },
    ],
  ],
};

export default config;
