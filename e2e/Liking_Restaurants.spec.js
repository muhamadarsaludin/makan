const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#list-restaurant');
  I.see('Anda belum memiliki restoran favorit', '.restaurant-item__not__found');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see('Anda belum memiliki restoran favorit', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.seeElement('.restaurant-item a');
  const firstRestaurant = locate('.restaurant-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedFilmTitle = await I.grabTextFrom('.restaurant-item');
  assert.strictEqual(firstRestaurantTitle, likedFilmTitle);
});
