console.log("Beginning of the Testing Functions component")
function TestingFunction(){

    function PushToList(){
        alert("I am adding more things to the List")
        console.log("How are you?")
    }

    
    function SayHello(hi){
        let MyGreeting = hi
        return("Sawubona")
    }
    let greeting = SayHello()
    console.log(greeting)
    // PushToList()

    return(
        <>
    
        </>
    )

    console.log("Console after the return")
};
export default TestingFunction

console.log("End of the Testing Functions")
