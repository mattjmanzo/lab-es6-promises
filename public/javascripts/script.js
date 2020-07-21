// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i]);
// }

// Iteration 1 using callbacks
// addFood(steak[0], "#steak", () => {
//   // ... your code here
//   addFood(steak[1], "#steak", () => {
//     addFood(steak[2], "#steak", () => {
//       addFood(steak[3], "#steak", () => {
//         addFood(steak[4], "#steak", () => {
//           addFood(steak[5], "#steak", () => {
//             addFood(steak[6], "#steak", () => {
//               // rest for 10 minutes
//               addFood(steak[7], "#steak", () => {
//                 // enjoy
//                 document.querySelector("#table").innerHTML +=
//                   <img src="./public/images/steak.jpg" />

//               });
//             });
//           });
//         });
//       });
//     });
//   });

function recursiveAddFood(n) {
  addFood(steak[n], "#steak", () => {
    if (n < steak.length - 1) {
      recursiveAddFood(++n);
    } else {
      document.querySelector("#table").innerHTML += (
        <img src="./public/images/steak.jpg" />
      );
    }
  });
}

recursiveAddFood(0);

function recursiveAddFood(n) {
  addFood(mashPotatoes[n], "#mashPotatoes", () => {
    if (n < mashPotatoes.length - 1) {
      recursiveAddFood(++n);
    } else {
      document.querySelector("#table").innerHTML += (
        <img src="./public/images/mashPotatoes.jpg" />
  );
}

recursiveAddFoodmashPotatoes(0);

// Doesn't work because they have different speeds
// for (let i = 0; i < steak.length; i++) {
//   addFood(steak[i], "#steak");
// }

// addFood(mashPotatoes[0], "#mashPotatoes").then((res) => {
//   addFood(mashPotatoes[1], "#mashPotatoes").then((res) => {
//     addFood(mashPotatoes[2], "#mashPotatoes").then((res) => {
//       addFood(mashPotatoes[3], "#mashPotatoes").then((res) => {
//         addFood(mashPotatoes[4], "#mashPotatoes").then((res) => {
//           document.querySelector("#table").innerHTML += (
//             <img src="./public/images/mashPotatoes.jpg" />
//           );
//         });
//       });
//     });
//   });
// });

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  // ... your code here
  addFood(mashPotatoes[1], "#mashPotatoes");
});

// Iteration 3 using async and await

async function makeFood() {
  // ... your code here
  for(step in brusselSprouts){
    await addFood(step, '#brusselSprouts')
  }
  document.querySelector('#table').innerHTML += `<img src = "./public/images/brusselSprouts"`
makeFood();
