const no = document.getElementById('NO');
const yes = document.getElementById('YES');
const wrapper = document.querySelector('.wrapper');
const cut = document.querySelector('.cut');
const body = document.querySelector('body');
no.addEventListener('mouseover', (e) => {
    e.currentTarget.style.left = (Math.random() * 200) - 100 + "px";
    e.currentTarget.style.top = (Math.random() * 200) - 100 + "px";
});
no.addEventListener('ontouchstart', (e) => {
    e.currentTarget.style.left = (Math.random() * 200) - 100 + "px";
    e.currentTarget.style.top = (Math.random() * 200) - 100 + "px";
});
yes.addEventListener('mouseover', (e) => {
    wrapper.remove();
    body.style.backgroundColor = 'black';
    cut.style.display = 'block';
})
yes.addEventListener('ontouchstart', (e) => {
    wrapper.remove();
    body.style.backgroundColor = 'black';
    cut.style.display = 'block';
})

function typingText(span) {
    var chars = span.innerText.split('');
    // console.log(chars)
    span.innerText = "";
    chars.forEach((char, index) => {
        var cSpan = document.createElement('span');
        cSpan.innerText = char;
        setTimeout(() => {
            span.appendChild(cSpan);
            cSpan.animate([
                { fontSize: 3 + "px", opacity: 0.3 },
                { fontSize: span.style.fontSize, opacity: 1 }
            ], 300);
        }, 300 * index)
    });
}
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2')
text2.style.display = "none";
typingText(text1);
setTimeout(() => {
    typingText(text2);
    text2.style.display = 'inline';
}, 5000)
setInterval(() => {
    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2')
    text2.style.display = "none";
    typingText(text1);
    setTimeout(() => {
        typingText(text2);
        text2.style.display = 'inline';
    }, 5000);
}, 12000);
var images = ['1.jpg', '2.jpg', '4.png', '5.png', '7.png', '8.jpg', '12.png', '13.jpg'];

setInterval(() => {
    var img = document.createElement('img');
    img.src = '/tim/' + images[Math.floor(Math.random() * (images.length - 0.001))];
    var tim = document.createElement('div');
    tim.appendChild(img);
    tim.classList.add('tim');
    var left = Math.random() * window.innerWidth / 2 + window.innerWidth / 8;
    var top = Math.random() * window.innerHeight / 2;
    tim.style.left = left + 'px';
    tim.style.top = top + 'px';
    body.appendChild(tim);
    tim.animate([{
            width: Math.random() * 30 + "px",
            top: top + 'px',
            transform: `rotate(${Math.random()*120-120}deg)`,
            opacity: 0.2
        }, {
            opacity: 0.7,
            offset: 0.5
        }, {
            width: Math.random() * 30 + 150 + "px",
            top: top - Math.random() * 200 + 'px',
            transform: `rotate(${Math.random()*120-120}deg)`,
            opacity: 0
        }

    ], 3000);
    setTimeout(() => { tim.remove() }, 3000);
}, 300);