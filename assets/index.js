//Bootstrap Form Validation
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//global vars
const chev = document.getElementById('chev');
const row2 = document.getElementById('row2');
const projectsBtn = document.getElementById('projectsBtn');
const row3 = document.getElementById('row3');
const hello = document.getElementById('hello');
const helloArr = [
    'hello',
    'bonjour',
    'holla',
    '你好',
    'hallo',
    'Здравствуйте',
    'ciao',
    'नमस्कार',
    'olà',
    'مرحبا'
]

//hello loop
let i = 0;
let intervalId = setInterval(() => {
    hello.textContent = helloArr[i] + "!";
    if (i === helloArr.length) {
        i = 0;
        clearInterval(intervalId);
        hello.textContent = helloArr[0] + "!";
    } else {
        i++;
    }
}, 1500);

//Projects scroll to
projectsBtn.addEventListener('click', () =>{
    row3.scrollIntoView({ block: 'start', behavior: 'smooth' });
});

//Arrow
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll == 0) {
       chev.style.display = 'block';
    } else if(currentScroll !== 0){
        chev.style.display = 'none';
    }    
});
chev.addEventListener('click', () => {
    row2.scrollIntoView({ block: 'start', behavior: 'smooth' });
});