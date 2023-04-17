const errorMessenger = (errorsArray) => {
  if (!errorsArray.length) {
    return;
  }

  for (let i = 0; i < errorsArray.length; i++) {
    const errorObject = errorsArray[i];

    const { number, nameOfDataArray, error } = errorObject;

    console.log(`Строка №${number} в массиве ${nameOfDataArray} содержит ошибку: ${error}`);
  }

  console.log('Исправьте указанные ошибки и попробуйте ещё раз');
};

export { errorMessenger };