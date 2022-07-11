// dropdown features menu for desktop
const features = document.getElementById('features');
const fdropdown = document.querySelector('.f-dropdown');
const fup = document.querySelector('.f-up');
const fdw = document.getElementById('f-dw');

features.addEventListener('mouseover',() => {
    if(window.innerWidth>700){
        fdropdown.classList.add('visible');
        fdw.classList.add('hidden');
        fup.classList.remove('f-up');
    }
   
});

features.addEventListener('mouseout',() => {
    if(window.innerWidth>700){
        fdropdown.classList.remove('visible');
        fdw.classList.remove('hidden');
        fup.classList.add('f-up');
    }

});

fdropdown.addEventListener('mouseover',() => {
    if(window.innerWidth>700){
        fdropdown.classList.add('visible');
        fdw.classList.add('hidden');
        fup.classList.remove('f-up');  
    }
  
})

fdropdown.addEventListener('mouseout',() => {
    if(window.innerWidth>700){
        fdropdown.classList.remove('visible');
        fdw.classList.remove('hidden');
        fup.classList.add('f-up');
    }
  
})

// dropdown features menu for mobile
features.addEventListener('click',() => {
    if(window.innerWidth <= 700){
        fdropdown.classList.toggle('visible');
        fdw.classList.toggle('hidden');
        fup.classList.toggle('f-up')
    }
})

// dropdown company menu for desktop
const company = document.getElementById('company');
const cdropdown = document.querySelector('.c-dropdown');

const cup = document.querySelector('.c-up');
const cdw = document.getElementById('c-dw');

company.addEventListener('mouseover',() => {
    if(window.innerWidth>700){
        cdropdown.classList.add('visible');
        cdw.classList.add('hidden');
        cup.classList.remove('c-up');
    }
   
});

company.addEventListener('mouseout',() => {
    if(window.innerWidth>700){
        cdropdown.classList.remove('visible');
    cdw.classList.remove('hidden');
    cup.classList.add('c-up'); 
    }
   
});

cdropdown.addEventListener('mouseover',() => {
    if(window.innerWidth>700){
        cdropdown.classList.add('visible');
        cdw.classList.add('hidden');
        cup.classList.remove('c-up');
    }
   
})

cdropdown.addEventListener('mouseout',() => {
    if(window.innerWidth>700){
        cdropdown.classList.remove('visible');
        cdw.classList.remove('hidden');
        cup.classList.add('c-up');
    }
   
})

// dropdown company menu for mobile
company.addEventListener('click',() => {
    if(window.innerWidth <= 700){
        cdropdown.classList.toggle('visible');
        cdw.classList.toggle('hidden');
        cup.classList.toggle('c-up')
    }
})

// Phone slider menu
const open = document.getElementById('open');
const close = document.getElementById('close');
const menu = document.getElementById('menu');

open.addEventListener('click', () => {
    menu.classList.add('slider-open');
})

close.addEventListener('click', () => {
    menu.classList.remove('slider-open');
});

