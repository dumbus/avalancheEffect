const printErrors = (errorsArray, nameOfDataArray) => {
  if (!errorsArray.length) {
    return;
  }

  console.log(`Ошибки в массиве ${nameOfDataArray}:`);

  for (let i = 0; i < errorsArray.length; i++) {
    const errorObject = errorsArray[i];

    const { number, error } = errorObject;

    console.log(`Строка №${number} содержит ошибку: ${error}`);
  }

  console.log('!!! Исправьте указанные ошибки и попробуйте ещё раз !!!\n');
};

export { printErrors };