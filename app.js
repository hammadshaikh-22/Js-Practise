var maths,phy,eng,isl,cs,obtMarks,totalMarks,percentage;
maths=Number(prompt("Enter your Maths marks: "))
phy=Number(prompt("Enter your Physics marks: "))
eng=Number(prompt("Enter your English marks: "))
isl=Number(prompt("Enter your Islamiyat marks: "))
cs=Number(prompt("Enter your Computer marks: "))

totalMarks=500;
obtMarks = maths+phy+eng+isl+cs;
alert("Total obtained marks are: "+obtMarks);
percentage = (obtMarks / totalMarks) *100;





if (percentage<=100 && percentage>80){
    alert("A1 grade");
}
else if (percentage<=80 && percentage>70){
    alert("A grade");
}
else if (percentage<=70 && percentage>60){
    alert("B grade");
}
else if (percentage<=60 && percentage>50){
    alert("C grade");
}
else if (percentage<=50 && percentage>40){
    alert("d grade");
}
else if (percentage<=40){
    alert("Fail");
}
else{
    alert("Wrong Input")
}
var num
num=prompt("Enter Any Number: ");
if (num%2==0){
    alert("This is an even number")
    alert("The number is ")
}
else{
    alert("This is an odd number");
    alert("The number is ");
}