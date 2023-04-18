const findMaxLength = (arr) => {
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];

    if (str.length > maxLength) {
      maxLength = str.length;
    }
  }

  return maxLength;
};

export { findMaxLength };
