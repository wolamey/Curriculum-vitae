const expirience = document.getElementById('expirience');
const expirienceOnclick = document.querySelector('.expirience-onclick')
const up = document.getElementById('up');


expirience.addEventListener('click', () => {
  expirienceOnclick.classList.add('active');
})
document.querySelector('.expirience-onclick-button').addEventListener('click', () => {
  expirienceOnclick.classList = 'expirience-onclick';
})
window.onscroll = () => {
  if (expirienceOnclick.classList.contains('active')) expirienceOnclick.classList.remove('active');
}

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    up.classList.add("up-active");
  } else {
    up.classList.remove("up-active");
    document.querySelector('html').style.scrollBehavior = 'smooth';
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -30);
    setTimeout(goTop, 0);
    document.querySelector('html').style.scrollBehavior = 'auto';
  }
}


window.addEventListener("scroll", trackScroll);
up.addEventListener("click", goTop);

const button = document.getElementById('click');
const modal = document.getElementById('modal');
const container = document.getElementById('container');
const lose = document.getElementById('closed');


button.onclick = () => modal.classList.add('opened');

lose.onclick = () => modal.className = 'modal';

document.onclick = (event) => {
  if (event.target == container.parentElement) { modal.classList.remove('opened') };
}


const copy = document.querySelector('.copy');

copy.addEventListener('click', (event) => {
  const content = copy.previousElementSibling.innerHTML;
  navigator.clipboard.writeText(content);
})


function changeExpirience() {
  expirienceOnclick.style.display = 'none';
  expirience.href = '#expirience2';
  document.querySelector('.expirience').classList.add('act');
}

if (document.documentElement.clientWidth <= 650)
  changeExpirience();

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth <= 650)
    changeExpirience();
  else {
    expirienceOnclick.style.display = '';
    expirience.href = '#';
    document.querySelector('.expirience').classList.remove('act');
  }
})



const burg = document.querySelector('.burg');
const hContainer = document.querySelector('.h-container');
const hLinks = document.querySelector('.links');
const bClose = document.querySelector('.burg-close');
const contacts = document.querySelector('.contacts');

burg.addEventListener('click', () => {
  hContainer.style.height = '220px';
  hLinks.style.display = 'flex';
  burg.style.display = 'none';
  bClose.style.display = 'block';
  contacts.style.display = 'block';
})

bClose.addEventListener('click', () => {
  hContainer.style.height = '90px';
  hLinks.style.display = 'none';
  burg.style.display = 'block';
  bClose.style.display = 'none';
  contacts.style.display = 'none';
})