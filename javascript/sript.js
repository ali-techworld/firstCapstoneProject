// DYNAMICALLY POPULATED PRODUCTS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const productsArr = [
  {
    id: 0,
    imgSrc: 'img/person1.jpeg',
    name: 'Letra decorada con quilling o filigrana en papel.',
    materials: ['papel', 'cartulina'],
    description:
        'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    id: 1,
    imgSrc: 'img/person2.jpeg',
    name: 'Converse en fomix termoformado.',
    materials: ['fomix', 'cinta'],
    description:
        'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 2,
    imgSrc: 'img/person3.jpeg',
    name: 'Nacimiento y vela a base de fomix.',
    materials: ['fomix', 'pintura'],
    description:
        'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 3,
    imgSrc: 'img/person4.jpeg',
    name: 'Angel navideño',
    materials: ['bombillo', 'cinta', 'tela'],
    description:
        'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 4,
    imgSrc: 'img/person5.jpeg',
    name: 'Bouquet de fotos familiares.',
    materials: ['impresion', 'cartulina', 'cinta', 'flores'],
    description:
        'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 5,
    imgSrc: 'img/person6.jpeg',
    name: 'CAMBIAR ESTE',
    materials: ['fomix', 'cinta'],
    description:
        'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
];

const productsList = document.getElementById('products-list');
const moreBtn = document.querySelector('.cta.more');

let expanded = false;

const mediaQueryDesktop = window.matchMedia('(min-width: 768px)');

function isMobile(x) {
  if (x.matches) {
    return true;
  }
  return false;
}

function populateProducts() {
  productsList.innerHTML = '';
  let counter = 0;
  if (!isMobile(mediaQueryDesktop)) {
    if (!expanded) {
      counter = 2;
    } else {
      counter = productsArr.length;
    }
  } else {
    counter = productsArr.length;
  }

  for (let i = 0; i < counter; i += 1) {
    const product = document.createElement('article');
    product.className = 'product';
    const productInnerHTML = `
      <div class="product-img-wrapper">
        <img
          src="${productsArr[i].imgSrc}"
          alt="${productsArr[i].name}"
          class="product-img"
        />
      </div>
      <div class="product-content">
        <h3 class="product-title">
        ${productsArr[i].name}
        </h3>
        <p>
        ${productsArr[i].materials.join(' | ')}
        </p>
        <hr />
        <p>
        ${productsArr[i].description}
        </p>
      </div>
  `;
    product.innerHTML = productInnerHTML;
    productsList.appendChild(product);
  }
}

function showAllProjects() {
  if (expanded) {
    moreBtn.classList.remove('expand');
    expanded = false;
  } else {
    moreBtn.classList.add('expand');
    expanded = true;
  }
  populateProducts();
}

moreBtn.addEventListener('click', showAllProjects);

// MOBILE MENU LOGIC\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const mobileMenu = document.querySelector('header nav img');
const menu = document.getElementById('menu');
const menuClose = document.querySelector('header > img');
const menuItems = Array.from(document.querySelectorAll('#menu a'));
const logoContainer = document.getElementById('logo-container');
let showMenu = true;

function openMobileMenu() {
  if (showMenu) {
    logoContainer.style.display = 'none';
    menu.className = 'mobile';
    menuClose.className = 'mobile';

    for (let i = 0; i < menuItems.length; i += 1) {
      menuItems[i].className = 'mobile';
    }

    showMenu = false;
  }
}

function closeMenu() {
  if (!showMenu) {
    menu.className = '';
    menuClose.className = '';

    for (let i = 0; i < menuItems.length; i += 1) {
      menuItems[i].className = '';
    }
    showMenu = true;
  }
}

mobileMenu.addEventListener('click', openMobileMenu);
menuClose.addEventListener('click', closeMenu);
window.onload = populateProducts();