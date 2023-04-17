const dataValidator = (dataArray, nameOfDataArray) => {
  // if (dataArray.length != 10) {
  //   console.log('Массив с данными должен содержать 10 строк!');
  // }

  const errorsArray = [];

  for (let i = 0; i < dataArray.length; i++) {
    const str = dataArray[i];

    const reducedString = str.split(' ').join('');

    if (reducedString.length != 32) {
      const errorObject = {
        number: i + 1,
        nameOfDataArray,
        error: `длина строки (без учёта пробелов) не равна 32`
      }

      errorsArray.push(errorObject);
    }

    const regex = /^[\da-z]+$/i;

    if (!regex.test(reducedString)) {
      const errorObject = {
        number: i + 1,
        nameOfDataArray,
        error: `в строке присутствуют символы не из латинского алфавита или цифр`
      }

      errorsArray.push(errorObject);
    }
  }

  printErrors(errorsArray);
};

const printErrors = (errorsArray) => {
  if (!errorsArray.length) {
    return;
  }

  for (let i = 0; i < errorsArray.length; i++) {
    const errorObject = errorsArray[i];

    const { number, nameOfDataArray, error } = errorObject;

    console.log(`Строка №${number} в массиве ${nameOfDataArray} содержит ошибку: ${error}`);
  }

  console.log('Исправьте указанные ошибки и попробуйте ещё раз');
}

export { dataValidator };
