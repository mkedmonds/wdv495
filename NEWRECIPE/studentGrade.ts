function studentGrade(greeting:string) {

    return "Hello" + greeting;

}

let opening = "noodle";

console.log(studentGrade(opening));

const records = [
	{
		student_id: 332443,
		student_gpa: 3.6,
		student_courses: ['WDV101', 'WDV131', 'WDV105']
	},
	{
		student_id : 545467,
		student_gpa : 2.7,
		student_courses : ['WDV101','WDV131','WDV105','WDV221','WDV205']
	},
	{
		student_id : 128574,
		student_gpa : 3.4,
		student_courses : ['WDV101','WDV131','WDV105','WDV221','WDV205','WDV341']	
	},
	{
		student_id : 750056,
		student_gpa : 1.85,
		student_courses : ['WDV101','WDV131','WDV105','WDV221','WDV205']
	}	
];

// 2. Convert into a JSON object
const recordsJSON = JSON.stringify(records);

// 3. Store JSON object into local storage
window.localStorage.setItem("records", recordsJSON);

const recordsObject = JSON.parse(localStorage.getItem('records'));

function buildCard() {
    // An array that stores the whole div with the class of studentCard
    const card = [];

    // Loop over each record inside the recordsObject
    recordsObject.forEach(currentRecord => {
        // Array that holds all the courses
        const courses = [];

        // Loop over each student_courses array
        for (let course of currentRecord.student_courses) {
            // Create a list item with each course in it
            // Push all list items to courses array
            courses.push(`
                <li>${course}</li>
            `);
        }
        // Create the div and add all the data
        // Push all divs to the card array
        card.push(`
            <div class="studentCard">
                <h3>Student ID: ${currentRecord.student_id}</h3>
                <p>Student GPA: ${currentRecord.student_gpa}</p>
                <p>Student Courses:
                    <ul>
                        ${courses.join('')}
                    </ul>
                </p>
            </div>
        `);
    });
    // Convert card array to a string using the join method
    // Add cards to the DOM
    document.body.innerHTML += card.join('');
}
