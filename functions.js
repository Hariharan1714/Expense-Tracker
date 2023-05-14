// Array to store expenses
var expenses = [];

// Function to add an expense
function addExpense() {
    // Get values from form
    var amount = $("#amount").val();
    var description = $("#description").val();
    var category = $("#category").val();

    // Create expense object
    var expense = {
        amount: amount,
        description: description,
        category: category
    };

    // Add expense to array
    expenses.push(expense);

    // Clear form inputs
    $("#amount").val("");
    $("#description").val("");
    $("#category").val("");

    // Update expense list
    updateExpenseList();
}

//	// Function to update the expense list
function updateExpenseList() {
    // Clear expense list
    $("#expenseList").empty();

    // Loop through expenses array and add rows to table
    for (var i = 0; i < expenses.length; i++) {
        var expense = expenses[i];
        var row = "<tr><td>" + expense.amount + "</td><td>" + expense.description + "</td><td>" + expense.category + "</td><td><button type='button' class='btn btn-secondary' onclick='editExpense(" + i + ")'>Edit</button></td><td><button type='button' class='btn btn-danger' onclick='deleteExpense(" + i + ")'>Delete</button></td></tr>";
        $("#expenseList").append(row);
    }
}

// Function to edit an expense
function editExpense(index) {
    // Get expense object from array
    var expense = expenses[index];

    // Set form inputs to expense values
    $("#amount").val(expense.amount);
    $("#description").val(expense.description);
    $("#category").val(expense.category);

    // Remove expense from array
    expenses.splice(index, 1);

    // Update expense list
    updateExpenseList();
}

// Function to delete an expense
function deleteExpense(index) {
    // Remove expense from array
    expenses.splice(index, 1);

    // Update expense list
    updateExpenseList();
}