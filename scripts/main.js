const MODULE_ID = "player-trades";

Hooks.once("init",  () => console.log(`${MODULE_ID} | init`));
Hooks.once("ready", () => console.log(`${MODULE_ID} | ready`));