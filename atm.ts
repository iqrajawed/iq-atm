#!/usr/bin/env node 
import inquirer from 'inquirer';
import chalk from 'chalk';

let myBalance:number = 100000;

let myPin:number = 1234;

let pinAnswer = await inquirer.prompt(
    [{
    name:"pin",
    message:chalk.italic.green("\n \t enter your pin"),
    type:"number"
},
])
if (pinAnswer.pin===myPin)
 {console.log(chalk.italic.bgCyanBright('\n\t  Correct pin code!'));

 let operationAns = await inquirer.prompt([{
    name:"operation",
    message:chalk.italic.green("\n \t please select option"),
    type:"list",
    choices:[ "withdraw","check balance","fast cash"]
 }])

//  console.log(operationAns);
 if(operationAns.operation ==="withdraw"){
    let amountAns = await inquirer.prompt([{
        name:"amount",
        message:chalk.italic.green("\n \t enter your amout"),
        type:"number",
       
    }])
   if( amountAns.amount < myBalance)
    {myBalance-=amountAns.amount; 
        console.log(chalk.italic.redBright(`\n \t your remaining balance is Rs.${myBalance}`));   
    }
else 
 {console.log(chalk.italic.redBright("\n \tinsufiicient balance"))}
 }  
 else if 
    (operationAns.operation === "check balance"){

        console.log(chalk.italic.redBright("\n \t your balance is:",+" myBalance"))}
    if(operationAns.operation ==="fast cash")
    {
        let amountAns = await inquirer.prompt([{
            name:"amount",
            message:"enter your amout",
            type:"list",
            choices:["1000","2000","5000","10000"]
        }])
        if (amountAns.amount < myBalance){myBalance-=amountAns.amount; 
            console.log(chalk.italic.redBright (`\n \t your remaining balance is Rs.${myBalance}`));}
            else 
            {console.log(chalk.italic.redBright("\n \tinsufiicient balance"))}
    }
 }

else{
   console.log(chalk.italic.bgMagenta("\n \tincorrect your pincode"))
}