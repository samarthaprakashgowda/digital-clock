function digitalClock(){
    
    var date = new Date();
    var hrs = date.getHours() + "";
    var min = date.getMinutes() + "";
    var sec = date.getSeconds() + "";
    var day = date.getDay();
    
    if(hrs.length < 2){
        hrs = '0' + hrs;
    }
    if(min.length < 2){
        min = '0' + min;
    }
    if(sec.length < 2){
        sec = '0' + sec;
    }
    
 var clock = hrs + ':' + min + ':'+ sec;
    console.log(clock);
}
digitalClock();