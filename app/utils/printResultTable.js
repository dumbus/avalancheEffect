const printResultsTable = (arr) => {
  let divider = '';
  let dividerLength = arr[0].length;

  for (let j = 0; j < dividerLength; j++) {
    divider += '-';
  }

  for (let i = 0; i < arr.length; i++) {
    const line = arr[i];

    console.log(divider);

    console.log(line);
  }

  console.log(divider);
};

export { printResultsTable };