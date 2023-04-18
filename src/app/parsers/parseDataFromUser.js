import { withoutOneDataStr, withOneDataStr } from '../../data.js';

const getData = (mode) => {
  if (mode === 'template') {
    return { withoutOneDataStr, withOneDataStr };
  } else {
    console.log('input from user');
  }
};

export { getData };
