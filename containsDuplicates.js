// VVVV brute force method VVVV

// function containsDuplicates(a) {
//     let storage = a[0];
//     for (let i = 1; i < a.length; i++) {
//         if (a[i] == storage) {
//             storage = a[i];
//             return true
//             }
//     }
//     return false;
// }


// sort the array and then loop through it and then see if the next index comapred to the previous index is the same as the current


function containsDuplicates(a) {
  a.sort();

  for (var i = 0; i < a.length; i++) {
      if (a[i + 1] == a[i]) {
          return true;
      }
  }
  return false;
}


// VVVV trying to use the built in find function - not working VVVV

// function containsDuplicates(a) {
//   for (let i = 0; i < a.length; i++) {
//   a.find(function(element) {
//       if (element == a[i]) {
//         console.log("made it here at least")
//         return true;
//       }
//     })
//   }
//   return false;
// }