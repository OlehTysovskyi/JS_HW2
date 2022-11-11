let employeeSalaries = {
	emp1 : 4500,
	emp2 : 12000,
	emp3 : 1000,
	emp4 : 155000,
	emp5 : 12345
};

let Sum = 0, i = 1;
for(let num in employeeSalaries){
	Sum += employeeSalaries[num];
	console.log("-Salary " + i + " = [" + employeeSalaries[num] + "]");
}

console.log("-Salaries sum = [" + Sum + "]");