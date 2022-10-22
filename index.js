$(function() {
    turn = 0
    var used = []
    
    window.setInterval(function(){
        if (turn%100==0) {
            createDot(used);
        }
        console.log(used);
        for (i in used) {
            moveADot(i);
        }
        turn++;
    }, 100);
});

function createDot(used) {
    id = used.length
    dir = ['u','r','d','l'];
    $("#background").append("<div id='"+id+"' class='dot "+dir[1]+"'>");
    used.push(id);
}

function moveADot(id) {
    $("#"+id).css({marginTop: '+=5px'});
}