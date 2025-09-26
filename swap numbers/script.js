let taskValue1=taskInput1.value.trim();
let taskValue2=taskInput2.value.trim();

Swap.addEventListener(
    "click",
    function(event){
        return number();
    }
)
const number=()=>{
    let tap;
    tap=taskInput1.value;
    taskInput1.value=taskInput2.value;
    taskInput2.value=tap;
}

    Clear.addEventListener(
    "click",
    function(event){
        taskInput1.value="";
        taskInput2.value="";
    }
)