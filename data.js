const withoutOneData = [
  '7109cc53 ff266014 847ee03a 5f46bd42',
  'b831192c 60ddbdfa b0e7e6ad d84b3370'
];

const withOneData = [
  '7109cd53 ff266014 847ee03a 5f46bd42',
  'b831192c 60ddbdfa 46e6115b d84b3370'
];

// ================= testing errors =================

// const testErrorsData = [
  // '7109cc53 ff266014 847ee03a 5f46bd42', // is ok
  // '7109cc53 ff266014 847ee03a 5f46bd4а', // has unexpected symbols
  // '000000' // length is wrong
// ];

// ================= testing application =================

// const testWithoutOneData = [
//   '7109cc53 ff266014 847ee03a 5f46bd42',
//   'b831192c 60ddbdfa b0e7e6ad d84b3370'
// ];

// const testWithOneData = [
//   '7109cd53 ff266014 847ee03a 5f46bd42',
//   'b831192c 60ddbdfa 46e6115b d84b3370'
// ];

// Expected results are:
// ---------------------------------------------------------------------------
// | Раунд: 1 | Кол-во разных бит: 1  | Коэфф-нт лавинного эффекта: 0.78125% |
// ---------------------------------------------------------------------------
// | Раунд: 2 | Кол-во разных бит: 20 | Коэфф-нт лавинного эффекта: 15.625%  |
// ---------------------------------------------------------------------------

export { withoutOneData, withOneData };
