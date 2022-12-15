let tasks;

let taskInput = document.querySelector('#task');
let list = document.querySelector('#list');

liveToastSuccess = document.querySelector('#liveToastSuccess');
liveToastFail = document.querySelector('#liveToastFail');

loadTasks();


function createIcon(flag) {
    const div = document.createElement("div");
    flag ? div.classList.add("fa-solid","fa-check","mr-2") : div.classList.add("fa-solid","fa-x","ml-auto");
    div.style.padding = "5px"
    return div;
}

function newElement(){
    let cleanedValue = taskInput.value.replace(/\s+/g,' ').trim();
    if(cleanedValue != null && cleanedValue != ""){
        createNewListItem(cleanedValue);
        setItemToLS(cleanedValue);
        taskInput.value = "";
        liveToastSuccess.classList.replace("hide","show");
        setTimeout(() => {
            liveToastSuccess.classList.replace("show","hide");
        },2000)
    }else{
        liveToastFail.classList.replace("hide","show");
        setTimeout(() => {
            liveToastFail.classList.replace("show","hide");
        },2000)
    }

}


list.addEventListener("click",function(e){
    let target = e.target;
    if(target.classList.contains("fa-x")){
        console.log(target.parentElement.children);
        let findText = "neden";
        for(let i = 0; i < target.parentElement.children.length;i++){
            if(target.parentElement.children[i].classList.contains("list-item-text")){
                findText = target.parentElement.children[i].textContent;
            }
        }
        deleteTaskFromLS(findText);
        target.parentElement.remove();
    }
})


list.addEventListener("click",function(e){
    let target = e.target;
    // console.log(target);
    if(target.classList.contains("list-item")){
        console.log(target.children);
        if(target.firstChild.classList.contains("fa-check")){
            target.firstChild.remove();
            target.children[0].style.textDecoration = "";
            setTaskStatus(target.children[0].textContent,0);
            // console.log(target.children[0].textContent); LS
            target.style.color = "";
            target.style.backgroundColor = "";
        }else{
            target.prepend(createIcon(1));
            target.children[1].style.textDecoration = "line-through";
            setTaskStatus(target.children[1].textContent,1);
            // console.log(target.children[1].textContent); LS
            target.style.color = "#fff";
            target.style.backgroundColor = "#276678";
        }
    }
})

//Silme efekti eventleri
list.addEventListener("mouseover",function(e){
    let target = e.target;
    if(target.classList.contains("fa-x")){
        target.style.backgroundColor = "#f78501";
        target.style.color = "#fff";
    }
})

list.addEventListener("mouseout",function(e){
    let target = e.target;
    if(target.classList.contains("fa-x")){
        target.style.color = "#000";
        target.style.backgroundColor = "transparent";
    }
})

//li oluşturma fonksiyonu
// Neden fonksiyon olarak ayrı tutuluyor ? çünkü verileri localStorage'ten alıcaz.
// Bu demek oluyor ki LocalStorage'daki her seferinde çağırıcaz.
function createNewListItem(text) {
    let liDom = document.createElement('li');
    liDom.append(createText(text));
    liDom.append(createIcon(0));
    liDom.classList.add("d-flex","align-items-center","list-item")
    list.append(liDom);
}

function createNewListItemFinished(text) {
    let liDom = document.createElement('li');
    liDom.append(createText(text));
    liDom.append(createIcon(0));
    liDom.classList.add("d-flex","align-items-center","list-item")
    liDom.prepend(createIcon(1));
    liDom.children[1].style.textDecoration = "line-through";
    // console.log(target.children[1].textContent); LS
    liDom.style.color = "#fff";
    liDom.style.backgroundColor = "#276678";
    list.append(liDom);
}

function createText(text) {
    const div = document.createElement("div");
    div.classList.add("list-item-text");
    div.textContent = `${text}`;
    return div;
}


// 'item' = {mission: "mission title", isFinished: false}

function loadTasks() {
    //Bekle isFinished kontrolü yapılıcak
    tasks = getTaskFromLS();
    tasks.forEach(item => {
        item.isFinished ? createNewListItemFinished(item.mission) : createNewListItem(item.mission);
    })
}

function setTaskStatus(info,flag){
    tasks = getTaskFromLS();
    tasks.forEach(item => {
        if(item.mission == info){
            item.isFinished = flag;
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

//İlk eklendiğinde LS'i setlemek için
function setItemToLS(info) {
    tasks = getTaskFromLS();
    let newTask = {mission: `${info}`, isFinished: false};
    tasks.push(newTask);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function getTaskFromLS() {
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
}

function deleteTaskFromLS(info) {
    tasks = getTaskFromLS();
    let fixedTasks = tasks.filter(item => item.mission != info);
    localStorage.setItem('tasks',JSON.stringify(fixedTasks));
}








