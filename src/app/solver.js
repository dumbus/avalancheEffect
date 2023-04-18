import { parseDataFromString } from './parsers/parseDataFromString.js';
import { validateData } from './validators/validateData.js';
import { validateResults } from './validators/validateResults.js';
import { countDifferentBits } from './counters/countDifferentBits.js';
import { countAvalancheCoefficients } from './counters/countAvalancheCoefficients.js';
import { printResultsTable } from './utils/messenger.js';
import { printErrors } from './utils/messenger.js';

const solver = ({ withoutOneDataStr, withOneDataStr }) => {
  const arrWithoutOne = parseDataFromString(withoutOneDataStr);
  const arrWithOne = parseDataFromString(withOneDataStr);

  const arrWithoutOneErrors = validateData(arrWithoutOne);
  const arrWithOneErrors = validateData(arrWithOne);

  if (arrWithoutOneErrors.length) {
    printErrors(arrWithoutOneErrors, 'без "1"');
  }

  if (arrWithOneErrors.length) {
    printErrors(arrWithOneErrors, 'с "1"');
  }

  if (!arrWithoutOneErrors.length && !arrWithOneErrors.length) {
    const differentBitsArr = countDifferentBits(arrWithoutOne, arrWithOne);
    const avalancheCoefficientsArr = countAvalancheCoefficients(differentBitsArr);
  
    const validatedResults = validateResults(differentBitsArr, avalancheCoefficientsArr);
  
    printResultsTable(validatedResults);
  }
};

export { solver };
