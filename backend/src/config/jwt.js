module.exports = {
  secret: process.env.JWT_SECRET || 'super_secret_key',
  accessExpiresIn: '15m',
  refreshExpiresIn: '7d',
  issuer: 'tysiac-app',
  audience: 'users',
};
