import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <!-- hero -->
        <div class="hero">
            <picture>
                <source type="image/webp" media="(max-width: 600px)" srcset="./images/heros/hero-image_2-large.webp">
                <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/heros/hero-image_2-large.jpg">
                <img 
                    src="./images/heros/hero-image_2-large.jpg" 
                    alt="hero makan image"></img>
            </picture>
            <div class="container">
                <div class="hero-wrapper">
                    <div class="hero-inner">
                        <h1 class="hero-title">Binggung Cari Tempat Makan?</h1>
                        <p class="hero-tagline">Kini tidak usah bingung lagi cari makan, karena makan menyediakan banyak
                            sekali
                            referensi tempat makan yang cocok untuk kamu!</p>
                        <a href="#" class="btn btn-primary">Lihat Selengkapnya</a>
                    </div>
                </div>
            </div>
        </div>

        <section class="content container">
        <div class="restaurant">
            <div class="restaurant-label">
                <h1 class="restaurant-title">Daftar Restoran</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, rem doloremque? At vel saepe,
                    architecto voluptatibus mollitia fugit reiciendis quibusdam.</p>
            </div>
            <div id="list-restaurant" class="list-restaurant">

            </div>
        </div>
        </section>
      `;
  },

  async afterRender() {
    const nav = document.querySelector('nav');
    const navImage = document.querySelector('.nav-img');
    nav.classList.add('bg-transparent');
    navImage.setAttribute('src', './images/logo.svg');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 15) {
        nav.classList.remove('bg-transparent');
        navImage.setAttribute('src', './images/logo-w.svg');
      } else {
        nav.classList.add('bg-transparent');
        navImage.setAttribute('src', './images/logo.svg');
      }
    });

    const restaurants = await RestaurantSource.listRestaurant();
    console.log(restaurants);
    const listRestaurant = document.querySelector('#list-restaurant');
    // TODO: Tampilkan restaurants dalam DOM
    restaurants.forEach((restaurant) => {
      listRestaurant.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
