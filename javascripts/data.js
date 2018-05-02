const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');
const binEvents = require('./events');

const whenFishesLoad = (data) => {
  console.log('data', data);
  $('#available').append(writeFishes(data.fishes));
  binEvents();
};

const whenFishesDontLoad = (error) => {
  console.log('error', error);
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesDontLoad);
};

module.exports = initializer;
