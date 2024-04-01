import type { Config } from "jest";
import { defaults } from "jest-config";

const config: Config = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mts"],
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testMatch: ["**/*.test.(ts|tsx|mts)"],
};

export default config;
