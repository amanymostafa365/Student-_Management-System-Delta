
// ==========================================
// Task 2: Student Management System
// ==========================================


// 1. Student Class & Constructor

class Student {

    constructor(id, name, grades, attendance) {

        this.id = id;
        this.name = name;
        this.grades = grades;
        this.attendance = attendance;

    }


    // 2. Calculate Average using reduce()

    calculateAverage() {

        const total = this.grades.reduce((sum, grade) => {

            return sum + grade;

        }, 0);

        return total / this.grades.length;

    }


    // 3. Get Grade using if / else

    getGrade(average) {

        if (average >= 90) {

            return "A";

        } else if (average >= 80) {

            return "B";

        } else if (average >= 70) {

            return "C";

        } else if (average >= 60) {

            return "D";

        } else if (average >= 50) {

            return "E";

        } else {

            return "F";

        }

    }


    // 4. Get Final Result using &&

    getResult() {

        const average = this.calculateAverage();

        if (average >= 50 && this.attendance >= 75) {

            return "ناجح";

        } else {

            return "يحتاج مراجعة";

        }

    }

}



// ==========================================
// 5. Create Students Objects Array
// ==========================================

const studentsList = [

    new Student(101, "Ahmed", [80, 90, 70], 90),

    new Student(102, "Mona", [45, 48, 42], 85),

    new Student(103, "Omar", [40, 45, 47], 80),

    new Student(104, "Sara", [95, 90, 85], 95)

];



// ==========================================
// 6. Filter Struggling Students
// ==========================================

const strugglingStudents = studentsList.filter(student => {

    const average = student.calculateAverage();

    return average >= 40 && average <= 49;

});



// ==========================================
// 7. Apply Mercy Grades using map()
// ==========================================

const mercyStudents = strugglingStudents.map(student => {

    return {

        id: student.id,

        name: student.name,

        oldAverage: student.calculateAverage(),

        newAverage: student.calculateAverage() + 5

    };

});



// ==========================================
// 8. Calculate Total New Averages using reduce()
// ==========================================

const totalMercyAverage = mercyStudents.reduce((sum, student) => {

    return sum + student.newAverage;

}, 0);



// ==========================================
// 9. Calculate Final Mercy Average
// ==========================================

const finalMercyAverage = mercyStudents.length > 0

    ? totalMercyAverage / mercyStudents.length

    : 0;



// ==========================================
// 10. Print Students Report
// ==========================================

console.log("========== STUDENTS REPORT ==========");

studentsList.forEach(student => {

    const average = student.calculateAverage();

    console.log("Student ID:", student.id);

    console.log("Name:", student.name);

    console.log("Average:", average);

    console.log("Grade:", student.getGrade(average));

    console.log("Result:", student.getResult());

    console.log("--------------------------------");

});



// ==========================================
// 11. Print Mercy Committee Report
// ==========================================


console.log("========== MERCY COMMITTEE ==========");

mercyStudents.forEach(student => {

    console.log("Student ID:", student.id);
    console.log("Name:", student.name);
    console.log("Old Average:", student.oldAverage);
    console.log("New Average:", student.newAverage);

    console.log("-----------------------------");

});

console.log("Average After Mercy:", finalMercyAverage);

console.log("=====================================");
