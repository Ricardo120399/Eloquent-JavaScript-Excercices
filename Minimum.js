//Write a function min that takes two arguments and returns their minimum.
function min(x,y){
    if(x == y){
        return "Type different values";
    }
    else if(x < y){
        return x;
    }
    else{
        return y;
    }
}
min(0,-10);