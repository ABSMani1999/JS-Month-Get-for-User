//4.Get month from user and find(winter, fall, summer)
	var j=parseInt(prompt("Enter Your Month"));
	var a=new Date();
	a.setMonth(j);
	var month1=a.getMonth();
	
	if(month1<=3 && 0<=month1){
		document.write("Winter");
	}
	else if(month1>=4 && 7>=month1){
		document.write("Fall");
	}
	else{
		document.write("summer");
	}