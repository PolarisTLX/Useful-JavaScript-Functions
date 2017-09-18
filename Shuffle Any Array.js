//NOTE THIS CAN BE USED TO SHUFFLE ANY ARRAY!!!
//replace "array" with whatever array you want and try in console
function shuffleArray(array){
  for(var x = array.length -1; x > 0; x--){
    //to get a number from 1 to 10:
    //Math.floor(Math.random()*10);     gives 0-9
    //Math.floor(Math.random()*10) +1;  gives 1-10
    //NOTE:  Math.ceil()  rounds up.  Math.floor()  rounds down
    var ii = Math.floor(Math.random()*(x+1));  //x+1 so we don't start with 0 value
    //create temp container for array item:
    var temp = array[x];
    //console.log(temp);  this will create duplicates, so need to overwrite it:
    array[x] = array[ii];
    //console.log(array[ii]);
    array[ii] = temp;

  }
  //console.log(array);  //see that the 52 cards are shuffled
  return array;
}
