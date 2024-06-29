#! usr/bin/env node
console.log(chalk.gray("\n\t\t\t\t\t============================================================================================\n\t\t\t\t\t\t\t\t\t\t"));
console.log(chalk.yellowBright("\n\t\t\t\t\t\t~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~COMPUTRIZE MARK SHEET~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\t\t\t\t\t\t\t\t\t\n"));
console.log(chalk.gray("\n\t\t\t\t\t=============================================================================================\n\t\t\t\t\t\t\t\t\t"));
let user_infromation = await inquirer.prompt([
    {
        name: "username",
        type: "string",
        message: chalk.greenBright("\n\t\t\t\t\tEnter your full Name   :"),
        prefix: " ",
    },
    {
        name: "Rollnum",
        type: "number",
        message: chalk.greenBright("\n\t\t\t\t\tEnter your Roll Number 1 to 50 range   :"),
        prefix: " ",
    }
]);
user_infromation;
import chalk from "chalk";
import inquirer from "inquirer";
let user_input = await inquirer.prompt([
    {
        type: "number",
        name: "user_eng",
        message: chalk.greenBright("\n\t\t\t\t\tENTER ENGLISH MARKS    :"),
        prefix: "",
    },
    {
        type: "number",
        name: "user_math",
        message: chalk.greenBright("\n\t\t\t\t\tENTER MATH MARKS   :"),
        prefix: "",
    },
    {
        type: "number",
        name: "user_sci",
        message: chalk.greenBright("\n\t\t\t\t\tENTER SCIENCE MARKS   :"),
        prefix: "",
    },
    {
        type: "number",
        name: "user_urdu",
        message: chalk.greenBright("\n\t\t\t\t\tENTER URDU MARKS   :"),
        prefix: "",
    },
]);
console.log(chalk.yellowBright("\n\t\t\t\t:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"));
console.log(chalk.yellowBright("\n\t\t\t\t:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::"));
if (user_infromation.Rollnum <= 50) {
    const wmessage = "\n\t\t\t\t\t\t\t<<<<<<<<<======== YOUR MARKS SHEET RESULT =========>>>>>>>>>";
    console.log(chalk.bgMagenta(wmessage));
    if (user_input.user_eng <= 100 && user_input.user_math <= 100 && user_input.user_sci <= 100 && user_input.user_urdu <= 100) {
        console.log(chalk.magentaBright(`\n\t\t\t\t\t\t\t\t\t${user_infromation.username}`));
        console.log(chalk.magentaBright(`\n\t\t\t\t\t\t\t\t\t${user_infromation.Rollnum}`));
        let total_marks = 400;
        console.log(chalk.magentaBright(`\n\t\t\t\t\t\t\t\t\tTOTAL MARKS IS ${total_marks}`));
        let obtained_marks = user_input.user_eng + user_input.user_math + user_input.user_sci + user_input.user_urdu;
        console.log(chalk.magentaBright(`\n\t\t\t\t\t\t\t\t\tYOUR OBTAINED MARKS IS ${obtained_marks}`));
        let percentage = Math.floor(obtained_marks * 100 / total_marks);
        console.log(chalk.blueBright(`\n\t\t\t\t\t\t\t\t\tY0UR PERCENTAGE IS ${percentage} %`));
        if (percentage >= 90) {
            console.log(chalk.greenBright("\n\t\t\t\t\t\t\t\t\tYOUR GRADE IS A+1"));
            console.log(chalk.greenBright("\n\t\t\t\t\t\t\t\t\tEXCELLENT *****"));
        }
        else if (percentage >= 80) {
            console.log(chalk.greenBright("\n\t\t\t\t\t\t\t\tYOUR GRADE IS A+"));
            console.log(chalk.greenBright("\n\t\t\t\t\t\t\t\tSUPERB****"));
        }
        else if (percentage >= 70) {
            console.log(chalk.greenBright("\n\t\t\t\t\t\t\t\t\tYOUR GRADE IS A"));
            console.log(chalk.greenBright("\n\t\t\t\t\t\t\t\t\tGOOD ***"));
        }
        else if (percentage >= 60) {
            console.log(chalk.red("\n\t\t\t\t\t\t\t\t\tYOUR GRADE IS B"));
            console.log(chalk.blueBright("\n\t\t\t\t\tFAIR**"));
        }
        else if (percentage >= 50) {
            console.log(chalk.red("\n\t\t\t\t\t\t\t\t\tYOUR GRADE IS C"));
            console.log(chalk.redBright("\n\t\t\t\t\t\tNEED TO WARD WORK"));
        }
        else {
            console.log(chalk.red("\n\t\t\t\t\t YOU ARE FAIL\t\t\t\t\t\n"));
            console.log(chalk.redBright("\n\t\t\t\t\t\t\t\t\t\tNEED TO HARD WORK"));
        }
    }
    else {
        console.log(chalk.red("\n\t\t\t\t\tyour obtained number limitation is maximum 100t\t\t\t\t\n"));
    }
}
else {
    console.log(chalk.bgRed("\n\t\t\t\t\tPLEASE ENTER YOUR VAILD ROLL NUMBER\t\t\t\t\t\t"));
}
;
