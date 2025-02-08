let buttonMember = document.querySelector('.btn-member')
let boxInfo = document.querySelector('.box-info')
let nameInput = document.querySelector('.input-name')
let ageInput = document.querySelector('.input-age')
let placeBirthInput = document.querySelector('.input__place-birth')
let languageInput = document.querySelector('.input-language')
let inputProfilePhoto = document.querySelector('.input__profile-img')
let buttonFinishMember = document.querySelector('.btn__finish-member')

buttonMember.addEventListener("click", function(){
    nameInput.style.display = 'block'
    ageInput.style.display = 'block'
    placeBirthInput.style.display = 'block'
    languageInput.style.display = 'block'
    boxInfo.style.display = 'flex'
    inputProfilePhoto.style.display = 'block'
    buttonFinishMember.style.display = 'block'
})

buttonFinishMember.addEventListener("click", async function(){
    let url = "http://localhost:3000/students"
    
    try {
        let response = await fetch(url)
        let students = await response.json()
        
        if (students.length >= 10) {
            alert("The student limit has been reached! You cannot join the course.")
            return
        }

        if(nameInput.value === '' || ageInput.value === '' || placeBirthInput.value === '' || languageInput.value === ''){
            alert("Please fill in all fields!")
            return
        }

        let file = inputProfilePhoto.files[0]
        if (!file) {
            alert("Please select a profile picture.")
            return
        }

        let reader = new FileReader()
        reader.onload = async function(e) {
            let newStudent = {
                nameStudent: nameInput.value,
                age: ageInput.value,
                course: "Front-end 4",
                placeBirth: placeBirthInput.value,
                language: languageInput.value,
                profilePhoto: e.target.result
            }

            let options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(newStudent)
            }

            let studentVar = await fetch(url, options)
            let studentFinal = await studentVar.json()
            console.log(studentFinal)
        }
        
        reader.readAsDataURL(file)
    } catch (error) {
        console.error("Server connection error:", error)
    }
})




/* Функція для видалення елементів з серверу */
/* fetch("http://localhost:3000/students/", {
    method: "DELETE"
})

.then(response => {
    if(!response.ok){
        console.error("Error")
    }
    return response.json()
})

.then(data => {
    console.log(data)
})

.catch(error => {
    console.error(error)
}) */