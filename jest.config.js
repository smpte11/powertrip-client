module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
  reporters: ["default", "jest-junit"],
};
