// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100,
// the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
  switch (true) {
    case year > 0 && year < 101:
      return 1;
      break;
    case year > 100 && year < 201:
      return 2;
      break;
    case year > 200 && year < 301:
      return 3;
      break;
    case year > 300 && year < 401:
      return 4;
      break;
    case year > 400 && year < 501:
      return 5;
      break;
    case year > 500 && year < 601:
      return 6;
      break;
    case year > 600 && year < 701:
      return 7;
      break;
    case year > 700 && year < 801:
      return 8;
      break;
    case year > 800 && year < 901:
      return 9;
      break;
    case year > 900 && year < 1001:
      return 10;
      break;
    case year > 1000 && year < 1101:
      return 11;
      break;
    case year > 1100 && year < 1201:
      return 12;
      break;
    case year > 1200 && year < 1301:
      return 13;
      break;
    case year > 1300 && year < 1401:
      return 14;
      break;
    case year > 1400 && year < 1501:
      return 15;
      break;
    case year > 1500 && year < 1601:
      return 16;
      break;
    case year > 1600 && year < 1701:
      return 17;
      break;
    case year > 1700 && year < 1801:
      return 18;
      break;
    case year > 1800 && year < 1901:
      return 19;
      break;
    case year > 1900 && year < 2001:
      return 20;
      break;
    case year > 2000 && year < 2101:
      return 21;
      break;
  }
}
