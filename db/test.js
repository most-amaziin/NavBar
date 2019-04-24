const tableColumns = {
  //slice 3->35
  name: "String",
  //select from array index: 0-100
  price: "Number",
  //slice 3->70
  bulletOne: "String",
  //slice 3->70
  bulletTwo: "String",
  //slice 3->70
  bulletThree: "String",
  //slice 3->35
  sellerName: "String",
  //slice 3->255
  description: "String",
  productID: "Number"
};

const nameString =
  "dnqjdwligqiwbdhbqlsiygdwiwehbfweifybwliyefbwehirufnwkwflejfnfjflwbeliwdheliwhdniluhwflycgilwhncliwehfcimlhfw7lieuhrgiuhvr8gouwnv;oehrgilncnrgwierngcworj;nocwlihewirncerwhncilhr93hcwiunflicbhrfhcn;hxefiuwhx;no;wheiufchhnxfuhnxfihuwecgherinxileurhgxnreuhilehffjtycycyjcctrce";
const priceNumber = [
  "$1.00",
  "$1.01",
  "$1.02",
  "$1.03",
  "$1.04",
  "$1.05",
  "$1.06",
  "$1.07",
  "$1.08",
  "$1.09",
  "$1.10",
  "$1.11",
  "$1.12",
  "$1.13",
  "$1.14",
  "$1.15",
  "$1.16",
  "$1.17",
  "$1.18",
  "$1.19",
  "$1.20",
  "$1.21",
  "$1.22",
  "$1.23",
  "$1.24",
  "$1.25",
  "$1.26",
  "$1.27",
  "$1.28",
  "$1.29",
  "$1.30",
  "$1.31",
  "$1.32",
  "$1.33",
  "$1.34",
  "$1.35",
  "$1.36",
  "$1.37",
  "$1.38",
  "$1.39",
  "$1.40",
  "$1.41",
  "$1.42",
  "$1.43",
  "$1.44",
  "$1.45",
  "$1.46",
  "$1.47",
  "$1.48",
  "$1.49",
  "$1.50",
  "$1.51",
  "$1.52",
  "$1.53",
  "$1.54",
  "$1.55",
  "$1.56",
  "$1.57",
  "$1.58",
  "$1.59",
  "$1.60",
  "$1.61",
  "$1.62",
  "$1.63",
  "$1.64",
  "$1.65",
  "$1.66",
  "$1.67",
  "$1.68",
  "$1.69",
  "$1.70",
  "$1.71",
  "$1.72",
  "$1.73",
  "$1.74",
  "$1.75",
  "$1.76",
  "$1.77",
  "$1.78",
  "$1.79",
  "$1.80",
  "$1.81",
  "$1.82",
  "$1.83",
  "$1.84",
  "$1.85",
  "$1.86",
  "$1.87",
  "$1.88",
  "$1.89",
  "$1.90",
  "$1.91",
  "$1.92",
  "$1.93",
  "$1.94",
  "$1.95",
  "$1.96",
  "$1.97",
  "$1.98",
  "$1.99"
];

let longString = "";
let randomStartIndex1 = 0;
let randomStartIndex2 = 0;
let randomStartIndex3 = 0;
let multiplier = 10;
// let multiplier = 10000;

for (let j = 0; j < multiplier; j++) {
  for (let k = 0; k < 1000; k++) {
    randomStartIndex1 = Math.random(0, 186);
    randomStartIndex2 = Math.random(0, 186);
    randomStartIndex3 = Math.random(0, 253);
    longString += `{
    name: ${nameString.slice(
      randomStartIndex1,
      randomStartIndex1 + Math.random(3, 36)
    )},
    price: ${priceNumber[Math.random(0, 101)]},
    bulletOne: ${nameString.slice(
      randomStartIndex2,
      randomStartIndex2 + Math.random(3, 71)
    )},
    bulletTwo: ${nameString.slice(
      randomStartIndex2,
      randomStartIndex2 + Math.random(3, 71)
    )},
    bulletThree: ${nameString.slice(
      randomStartIndex2,
      randomStartIndex2 + Math.random(3, 71)
    )},
    sellerName: ${nameString.slice(
      randomStartIndex1 + 35,
      randomStartIndex1 + 35 + Math.random(3, 36)
    )},
    description: ${nameString.slice(
      randomStartIndex3,
      randomStartIndex3 + Math.random(3, 255)
    )},
  },`;
    longString = longString.slice(0, longString.length - 1);
  }
  Desc.insert([longString]);
  longString = "";
}

const dummyData = [
  {
    name: "name1a",
    price: "$9.99",
    bulletOne: "string1a",
    bulletTwo: "string2a",
    bulletThree: "string3a",
    sellerName: "string4a",
    description: "string5a"
  },
  {
    name: "bname1",
    price: "$9.99",
    bulletOne: "bstring1",
    bulletTwo: "bstring2",
    bulletThree: "bstring3",
    sellerName: "bstring4",
    description: "bstring5"
  },
  {
    name: "n1",
    price: "$9.99",
    bulletOne: "s1",
    bulletTwo: "s2",
    bulletThree: "s3",
    sellerName: "s4",
    description: "s5"
  },
  {
    name: "1n1",
    price: "$9.99",
    bulletOne: "1s1",
    bulletTwo: "2s2",
    bulletThree: "3s3",
    sellerName: "4s4",
    description: "5s5"
  }
];
