function digitalClock(){
    
    var date = new Date();
    var hrs = date.getHours() + "";
    var min = date.getMinutes() + "";
    var sec = date.getSeconds() + "";
    var day = date.getDay();
    console.log(day);
}
digitalClock();