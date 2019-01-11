var additembutton = document.getElementById("AddItem");
additembutton.addEventListener('click',addItem);

var inputtext = document.getElementById('inputname');
var inputpriority = document.getElementById('inputpriority');
var inputtime = document.getElementById('inputtime');

inputtext.addEventListener('keyup',function(event) {
    if(event.keyCode == 13) {

        additembutton.click();
    }
})
inputpriority.addEventListener('keyup',function(event) {
    if(event.keyCode == 13) {

        additembutton.click();
    }
})

inputtime.addEventListener('keyup',function(event) {
    if(event.keyCode == 13) {

        additembutton.click();
    }
})

// inputtext.addEventListener('keyup',checkEnterPressed(event));

// function checkEnterPressed(event) {
//     if (event.keycode == 13) {
//         additembutton.click();
//     }
// }



// var inputtext = document.getElementById('inputname');
// input.addEventListener('keyup', function(event) {
//     if(event.keyCode==13) {
//         additembutton.click();
//     }
// })



function addItem() {
    var inputtextval = inputtext.value;
    var inputpriorityval = inputpriority.value;
    var inputtimeval = inputtime.value;
    if(inputtextval && inputpriorityval && inputtimeval){
        // if(typeof(inputtextval) !== 'string'){
        //     window.alert("Task Name must be a string");
        //     if(isNaN(inputpriorityval)){
        //         window.alert("Priority must be a number");
        //         if(inputpriorityval < 1 || inputpriorityval > 3){
        //             window.alert("Priority value must be between 1 and 3")
        //             if(isNaN(inputpriorityval)){
        //                 window.alert("Time estimate must be a number");   
        //                 if(inputtimeval < 0) {
        //                     window.alert("Time estimate must be greater than 0");
        //                 }
        //             }
        //         }
        //     }
        // }
    } else {
        window.alert("Please make sure you fill all fields");
    }
}