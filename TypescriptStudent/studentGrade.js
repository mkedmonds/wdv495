function studentGrade(greeting) {
    return "Hello " + greeting;
}
var opening = "WDV495 Class";
console.log(studentGrade(opening));
var result = studentGrade(opening);
console.log(result);
var records = [
    {
        student_id: 332443,
        student_gpa: 3.6,
        student_courses: ['WDV101', 'WDV131', 'WDV105']
    },
    {
        student_id: 545467,
        student_gpa: 2.7,
        student_courses: ['WDV101', 'WDV131', 'WDV105', 'WDV221', 'WDV205']
    },
    {
        student_id: 128574,
        student_gpa: 3.4,
        student_courses: ['WDV101', 'WDV131', 'WDV105', 'WDV221', 'WDV205', 'WDV341']
    },
    {
        student_id: 750056,
        student_gpa: 1.85,
        student_courses: ['WDV101', 'WDV131', 'WDV105', 'WDV221', 'WDV205']
    }
];
// 2. Convert into a JSON object
var recordsJSON = JSON.stringify(records);
// 3. Store JSON object into local storage
window.localStorage.setItem("records", recordsJSON);
var recordsObject = JSON.parse(localStorage.getItem('records'));
function buildCard() {
    // An array that stores the whole div with the class of studentCard
    var card = [];
    // Loop over each record inside the recordsObject
    recordsObject.forEach(function (currentRecord) {
        // Array that holds all the courses
        var courses = [];
        // Loop over each student_courses array
        for (var _i = 0, _a = currentRecord.student_courses; _i < _a.length; _i++) {
            var course = _a[_i];
            // Create a list item with each course in it
            // Push all list items to courses array
            courses.push("\n                <li>" + course + "</li>\n            ");
        }
        // Create the div and add all the data
        // Push all divs to the card array
        card.push("\n            <div class=\"studentCard\">\n                <h3>Student ID: " + currentRecord.student_id + "</h3>\n                <p>Student GPA: " + currentRecord.student_gpa + "</p>\n                <p>Student Courses:\n                    <ul>\n                        " + courses.join('') + "\n                    </ul>\n                </p>\n            </div>\n        ");
    });
    // Convert card array to a string using the join method
    // Add cards to the DOM
    document.body.innerHTML += card.join('');
}
