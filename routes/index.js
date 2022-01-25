var express = require('express');
var router = express.Router();
var chickenModel = require('../models/chickens')

/* Add chicken */
router.post('/chicken/add', async function (req, res, next) {
  const alreadyExist = await chickenModel.findOne({ name: req.body.name.toLowerCase() });

  if (alreadyExist == null) {
    const newChicken = new chickenModel({
      name: req.body.name.toLowerCase(),
      birthday: req.body.date,
      weight: req.body.weight,
      steps: 0,
      isRunning: false,
    });

    var chickenSaved = await newChicken.save();
  }

  let confirmed = false
  if (chickenSaved.name) {
    confirmed = true
  }

  res.json({ confirmed })
});

/* get chicken */
router.get('/chicken/get', async function (req, res, next) {
  const chicken = await chickenModel.findOne({ name: req.body.name.toLowerCase() });
  console.log(chicken)
  res.json({ chicken })
});

/* modify chicken */
router.put('/chicken/run', async function (req, res, next) {

  let chicken = await chickenModel.findOne({ name: req.body.name.toLowerCase() });
  chicken.steps = chicken.steps + 1
  res.json({ chicken })
});

router.patch('/chicken/patch-weight', async function (req, res, next) {

  let chicken = await chickenModel.findOne({ name: req.body.name.toLowerCase() });
  chicken.weight = req.body.weight
  res.json({ chicken })
});

/* delete chicken */
router.delete('/chicken/delete', async function (req, res, next) {

const chicken = await chickenModel.deleteOne({name: req.body.name.toLowerCase()})

let confirmed = false
if (chicken.deletedCount == 1) {
  confirmed = true
}
res.json({ confirmed })
});

module.exports = router;

