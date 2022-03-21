const express = require('express');
const router = express.Router();

const products = [
  {
    id: 1,
    name: 'Product-01',
    description: 'This is product one',
    image_url:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    price: '230',
  },
  {
    id: 2,
    name: 'Product-02',
    description: 'This is product two',
    image_url:
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
    price: '250',
  },
  {
    id: 3,
    name: 'Product-03',
    description: 'This is product three',
    image_url:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amFja2V0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: '450',
  },
  {
    name: 'A cool jacket',
    description: "If you're cold you can get this cool jacket",
    image_url:
      'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    price: 650,
    _id: '6237a326ba2484db5dcf9ae7',
  },
];

router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
});

module.exports = router;
