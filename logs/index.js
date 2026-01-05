import fs from "fs";

const lines = fs.readFileSync("./241225L02.txt", "utf-8").split(/\r?\n/);
const THRESHOLD = 110000;

lines
  .filter((line) => line.startsWith("E |"))
  .forEach((line) => {
    const fields = line.split("|").map((f) => f.trim());

    const transactionId = fields[6];
    const amount = Number(fields[8]);

    if (amount > THRESHOLD) {
      console.log(`ABOVE ${THRESHOLD}:`, transactionId, amount);
    } else if (amount === THRESHOLD) {
      console.log(`EQUAL ${THRESHOLD}:`, transactionId, amount);
    }
  });
