const dotenv = require('dotenv')
const Product = require('../models/product.model')
const util = require('util')

dotenv.config({
 path: __dirname + '/.env',
})

var PER_PAGE = 5

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Logic for a product data pagination, given products per
* page and an offset (remaining products besides products on current page)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const getPaginatedData = (data, offset) => {
 return data.slice(offset, offset + PER_PAGE)
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Filtering data logic by a received color, search term or
* an ascending/descending cost of product
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const filterData = (data, pickedColor, searchTerm, pickedCostOrder) => {
 var filteredData = data
  .filter((item) => item.color.toLowerCase().includes(pickedColor))
  .filter((item) => item.title.toLowerCase().includes(searchTerm))
 if (pickedCostOrder !== 'Select') {
  return filteredData.sort((a, b) =>
   pickedCostOrder === 'lowest'
    ? a.cost > b.cost
      ? 1
      : -1
    : a.cost < b.cost
    ? 1
    : -1,
  )
 } else {
  return filteredData.sort((a, b) => (a.id > b.id ? 1 : -1))
 }
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Fetching filtered and paginated products for display Grid
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const getProducts = async (req, res) => {
 try {
  var data = await Product.find({}, (err) => {}).sort({
   id: 1,
  })
  var offset = req.query.offset ? parseInt(req.query.offset, 10) : 0
  var nextOffset = offset + PER_PAGE
  var previousOffset = offset - PER_PAGE < 1 ? 0 : offset - PER_PAGE
  var { pickedColor, searchTerm, pickedCostOrder } = req.query
  var filteredData = await filterData(
   data,
   pickedColor,
   searchTerm,
   pickedCostOrder,
  )
  var meta = {
   limit: PER_PAGE,
   next: util.format('?limit=%s&offset=%s', PER_PAGE, nextOffset),
   offset: req.query.offset,
   previous: util.format('?limit=%s&offset=%s', PER_PAGE, previousOffset),
   total_count: data.length,
  }
  var json = {
   data: getPaginatedData(filteredData, offset),
   meta: meta,
   success: true,
  }
  await res.json(json)
 } catch (error) {
  res.status(404).send(error)
 }
}

/*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* NOTE Fetching single product data for product with given ID
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
const getProduct = async (req, res) => {
 try {
  var data = await Product.findOne({ id: req.params.id }, (err, obj) => {})
  await res.status(200).send({
   data,
   success: true,
  })
 } catch (error) {
  res.status(404).send(error)
 }
}

module.exports = { getProducts, getProduct }
