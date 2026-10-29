const inputName = document.querySelector('#name')
const inputCity = document.querySelector('#city')
const inputJob = document.querySelector('#job')
const submitBtn = document.querySelector('#submitBtn')
const tableBody = document.querySelector('#table-body')

let currentEditingRow = null

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if (inputName.value === "" || inputCity.value ===
        "" || inputJob.value === "") {
        inputName.classList.add('error')
        inputName.placeholder = "Please enter name"
        inputCity.classList.add('error')
        inputCity.placeholder = "Please enter city"
        inputJob.classList.add('error')
        inputJob.placeholder = "Please enter job"
    } else if (currentEditingRow) {
        currentEditingRow.nameCell.textContent = inputName.value
        currentEditingRow.cityCell.textContent = inputCity.value
        currentEditingRow.jobCell.textContent = inputJob.value
        currentEditingRow = null
    } else {
        inputName.classList.remove('error')
        inputName.placeholder = "Enter name"
        inputCity.classList.remove('error')
        inputCity.placeholder = "Enter city"
        inputJob.classList.remove('error')
        inputJob.placeholder = "Enter job"

        const name = inputName.value
        const city = inputCity.value
        const job = inputJob.value

        const tableRow = document.createElement('tr')
        const tdName = document.createElement('td')
        const tdCity = document.createElement('td')
        const tdJob = document.createElement('td')

        const tdAction = document.createElement('td')
        const editBtn = document.createElement('button')
        const deleteBtn = document.createElement('button')

        editBtn.addEventListener('click', () => {
            inputName.value = tdName.textContent
            inputCity.value = tdCity.textContent
            inputJob.value = tdJob.textContent
            //tableRow.remove()
            currentEditingRow = {
                nameCell: tdName,
                cityCell: tdCity,
                jobCell: tdJob
            }
        })

        deleteBtn.addEventListener('click', () => tableRow.remove())

        tdName.textContent = name
        tdCity.textContent = city
        tdJob.textContent = job
        editBtn.textContent = "Edit"
        deleteBtn.textContent = "Delete"
        tdAction.appendChild(editBtn)
        tdAction.appendChild(deleteBtn)
        tableRow.appendChild(tdName)
        tableRow.appendChild(tdCity)
        tableRow.appendChild(tdJob)
        tableRow.appendChild(tdAction)
        tableBody.appendChild(tableRow)
    }

        inputName.value = ""
        inputCity.value = ""
        inputJob.value = ""
})