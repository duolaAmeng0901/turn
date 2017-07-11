var _sport = (function () {
    var timer,
        count = 0,
        key = {
            value : true
        },
        index = 0;
    //获取元素位置
    function getStyle(elem, type) {
        if(elem.currentStyle){
            return elem.currentStyle()[type];
        }else{
            return window.getComputedStyle(elem, null)[type];
        }
    }
    //图片运动样式
    function move(elem, dircetion) {
        if(dircetion === 'go'){
            if(parseInt(getStyle(elem, "left")) === -2000){
                elem.style.left = '0px';
            }
            elem.style.left = parseInt(getStyle(elem, "left")) - 20 + 'px';
            count++;
        }else{
            elem.style.left = parseInt(getStyle(elem, "left")) + 20 + 'px';
            count++;
            if(parseInt(getStyle(elem, "left")) === 0){
                elem.style.left = '-2000px';
            }
        }  
    }
    //图片轮播
    function turnMove(elem, dircetion) {    
        key.value = false;
        timer = setInterval(function () {
            move(elem, dircetion);
            if(count === 25){
                clearInterval(timer)
                key.value = true;
                count = 0;           
            }
        }, 30);
    }
    //索引随着图片轮播变色___这里写的不是很好！！！！
    function indexColor(elem, indexSilder, direction){
        direction === 'go' ? index = (Math.abs(parseInt(getStyle(elem, "left")) / 500) + 1) % 4 : index = (Math.abs(parseInt(getStyle(elem, "left")) / 500) - 1) % 4;
        arr = Array.prototype.slice.call(indexSilder.children);
        arr.forEach(function (value) {
            if(value.className){
                value.className = '';
            }
        })
        arr[index].className = 'silder';  
    }

    return {
        turnMove : function (elem, dircetion) {
            turnMove(elem, dircetion)
        },
        indexColor : function (elem, indexSilder, direction){
            indexColor(elem, indexSilder, direction)
        },
        key : key
    }
}());
-2000 - 0


