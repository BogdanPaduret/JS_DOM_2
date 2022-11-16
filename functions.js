function addToList(list, item){
    // let listElement=document.createElement("li");
    let row=document.createElement("div")
    row.className="row"

    let element=document.createElement("p");

    // console.log(item.value);

    element.textContent=item.value;

    row.appendChild(element);
    createButton(row,"up");
    createButton(row,"down");
    createButton(row,"remove");
    
    list.appendChild(row);

    item.value="";
}

function removeLast(list){
    let lastP = list.querySelector("p:last-child");
    list.removeChild(lastP);
}

function createButton(element, text){
    let button=document.createElement("button");
    button.textContent=text;
    button.className="button "+text;
    element.appendChild(button);
}

function moveUp(list, item){
    let before=item.previousElementSibling;

    insertBefore(item,before);
}
function moveDown(list, item){
    let next=item.nextElementSibling;

    insertAfter(item,next);
}
function remove(list, element){
    list.removeChild(element);
}

// helpers
function insertBefore(item, previous){
    let parent=item.parentNode;
    parent.insertBefore(item,previous);
}
function insertAfter(item, next){
    let parent=item.parentNode;
    let after=next.nextElementSibling;

    if(after!=null){
        parent.insertBefore(item,after);
    }else{
        parent.appendChild(item);
    }
}