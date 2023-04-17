import { validateData } from './validators/validateData.js';
import { validateResults } from './validators/validateResults.js';
import { countDifferentBits } from './counters/countDifferentBits.js';
import { countAvalancheCoefficients } from './counters/countAvalancheCoefficients.js';
import { printResultsTable } from './utils/printResultTable.js';

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

// differences should be: 
// 1
// 20

// dataValidator(testWithoutOneData, 'без \"1\"');
// dataValidator(testWithOneData, 'с \"1\"');

// const differencesArray = countDifferences(testWithoutOneData, testWithOneData);

// console.log(differencesArray);

// const avalancheCoefficients = countAvalancheCoefficients(differencesArray);

// console.log(avalancheCoefficients);

const solver = (arr1, arr2) => {
  validateData(arr1, 'без \"1\"');
  validateData(arr2, 'с \"1\"');

  const differentBitsArr = countDifferentBits(arr1, arr2);
  const avalancheCoefficientsArr = countAvalancheCoefficients(differentBitsArr);

  const validatedResults = validateResults(differentBitsArr, avalancheCoefficientsArr);

  printResultsTable(validatedResults);
}

solver(testWithoutOneData, testWithOneData);
