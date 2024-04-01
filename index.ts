#! /usr/bin/env node
import inquirer from "inquirer";
let todos=[];
let condition=true;

while(condition){
let add=await inquirer.prompt([
    {message:"what you want to add in your todo list",type:"input",name:"todo"},
    {message:"do you add more items in your todo list",type:"confirm",name:"addmore",default:"false"},
]);
todos.push(add.todo);
condition= add.addmore;
console.log(todos);



}