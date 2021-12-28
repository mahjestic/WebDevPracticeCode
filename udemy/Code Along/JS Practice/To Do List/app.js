
const list = []; 
let command = prompt("Enter a command:" + "\n" +
"- new = add a task" + "\n" +
"- view = view to do list" + "\n" +
"- delete = remove task" + "\n" +
"- quit = quit program" + "\n\n"); 

while(command !== "quit"){

    // VIEW LIST
    if(command === "view"){
        
        if(list.length === 0){
            console.log("\n" + "To do list is empty!" + "\n" + "Add a task to create a list" + "\n" );
        }else{
            console.log("\n" + "TO DO:");
            
            for(let i = 0; i < list.length; i++){
            console.log(`${i}: ${list[i]}`);
            }
            console.log("\n");
        }

    // NEW TASK
    }else if(command === "new"){
        const task = prompt("\n" + "Enter a task ");

        let newTask = list.push(task);

        console.log("\n" + `\"${task}\" added to the list` + "\n");

    // DELETE TASK
    }else if(command === "delete"){
        
        if(list.length === 0){
            console.log("\n" + "We can't delete an empty list!" + "\n");
        }else{
            console.log("\n" + "TO DO:");
            
            for(let i = 0; i < list.length; i++){
            console.log(`${i}: ${list[i]}`);
            }
            console.log("\n");

            task = parseInt(prompt("Enter the number of the task you would like to delete" + "\n"));
            
            let removed = list.splice(task, 1);
            
            console.log(`\"${removed}\" removed from to do list` + "\n");
        }   
    }else{
        console.log("\n" +"Invalid command" + "\n");
    }
    command = prompt("Enter a command:" + "\n" +
                    "- new = add a task" + "\n" +
                    "- view = view to do list" + "\n" +
                    "- delete = remove task" + "\n" +
                    "- quit = quit program" + "\n\n"); 
}
console.log("\n" + "Goodbye!");

