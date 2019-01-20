var editSVG = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve"><g><g><path class="fill" d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003S232.835,0,149.996,0z M221.302,107.945l-14.247,14.247l-29.001-28.999l-11.002,11.002l29.001,29.001l-71.132,71.126l-28.999-28.996L84.92,186.328l28.999,28.999l-7.088,7.088l-0.135-0.135c-0.786,1.294-2.064,2.238-3.582,2.575l-27.043,6.03c-0.405,0.091-0.817,0.135-1.224,0.135c-1.476,0-2.91-0.581-3.973-1.647c-1.364-1.359-1.932-3.322-1.512-5.203l6.027-27.035c0.34-1.517,1.286-2.798,2.578-3.582l-0.137-0.137L192.3,78.941c1.678-1.675,4.404-1.675,6.082,0.005l22.922,22.917C222.982,103.541,222.982,106.267,221.302,107.945z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"></path></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"></path></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"></path></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"></path></g></g></g></svg>';
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="nofill" width="22" height="22"></rect><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"></path></g></svg>';


// var backlogdata = {
//     sprintlog: [],
//     productlog: []
// };

var database = (localStorage.getItem('database'))? JSON.parse(localStorage.getItem('database')):{
    sprintlog: [],
    productlog: []
};

renderallbacklog();

document.getElementById('sprintbutton').addEventListener('click',rendersprintbacklog);
document.getElementById('productbutton').addEventListener('click',renderproductbacklog);
document.getElementById('allbutton').addEventListener('click',renderallbacklog);;


var additembutton = document.getElementById("AddItem");
additembutton.addEventListener('click',validateInput);

var inputtext = document.getElementById('inputname');
var inputpriority = document.getElementById('inputpriority');
var inputtime = document.getElementById('inputtime');
var backlog = document.getElementById('backlog');

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

function validateInput() {
    var inputtextval = inputtext.value;
    var inputpriorityval = inputpriority.value;
    var inputtimeval = inputtime.value;
    if(inputtextval && inputpriorityval && inputtimeval){
        if(inputpriorityval <= 3 && inputpriorityval > 0){
            if(inputtimeval >= 1){
                createLogItem(inputtextval,inputpriorityval,inputtimeval);
                database.productlog.push(inputtextval);
                database.productlog.push(inputpriorityval);
                database.productlog.push(inputtimeval);
                backlogdataUpdated();
            } else {
                window.alert("Time must be a positive number!");
            }
        } else { 
            window.alert("Priority must be between 1-3");
        }
    } else {
        window.alert("Please make sure you fill all fields");
    }
}

function createLogItem(name, priority, time) {
    var item = document.createElement('li');
    
    var itemname = document.createElement('p');
    itemname.innerText = name;

    var itempriority = document.createElement('p');
    itempriority.innerText = priority;
    
    var itemtime = document.createElement('p');
    itemtime.innerText = time;

    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var editbutton = document.createElement('button');
    editbutton.classList.add('edit');
    editbutton.innerHTML = editSVG;

    var removebutton = document.createElement('button');
    removebutton.classList.add('remove');
    removebutton.innerHTML = removeSVG;

    var completebutton = document.createElement('button');
    completebutton.classList.add('complete');
    completebutton.innerHTML = completeSVG;

    editbutton.addEventListener('click',editItem);
    removebutton.addEventListener('click',removeItem);
    completebutton.addEventListener('click',completeItem);
    
    buttons.appendChild(editbutton);
    buttons.appendChild(removebutton);
    buttons.appendChild(completebutton);


    item.appendChild(itemname);
    item.appendChild(itempriority);
    item.appendChild(itemtime);
    item.appendChild(buttons);

    item.classList.add('item');

    var backlog = document.getElementById('backlog');
    backlog.appendChild(item);
    resetinputs();

}

var editb = document.getElementById('editb');
var removeb = document.getElementById('removeb');
var completeb = document.getElementById('completeb');

editb.addEventListener('click',editItem);
removeb.addEventListener('click',removeItem);
completeb.addEventListener('click',completeItem);

function resetinputs(){
    var inputtext = document.getElementById('inputname');
    var inputpriority = document.getElementById('inputpriority');
    var inputtime = document.getElementById('inputtime');
    inputtext.value = '';
    inputpriority.value = '';
    inputtime.value = '';
}

function editItem() {
    var item = this.parentNode.parentNode;
    var oldtext = item.childNodes[1].innerText;
    var oldpriority = item.childNodes[3].innerText;
    var oldtime = item.childNodes[5].innerText;
    backlogdataUpdated();
    // TODO: finish editing functionality
}

function removeItem() {
    var item = this.parentNode.parentNode;
    backlog.removeChild(item);
    database.productlog.splice(item,3);
    backlogdataUpdated();
}

function completeItem(sprint) {
    var item = this.parentNode.parentNode;
    backlog.removeChild(item);
    backlogdataUpdated();
}

function renderallbacklog() {
    if(!database.productlog.length && !database.sprintlog.length) {
        return;
    } else {
        for (var i = 0; i < database.productlog.length; i+=3) {
            createLogItem(database.productlog[i],database.productlog[i+1],database.productlog[i+2])
        }
        for (var i = 0; i < database.sprintlog.length; i++) {
        }
    }

    
}

function renderproductbacklog() {

}

function rendersprintbacklog() {

}

function backlogdataUpdated() {
    localStorage.setItem('database',JSON.stringify(database));
}

