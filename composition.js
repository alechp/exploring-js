/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-02-01T20:08:15-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-02-01T20:16:03-08:00
 */

//https://www.youtube.com/watch?v=6sQDTgOqh-I
const chalk = require("chalk");
const dragonEvents = [
  { type: "attack", value: 12, target: "player-dorkman" },
  { type: "yawn", value: 40 },
  { type: "eat", target: "horse" },
  { type: "attack", value: 23, target: "player-fluffykins" },
  { type: "attack", value: 12, target: "player-dorkman" }
];

const totalDamageDorkman = dragonEvents
  .filter(event => event.type === "attack")
  .filter(event => event.target === "player-dorkman")
  .map(event => event.value)
  .reduce((prev, value) => (prev || 0) + value);

console.log(`totalDamageOnDorkman: \n ${chalk.green(totalDamageDorkman)}`);
