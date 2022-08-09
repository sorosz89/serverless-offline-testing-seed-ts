import type { Config } from 'jest';
import { baseConfig } from './jest.config'

const config: Config = {
    ...baseConfig,
    testMatch: ["**/__test__/e2e/**/*.[jt]s?(x)"]
};

export default config;