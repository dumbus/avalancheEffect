const validateData = (dataArray) => {
  const ROUND_SIZE = Number(process.env.ROUND_SIZE);
  const ROUND_NUMBER = Number(process.env.ROUND_NUMBER);

  const errorsArray = [];

  if (dataArray.length != ROUND_NUMBER) {
    const errorObject = {
      type: 'arrayErr',
      error: `Массив с данными должен содержать ${ROUND_NUMBER} строк!`
    };

    errorsArray.push(errorObject);
  }

  for (let i = 0; i < dataArray.length; i++) {
    const str = dataArray[i];

    if (str.length != ROUND_SIZE) {
      const errorObject = {
        type: 'stringErr',
        number: i + 1,
        error: `длина строки (без учёта пробелов) не равна ${ROUND_SIZE}`
      };

      errorsArray.push(errorObject);
    } else {
      const regex = /^[\da-f]+$/i;

      if (!regex.test(str)) {
        const errorObject = {
          type: 'stringErr',
          number: i + 1,
          error: 'в строке присутствуют недопустимые символы'
        };
  
        errorsArray.push(errorObject);
      }
    }
  }

  return errorsArray;
};

export { validateData };
