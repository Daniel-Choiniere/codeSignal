// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence
// by removing no more than one element from the array.

function almostIncreasingSequence(sequence) {
  let numsToCheck = sequence.length;
  let totalNotInOrder = 0;
  while (numsToCheck > 0) {
    const newSequence = [...sequence];
    newSequence.splice(numsToCheck, 1);
    console.log(newSequence);

    for (let i = 1; i < sequence.length; i++) {
      if (newSequence[i - 1] > newSequence[i]) {
        totalNotInOrder++;
      }
    }
    numsToCheck--;
  }

  console.log("Total Not in Order: ", totalNotInOrder);
  if (totalNotInOrder > 1) {
    return false;
  } else {
    return true;
  }
}
