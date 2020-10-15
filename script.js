 const bmiCalculator=()=>{
 	const cm = parseInt(document.getElementById("cm").value);
 	const kg = parseFloat(document.getElementById("kg").value);

 	let bmi;
 	let newCm= parseFloat(cm/100);

 	bmi = kg / (newCm * newCm);
 	bmi = bmi.toFixed(1);
 	

 	document.getElementById("result").innerHTML = bmi;

}
 document.getElementById("submit").addEventListener("click", bmiCalculator);