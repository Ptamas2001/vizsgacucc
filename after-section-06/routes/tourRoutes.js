const express = require('express');
const tourController = require('./../controllers/tourController');

const router = express.Router();

// "/api/tours" útvonalak kezelése

router
  .route('/')
  .get(tourController.getAllTours) // GET kérés - Az összes túra lekérdezése
  .post(tourController.createTour); // POST kérés - Új túra létrehozása

// "/api/tours/:id" útvonal kezelése

router
  .route('/:id')
  .get(tourController.getTour) // GET kérés - Egy adott túra lekérdezése
  .patch(tourController.updateTour) // PATCH kérés - Túra frissítése
  .delete(tourController.deleteTour); // DELETE kérés - Túra törlése

module.exports = router;
