//prototypal inheritence

var GiraffeMaker = function(name, height) {
  var newGiraffe = Object.create(GiraffeMaker.stuff);
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.hunger = 10;

  return newGiraffe;
};

GiraffeMaker.stuff = {};

GiraffeMaker.stuff.isTallEnough = function(treeHeight) {
    return this.height > treeHeight;
  };

GiraffeMaker.stuff.isHungry = function() {
  return this.hunger > 0;
};

GiraffeMaker.stuff.say = function(option) {
  var sentences = {
    'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
    'notHungry': this.name + ' is not hungry.',
    'notTallEnough': this.name + ' is too short to reach the trees.',
    'ate': 'That was delicious!'
  };

  return console.log(sentences[option]);
};

GiraffeMaker.stuff.eat = function() {
  if (this.isHungry()) {
    this.hunger -= this.height;
    this.say('ate');
  } else {
    this.say('notHungry');
  }
};

GiraffeMaker.stuff.browse = function() {
  if (this.isTallEnough(2)) {
    this.eat();
  } else {
    this.say('notTallEnough')
  }
};
