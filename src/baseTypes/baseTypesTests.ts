// test of 1.ts
console.log("Test - 1");
import { age, name, toggle, empty, notInitialize, callback } from "./1";

console.log("typeof age: ", typeof age, ", value: ", age);
console.log("typeof name: ", typeof name, ", value: ", name);
console.log("typeof toggle: ", typeof toggle, ", value: ", toggle);
console.log("typeof empty: ", typeof empty, ", value: ", empty);
console.log(
  "typeof notInitialize: ",
  typeof notInitialize,
  ", value: ",
  notInitialize
);
console.log("typeof callback: ", typeof callback, ", value: ", callback);

// test of 2.ts
console.log("Test - 2");
import { anything } from "./2";
console.log("typeof anything: ", typeof anything, ", value: ", anything);

// test of 3.ts
console.log("Test - 3");
import { some, str } from "./3";
console.log("typeof some: ", typeof some, ", value: ", some);
console.log("typeof str: ", typeof str, ", value: ", str);

// test of 4.ts
console.log("Test - 4");
import { person } from "./4";
console.log("typeof person: ", typeof person, ", value: ", person);

// test of 5.ts
console.log("Test - 5");
import { union, literal } from "./5";
console.log("typeof union: ", typeof union, ", value: ", union);
console.log("typeof literal: ", typeof literal, ", value: ", literal);

// test of 6.ts
console.log("Test - 6");
import { showMessage, calc, customError } from "./6";

console.log("showMessage('qqq'): ", showMessage("qqq"));
console.log(" calc(1, 1)", calc(1, 1));

// test of 7.ts
console.log("Test - 7");
import { weekDays, isWeekend } from "./7";
console.log("typeof weekDays: ", typeof weekDays);
console.log("isWeekend(weekDays.MONDAY)", isWeekend(weekDays.MONDAY));
console.log("isWeekend(weekDays.SUNDAY)", isWeekend(weekDays.SUNDAY));

// test of 8.ts
console.log("Test - 8");
import { Gender, myGender } from "./8";
const gender: Gender = "male";
console.log("typeof myGender: ", typeof myGender, "value: ", myGender);
console.log("typeof gender: ", typeof gender, "value: ", gender);

// test of 9.ts
console.log("Test - 9");
import { Page, page1, page2 } from "./9";
const page3: Page = {
  title: "The third page",
  likes: 300,
  accounts: ["Nikita"],
  status: "open",
  details: {
    createAt: new Date("2024-04-04"),
  },
};

console.log("typeof page1: ", typeof page1, "value: ", page1);
console.log("typeof page2: ", typeof page2, "value: ", page2);
console.log("typeof page3: ", typeof page3, "value: ", page3);
