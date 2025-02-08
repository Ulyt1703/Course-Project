let btnMain = document.querySelector('.btn-main')

async function getStudents(){
    let mainStudents = document.querySelector('.main-students')

    try {
        let response = await fetch("http://localhost:3000/students")
        let students = await response.json()
        console.log(students)
        students.forEach(student => {
            let boxesStudents = document.createElement('article')
            boxesStudents.classList.add('box-students')

            let profilePhoto = document.createElement('img')
            let nameStudent = document.createElement('h2')
            let ageStudent = document.createElement('p')
            let courseStudent = document.createElement('p')
            let placeBirthStudent = document.createElement('p')
            let languageStudent = document.createElement('p')

            profilePhoto.classList.add("img__profile-photo")

            profilePhoto.src = student.profilePhoto
            nameStudent.textContent = student.nameStudent
            ageStudent.textContent = `Age: ${student.age}`
            courseStudent.textContent = `Course: ${student.course}`
            placeBirthStudent.textContent = `Place of Birth: ${student.placeBirth}`
            languageStudent.textContent = `Language: ${student.language}`

            boxesStudents.append(profilePhoto, nameStudent, ageStudent, courseStudent, placeBirthStudent, languageStudent)
            mainStudents.appendChild(boxesStudents)
        })
    } 
    catch (error) {
        console.error("Error fetching students:", error)
    }
}

btnMain.addEventListener("click", function(){
    btnMain.style.display = 'none'
    getStudents()
})