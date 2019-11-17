var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userPattern=[];
var level=0;
var started=false;


function nextSequence(){
    userPattern=[];
    level++;
    $("h1").html("Level "+level);
    var randomNo=Math.floor(Math.random()*4);
    //console.log(randonNo);
    var randomColor=buttonColors[randomNo];
    gamePattern.push(randomColor);
    console.log("game "+gamePattern);
    console.log("user "+userPattern)
    btnAnimate(randomColor);
    makeSound(randomColor);
}

function btnAnimate(x){
    //$("#"+x).html;
    $("#"+x).addClass("pressed");
    setTimeout(function(){
        $("#"+x).removeClass("pressed");
    },100)
}

function makeSound(x){
    //alert("play audio?");
    var audio=new Audio("sounds/"+x+".mp3");
    audio.play();
}

function check(currLevel){
    if(userPattern[currLevel]==gamePattern[currLevel]){
        console.log(userPattern);
        console.log("success");
        if(userPattern.length==gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        console.log(userPattern);
        console.log("fail haha");
        makeSound("wrong");
        $("body").addClass("game-over");
        $("h1").html("Game over! Press any key to restart");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        startOver();
    }
}

$(".btn").click(function(e){
    var userColor=e.target.id;
    btnAnimate(userColor);
    makeSound(userColor);
    userPattern.push(userColor);
    
    check(userPattern.length-1);
});

$(document).one("keypress", function(){
    if(!started){
        $("h1").html("Level 0");
    nextSequence();
        //console.log(randomColor);
        started=true;
    }
});

function startOver(){
    level=0;
    gamePattern=[];
    userPattern=[];

}











/*
switch(randomColor){
    case 'red':
        btnAnimate(randomColor);
        makeSound(randomColor);
    break;
    case 'blue':
        btnAnimate(randomColor);
        makeSound(randomColor);
    break;
    case 'green':
        btnAnimate(randomColor);
        makeSound(randomColor);
    break;
    case 'yellow':
        btnAnimate(randomColor);
        makeSound(randomColor);
    break;
    default:
        console.log(":[");
}

function animatePress(currColor){
    $(".btn").click(function(evt){
        $("#"+evt.target.id).addClass("pressed");
        setTimeout(function(){
            $("#"+evt.target.id).removeClass("pressed");
        })
    })
    
}   

*/