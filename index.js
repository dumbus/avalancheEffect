import { dataValidator } from './helpers/validation.js';
import { countDifferences } from './helpers/countDifferences.js';

// const testErrorsData = [
//   '7109cc53 ff266014 847ee03a 5f46bd42', // is ok
//   '7109cc53 ff266014 847ee03a 5f46bd4а', // has unexpected symbols
//   '000000' // length is wrong
// ];

const testWithoutOneData = [
  '7109cc53 ff266014 847ee03a 5f46bd42',
  'b831192c 60ddbdfa b0e7e6ad d84b3370'
];

const testWithOneData = [
  '7109cd53 ff266014 847ee03a 5f46bd42',
  'b831192c 60ddbdfa 46e6115b d84b3370'
];

// program should show: 
// 1
// 7

dataValidator(testWithoutOneData, 'без \"1\"');
dataValidator(testWithOneData, 'с \"1\"');

// countDifferences(testWithoutOneData, testWithOneData);

const parseStringToBinary = (str) => {
  const resultArray = [];

  for (let i = 0; i < str.length; i++) {
    const charToBinaryStr = hexToBin(str[i]);

    resultArray.push(charToBinaryStr);
  }

  const resultStr = resultArray.join('');

  return resultStr;
};

const hexToBin = (strNumber) => {
  const hexToDec = parseInt(strNumber, 16);
  let decToBin = hexToDec.toString(2);

  while (decToBin.length < 4) {
    decToBin = '0' + decToBin;
  }

  return decToBin;
}

console.log(parseStringToBinary('aa'));
