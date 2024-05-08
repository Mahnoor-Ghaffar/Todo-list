#! /usr/bin/env node
import inquirer from "inquirer";
let todos = ["JavaScript", "TypeScript", "Python"];
async function createTodo(todos) {
    do {
        let userInput = await inquirer.prompt({
            name: "select",
            message: "Select an operation or 'Exit' to quit:",
            type: "list",
            choices: ["add", "update", "view", "delete", "Exit"]
        });
        if (userInput.select === "add") {
            let addTodo = await inquirer.prompt({
                name: "todo",
                message: "add item",
                type: "input",
            });
            if (addTodo.todo.trim() !== "") {
                todos.push(addTodo.todo.trim());
                console.log("Item added: ", addTodo.todo);
            }
            else {
                console.log("No item added.");
            }
            console.log(todos);
        }
        if (userInput.select === "update") {
            let updateTodo = await inquirer.prompt({
                name: "todo",
                message: "select item for update",
                type: "list",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                name: "todo",
                message: "add items:",
                type: "input",
            });
            let newTodos = todos.filter((val) => val == updateTodo.todo);
            todos = [...newTodos, addTodo.todo];
            console.log(todos);
        }
        if (userInput.select === "view") {
            console.log(todos);
        }
        if (userInput.select === "delete") {
            let deleteTodos = await inquirer.prompt({
                name: "todo",
                message: "select item for delete",
                type: "list",
                choices: todos.map(item => item)
            });
            let newTodos = todos.filter((val) => val !== deleteTodos.todo);
            todos = [...newTodos];
            console.log(todos);
        }
        if (userInput.select === "Exit") {
            console.log("Exiting the application. Goodbye!");
            break; //exit the loop
        }
    } while (true);
}
createTodo(todos);
