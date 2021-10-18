/*Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #*/
let s = "";
let l = " ";
//This cycle is responsible for doing the numeral symbol on the same line 4 times
for(let i = 1; i <= 4; i++) {
  let numeral = String(i);
  numeral = "#";
  s += numeral + " ";
}
//this cycle is responsible of doing the 8 lines.
  l = parseInt(s);
  for(l = 1; l <= 8; l++){
    if(l % 2 == 0){
      console.log(s);
    }
    else{
      console.log(" " + s);
    }
}