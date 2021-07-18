import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => {
  const maxLengthString = 50;
  const { rating } = restaurant;
  const stars = Math.floor(rating);
  let startText = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < stars; i++) {
    startText += '<span class="fa fa-star"></span>';
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5 - stars; i++) {
    startText += '<span class="fa fa-star unrate"></span>';
  }
  startText += `<span> (${rating})</span>`;

  const item = `
        <article class="restaurant-item card">
            <a href="#/detail/${restaurant.id}">
                <img src="./images/placeholder.jpg" class="restaurant-thumbnail lazyload" data-src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}"
                    alt="${restaurant.name}">

                <div class="restaurant-content">
                    <h3 class="restaurant-name text-primary">${restaurant.name}</h3>
                    <h4 class="restaurant-city">${restaurant.city}</h4>
                    <div class="rating">${startText}</div>
                    <p>${restaurant.description.length > maxLengthString ? `${restaurant.description.substring(0, maxLengthString)}...` : restaurant.description}</p>
                </div>
            </a>
        </article>
    `;
  return item;
};

const createRestaurantDetailTemplate = (restaurant) => {
  const { foods } = restaurant.menus;
  const { drinks } = restaurant.menus;
  const reviews = restaurant.customerReviews;
  const { categories } = restaurant;
  let foodText = '';
  let drinkText = '';
  let categoryText = '';
  let reviewItem = '';
  const { rating } = restaurant;
  const stars = Math.floor(rating);
  let startText = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < stars; i++) {
    startText += '<span class="fas fa-star"></span>';
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5 - stars; i++) {
    startText += '<span class="fas fa-star unrate"></span>';
  }
  startText += `<span> (${rating})</span>`;

  foods.forEach((food) => {
    foodText += `<li>${food.name}</li>`;
  });
  drinks.forEach((drink) => {
    drinkText += `<li>${drink.name}</li>`;
  });
  let counterReview;
  if (reviews.length > 6) {
    counterReview = 6;
  } else {
    counterReview = reviews.length;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < counterReview; i++) {
    reviewItem += `
        <div class="review-item">
                        <h5 class="customer-name">${reviews[i].name} <span class="text-regular">${reviews[i].date}</span></h5>
                        <p class="date-review">${reviews[i].review}</p>
                        <hr>
                </div>
                `;
  }

  categories.forEach((category) => {
    categoryText += `
        <div class="card category-item">
            <p>${category.name}</p>
        </div>
        `;
  });

  const detailContent = `
    <img src="./images/placeholder.jpg" data-src="${CONFIG.BASE_IMAGE_URL}large/${restaurant.pictureId}" alt="${restaurant.name}"
            class="image-responsive lazyload">
        <div class="detail-content">
            <h1 class="restaurant-title">${restaurant.name}</h1>
            <div class="rating">${startText}</div>

            <div class="restaurant-address">
                <h3>Address</h3>
                <p>${restaurant.address} ${restaurant.city}</p>
            </div>
            <div class="restaurant-description">
                <h3>Description</h3>
                <p>${restaurant.description}</p>
            </div>
            <div class="categories-wrapper">
                <h3>Categories</h3>
                <div class="categories">
                
                    ${categoryText}
                </div>
            </div>
            <div class="restaurant-menu">
                
                <div class="menu-food">
                    <h3>Makanan</h3>
                    <ul>
                        ${foodText}
                    </ul>
                </div>
                <div class="menu-drink">
                    <h3>Minuman</h3>
                    <ul>
                        ${drinkText}
                    </ul>
                </div>
            </div>
            <div class="restaurant-review">
            <h3>Review</h3>
                ${reviewItem}
            </div>
        </div>
    `;
  return detailContent;
};

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="btn like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="btn like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
