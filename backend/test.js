import fs from "fs";

const imageBuffer =
  fs.readFileSync("./test.jpg");

const base64 =
  imageBuffer.toString(
    "base64"
  );

console.log(base64);