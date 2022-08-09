import type { Config } from 'jest';
import { baseConfig } from './jest.config';

const config: Config = {
    ...baseConfig,
    testMatch: ['**/__test__/integration/**/*.[jt]s?(x)'],
    globalSetup: './__test__/setup.js',
    "reporters": [
        "default",
        ["jest-html-reporters", {
            "publicPath": "./test-report",
            "filename": "integration-test-report.html",
            "openReport": false
        }]
    ]
};

export default config;
