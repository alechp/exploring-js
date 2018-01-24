/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-24T14:50:56-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-24T15:04:20-08:00
 */

function fluent(fn) {
  return function(...args) {
    fn.apply(this, args);
    return this;
  };
}

function decorate(target, name, descriptor) {
  const fn = descriptor.value;
  descriptor.value = function(...args) {
    fn.apply(target, args);

    return target;
  };
}
class Person {
  @decorate
  setName(first, last) {
    this.first = first;
    this.last = last;
  }
  @decorate
  sayName() {
    console.log(this.first, this.last);
  }
}

const p = new Person();
p.setName("Jane", "Doe").sayName();
