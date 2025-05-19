require('dotenv').config();
const app = require('./app');
const sequelize = require('./db/postgres');

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected with PostgreSQL');

    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected with MongoDB');

    app.listen(PORT, () => {
      console.log(`Server working on:  http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Error starting the server:', err);
    process.exit(1);
  }
})();
