var grades = [3,4,5,6];

var totalGrades = 0;

grades.forEach(function (grades){
totalGrades += grades;
});

totalGrades /= grades.length; 

console.log(totalGrades);  