const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
 id: {
  type: 'Number',
 },
 title: {
  type: 'String',
 },
 img1: {
  type: 'String',
 },
 img2: {
  type: 'String',
 },
 cost: {
  type: 'Number',
 },
 color: {
  type: 'String',
 },
 size: {
  type: ['String'],
 },
})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
