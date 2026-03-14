/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}

const pair1: KeyValuePair<string, number> = {key: 'answer', value: 42};
console.log(pair1);

interface Obj {
  a: number;
  b: string
}

const pair2: KeyValuePair<string, Obj> = {key: 'obj', value: {a: 1, b: '2'}};
console.log(pair2);


export {};