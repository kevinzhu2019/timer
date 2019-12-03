const firstTimer = function(takeInTimer) {
  let tempArray = [];
  if (takeInTimer.length <= 2) {
    console.log("No numbers are provided, Error!!");
  }
  for (let i = 2; i < takeInTimer.length; i ++) {
    if (takeInTimer[i] >= 0 && Number(takeInTimer[i])) {
    tempArray.push(Number(takeInTimer[i]));
    }
  }
  // console.log(tempArray);
  const sortNumber = function(a, b) {
    return (a - b);
  }
  let arrangedArray = tempArray.sort(sortNumber);
  // console.log(arrangedArray);
  for (const item of arrangedArray) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, item * 1000);
  }
}
firstTimer(process.argv);