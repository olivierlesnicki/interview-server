'use strict';

const low = require('lowdb');
const db = low('db.json');
const uuid = require('uuid');
const faker = require('faker');
const moment = require('moment');

function pushIn(entities, id, key, data) {
  let newEntity = {};
  let entity = db.get(entities)
    .find({
      id
    })
    .value();

  newEntity[key] = entity[key];
  newEntity[key].push(data);

  db.get(entities)
    .find({
      id
    })
    .assign(newEntity)
    .value();
}

db.defaults({
  customers: [],
  premises: [],
  products: [],
  monthlyConsumptions: []
}).value();

try {
  for (let i = 0; i < 4; i++) {
    let from = new Date(1950, 1, 1, 1, 1, 0, 0);
    let to = new Date(1998, 1, 1, 1, 1, 0, 0);
    let customerId = uuid.v4();

    console.log('generation customer ' + (i + 1) + ' ' + customerId);

    db.get('customers')
      .push({
        id: customerId,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        dateOfBirth: faker.date.between(from, to),
        products: []
      })
      .value();

    for (let i = 0; i < faker.random.number({
      min: 1,
      max: 2
    }); i++) {
      let premiseId = uuid.v4();

      db.get('premises')
        .push({
          id: premiseId,
          address: faker.address.streetAddress(),
          postcode: faker.address.zipCode(),
          city: faker.address.city(),
          customer: customerId
        })
        .value();

        if (faker.random.boolean()) {
          let productId = uuid.v4();
          pushIn('customers', customerId, 'products', productId);

          db.get('products')
            .push({
              id: productId,
              type: 'Electricity',
              premise: premiseId,
              monthlyConsumptions: []
            })
            .value();

          for (let i = 0; i < faker.random.number({
            min: 0,
            max: 11
          }); i++) {
            let monthlyConsumptionsId = uuid.v4();
            pushIn('products', productId, 'monthlyConsumptions', monthlyConsumptionsId);

            db.get('monthlyConsumptions')
              .push({
                id: monthlyConsumptionsId,
                product: productId,
                value: faker.random.number({
                  min: 100,
                  max: 1000
                }),
                date: moment().subtract(i + 1, 'months').format('DD/MM/YYYY')
              })
              .value();
          }

        }

        if (faker.random.boolean()) {
          let productId = uuid.v4();
          pushIn('customers', customerId, 'products', productId);

          db.get('products')
            .push({
              id: productId,
              type: 'Gas',
              premise: premiseId,
              monthlyConsumptions: []
            })
            .value();

          for (let i = 0; i < faker.random.number({
            min: 0,
            max: 11
          }); i++) {
            let monthlyConsumptionsId = uuid.v4();
            pushIn('products', productId, 'monthlyConsumptions', monthlyConsumptionsId);

            db.get('monthlyConsumptions')
              .push({
                id: monthlyConsumptionsId,
                product: productId,
                value: faker.random.number({
                  min: 100,
                  max: 1000
                }),
                date: moment().subtract(i + 1, 'months').format('DD/MM/YYYY')
              })
              .value();
          }

        }


        if (faker.random.boolean()) {
          let productId = uuid.v4();
          pushIn('customers', customerId, 'products', productId);

          db.get('products')
            .push({
              id: productId,
              type: 'Insurance',
              premise: premiseId,
              monthlyConsumptions: []
            })
            .value();
        }

    }

  }
} catch(e) {
  console.log(e);
}
