const countDifferences = (arr1, arr2) => {
  const differencesArray = [];

  for (let i = 0; i < arr1.length; i++) {
    const str1 = arr1[i];
    const str2 = arr2[i];

    let differencesCounter = 0;
    const stringLength = str1.length;

    for (let j = 0; j < stringLength; j++) {
      const char1 = str1[j];
      const char2 = str2[j];

      if (char1 !== char2) {
        differencesCounter += 1;
      }
    }

    differencesArray.push(differencesCounter);
  }

  console.log(differencesArray);
};

export { countDifferences };