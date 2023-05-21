const mongoose = require('mongoose');

// Az alkalmazás importálása
const app = require('./app');

// MongoDB adatbázis elérési útvonala
const DB = 'mongodb://127.0.0.1:27017/';

// MongoDB kapcsolat létrehozása
mongoose
  .connect(DB, {
    useNewUrlParser: true
  })
  .then(() => console.log('DB connection successful!')); // Sikeres kapcsolat esetén üzenet kiírása a konzolra

// Az alkalmazás figyelése a 3000-es porton
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`); // Üzenet kiírása a konzolra, ha az alkalmazás sikeresen elindult
});
