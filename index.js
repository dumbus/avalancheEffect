import { dataValidator } from './helpers/validation.js';
import { countDifferences } from './helpers/countDifferences.js';

// const testErrorsData = [
//   '7109cc53 ff266014 847ee03a 5f46bd42', // is ok
//   '7109cc53 ff266014 847ee03a 5f46bd4а', // has unexpected symbols
//   '000000' // length is wrong
// ];

const testwithoutOneData = [
  '7109cc53 ff266014 847ee03a 5f46bd42',
  'b831192c 60ddbdfa b0e7e6ad d84b3370'
];

const testwithOneData = [
  '7109cd53 ff266014 847ee03a 5f46bd42',
  'b831192c 60ddbdfa 46e6115b d84b3370'
];

// program should show: 
// 1
// 7

dataValidator(testwithoutOneData, 'без \"1\"');
dataValidator(testwithOneData, 'с \"1\"');

countDifferences(testwithoutOneData, testwithOneData);
