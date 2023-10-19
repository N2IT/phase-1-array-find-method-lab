// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  function superbowlWin(array) {
    let winningYear = array.find(function(object){
      if(object.result === "W") {
        return true
      } else {}
    }) 
    if(winningYear === undefined) {
      return undefined
    }
        return winningYear.year
    }


