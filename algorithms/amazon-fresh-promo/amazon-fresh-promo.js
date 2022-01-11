function isWinnerRegex (codeList, shoppingCart) {
  const regex = new RegExp(codeList
    .map((list) => {
      return list
        .map((code) => code === 'anything' ? '.*' : `${code}`)
        .join(' ');
    })
    .join(' .* ?'));

  return regex.test(shoppingCart.join(' '));
}

function isWinner (codeList, shoppingCart) {
  let i = 0;
  let j = 0;

  while (i < codeList.length) {
    const group = codeList[i];
    let containsGroup = false;

    for (let c = j; c < shoppingCart.length; c++) {
      const items = shoppingCart.slice(c, c + group.length);

      if (items.length < group.length) {
        return false;
      }

      if (items.every((item, index) => item === group[index] || group[index] === 'anything')) {
        j += group.length;
        containsGroup = true;
        break;
      }
    }

    if (!containsGroup) {
      return false;
    }

    i++;
  }

  return true;
}

module.exports = {
  isWinnerRegex,
  isWinner,
};