// Пошук студентів:
// У вас є масив об'єктів, які представляють студентів та їх оцінки. Напишіть функцію, яка знаходить усіх студентів, у яких середній бал вище за заданий поріг 80.
const students = [
  { name: "Alice", grades: [80, 85, 90] },
  { name: "Bob", grades: [75, 70, 80] },
  { name: "Charlie", grades: [90, 95, 85] }
];

function minGrade(data, minAverage) {
    const studentsApproved = [];
    for (const student of data) {
        let averageGrade = 0;
        for (const grade of student.grades) {
            averageGrade += grade;
        }
        if ((averageGrade / student.grades.length) >= minAverage) {
            studentsApproved.push(student);
        }
    }
    return studentsApproved;
    }

console.log(minGrade(students, 80));