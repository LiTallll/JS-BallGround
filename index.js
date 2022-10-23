$(function() {
    turn = 0
    var used = []
    
    window.setInterval(function(){
        if (turn%50==0) {
            createDot(used);
        }
        console.log(used);
        for (i in used) {
            moveADot(i);
        }
        turn++;
    }, 10);
});

function createDot(used) {
    id = used.length
    dir = [['u',2,1],['r',0,2],['d',2,0],['l',1,2]];
    var client = [document.getElementById('background').clientHeight, document.getElementById('background').clientWidth]
    rngdir = dir[Math.floor(Math.random() * 4)];
    $("#background").append("<div id='"+id+"' class='dot "+rngdir[0]+"'>");
    if (rngdir[1]==2) {
        $("#"+id).css({left: Math.random()*client[1]});
    } else {
        $("#"+id).css({left: rngdir[1]*client[1]});
    }
    if (rngdir[2]==2) {
        $("#"+id).css({top: Math.random()*client[0]});
    } else {
        $("#"+id).css({top: rngdir[2]*client[0]});
    }
    used.push(id);
}

function moveADot(id) {
    if ($("#"+id).hasClass("u")) {
        $("#"+id).css({top: '-=1px'});
    }
    if ($("#"+id).hasClass("r")) {
        $("#"+id).css({left: '+=1px'});
    }
    if ($("#"+id).hasClass("d")) {
        $("#"+id).css({top: '+=1px'});
    }
    if ($("#"+id).hasClass("l")) {
        $("#"+id).css({left: '-=1px'});
    }
}