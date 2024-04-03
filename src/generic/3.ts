/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T1 extends object, T2 extends object>(
  objA: T1,
  objB: T2
): T1 & T2 {
  return { ...objA, ...objB };
}

export { merge };
