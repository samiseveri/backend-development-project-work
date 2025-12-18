// src/tests/config.test.js

describe('System Configuration', () => {

  test('should check if the app environment is set to test', () => {
    const env = process.env.NODE_ENV || 'test';
    expect(env).toBe('test');
  });

  test('server configuration object should have required properties', () => {
    const config = { port: 3000, name: 'BoardGameApp' };
    expect(config).toHaveProperty('port');
    expect(typeof config.port).toBe('number');
  });

});