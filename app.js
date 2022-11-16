let btnHide=document.querySelector("button.hide-list");
let btnChange=document.querySelector("button.change-description");
let btnAdd=document.querySelector("button.add-item");
let btnRemove=document.querySelector("button.remove-item");

let list=document.querySelector(".list");

let show=true;

let hiddenList=document.querySelector(".to-hide");

let newItemInput=document.querySelector(".list-input");


btnHide.addEventListener("click", (e)=>{
    // console.log("I should hide!");
    hiddenList.toggleAttribute("hidden");
    if(show==true){
        btnHide.textContent="Show list";
        show=false
    }else{
        btnHide.textContent="Hide list";
        show=true;
    }
})




btnChange.addEventListener("click",(e)=>{
    // console.log("I should change my label!");
    let listLabel=document.querySelector(".list-description>label");
    let inputText=document.querySelector(".list-description>input");
    listLabel.textContent=inputText.value+":";
    inputText.value="";
})







btnAdd.addEventListener("click",(e)=>{
    // console.log("I should add something.");
    let input=document.querySelector(".list-input");
    if(input.value!=""){
        addToList(list, input);
    }
})








btnRemove.addEventListener("click",(e)=>{
    // console.log("I should remove something...")
    removeLast(list);
})






newItemInput.addEventListener("keydown", (e) => {
    if(e.key=="Enter"){
        // console.log("ENTER PRESSED!")
        let input=document.querySelector(".list-input");
        if(input.value!=""){
            addToList(list, input);
        }
    }
})




list.addEventListener("click",(e)=>{
    let ob=e.target;

    let item=ob.parentNode;

    let classes=ob.className.split(" ");

    // console.log(ob.tagName);

    if(ob.tagName=="BUTTON"){
        // console.log("CEVA!")
        let oldClass=ob.parentNode.className;
        ob.parentNode.className=oldClass.concat(" colorChange");

        if(classes[1]=="up"){
            // console.log("move item up");
            moveUp(list,item);
        }
        if(classes[1]=="down"){
            // console.log("move item down");
            moveDown(list, item);
        }
        if(classes[1]=="remove"){
            // console.log("remove item");
            remove(list,item);
        }

        setTimeout(function(){ob.parentNode.className=oldClass},100);
    }
})