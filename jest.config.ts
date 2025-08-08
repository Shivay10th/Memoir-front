import type { Config } from "jest";

import { TextDecoder, TextEncoder } from "util";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@mui/styled-engine$": "<rootDir>/node_modules/@mui/styled-engine-sc",
    "\\.svg$": "<rootDir>src/utils/test/svgMock",
  },
  setupFilesAfterEnv: ["<rootDir>/src/utils/test/test-utils.tsx"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx,js,jsx}",
    "!src/**/index.ts",
    "!src/**/*.d.ts",
  ],
  moduleDirectories: ["node_modules", "src/utils/test", "src"],
  globals: {
    TextDecoder,
    TextEncoder,
    Response,
    Request,
    BroadcastChannel,
    TransformStream,
  },
};

export default config;
