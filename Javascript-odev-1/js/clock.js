let userName = prompt("Lütfen adınızı giriniz: ");

let myName = document.querySelector("#myName");
let myClock = document.querySelector('#myClock');

/*
    Bu uygulamada önemli olan saatin devamlı bir şekilde ekrana bastırılabilmesidir.
    Bu yüzden Date() fonbksiyonlarının sürekli olarak istenmesi gerekmektedir.
    Onload fonksiyonumuzu setTimeout tekrar tekrar çalıştırırsak zamanı her saniye alabiliriz.
    Ekrana yazdırma işinide aynı fonksiyonun içinde tanımlarsak her saniye doğru zaman ekrana 
    yazdırılır.
    Gün ve saat bilgilerinin düzgün gözükmesi için yardımcı  fonksiyon tanımladım. 
*/

if(userName != "" && userName != null && (userName.length > 0) && isNaN(userName)){
    function showTime(){
        let currentDay = new Date().getDay();
        let time = new Date();
        let saat = time.getHours();
        let dakika = time.getMinutes();
        let saniye = time.getSeconds();
    
        myName.textContent = userName;
        myClock.textContent = `${fixDate(saat)}:${fixDate(dakika)}:${fixDate(saniye)} ${indexToDay(currentDay)}`
    
        const myTimeout = setTimeout(showTime, 1000);
    }
}else{
    alert("Adınızı doğru bir şekilde girmediniz !!!")
    document.body.style.display = "none";
}


fixDate = (x) => {
    if(x < 10) return `0${x}`;
    return x;
}


function indexToDay (x){
    switch(x){
        case 0:
            return "Pazar";
            break;
        case 1:
            return "Pazartesi";
            break;
        case 2:
            return "Salı";
            break;
        case 3:
            return "Çarşamba";
            break;
        case 4:
            return "Perşembe";
            break;
        case 5:
            return "Cuma";
            break;
        case 6:
            return "Cumartesi";
            break; 
    }
}