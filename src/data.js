// Сюда необходимо записать строки раундов без "1"
const withoutOneDataStr = `
  7109cc53 ff266014 847ee03a 5f46bd42
  b831192c 60ddbdfa b0e7e6ad d84b3370
  4b9f356e 6f2ba661 721c1c02 e14ea7d2
  7e239dee d474e285 fb182a32 23a7fb71
  2239f94d 8cd6e0c0 976c7642 d4bd7c85
  17faf007 98b00e89 517f11d3 d536dab8
  ac4de44a abfb129a b2c4462c 2da9871c
  934b20a3 843df823 0e507c1a 36f2c549
  a846aaec 0b55b0eb 3aae62de 5a37721a
  eb53dc79 6094a398 022383e8 e781576a
`;

// Сюда необходимо записать строки раундов с "1"
const withOneDataStr = `
  7109cd53 ff266014 847ee03a 5f46bd42
  b831192c 60ddbdfa 46e6115b d84b3370
  478b2d62 411fbc7b 13a1a1de 4de24891
  918fa42c 503f2432 c34c750b 0fc23a2f
  3aa05d33 fb0d9154 fd32c73c 2da6269e
  302e9ace 1c2fa3e0 5fe19708 443e2a14
  cece5782 86f64feb 3eb54d01 ce2e2025
  6ab8e024 edac18b1 146bbfcf 68ab7383
  0110908e 7e408088 06265d57 64d556b9
  9ad94740 d8b5f3bc 968701cd c17fa440
`;

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

// ================= data template for my lab work =================

// const withoutOneData = [
// '7109cc53 ff266014 847ee03a 5f46bd42',
// 'b831192c 60ddbdfa b0e7e6ad d84b3370',
// '4b9f356e 6f2ba661 721c1c02 e14ea7d2',
// '7e239dee d474e285 fb182a32 23a7fb71',
// '2239f94d 8cd6e0c0 976c7642 d4bd7c85',
// '17faf007 98b00e89 517f11d3 d536dab8',
// 'ac4de44a abfb129a b2c4462c 2da9871c',
// '934b20a3 843df823 0e507c1a 36f2c549',
// 'a846aaec 0b55b0eb 3aae62de 5a37721a',
// 'eb53dc79 6094a398 022383e8 e781576a'
// ];

// const withOneData = [
//   '7109cd53 ff266014 847ee03a 5f46bd42',
//   'b831192c 60ddbdfa 46e6115b d84b3370',
//   '478b2d62 411fbc7b 13a1a1de 4de24891',
//   '918fa42c 503f2432 c34c750b 0fc23a2f',
//   '3aa05d33 fb0d9154 fd32c73c 2da6269e',
//   '302e9ace 1c2fa3e0 5fe19708 443e2a14',
//   'cece5782 86f64feb 3eb54d01 ce2e2025',
//   '6ab8e024 edac18b1 146bbfcf 68ab7383',
//   '0110908e 7e408088 06265d57 64d556b9',
//   '9ad94740 d8b5f3bc 968701cd c17fa440'
// ];

export { withoutOneDataStr, withOneDataStr };
