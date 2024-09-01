import { rainbowText } from "../src/mod.ts";

const text = await Deno.readTextFile("./dinosaur.txt");

console.log(rainbowText(text));