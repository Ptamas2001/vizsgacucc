const mongoose = require('mongoose');

// Új Mongoose séma létrehozása
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Muszály megadni'], // A név kötelező, hibaüzenet megadásával
    unique: true // A név egyedi kell legyen
  },
  rating: {
    type: Number,
    default: 4.5 // Alapértelmezett érték: 4.5
  },
  price: {
    type: Number,
    required: [true, 'Meg kell adni'] // Az ár kötelező, hibaüzenet megadásával
  }
});

// Tour modell létrehozása a séma alapján
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
