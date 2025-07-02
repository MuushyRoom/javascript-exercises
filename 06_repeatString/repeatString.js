const repeatString = function (text, num) {
  let word = text;

  if (num < 0) {
    word = 'ERROR';
  } else if (num < 1) {
    word = '';
    return word;
  } else {
    for (let i = 1; i !== num; i++) {
      word += `${text}`;
    }
  }

  return word;
};
// Do not edit below this line
module.exports = repeatString;
