import { printErrors } from '../utils/printErrors.js';

const validateData = (dataArray, nameOfDataArray) => {
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
        error: `длина строки (без учёта пробелов) не равна 32`
      }

      errorsArray.push(errorObject);
    } else {
      const regex = /^[\da-z]+$/i;

      if (!regex.test(reducedString)) {
        const errorObject = {
          number: i + 1,
          error: `в строке присутствуют символы не из латинского алфавита или цифр`
        }
  
        errorsArray.push(errorObject);
      }
    }
  }

  printErrors(errorsArray, nameOfDataArray);
};

export { validateData };
