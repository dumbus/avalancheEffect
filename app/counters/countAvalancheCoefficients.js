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

export { countAvalancheCoefficients };
