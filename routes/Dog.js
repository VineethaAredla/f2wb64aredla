var express = require('express');
var router = express.Router();

class Dog {
constructor(dog_Name, age, price){
  this.dog_Name=dog_Name;
  this.age=age;
  this.price=price;
  
}
}
/* GET home page. */
router.get('/', function(req, res, next) {
  let D1=new Dog('Oscar',1000,'Awards');
  let D2=new Dog('MTV',2000,'Rampwalk');
  let D3=new Dog('HBO',3000,'MovieLaunch');

  res.render('event', { title: 'Search Results Dog',Dog : [D1,D2,D3] });
});


module.exports = router;