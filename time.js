const hourspan = document.querySelector(".hour");
const minspan = document.querySelector(".min");
const secspan = document.querySelector(".sec");
const amSpan = document.querySelector(".am");
const pmSpan = document.querySelector(".pm");

setInterval(() => {
    const time = new Date();
    const hours = time.getHours();
    const mins = time.getMinutes();
    const secs = time.getSeconds();

    if(hours > 11 ){
        pmSpan.className = "pm active";
        amSpan.className = "am";
        if(hours>12){
            hourspan.innerText = (hours -12).tostring().padstart(2,0);
        }else{
            hourspan.innerText = hours.tostring().padstart(2,0);
        }


    }else{
        amSpan.className = "am active";
        pmSpan.className = "pm";
        if(hours==0){
            hourspan.innerText = hours + 12;
        }else{
            hourspan.innerText = hours;
        }
    }
    
        minspan.innerText = mins.tostring().padstart(2,0);
        secspan.innertext = secs.tostring().padstart(2,0);

    

},1000);