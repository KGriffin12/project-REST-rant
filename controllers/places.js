const router = require("express").Router();
const places = require('../models/places.js')

router.get("/", (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/05/25114414/Untitled-design-2022-05-25T114359.104.jpg?tr=w-800,h-550'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://patch.com/img/cdn20/users/1043655/20180509/045844/styles/raw/public/processed_images/coffee_cat_9-1525888754-5567.jpg?width=800'
      }]
      
      router.get('/new', (req, res) => {
        res.render('places/new');
    });

      router.post('/', (req, res) => {
        if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
        }
        if (!req.body.city) {
          req.body.city = 'Anytown'
        }
        if (!req.body.state) {
          req.body.state = 'USA'
        }
        places.push(req.body)
        res.redirect('/places')
      })
      
  res.render("places/index", { places });
});

module.exports = router;
