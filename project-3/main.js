
const field = document.querySelector('.field');
const persons = document.querySelectorAll('.persons');
const person1 = document.querySelector('.person-1');
const person2 = document.querySelector('.person-2');
const tanya = person1.innerHTML += '<img class="person" src="img/tanya.jpg" alt="" style="height:130px; width:100%;" >';
const max = person2.innerHTML += '<img class="person" src="img/max.jpg" alt="" style="height:130px; width:100%;" >';
const button1 = person1.innerHTML += '<img class="btn btn-1" src="img/go.png" style="height:60px; width:60px;" >';
const button2 = person2.innerHTML += '<img class="btn btn-2" src="img/go.png" style="height:60px; width:60px;" >';
person1.innerHTML += '<img class="check check-1" src="img/check.png" style="height:60px; width:60px;" >';
person2.innerHTML += '<img class="check check-2" src="img/check.png" style="height:60px; width:60px;" >';
const check1 = document.querySelector('.check-1')
const check2 = document.querySelector('.check-2')
const love = document.querySelector('.love')
const hearts = document.querySelectorAll('.heart')
check1.style.display = "none";
check2.style.display = "none";

var holiday = new Audio('audio/holiday.mp3');
var click = new Audio('audio/click.mp3');
var meet = new Audio('audio/meet.mp3');


function closeCheck() {
    check1.style.display = "none";
    check2.style.display = "none";
};

function allhearts() {

    // hearts[0].style.display = "block";
    // hearts[1].style.display = "block";
    // hearts[2].style.display = "block";
    // hearts[3].style.display = "block";
    for (let i = 0; i < hearts.length; i++) {

        hearts[i].style.display = "block"

    }



};


function animate() {
    let pos = 10;
    let going = setInterval(frame, 10);
    function frame() {
        if (person1.getBoundingClientRect().right > person2.getBoundingClientRect().left) {
            clearInterval(going);
            love.style.display = "block";
            allhearts()
            holiday.play();

        } else {
            pos++;
            person1.style.left = pos + 'px';
            person2.style.right = pos + 'px';
            meet.play();

            setTimeout(closeCheck(), 2000);



        }

    }
}
$(".btn-1").click(function () {
    $('.btn-1').remove()
    check1.style.display = "block"
    click.play();
    if (check2.style.display == "block") {
        animate()
        click.play();
    }


});
$(".btn-2").click(function () {
    $('.btn-2').remove();
    check2.style.display = "block"
    click.play();
    if (check1.style.display == "block") {
        animate()
        click.play();
    }


});




