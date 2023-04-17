const validateData = (dataArray) => {
  const ROUND_SIZE = 32;
  const DATA_LENGTH = 10;
  if (dataArray.length != DATA_LENGTH) {
    console.log(`Массив с данными должен содержать ${DATA_LENGTH} строк!`);
  }

  const errorsArray = [];

  for (let i = 0; i < dataArray.length; i++) {
    const str = dataArray[i];

    const reducedString = str.split(' ').join('');

    if (reducedString.length != ROUND_SIZE) {
      const errorObject = {
        number: i + 1,
        error: `длина строки (без учёта пробелов) не равна ${ROUND_SIZE}`
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

  return errorsArray;
};

export { validateData };
