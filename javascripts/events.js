const filterFish = () => {
  $('#available .fish').not('.on-sale').toggle();
};

const changeButtonText = () => {
  $('#show-sale').text((i, text) => {
    let returnText = '';
    console.log(text);
    if (text === 'Show Sale Fish') {
      returnText = 'Show All';
    } else {
      returnText = 'Show Sale Fish';
    }
    return returnText;
  });
};

const moveToCard = (e) => {
  const fishCard = $(e.target).closest('.fish');
  $('#snagged').append(fishCard);
};

const binEvents = () => {
  $('button.add').click(moveToCard);
  $('#show-sale').click(() => {
    changeButtonText();
    filterFish();
  });
};

module.exports = binEvents;
