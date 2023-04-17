import { validateData } from './validators/validateData.js';
import { validateResults } from './validators/validateResults.js';
import { countDifferentBits } from './counters/countDifferentBits.js';
import { countAvalancheCoefficients } from './counters/countAvalancheCoefficients.js';
import { printResultsTable } from './utils/printResultTable.js';

const solver = (arr1, arr2) => {
  validateData(arr1, 'без \"1\"');
  validateData(arr2, 'с \"1\"');

  const differentBitsArr = countDifferentBits(arr1, arr2);
  const avalancheCoefficientsArr = countAvalancheCoefficients(differentBitsArr);

  const validatedResults = validateResults(differentBitsArr, avalancheCoefficientsArr);

  printResultsTable(validatedResults);
}

export { solver };