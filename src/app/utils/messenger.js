const printErrors = (errorsArray, nameOfDataArray) => {
  if (!errorsArray.length) {
    return;
  }

  console.log(`Ошибки в массиве ${nameOfDataArray}:`);

  for (let i = 0; i < errorsArray.length; i++) {
    const errorObject = errorsArray[i];

    const { type } = errorObject;

    if (type === 'arrayErr') {
      const { error } = errorObject;

      console.log(error);
    } else {
      const { number, error } = errorObject;

      console.log(`Строка №${number} содержит ошибку: ${error}`);
    }
  }

  console.log('!!! Исправьте указанные ошибки и попробуйте ещё раз !!!\n');
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

export { printErrors, printResultsTable };


