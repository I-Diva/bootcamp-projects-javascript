function computeFactorial(value){

	if (value === 0){
		return 1
	}

	return value * computeFactorial(value-1)
}
computeFactorial(6)


function computeFactorial(value){
	var factorial = 1;
	for(i = 0; i <= value; i++){
		factorial *= i;
	}
	return factorial
	}