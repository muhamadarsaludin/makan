const DrawerInitiator = {
  init({
    button,
    drawer,
    icon,
  }) {
    const components = {
      drawer,
      icon,
    };

    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, components);
    });

    // content.addEventListener('click', (event) => {
    //     this._closeDrawer(event, components);
    // });
  },

  _toggleDrawer(event, components) {
    event.stopPropagation();
    const { drawer } = components;
    const { icon } = components;
    drawer.classList.toggle('slide');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  },

  _closeDrawer(event, components) {
    event.stopPropagation();
    const { drawer } = components;
    const { icon } = components;
    drawer.classList.remove('slide');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  },
};

export default DrawerInitiator;
