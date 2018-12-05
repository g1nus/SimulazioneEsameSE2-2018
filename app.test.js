const es = require('./app.js');
var axios = require('axios');

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
test('call api with axios', () => {
  axios.get("https://simulazionesamese2.herokuapp.com/square?string=ss")
			.then(function(response){
				expect(response.data.result).toBe(4);
			})
});
test('call api with axios', () => {
  axios.get("https://simulazionesamese2.herokuapp.com/square")
			.then(function(response){
				expect(response.data.result).toBe(-1);
			})
});
