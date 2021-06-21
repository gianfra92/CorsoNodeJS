/* Object literal*/
const foo = 'bar';
const baz = {
    foo
};  // Result: { foo: 'bar' }
// console.log(baz);

/* Destructuring */
const myObj = { a: 'bar', b: 'foo'};
// const {c} = myObj;
delete myObj.b
console.log(myObj);

/* Object class*/
// const entries = Object.entries({foo: 'a', bar: 'b'}); // [ [ 'foo', 'a' ], [ 'bar', 'b' ] ]
// console.log(entries);

// const keys = Object.keys({foo: 'a', bar: 'b'}); // [ 'foo', 'bar' ]
// console.log(keys);
