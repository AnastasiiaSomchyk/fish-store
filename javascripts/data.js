const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');
const binEvents = require('./events');
const applySale = require('./discount');

const whenFishesLoad = (data) => {
  console.log('data', data);
  $('#available').append(writeFishes(data.fishes));
  binEvents();
  applySale();
};

const whenFishesDontLoad = (error) => {
  console.log('this is error', error);
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesDontLoad);
};

module.exports = initializer;
