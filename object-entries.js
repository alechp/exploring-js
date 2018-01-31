/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-30T15:55:07-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-30T15:56:48-08:00
 */
// https://javascript.info/keys-values-entries
//https://www.youtube.com/watch?v=86Gun5uobHQ
const log = console.log;
let x = { a: 1, b: 2, c: 7 };

let foo = Object.keys(x);
log(foo);

let bar = Object.values(x);
log(bar);

let baz = Object.entries(x);
log(baz);
