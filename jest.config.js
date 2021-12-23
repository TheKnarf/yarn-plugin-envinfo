module.exports = {
	transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  testEnvironment: 'node',
  resolver: require.resolve('jest-pnp-resolver'),
};
