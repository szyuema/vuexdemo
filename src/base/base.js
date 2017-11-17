
var param = {
  name: 'mayue',
  age: 10
};

export function get(key) {
  if (!key) {
    return param;
  }
  return param[key];
};
export default param;
