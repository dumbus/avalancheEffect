import { parseStringToBinary } from './parsing.js';

const countDifferences = (arr1, arr2) => {
  const differencesArray = [];

  for (let i = 0; i < arr1.length; i++) {
    const str1 = parseStringToBinary(arr1[i]);
    const str2 = parseStringToBinary(arr2[i]);

    let differencesCounter = 0;
    const stringLength = str1.length;

    for (let j = 0; j < stringLength; j++) {
      const char1 = str1[j];
      const char2 = str2[j];

      if (char1 !== char2) {
        differencesCounter += 1;
      }
    }

    differencesArray.push(differencesCounter);
  }

  return differencesArray;
};

const countAvalancheCoefficients = (arr) => {
  const DIVIDER = 128;

  const avalancheCoefficientsArray = [];

  for (let i = 0; i < arr.length; i++) {
    const dividend = arr[i];

    const coefficient = dividend / DIVIDER * 100;
    const result = coefficient + '%';

    avalancheCoefficientsArray.push(result);
  }

  return avalancheCoefficientsArray;
};

export { countDifferences, countAvalancheCoefficients };