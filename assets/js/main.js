const toggler = document.querySelector(".toggler");
const close =document.querySelector(".toggler-close");
const open = document.querySelector(".toggler-menu");
const menu = document.querySelector(".menu");
const radioButtons = document.querySelectorAll('input[type="radio"]');
const totalElement = document.querySelector('#total');

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  toggler.addEventListener("click", function () {
      menu.classList.toggle("active");
      if(document.querySelector('.menu.active')){
        close.style.display="block";
        open.style.display="none";
      }   else{
        open.style.display="block";
        close.style.display="none";
      }     
  });
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener("click", function () {
      if (menu.classList.contains('active')) {
        menu.classList.remove("active");
        open.style.display = "block";
        close.style.display = "none";
      }
    });
  });



  window.addEventListener("resize",() =>{
    let size = parseInt(document.body.clientWidth);
    if (size <= 768){
      menu.classList.remove("active");
      
    }
  })
});



let total = 0;
let previousValues = {};



class UI{
    alerta(msg, tipo){
        const divAlert = document.createElement('DIV');
        divAlert.classList.add('alert');

        divAlert.textContent=msg;

       
          divAlert.classList.add( 'alert');
          totalElement.appendChild(divAlert);
        
        
    }
}

const ui = new UI();

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    const value = parseInt(radioButton.value);
       const group = radioButton.getAttribute('name');


    if (previousValues[group]) {
      total -= previousValues[group];
    }

    if (radioButton.checked) {
        
      total += value;
      previousValues[group] = value;
      radioButton.parentElement.classList.add('card-selected');
      
      const otherButtons = document.querySelectorAll(`input[type="radio"][name="${group}"]:not(:checked)`);
      otherButtons.forEach(button => {
        button.parentElement.classList.remove('card-selected');
      });

    } else {
      previousValues[group] = 0;
    }

    totalElement.textContent = total;

    if(document.querySelector('#g1r1').checked && document.querySelector('#g2r1').checked && document.querySelector('#g3r1').checked){
        ui.alerta('Es un  buen comienzo.');
    }
    if(document.querySelector('#g1r2').checked && document.querySelector('#g2r2').checked && document.querySelector('#g3r2').checked){
        ui.alerta('El plan mas elegido.');
    }
   
    if(document.querySelector('#g1r3').checked && document.querySelector('#g2r3').checked && document.querySelector('#g3r3').checked){
      ui.alerta('Este combo explosivo impulsara el crecimiento de tu negocio.');
      
    }
  });
});
