const countdown = () => {
    const countDate = new Date('March 16, 2024 00:00:00').getTime();
    const now = new Date(). getTime();
    const gap = countDate - now;




    const seconds = 1000;
    const minute = seconds * 60;
    const hours = minute * 60;
    const days = hours * 24;
    

    
    const textDays = Math. floor(gap / days);
    const textHours = Math.floor((gap % days) / hours);
    const textMinute = Math.floor((gap % hours) / minute);
    const textSeconds = Math.floor((gap % minute) / seconds);
    

    document.querySelector(".days").innerHTML = textDays;
    document.querySelector(".hours").innerHTML = textHours;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".seconds").innerHTML = textSeconds;
};

setInterval(countdown, 1000);