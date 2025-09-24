var num = 43;
if(num > 99){
    console.log("Error! Number is not two-digit")
}
else{
    var right = num % 10;
    var left = (num - right) / 10;
    console.log("Left side = ", left);
    console.log("Right side = ", right);
}