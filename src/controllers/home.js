import viewPage from '../views/page';
import viewMessage from '../views/message';
import viewBotsMessage from '../views/bots_message';

const USERNAME = 'Ange';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
    return `
      ${viewPage()}
    `;
  }

  run() {
    this.el.innerHTML = this.render();
    this.EventListeners();
  }

  EventListeners() {
    const sendMessageButton = document.getElementById('sendMessageButton');
    const messageInput = document.getElementById('messageInput');

    sendMessageButton.addEventListener('click', () => {
      const messageText = messageInput.value.trim();

      if (messageText !== '') {
        this.sendMessage(USERNAME, messageText)
          .then(() => this.sendBotResponse());
        messageInput.value = '';
      }
    });
  }

  sendMessage(username, messageText) {
    return new Promise((resolve) => {
      const messagesContainer = document.querySelector('.messages');
      const messageHTML = viewMessage(username, messageText);
      messagesContainer.insertAdjacentHTML('beforeend', messageHTML);

      if (messageText.trim().toLowerCase() === 'hello') {
        this.sendBotResponse();
      }

      resolve();
    });
  }

  sendBotResponse() {
    const messagesContainer = document.querySelector('.messages');
    const botResponseHTML = viewBotsMessage();
    messagesContainer.insertAdjacentHTML('beforeend', botResponseHTML);
  }
};

export default Home;
