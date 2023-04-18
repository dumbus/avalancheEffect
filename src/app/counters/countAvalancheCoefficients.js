const countAvalancheCoefficients = (arr) => {
  const DIVIDER_SIZE = Number(process.env.DIVIDER_SIZE);

  const avalancheCoefficientsArray = [];

  for (let i = 0; i < arr.length; i++) {
    const dividend = arr[i];

    const coefficient = dividend / DIVIDER_SIZE * 100;
    const result = coefficient + '%';

    avalancheCoefficientsArray.push(result);
  }

  return avalancheCoefficientsArray;
};

export { countAvalancheCoefficients };
