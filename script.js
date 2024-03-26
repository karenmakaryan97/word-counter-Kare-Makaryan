
let btn = document.querySelector('button');

function func() {
    let text = document.querySelector("input").value;
    let paragraph = document.querySelectorAll('p');
    // console.log(text.split('. ').length);
    // console.log(text.split(' ').length);
    paragraph[0].innerHTML += ' ' + text.split('.').length;
    paragraph[1].innerHTML += ' ' + text.split(' ').length;
}

let color = document.getElementById('color');

function change() {
    let red = Math.abs(Math.floor(Math.random() * 256));
    let green = Math.abs(Math.floor(Math.random() * 256));
    let blue = Math.abs(Math.floor(Math.random() *  256));
    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    // console.log(red, green, blue);
}

/*Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.*/