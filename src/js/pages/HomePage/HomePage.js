export class HomePage {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Контейнер с ID "${containerId}" не найден`);
            return;
        }
        this.render();
        this.addEventListeners();
    }

    render() {
        this.container.innerHTML = `
      <div class="home-container">
        <header>
          <h1>Добро пожаловать</h1>
          <button id="logout-btn">Выйти</button>
        </header>
        <div class="content">
          <p>Вы успешно авторизовались. Это ваша домашняя страница.</p>
        </div>
      </div>
    `;
    }

    addEventListeners() {
        const logoutBtn = document.getElementById('logout-btn');

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                console.log('Выход из системы');
                window.location.href = '/';
            });
        }
    }
}