const sharp = require("sharp");

const baseInput = "input2.jpg";
const marioInput = "mario.jpeg";
const images = [sharp(baseInput).toBuffer()];

sharp(marioInput)
  .resize({
    fit: sharp.fit.contain,
    height: 100,
  })
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    sharp(baseInput)
        .joinChannel([marioInput])
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "add",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/add.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "atop",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/atop.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "clear",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/clear.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "colour-burn",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/colour-burn.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "colour-dodge",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/colour-dodge.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "darken",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/darken.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "dest",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/dest.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "dest-atop",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/dest-atop.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "dest-in",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/dest-in.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "dest-out",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/dest-out.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "dest-over",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/dest-over.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "difference",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/difference.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "exclusion",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/exclusion.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "hard-light",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/hard-light.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "in",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/in.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "lighten",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/lighten.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "multiply",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/multiply.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "out",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/out.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "over",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/over.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
    .joinChannel([marioInput])
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "overlay",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/overlay.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "saturate",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/saturate.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "screen",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/screen.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "soft-light",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/soft-light.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "source",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/source.jpg", function (err) {
        console.log("Error: ", err);
      });
    sharp(baseInput)
      .resize(300, 300)
      .composite([
        {
          input: data,
          blend: "xor",
          top: 0,
          left: 0,
        },
      ])
      .toFile("./examples/xor.jpg", function (err) {
        console.log("Error: ", err);
      });
    // console.log(info);
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
