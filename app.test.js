const es = require('./app.js');
var axios = require('axios');
function call(url){
  return new Promise(function(resolve, reject){
    axios.get(url)
        .then(function(response){
          resolve(response.data.result);
        })
  });
}
test('dummy test', () => {
    expect(3).toBe(3);
});
test('call with no parameters', () => {
    expect(es.string_square()).toBe(-1);
});
test('call with null parameter', () => {
    expect(es.string_square(null)).toBe(-1);
});
test('call with correct parameter', () => {
    expect(es.string_square("as")).toBe(4);
});
test('call api with axios', async () => {
  var x = await call("https://simulazionesamese2.herokuapp.com/square?string=ss");
  expect(x).toBe(4);
});
test('call api with axios', async () => {
  var x = await call("https://simulazionesamese2.herokuapp.com/square");
  expect(x).toBe(-1);
});
