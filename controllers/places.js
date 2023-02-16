const router = require("express").Router();
const places = require('../models/places.js');

//create
      router.post('/', (req, res) => {
        console.log(req.body)
        if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = "public/images/food-skillet.jpg";
        }
        if (!req.body.city) {
          req.body.city = 'Anytown';
        }
        if (!req.body.state) {
          req.body.state = 'USA';
        }
        places.push(req.body);
        res.redirect('/places');
      });
//
router.get('/', (req, res) => {
  res.render("places/index", { places });
});

//new
router.get('/new', (req, res) => {
    res.render('places/new');
});

//show
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
});

//edit
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})


//delete
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.send('/places');
  }
});

module.exports = router;
