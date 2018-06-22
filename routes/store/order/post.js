/**
      Place an order for a pet
    **/
    const Mock = require("mockjs");
    module.exports = function (app) {
      app.post('/api/store/order', (req, res) => {
        res.json(Mock.mock({
  "id": "@integer(60, 100)",
  "petId": "@integer(60, 100)",
  "quantity": "@integer(60, 100)",
  "shipDate": "@datetime",
  "status": "placed",
  "complete": "@boolean"
}));
      });
    };