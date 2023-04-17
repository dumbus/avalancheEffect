import { findMaxLength } from '../utils/findMaxLength.js';

const validateResults = (differencesArr, avalancheCoefficientsArr) => {
  const length = differencesArr.length;

  const resultsArr = [[], [], []]; // round | differences | coefficients

  for (let i = 0; i < length; i++) {
    const roundStr = `Раунд: ${i + 1}`;
    const differencesStr = `Кол-во разных бит: ${differencesArr[i]}`;
    const avalancheCoefficientsStr = `Коэфф-нт лавинного эффекта: ${avalancheCoefficientsArr[i]}`;

    resultsArr[0].push(roundStr);
    resultsArr[1].push(differencesStr);
    resultsArr[2].push(avalancheCoefficientsStr);
  }

  const maxLengthArr = [findMaxLength(resultsArr[0]), findMaxLength(resultsArr[1]), findMaxLength(resultsArr[2])];

  for (let i = 0; i < resultsArr.length; i++) {
    const arr = resultsArr[i];

    for (let j = 0; j < arr.length; j++) {
      while (arr[j].length < maxLengthArr[i]) {
        arr[j] += ' ';
      }
    }
  }

  const linesNumber = resultsArr[0].length;
  const linesArr = [];

  for (let i = 0; i < linesNumber; i++) {
    const line = `| ${resultsArr[0][i]} | ${resultsArr[1][i]} | ${resultsArr[2][i]} |`;

    linesArr.push(line);
  }

  return linesArr;
};

export { validateResults };
