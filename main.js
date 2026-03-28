function slider(){
    const buttons = document.querySelectorAll('.tab__btn');
    const slider = document.querySelector('.slider');
    buttons.forEach(button =>{
        button.addEventListener('click', () =>{
            const newBg = button.dataset.bg;
            slider.style.backgroundImage = newBg;

            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}
slider();

function burger(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    })
}
burger()