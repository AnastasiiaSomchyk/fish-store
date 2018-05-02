const writeFishes = (fishes) => {
  let domString = '';
  console.log(fishes);
  fishes.forEach((fish) => {
    domString += `<div class="${fish.onSale ? 'on-sale' : ''} fish card col-md-6 col-md-offset-3">
    <div class="thumbnail">
        <img src="${fish.imageSoure}"
            alt="" width="40%">
        <div class="caption">
            <h3 id="thumbnail-label">${fish.name} 1</h3>
            <p>$
                <span class="price">${fish.basePrice}</span>
            </p>
        </div>
        <div class="caption card-footer">
            <button class="add btn btn-danger">Add To Basket</button>
        </div>
    </div>
</div>
`;
  });
  return domString;
};

module.exports = writeFishes;
