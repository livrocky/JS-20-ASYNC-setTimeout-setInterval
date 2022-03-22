//1. Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam resolve - išoka alert "yes, veikia!". Pažado aprašyme teks naudoti setTimeOut - daugiau apie jį čia.

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const pazadas = true;
//     if (pazadas === true) {
//       resolve(alert("yes, veikia!"));
//     }
//   }, 5000);
// });

//2. Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     function getRandomNumber(min, max) {
//       let range = max - min + 1;
//       let result = Math.floor(Math.random() * range + min);

//       if (result !== 5) {
//         resolve(alert("yes, veikia!"));
//       } else {
//         reject(alert("no, reject!"));
//       }
//     }
//     getRandomNumber(1, 5);
//   }, 5000);
// });

//3. Then bendrauja su kitu then. Pakoreguokite antrą pratimą, kad jei resolve'inasi pirmas pažadas - pasileidžia then(), kuris paprasčiausiai grąžina žinutę "this is a message", šią žinutę pagauna antrasis then() ir ją alertina. Prisiminkime - ką then() returnina, tą pasigauna kitas then() kaip parametrą. Nelabai aišku? Pasižiūrėk čia apie teoriją - o jei ne, užmesk akį į atsakymus.

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    function getRandomNumber(min, max) {
      let range = max - min + 1;
      let result = Math.floor(Math.random() * range + min);

      if (result !== 5) {
        resolve("yes, veikia!");
      } else {
        reject("no, reject!");
      }
    }
    getRandomNumber(1, 5);
  }, 1000);
});

p.then(() => "This is message")
  .then((message) => alert(message))
  .catch(() => alert("no, reject!"));
