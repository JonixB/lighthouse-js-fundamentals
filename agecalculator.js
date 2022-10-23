function ageCalculator(name, birthYear, currentYear) {
  let age = 0;
  string = '';
  age = currentYear - birthYear;
  string = name + ' is ' + age + ' years old.';
  return string;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));