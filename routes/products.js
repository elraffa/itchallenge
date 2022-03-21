const express = require('express');
const { findOneAndUpdate } = require('../models/Product');
const router = express.Router();

const Product = require('../models/Product');

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/products/:id
// @desc    Get Single product
// @access  Public
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById({ _id: id });
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/products
// @desc    Add new Product
// @access  Private

router.post('/', async (req, res) => {
  const { name, description, image_url, price } = req.body;

  try {
    const newProduct = new Product({
      name,
      description,
      image_url,
      price,
    });

    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/products
// @desc    Update products
// @access  Private
router.put('/:id', async (req, res) => {
  const { name, description, image_url, price } = req.body;
  const { id } = req.params;
  const fields = { name, description, image_url, price };

  try {
    let product = await Product.findOne({ id: id });
    if (product) {
      product = await Product.findByIdAndUpdate(
        { _id: id },
        { $set: fields },
        { new: true }
      );
    }
    await product.save();
    console.log(product);
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/products
// @desc    Update products
// @access  Private
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Product.findOneAndRemove({ _id: id });
    res.json({ msg: 'Product deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
