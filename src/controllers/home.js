import viewPage from '../views/page';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
    return `
      ${viewPage(`
        
      `)}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Home;
