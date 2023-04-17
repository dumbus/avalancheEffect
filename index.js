import { dataValidator } from './helpers/validation.js';

const testData = [
  '7109cc53 ff266014 847ee03a 5f46bd42', // is ok
  '7109cc53 ff266014 847ee03a 5f46bd4а', // has inexpected symbols
  '000000' // length is wrong
];

dataValidator(testData, 'с \"1\"');
