const es = require('./app.js');
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
