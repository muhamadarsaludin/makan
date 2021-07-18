import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
        <div id="detail-container" class="container"></div>
        <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    console.log(restaurant.restaurant);
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
    // TODO: tampilkan movie di dalam DOM
    const detailContainer = document.querySelector('#detail-container');
    detailContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.restaurant.id,
        name: restaurant.restaurant.name,
        city: restaurant.restaurant.city,
        rating: restaurant.restaurant.rating,
        description: restaurant.restaurant.description,
        pictureId: restaurant.restaurant.pictureId,
      },
    });
  },
};

export default Detail;
