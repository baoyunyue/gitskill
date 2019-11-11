function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }
    else{
        return getComputedStyle(obj,false)[attr];
    }
}
//var timer=null;  
var alpha = 30;
function startMove(obj,json,fn){
    var flag= true;
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var icu = 0;
        for(var attr in json){
        if(attr=='opacity'){
            icu=Math.round((getStyle(obj,attr))*100);

        }
        else{
            icu=parseInt(getStyle(obj,attr));
        }
        var speed=(json[attr]-icu)/8;
       
        speed=speed>0?Math.ceil(speed):Math.floor(speed);
        if(icu!=json[attr]){
            flag = false;}
        
          
            if(attr=='opacity'){
                obj.style.opacity=(icu+speed)/100;
            }else{
                obj.style[attr]= icu + speed +'px';

            }
            
        }
        if(flag){
            clearInterval(obj.timer);
            if(fn){
                fn();
            }
        }
    },30)
}