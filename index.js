
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));

  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});

let rendlerTec = document.getElementById('rendler-tec');
let tecnologes = document.getElementById('tec-container');
let isRendlerTec;

const rendlerTecnologes = () => {
  isRendlerTec = tecnologes.style.display;
  if(!isRendlerTec || isRendlerTec == 'none') tecnologes.style.display = 'flex';
  else tecnologes.style.display = 'none';
};
rendlerTec.addEventListener('click', rendlerTecnologes);


let navBar = document.getElementById('nav-bar');
let activeBar = document.getElementById('active-bar');
let desactiveBar = document.getElementById('desative-bar');
let isRendlerBar;

const rendlerBar = () => {
  isRendlerBar = navBar.style.display;
  if(!isRendlerBar || isRendlerBar == 'none') {
    navBar.style.display = 'flex';
    activeBar.style.display = 'none';
    desactiveBar.style.display = 'block';
}
  else {
    navBar.style.display = 'none';
    activeBar.style.display = 'block';
    desactiveBar.style.display = 'none';
  };
}

activeBar.addEventListener('click', rendlerBar);
desactiveBar.addEventListener('click', rendlerBar);
