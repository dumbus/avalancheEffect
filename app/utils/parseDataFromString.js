const parseDataFromString = (strData) => {
  const trimmedStr = strData.slice(1).slice(0, strData.length - 2);
  const strArr = trimmedStr.split(' ').join('').split('\n');

  return strArr;
};

export { parseDataFromString };
