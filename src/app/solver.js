import { parseDataFromString } from './utils/parseDataFromString.js';
import { validateData } from './validators/validateData.js';
import { validateResults } from './validators/validateResults.js';
import { countDifferentBits } from './counters/countDifferentBits.js';
import { countAvalancheCoefficients } from './counters/countAvalancheCoefficients.js';
import { printResultsTable } from './utils/printResultTable.js';
import { printErrors } from './utils/printErrors.js';

const solver = (strWithoutOneStr, strWithOneStr) => {
  const arrWithoutOne = parseDataFromString(strWithoutOneStr);
  const arrWithOne = parseDataFromString(strWithOneStr);

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
