var _callBack = (function () {
    var timer;
    function turnMove(elem, direction, indexSilder) {
        timer = setInterval(function () {
            if(_sport.key.value){
                _sport.indexColor(elem, indexSilder, direction)                        
                _sport.turnMove(elem, direction)
            }
        },2000);
    }

    function clear() {
        clearInterval(timer);
    }

    function turn(e) {
        if(_sport.key.value){
            var event = e || window.event;
            var target = e.target || e.srcElement;
            if(target !== this){
                if(target.className === 'back'){
                    if(parseInt(li.style.left) === 0){
                        li.style.left = -2000 + 'px';
                    }
                }
                _sport.indexColor(li, index, target.className)                          
                _sport.turnMove(li, target.className)
            }
        }
    }

    //这里也同养不好。。
    function silder(e) {
        var event = e || window.event;
        var target = event.target || event.srcElement;
        var index = target.getAttribute('index');
        var arr = Array.prototype.slice.call(this.children);
        var _arr = arr.filter(function (value) {
            return value.className;
        })
        var _index = _arr[0].getAttribute('index');
        if(index - _index > 0){
            _sport.indexColor(li, index, 'go')                          
            _sport.turnMove(li, 'go')
        }else{

        }
    }


    return {
        turnMove : function (elem, direction, indexSilder) {
            turnMove(elem, direction, indexSilder);
        },
        clear : function () {
            clear();
        },
        turn : turn,
        silder : silder
    }
}())