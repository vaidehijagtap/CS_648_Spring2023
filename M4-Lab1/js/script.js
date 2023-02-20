// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

let addForm = document.getElementById('addForm');
let emp = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

let count = 0;
let empCount = document.getElementById("empCount");

// ADD EMPLOYEE

addForm.addEventListener('submit', (e) => {
    
    // PREVENT FORM SUBMISSION
    
     e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value;
    let extension = document.getElementById('extension').value;
    let email = document.getElementById('email').value;
    let department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let insertedRow = emp.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellID = insertedRow.insertCell(0);
    let cellName = insertedRow.insertCell(1);
    let cellExtension = insertedRow.insertCell(2);
    let cellEmail = insertedRow.insertCell(3);
    let cellDepartment = insertedRow.insertCell(4);
    let cellDelete = insertedRow.insertCell(5);
    

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    
    cellID.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    
    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-lg delete';
    deleteButton.appendChild(document.createTextNode('X'));
    cellDelete.appendChild(deleteButton);

    // RESET THE FORM
    
    addForm.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    
    document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    empCount.textContent = count;

});

// DELETE EMPLOYEE
emp.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Do you really want to delete the record?')) {
            let insertedRow  = e.target.parentNode.parentNode;
            emp.deleteRow(insertedRow .rowIndex);
            count--;
            empCount.textContent = count;
        }
    }
});