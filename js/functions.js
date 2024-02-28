const checkStringLength = (string = '', maxSymbols = 1) => string.length <= maxSymbols;

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);


const isPalindrome = (string = '') => {
  string = string.replaceAll(' ', '').toLowerCase();
  let reversed = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }
  return string === reversed;
};

isPalindrome('Лёша на полке клопа нашёл');
isPalindrome('Лёша на пОлке   клопа н аШёл');
isPalindrome('Люблю пирожки с картошкой');


const extractNumbers = (string) => {
  let result = '';
  string = string.toString();
  for (let i = 0; i <= string.length - 1; i++) {
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result = result + string[i];
    }
  }
  return result === '' ? NaN : Number(result);
};

extractNumbers(-1);
extractNumbers(2);
extractNumbers(1.5);
extractNumbers('2023 год');
extractNumbers('ECMAScript 2022');
extractNumbers('1 кефир, 0.5 батона');
extractNumbers('-1 кефир, 0.5 батона');
extractNumbers('агент 007');
extractNumbers('а я томат');
