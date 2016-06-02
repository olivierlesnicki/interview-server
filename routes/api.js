'use strict';

const low = require('lowdb');
const express = require('express');
const router = express.Router();
const db = low('db.json');

router.get('/customers', function(req, res, next) {
  res.send({
    customers: db.get('customers').value()
  });
});

router.get('/customers/:id', function(req, res, next) {
  let customer = db.get('customers').find({id: req.params.id});

  if (customer) {
    res.send({
      customer
    });
  } else {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});

router.get('/premises', function(req, res, next) {
  res.send({
    premises: db.get('premises').value()
  });
});

router.get('/premises/:id', function(req, res, next) {
  let premise = db.get('premises').find({id: req.params.id});

  if (premise) {
    res.send({
      premise
    });
  } else {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});

router.get('/products', function(req, res, next) {
  res.send({
    products: db.get('products').value()
  });
});

router.get('/products/:id', function(req, res, next) {
  let product = db.get('products').find({id: req.params.id});

  if (product) {
    res.send({
      product
    });
  } else {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});

router.get('/monthly-consumptions', function(req, res, next) {
  res.send({
    monthlyConsumptions: db.get('monthlyConsumptions').value()
  });
});

router.get('/monthly-consumptions/:id', function(req, res, next) {
  let monthlyConsumption = db.get('monthlyConsumptions').find({id: req.params.id});

  if (monthlyConsumption) {
    res.send({
      monthlyConsumption
    });
  } else {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
});

module.exports = router;
