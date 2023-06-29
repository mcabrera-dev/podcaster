/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  "moduleNameMapper": { "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js" },
  // to obtain access to the matchers.
  //setupFilesAfterEnv: ['./tests/setupTests.ts'],

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
  transform: {
    '.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
};