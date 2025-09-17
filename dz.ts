function swapKeysAndValues(obj: Record<string, number>): Record<number, string> {
  const result: Record<number, string> = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[obj[key]] = key;
    }
  }
  
  return result;
}

const obj: Record<string, number> = {
  a: 1,
  b: 2
};

const res = swapKeysAndValues(obj);