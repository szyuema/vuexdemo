let types = {
  DEMO1: [
    'ADD'
  ],
  DEMO2: [
    'ADD'
  ],
  All: [
    'ADD'
  ]
};
let t = {};
for (var type in types) {
  t[type] = {};
  for (let ac of types[type]) {
    t[type][ac] = type + '_' + ac;
  }
}
export default t;
