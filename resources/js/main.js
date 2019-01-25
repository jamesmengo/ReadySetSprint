var editSVG = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve"><g><g><path class="fill" d="M149.996,0C67.157,0,0.001,67.161,0.001,149.997S67.157,300,149.996,300s150.003-67.163,150.003-150.003S232.835,0,149.996,0z M221.302,107.945l-14.247,14.247l-29.001-28.999l-11.002,11.002l29.001,29.001l-71.132,71.126l-28.999-28.996L84.92,186.328l28.999,28.999l-7.088,7.088l-0.135-0.135c-0.786,1.294-2.064,2.238-3.582,2.575l-27.043,6.03c-0.405,0.091-0.817,0.135-1.224,0.135c-1.476,0-2.91-0.581-3.973-1.647c-1.364-1.359-1.932-3.322-1.512-5.203l6.027-27.035c0.34-1.517,1.286-2.798,2.578-3.582l-0.137-0.137L192.3,78.941c1.678-1.675,4.404-1.675,6.082,0.005l22.922,22.917C222.982,103.541,222.982,106.267,221.302,107.945z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"></path></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"></path></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"></path></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"></path></g></g></g></svg>';
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewbox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="nofill" width="22" height="22"></rect><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"></path></g></svg>';


var database = (localStorage.getItem('database'))? JSON.parse(localStorage.getItem('database')):{
    sprintlog: [],
    productlog: [],
    completed: []
};

renderproductbacklog();

document.getElementById('sprintbutton').addEventListener('click',rendersprintbacklog);
document.getElementById('productbutton').addEventListener('click',renderproductbacklog);
document.getElementById('completedbutton').addEventListener('click',rendercompletedbacklog);;


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
                createLogItem(inputtextval,inputpriorityval,inputtimeval,1);
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

function createLogItem(name, priority, time, logID) {

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

    editbutton.addEventListener('click',editItemProduct, true);
    if(logID == 1){
        removebutton.addEventListener('click',removeItemProduct);
    } else if (logID == 2){
        removebutton.addEventListener('click',removeItemSprint)
    } else {
        removebutton.addEventListener('click',removeItemCompleted)
    }




    completebutton.addEventListener('click', function completehandler(){
        completeItem(item,logID);
        completebutton.removeEventListener('click',completehandler,true)
    }, true);

    
    // if(logID == 1){
        // completebutton.addEventListener('click',()=>
        // completeItem(item,item.childNodes ,'1'));
    // } else if (logID == 2){
    //     completebutton.addEventListener('click',movetoCompleted);
    // } else {
    //     completebutton.addEventListener('click',movetoProduct);
    // }
    
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

function resetinputs(){
    var inputtext = document.getElementById('inputname');
    var inputpriority = document.getElementById('inputpriority');
    var inputtime = document.getElementById('inputtime');
    inputtext.value = '';
    inputpriority.value = '';
    inputtime.value = '';
}

function editItemProduct() {
    var item = this.parentNode.parentNode;
    var text = item.childNodes[0];
    var priority = item.childNodes[1];
    var time = item.childNodes[2];
    var textval = text.innerText;
    var priorityval = priority.innerText;
    var timeval = time.innerText;
    item.removeChild(text);
    item.removeChild(priority);
    item.removeChild(time);
    // console.log(textval);
    // console.log(priorityval);
    // console.log(timeval);
    var inputtext = document.createElement('input');
    var inputpriority = document.createElement('input');
    var inputtime = document.createElement('input');
    
    inputtext.type = "text";
    inputtext.value = textval;

    inputpriority.type = "number";
    inputpriority.min = 1;
    inputpriority.max = 3;
    inputpriority.value = priorityval;

    inputtime.type = "number";
    inputtime.min = 0;
    inputtime.value = timeval;

    //add event listener for 'enter'
    
    
    item.insertBefore(inputtime,item.childNodes[0]);
    item.insertBefore(inputpriority,item.childNodes[0]);
    item.insertBefore(inputtext,item.childNodes[0]);

    database.productlog.splice(textval,3);

    this.removeEventListener('click',editItemProduct,true);
    this.addEventListener('click',setItemProduct,true);
    
    backlogdataUpdated();
    // TODO: finish editing functionality
}
function editItemSprint() {
    var item = this.parentNode.parentNode;
    var text = item.childNodes[0];
    var priority = item.childNodes[1];
    var time = item.childNodes[2];
    var textval = text.innerText;
    var priorityval = priority.innerText;
    var timeval = time.innerText;
    item.removeChild(text);
    item.removeChild(priority);
    item.removeChild(time);
    var inputtext = document.createElement('input');
    var inputpriority = document.createElement('input');
    var inputtime = document.createElement('input');
    
    inputtext.type = "text";
    inputtext.value = textval;

    inputpriority.type = "number";
    inputpriority.min = 1;
    inputpriority.max = 3;
    inputpriority.value = priorityval;

    inputtime.type = "number";
    inputtime.min = 0;
    inputtime.value = timeval;

    
    
    item.insertBefore(inputtime,item.childNodes[0]);
    item.insertBefore(inputpriority,item.childNodes[0]);
    item.insertBefore(inputtext,item.childNodes[0]);

    database.sprintlog.splice(textval,3);

    this.removeEventListener('click',editItemSprint,true);
    this.addEventListener('click',setItemSprint,true);
    
    backlogdataUpdated();
    // TODO: finish editing functionality
}
function editItemComplete() {
    var item = this.parentNode.parentNode;
    var text = item.childNodes[0];
    var priority = item.childNodes[1];
    var time = item.childNodes[2];
    var textval = text.innerText;
    var priorityval = priority.innerText;
    var timeval = time.innerText;
    item.removeChild(text);
    item.removeChild(priority);
    item.removeChild(time);
    var inputtext = document.createElement('input');
    var inputpriority = document.createElement('input');
    var inputtime = document.createElement('input');
    
    inputtext.type = "text";
    inputtext.value = textval;

    inputpriority.type = "number";
    inputpriority.min = 1;
    inputpriority.max = 3;
    inputpriority.value = priorityval;

    inputtime.type = "number";
    inputtime.min = 0;
    inputtime.value = timeval;

    //add event listener for 'enter'
    
    
    item.insertBefore(inputtime,item.childNodes[0]);
    item.insertBefore(inputpriority,item.childNodes[0]);
    item.insertBefore(inputtext,item.childNodes[0]);

    database.completed.splice(textval,3);

    this.removeEventListener('click',editItemComplete,true);
    this.addEventListener('click',editItemComplete,true);
    
    backlogdataUpdated();
    // TODO: finish editing functionality
}

function setItemProduct() {
    var item = this.parentNode.parentNode;
    var text = item.childNodes[0];
    var priority = item.childNodes[1];
    var time = item.childNodes[2];
    var textval = text.value;
    var priorityval = priority.value;
    var timeval = time.value;
    item.removeChild(text);
    item.removeChild(priority);
    item.removeChild(time);

    var ptext = document.createElement('p');
    var ppriority = document.createElement('p');
    var ptime = document.createElement('p');

    ptext.innerHTML = textval;
    ppriority.innerHTML = priorityval;
    ptime.innerHTML = timeval;

    item.insertBefore(ptime,item.childNodes[0]);
    item.insertBefore(ppriority,item.childNodes[0]);
    item.insertBefore(ptext,item.childNodes[0]);

    this.removeEventListener('click',setItemProduct,true);
    this.addEventListener('click',editItemProduct,true);

    
    database.productlog.push(textval);
    database.productlog.push(priorityval);
    database.productlog.push(timeval);

    backlogdataUpdated();
}

function setItemSprint() {
    var item = this.parentNode.parentNode;
    var text = item.childNodes[0];
    var priority = item.childNodes[1];
    var time = item.childNodes[2];
    var textval = text.value;
    var priorityval = priority.value;
    var timeval = time.value;
    item.removeChild(text);
    item.removeChild(priority);
    item.removeChild(time);

    var ptext = document.createElement('p');
    var ppriority = document.createElement('p');
    var ptime = document.createElement('p');

    ptext.innerHTML = textval;
    ppriority.innerHTML = priorityval;
    ptime.innerHTML = timeval;

    item.insertBefore(ptime,item.childNodes[0]);
    item.insertBefore(ppriority,item.childNodes[0]);
    item.insertBefore(ptext,item.childNodes[0]);

    this.removeEventListener('click',setItemSprint,true);
    this.addEventListener('click',editItemSprint,true);

    
    database.sprintlog.push(textval);
    database.sprintlog.push(priorityval);
    database.sprintlog.push(timeval);

    backlogdataUpdated();

}

function setItemComplete() {
    var item = this.parentNode.parentNode;
    var text = item.childNodes[0];
    var priority = item.childNodes[1];
    var time = item.childNodes[2];
    var textval = text.value;
    var priorityval = priority.value;
    var timeval = time.value;
    item.removeChild(text);
    item.removeChild(priority);
    item.removeChild(time);

    var ptext = document.createElement('p');
    var ppriority = document.createElement('p');
    var ptime = document.createElement('p');

    ptext.innerHTML = textval;
    ppriority.innerHTML = priorityval;
    ptime.innerHTML = timeval;

    item.insertBefore(ptime,item.childNodes[0]);
    item.insertBefore(ppriority,item.childNodes[0]);
    item.insertBefore(ptext,item.childNodes[0]);

    this.removeEventListener('click',setItemProduct,true);
    this.addEventListener('click',editItem,true);

    
    database.completed.push(textval);
    database.completed.push(priorityval);
    database.completed.push(timeval);

    backlogdataUpdated();

}


// duplication
function removeItemProduct() {
    var item = this.parentNode.parentNode;
    backlog.removeChild(item);
    database.productlog.splice(item.childNodes[0].innerHTML,3);
    backlogdataUpdated();
}

function removeItemSprint(){
    
    var item = this.parentNode.parentNode;
    
    backlog.removeChild(item);
    database.sprintlog.splice(item.childNodes[0].innerHTML,3);
    backlogdataUpdated();
}

function removeItemCompleted() {
    var item = this.parentNode.parentNode;
    backlog.removeChild(item);
    database.completed.splice(item.childNodes[0].innerHTML,3);
    backlogdataUpdated();
}

function completeItem(item, flag) {
    var text = item.children[0].innerText;
    var priority = item.childNodes[1].innerText;
    var time = item.childNodes[2].innerText;
    backlog.removeChild(item)

    if(flag == 1){
        source = database.productlog;
        target = database.sprintlog;
    } else if (flag == 2) {
        source = database.sprintlog;
        target = database.completed;
    } else {
        source = database.completed;
        target = database.productlog;
    }

    source.splice(text,3);
    target.push(text);
    target.push(priority);
    target.push(time);

    backlogdataUpdated();
    
    // console.log(this.parentNode);
    // var edit = this.parentNode.childNodes[0];
    // edit.removeEventListener('click',editItemProduct,true);
    // edit.addEventListener('click',editItemSprint, true);
    // console.log(edit);
    // backlogdataUpdated();
}


// todo: fix this code duplication!
function movetoSprint() {
    item = this.parentNode.parentNode;
    var text = item.childNodes[0].innerText;
    var priority = item.childNodes[1].innerText;
    var time = item.childNodes[2].innerText;
    backlog.removeChild(item);
    database.productlog.splice(text,3);
    database.sprintlog.push(text);
    database.sprintlog.push(priority);
    database.sprintlog.push(time);
    this.removeEventListener('click',movetoSprint,true)
    var edit = this.parentNode.childNodes[0];
    edit.removeEventListener('click',editItemProduct,true);
    edit.addEventListener('click',editItemSprint, true);
    backlogdataUpdated();
}

function movetoCompleted() {
    item = this.parentNode.parentNode;
    var text = item.childNodes[0].innerText;
    var priority = item.childNodes[1].innerText;
    var time = item.childNodes[2].innerText;
    backlog.removeChild(item);
    database.sprintlog.splice(item,3);
    database.completed.push(text);
    database.completed.push(priority);
    database.completed.push(time);
    this.removeEventListener('click',movetoCompleted,true)
    var edit = this.parentNode.childNodes[0];
    edit.removeEventListener('click',editItemSprint,true);
    edit.addEventListener('click',editItemComplete, true);
    backlogdataUpdated();
}

function movetoProduct() {
        item = this.parentNode.parentNode;
        var text = item.childNodes[0].innerText;
        var priority = item.childNodes[1].innerText;
        var time = item.childNodes[2].innerText;
        backlog.removeChild(item);
        database.completed.splice(text,3);
        database.productlog.push(text);
        database.productlog.push(priority);
        database.productlog.push(time);
        this.removeEventListener('click',movetoCompleted,true)
        var edit = this.parentNode.childNodes[0];
        edit.removeEventListener('click',editItemComplete,true);
        edit.addEventListener('click',editItemProduct, true);
        backlogdataUpdated();
}


function renderproductbacklog() {
    removeAllLogItems();
    if(!database.productlog.length) {
        return;
    } else {
        for (var i = 0; i < database.productlog.length; i+=3) {
            createLogItem(database.productlog[i],database.productlog[i+1],database.productlog[i+2],1)
        }
    }
}

function rendercompletedbacklog() {
        removeAllLogItems();
        if(!database.completed.length){
            return;
        } else {
            for (var i = 0; i < database.completed.length; i+=3) {
                createLogItem(database.completed[i],database.completed[i+1],database.completed[i+2],3)
            }   
        }
}

function rendersprintbacklog() {
    removeAllLogItems();
    if(!database.sprintlog.length){
        return;
    } else {
        for (var i = 0; i < database.sprintlog.length; i+=3) {
            createLogItem(database.sprintlog[i],database.sprintlog[i+1],database.sprintlog[i+2],2)
        }
    }
}

function backlogdataUpdated() {
    localStorage.setItem('database',JSON.stringify(database));
}

function removeAllLogItems(){
    var backlog = document.getElementById('backlog');
    backlog.innerHTML = '';
}

