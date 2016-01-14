//extending properties saves you from having to add each one individually.

var GiraffeMaker = function(name, height) {
  var newGiraffe = {};
  newGiraffe.name = name;
  newGiraffe.height = height;
  newGiraffe.hunger = 10;
  extend(newGiraffe, GiraffeMaker.giraffeMethods);

  return newGiraffe;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

GiraffeMaker.giraffeMethods = {};


GiraffeMaker.giraffeMethods.isTallEnough = function(treeHeight) {
    return this.height > treeHeight;
  };

GiraffeMaker.giraffeMethods.isHungry = function() {
  return this.hunger > 0;
};

GiraffeMaker.giraffeMethods.say = function(option) {
  var sentences = {
    'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
    'notHungry': this.name + ' is not hungry.',
    'notTallEnough': this.name + ' is too short to reach the trees.',
    'ate': 'That was delicious!'
  };

  return console.log(sentences[option]);
};

GiraffeMaker.giraffeMethods.eat = function() {
  if (this.isHungry()) {
    this.hunger -= this.height;
    this.say('ate');
  } else {
    this.say('notHungry');
  }
};

GiraffeMaker.giraffeMethods.browse = function() {
  if (this.isTallEnough(2)) {
    this.eat();
  } else {
    this.say('notTallEnough')
  }
};
