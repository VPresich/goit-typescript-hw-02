/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

//1)
function getPromise1<T extends (string | number)[]>(): Promise<T> {
  return new Promise<T>((resolve) => {
    resolve(["Text", 50] as T);
  });
}

//2)
function getPromise(): Promise<(string | number)[]> {
  return new Promise<(string | number)[]>((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

export { getPromise };
