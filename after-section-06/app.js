const express = require('express');

// Importáljuk a túrákkal kapcsolatos útválasztót
const tourRouter = require('./routes/tourRoutes');

const app = express();

// Middleware-ek beállítása
app.use(express.json()); // JSON adatok kezelése
app.use(express.static(`${__dirname}/public`)); // Statikus fájlok kiszolgálása

// Egy egyszerű middleware függvény
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋'); // Közreműködik minden kérésben, és kiírja a konzolra az üzenetet
  next(); // A következő middleware vagy útválasztó függvény meghívása
});

// Egy másik middleware függvény, amely hozzáadja a `requestTime` tulajdonságot a `req` objektumhoz
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Útválasztás definiálása a "/api/v1/tours" útvonalhoz
app.use('/api/v1/tours', tourRouter);

module.exports = app;
