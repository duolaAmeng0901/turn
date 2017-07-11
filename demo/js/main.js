var li = document.getElementsByClassName('main')[0],
    index = document.getElementsByClassName('index')[0],
    turn = document.getElementsByClassName('turn')[0],
    wrapper = document.getElementsByClassName('wrapper')[0];
    
window.onload = function () {
    _callBack.turnMove(li, 'go', index);
    
    wrapper.addEventListener('mouseover', _callBack.clear,false)

    wrapper.addEventListener('mouseout', function () {
        _callBack.turnMove(li, 'go', index);
    }, false)

    turn.addEventListener('click', _callBack.turn, false)

    index.addEventListener('click', _callBack.silder, false)
}