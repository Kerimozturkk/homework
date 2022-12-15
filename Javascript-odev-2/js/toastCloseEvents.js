let sToastCloseBtn = document.querySelector('#sToastCloseBtn');
let fToastCloseBtn = document.querySelector('#fToastCloseBtn');

liveToastSuccess = document.querySelector('#liveToastSuccess');
liveToastFail = document.querySelector('#liveToastFail');

sToastCloseBtn.addEventListener('click',clickEventSuccess);
fToastCloseBtn.addEventListener('click',clickEventFail);

function clickEventSuccess() {
    if(liveToastSuccess.classList.contains("show")){
        liveToastSuccess.classList.replace("show","hide"); 
    } 
}

function clickEventFail() {
    if(liveToastFail.classList.contains("show")){
        liveToastFail.classList.replace("show","hide"); 
    } 
}