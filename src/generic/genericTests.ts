// test of 1.ts
console.log("Generic. Test - 1");

import { getPromise } from "./1";
console.log("typeof getPromise: ", typeof getPromise);

// test of 2.ts
console.log("Generic. Test - 2");
import { AllType, compare } from "./2";

type TopType = Pick<AllType, "name" | "color">;
type BottomType = Pick<AllType, "position" | "weight">;

const top: TopType = {
  name: "name_1",
  color: "red",
};

const bottom: BottomType = {
  position: 2,
  weight: 20,
};

const result = compare(top, bottom);

console.log("typeof top: ", typeof top, ", value: ", top);
console.log("typeof bottom: ", typeof bottom, ", value: ", bottom);
console.log("typeof  compare", typeof compare, ", value: ", result);

// test of 3.ts
console.log("Generic. Test - 3");
import { merge } from "./3";

const obj1 = { name: "Bob" };
const obj2 = { age: 33 };
const qqq = "Bob";
console.log("typeof obj1: ", typeof obj1, ", value: ", obj1);
console.log("typeof obj2: ", typeof obj2, ", value: ", obj2);
console.log("typeof  merge", typeof merge, ", value: ", merge(obj1, obj2));
// console.log("typeof  merge", typeof merge, ", value: ", merge(obj1, qqq));

// test of 4.ts
console.log("Generic. Test - 4");
import { IProps, Page } from "./4";
const pageProps: IProps = { title: "My Page Title" };
const page = new Page(pageProps);
console.log("typeof pageProps: ", typeof pageProps, ", value: ", pageProps);
console.log("typeof page: ", typeof page, ", value: ", page);

// test of 5.ts
console.log("Generic. Test - 5");
import { KeyValuePair } from "./5";

const pair1: KeyValuePair<string, number> = { key: "age", value: 33 };
const pair2: KeyValuePair<number, string> = { key: 1, value: "33" };
console.log("typeof pair1: ", typeof pair1, ", value: ", pair1);
console.log("typeof pair2: ", typeof pair2, ", value: ", pair2);

// test of 7.ts
console.log("Generic. Test - 7");
import { UserRole, RoleDescription } from "./7";

console.log("typeof UserRole: ", typeof UserRole, ", value: ", UserRole);
console.log(
  "typeof RoleDescription: ",
  typeof RoleDescription,
  ", value: ",
  RoleDescription
);

// test of 8.ts
console.log("Generic. Test - 8");
import { Errors, Form, Params } from "./8";

const errors: Errors = {};

const form: Form = {
  email: "email@gmail.com",
  firstName: "First",
  lastName: "Last",
  phone: "11111111",
  errors: {},
};

const params: Params = {
  email: "email222@gmail.com",
  firstName: "First222",
  lastName: "Last222",
  phone: "2222",
};

console.log("typeof errors: ", typeof errors, ", value: ", errors);
console.log("typeof Form: ", typeof form, ", value: ", form);
console.log("typeof params: ", typeof params, ", value: ", params);
