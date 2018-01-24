/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-24T14:42:07-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-24T14:45:36-08:00
 */

function fluent(fn) {
  return function(...args) {
    fn.apply(this, args);
    return this;
  };
}

function Person() {}

Person.prototype.setName = fluent(function(first, last) {
  this.first = first;
  this.last = last;
});
Person.prototype.sayName = fluent(function() {
  console.log(this.first, this.last);
});

const p = new Person();
p
  .setName("John", "Doe")
  .sayName()
  .setName("Jane", "Smith")
  .sayName();
