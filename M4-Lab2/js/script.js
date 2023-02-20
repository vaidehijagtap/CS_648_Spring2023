// CREATE AN ARRAY OF EMPLOYEES

let employees = [[11223344, "Vaidehi Jagtap", 1234, "vaidehij@gmail.com", "Engineering"],
    [22334455, "Alia Bhat", 2345, "aliab@gmail.com", "Marketing"],
    [33445566, "Salman Khan", 3456, "salmank@vectagmail.com", "Quality Assurance"],
    [55667788, "Riya Patel", 5678, "riyap@gmail.com", "Sales"],
    [66778899, "Ranbir Kapoor", 6789, "ranbirk@vgmail.com", "Administrative"]]
    
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem('employees') !== null) {
    employees = JSON.parse(localStorage.getItem('employees'))
}

// GET DOM ELEMENTS & BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
let form       = document.getElementById('addForm')
let empTable    = document.getElementById('empTable')
let empCount    = document.getElementById('empCount')
Gridbuilding()

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empID       = parseInt(document.getElementById('id').value)
    let empName     = document.getElementById('name').value
    let empExt      = parseInt(document.getElementById('extension').value)
    let empEmail    = document.getElementById('email').value
    let empDept     = document.getElementById('department').value
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = [empID, empName, empExt, empEmail, empDept]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee)
    // BUILD THE GRID
    Gridbuilding()
    // RESET THE FORM
    form.reset()
    // SET FOCUS BACK TO THE ID TEXT BOX
    form.id.focus()
})

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE & GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
    if (e.target.classList.contains('delete')) {
        if (confirm('Do you really want to delete the record?')) {
            let rowIndex = e.target.parentNode.parentNode.rowIndex
            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(rowIndex - 1, 1)
            // BUILD THE GRID
            Gridbuilding()
        }
    }
})

// BUILD THE EMPLOYEES GRID

function Gridbuilding() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.lastElementChild.remove()
    // REBUILD THE TBODY FROM SCRATCH
    let tbody = document.createElement('tbody')
    // LOOP THROUGH THE ARRAY OF EMPLOYEES & REBUILDING THE ROW STRUCTURE
    for (let employee of employees) {
        tbody.innerHTML += 
        `<tr>
            <td>${employee[0]}</td>
            <td>${employee[1]}</td>
            <td>${employee[2]}</td>
            <td>${employee[3]}</td>
            <td>${employee[4]}</td>
            <td><button class="btn btn-lg btn-danger delete">X</button></td>
        </tr>
        `}
// BIND THE TBODY TO THE EMPLOYEE TABLE
empTable.appendChild(tbody);
// UPDATE EMPLOYEE COUNT
empCount.value = `(${employees.length})`
// STORE THE ARRAY IN STORAGE
localStorage.setItem('employees', JSON.stringify(employees))
}
