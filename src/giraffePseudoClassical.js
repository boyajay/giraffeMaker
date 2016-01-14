//pseudo-classical inheritence example

var Giraffe = function(name, height) {
  this.name = name;
  this.height = height;
  this.hunger = 10;
};

GiraffeMaker.prototype.isTallEnough = function(treeHeight) {
    return this.height > treeHeight;
  };

GiraffeMaker.prototype.isHungry = function() {
  return this.hunger > 0;
};

GiraffeMaker.prototype.say = function(option) {
  var sentences = {
    'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
    'notHungry': this.name + ' is not hungry.',
    'notTallEnough': this.name + ' is too short to reach the trees.',
    'ate': 'That was delicious!'
  };

  return console.log(sentences[option]);
};

GiraffeMaker.prototype.eat = function() {
  if (this.isHungry()) {
    this.hunger -= this.height;
    this.say('ate');
  } else {
    this.say('notHungry');
  }
};

GiraffeMaker.prototype.browse = function() {
  if (this.isTallEnough(2)) {
    this.eat();
  } else {
    this.say('notTallEnough')
  }
};

var Stanley = new Giraffe('stanley', 5);
