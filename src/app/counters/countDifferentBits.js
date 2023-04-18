import { parseStringToBinary } from '../parsers/parseStringToBinary.js';

const countDifferentBits = (arr1, arr2) => {
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

export { countDifferentBits };
