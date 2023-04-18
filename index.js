// Сюда необходимо записать строки раундов без "1"
const withoutOneData = `
  7109cc53 ff266014 847ee03a 5f46bd42
  b831192c 60ddbdfa b0e7e6ad d84b3370
`;

// Сюда необходимо записать строки раундов с "1"
const withOneData = `
  7109cd53 ff266014 847ee03a 5f46bd42
  b831192c 60ddbdfa 46e6115b d84b3370
  478b2d62 411fbc7b 13a1a1de 4de24891
  918fa42c 503f2432 c34c750b 0fc23a2f
  3aa05d33 fb0d9154 fd32c73c 2da6269e
  302e9ace 1c2fa3e0 5fe19708 443e2a14
  cece5782 86f64feb 3eb54d01 ce2e2025
  6ab8e024 edac18b1 146bbfcf 68ab7383
  0110908e 7e408088 06265d57 64d556b9
  9ad94740 d8b5f3bc 968701cd c17fa440
`;

const parseDataFromString = (strData) => {
  let trimmedStr = strData;

  if (trimmedStr[0] === '\n' | trimmedStr[0] === '\r') {
    trimmedStr = trimmedStr.slice(1);
  }

  if (trimmedStr[trimmedStr.length - 1] === '\n' | trimmedStr[trimmedStr.length - 1] === '\r') {
    trimmedStr = trimmedStr.slice(0, trimmedStr.length - 1);
  }

  const strArr = trimmedStr.split(' ').join('').split('\n');

  return strArr;
};

const validateData = (dataArray) => {
  const ROUND_SIZE = 32;
  const DATA_LENGTH = 10;

  const errorsArray = [];

  if (dataArray.length != DATA_LENGTH) {
    const errorObject = {
      type: 'arrayErr',
      error: `Данные должны содержать ${DATA_LENGTH} раундов шифрования!`
    }

    errorsArray.push(errorObject);
  }

  for (let i = 0; i < dataArray.length; i++) {
    const str = dataArray[i];

    if (str.length != ROUND_SIZE) {
      const errorObject = {
        type: 'stringErr',
        number: i + 1,
        error: `длина раунда шифрования (без учёта пробелов) не равна ${ROUND_SIZE}`
      }

      errorsArray.push(errorObject);
    } else {
      const regex = /^[\da-f]+$/i;

      if (!regex.test(str)) {
        const errorObject = {
          type: 'stringErr',
          number: i + 1,
          error: `в раунде шифрования присутствуют недопустимые символы`
        }
  
        errorsArray.push(errorObject);
      }
    }
  }

  return errorsArray;
};

const printErrors = (errorsArray, nameOfDataArray) => {
  if (!errorsArray.length) {
    return;
  }

  console.log(`Ошибки в блоке данных ${nameOfDataArray}:`);

  for (let i = 0; i < errorsArray.length; i++) {
    const errorObject = errorsArray[i];

    const { type } = errorObject;

    if (type === 'arrayErr') {
      const { error } = errorObject;

      console.log(error);
    } else {
      const { number, error } = errorObject;

      console.log(`Раунд №${number} содержит ошибку: ${error}`);
    }
  }

  console.log('!!! Исправьте указанные ошибки и попробуйте ещё раз !!!\n');
};

const hexToBin = (strNumber) => {
  const hexToDec = parseInt(strNumber, 16);
  let decToBin = hexToDec.toString(2);

  while (decToBin.length < 4) {
    decToBin = '0' + decToBin;
  }

  return decToBin;
}

const parseStringToBinary = (str) => {
  const resultArray = [];

  for (let i = 0; i < str.length; i++) {
    const charToBinaryStr = hexToBin(str[i]);

    resultArray.push(charToBinaryStr);
  }

  const resultStr = resultArray.join('');

  return resultStr;
};

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

const findMaxLength = (arr) => {
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];

    if (str.length > maxLength) {
      maxLength = str.length;
    }
  }

  return maxLength;
};

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

const printResultsTable = (arr) => {
  let divider = '';
  let dividerLength = arr[0].length;

  for (let j = 0; j < dividerLength; j++) {
    divider += '-';
  }

  for (let i = 0; i < arr.length; i++) {
    const line = arr[i];

    console.log(divider);

    console.log(line);
  }

  console.log(divider);
};

const solver = (strWithoutOneStr, strWithOneStr) => {
  const arrWithoutOne = parseDataFromString(strWithoutOneStr);
  const arrWithOne = parseDataFromString(strWithOneStr);

  const arrWithoutOneErrors = validateData(arrWithoutOne);
  const arrWithOneErrors = validateData(arrWithOne);

  if (arrWithoutOneErrors.length) {
    printErrors(arrWithoutOneErrors, 'без \"1\"');
  }

  if (arrWithOneErrors.length) {
    printErrors(arrWithOneErrors, 'с \"1\"');
  }

  if (!arrWithoutOneErrors.length && !arrWithOneErrors.length) {
    const differentBitsArr = countDifferentBits(arrWithoutOne, arrWithOne);
    const avalancheCoefficientsArr = countAvalancheCoefficients(differentBitsArr);
  
    const validatedResults = validateResults(differentBitsArr, avalancheCoefficientsArr);;
  
    printResultsTable(validatedResults);
  }
}

solver(withoutOneData, withOneData);