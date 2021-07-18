import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="content container mt-100">
        <div class="restaurant">
            <div class="restaurant-label">
                <h1 class="restaurant-title">Daftar Restoran Favorit Anda</h1>
            </div>
            <div id="list-restaurant" class="list-restaurant">

            </div>
        </div>
        </section>
      `;
  },

  async afterRender() {
    let html = '';
    const nav = document.querySelector('nav');
    const navImage = document.querySelector('.nav-img');
    nav.classList.remove('bg-transparent');
    navImage.setAttribute('src', './images/logo-w.svg');
    window.addEventListener('scroll', () => {
      if (window.scrollY < 15) {
        nav.classList.remove('bg-transparent');
        navImage.setAttribute('src', './images/logo-w.svg');
      }
    });

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#list-restaurant');
    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        html += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantsContainer.style.gridTemplateColumns = '1fr';
      restaurantsContainer.style.textAlign = 'center';
      html = '<h3 class="restaurant-item__not__found">Anda belum memiliki restoran favorit</h3>';
    }
    restaurantsContainer.innerHTML += html;
  },
};

export default Favorite;
