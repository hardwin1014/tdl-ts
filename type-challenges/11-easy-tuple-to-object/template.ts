type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P;
};

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

// keyof array -> 索引
type r = TupleToObject<typeof tuple>;

// js
function tupleToObject(array) {
  // 1.array 里面的key是不是string类型或者number或者symbol
  // error
  const obj = {};

  array.forEach((val) => {
    obj[val] = val;
  });

  return obj;
}

// 1. 返回一个对象
// 2. 遍历TS的数组  T[number]
