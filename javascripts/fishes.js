const loadFishes = (seccessFunction, errorFunction) => {
  $.get('../db/fishes.json')
    .done(seccessFunction)
    .fail(errorFunction);
};

module.exports = loadFishes;
