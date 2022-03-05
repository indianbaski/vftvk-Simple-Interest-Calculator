function compute()
{
    //p = document.getElementById("principal").value;
	var principal = document.getElementById("principal").value;
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = principal * years * rate /100;
	var year = new Date().getFullYear()+parseInt(years);
    //console.log("principal" +principal);
	//console.log("rate" + rate);
	//console.log("Years" + years);
	//console.log("interest" + interest);
	//console.log("year " + year);
	
	
	let x = document.getElementById("principal").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if ( x < 0 || x <=0 ) {
    alert("Enter a positive number");
	 //$('#principal').focus();
	 document.getElementById("principal").focus();
  } 
 
  //document.getElementById("result").innerHTML = text;
	
	document.getElementById("result").innerHTML="<p>If you deposit <span class='mark'>"+principal+"</span> ,\<br\>at an interest rate of <span class='mark'>"+rate+" </span>%\<br\>You will receive an amount of <span class='mark'>"+interest+"</span>,\<br\>in the year "+year+"\<br\></p>"
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}		

function myFunction(e) {
    document.getElementById("years").value = e.target.value
}



