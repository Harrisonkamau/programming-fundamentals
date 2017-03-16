// implement your solution here
function oldAndYoung(students) {
    var y = 1800,
        o = 2017,
        yO = {};
    students.forEach(function(student) {
        if (student.yearOfBirth > y) {
            yO.youngest = student.name;
            y = student.yearOfBirth;
        }
        if (student.yearOfBirth < o) {
            yO.oldest = student.name;
            o = student.yearOfBirth;
        }
    });
    return yO;
}