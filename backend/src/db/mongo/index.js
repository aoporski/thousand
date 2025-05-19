const mongoose = require('mongoose');

async function connectMongo() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Połączono z MongoDB!');
  } catch (err) {
    console.error('❌ Błąd połączenia z MongoDB:', err.message);
    process.exit(1);
  }
}

module.exports = connectMongo;
