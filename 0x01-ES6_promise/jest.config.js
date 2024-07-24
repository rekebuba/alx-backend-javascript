export default {
    transform: {
      '^.+\\.jsx?$': 'babel-jest',
    },
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
  };
