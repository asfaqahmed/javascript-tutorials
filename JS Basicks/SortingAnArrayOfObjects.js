let students = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 24 },
];

students.sort((a, b) => a.age - b.age);

console.log("Students sorted by age:");
students.forEach(student => console.log(student.name + ": " + student.age));
