
function dateTime () {
    var dateTime = new Date();
    var hour = dateTime.getHours();
    var minute = dateTime.getMinutes();
    var second = dateTime.getSeconds();
    var day = dateTime.getDate();
    var month = dateTime.getMonth();
    var year = dateTime.getFullYear();


    document.getElementById('watch').innerText= hour + ':'+ minute+':'+second;
    document.getElementById('day').innerText= day+'/'+month+'/'+year;
}

setInterval(dateTime, 1000);

var imageData = ['image/picture03.jpg', 'image/picture06.jpg', 'image/picture02.jpg', 'image/picture01.jpg', 'image/picture04.jpg', 'image/picture07.jpg', 'image/picture09.jpg', 'image/picture08.jpg'];
var index = 0;
function changeImage () {
    var mainImage = document.getElementById('mainImg');
    mainImage.setAttribute('src', imageData[index]);
    index++;
    if (index >= imageData.length) {
        index = 0;
    }
}

setInterval(changeImage, 3000);


var img1 = document.getElementById('img1');
img1.onclick = function (){
    var img1 = document.getElementById('img1').getAttribute('src');
    document.getElementById('mainImg').setAttribute('src', img1);
};

var img2 = document.getElementById('img2');
img2.onclick = function (){
    var img2 = document.getElementById('img2').getAttribute('src');
    document.getElementById('mainImg').setAttribute('src', img2);
};

var img3 = document.getElementById('img3');
img3.onclick = function (){
    var img3 = document.getElementById('img3').getAttribute('src');
    document.getElementById('mainImg').setAttribute('src', img3);
};

var img4 = document.getElementById('img4');
img4.onclick = function (){
    var img4 = document.getElementById('img4').getAttribute('src');
    document.getElementById('mainImg').setAttribute('src', img4);
};

var img5 = document.getElementById('img5');
img5.onclick = function (){
    var img5 = document.getElementById('img5').getAttribute('src');
    document.getElementById('mainImg').setAttribute('src', img5);
};

var img6 = document.getElementById('img6');
img6.onclick = function (){
    var img6 = document.getElementById('img6').getAttribute('src');
    document.getElementById('mainImg').setAttribute('src', img6);
};

var img7 = document.getElementById('img7');
img7.onclick = function (){
    var img7 = document.getElementById('img7').getAttribute('src');
    document.getElementById('mainImg').setAttribute('src', img7);
};

var img8 = document.getElementById('img8');
img8.onclick = function (){
    var img8 = document.getElementById('img8').getAttribute('src');
    document.getElementById('mainImg').setAttribute('src', img8);
};

var img9 = document.getElementById('img9');
img9.onclick = function (){
    var img9 = document.getElementById('img9').getAttribute('src');
    document.getElementById('mainImg').setAttribute('src', img9);
};


