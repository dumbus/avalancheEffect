const parseStringToBinary = (str) => {
  const resultArray = [];

  for (let i = 0; i < str.length; i++) {
    const charToBinaryStr = hexToBin(str[i]);

    resultArray.push(charToBinaryStr);
  }

  const resultStr = resultArray.join('');

  return resultStr;
};

const hexToBin = (strNumber) => {
  const hexToDec = parseInt(strNumber, 16);
  let decToBin = hexToDec.toString(2);

  while (decToBin.length < 4) {
    decToBin = '0' + decToBin;
  }

  return decToBin;
}

export { parseStringToBinary };