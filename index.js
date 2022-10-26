$(function() {
    turn = 0
    
    window.setInterval(function(){
        if (turn%50==0) {
            createDot();
        }
        $(".dot").each(function (e) {
            moveADot(this);
            DeleteDot(this);
        });
        turn++;
    }, 10);
});

function createDot() {
    dir = [['u',2,1],['r',0,2],['d',2,0],['l',1,2]];
    var client = [document.getElementById('background').clientHeight, document.getElementById('background').clientWidth];
    rngdir = dir[Math.floor(Math.random() * 4)];
    var divToAdd = $("<div class='dot "+rngdir[0]+"'>");
    if (rngdir[1]==2) {
        divToAdd.css({left: Math.floor(Math.random()*client[1])});
    } else {
        divToAdd.css({left: rngdir[1]*client[1]});
    }
    if (rngdir[2]==2) {
        divToAdd.css({top: Math.floor(Math.random()*client[0])});
    } else {
        divToAdd.css({top: rngdir[2]*client[0]});
    }
    $("#background").append(divToAdd);
    console.log("Created");
}

function moveADot(element) {
    if ($(element).hasClass("u")) {
        $(element).css({top: '-=1px'});
    }
    if ($(element).hasClass("r")) {
        $(element).css({left: '+=1px'});
    }
    if ($(element).hasClass("d")) {
        $(element).css({top: '+=1px'});
    }
    if ($(element).hasClass("l")) {
        $(element).css({left: '-=1px'});
    }
}

function DeleteDot(element) {
    pos = $(element).position();
    var client = [document.getElementById('background').clientHeight, document.getElementById('background').clientWidth]
    if (pos["top"] < 0 | pos["top"] > client[0]) {
        console.log("Destroyed")
        $(element).remove();
    }
}