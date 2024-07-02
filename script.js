let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

function displatTime(){
    let date= new Date();

    //getting hour,min,sec from date
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hrroration=30*hh+mm/2;
    let minrotation=6*mm;
    let secrotation=6*ss;

    hr.style.transform=`rotate(${hrroration}deg)`;
    min.style.transform=`rotate(${minrotation}deg)`;
    sec.style.transform=`rotate(${secrotation}deg)`;


}

setInterval(displatTime,1000)