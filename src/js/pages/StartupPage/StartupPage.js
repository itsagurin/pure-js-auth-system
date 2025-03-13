export class StartupPage {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.render();
        this.addEventListeners();
    }

    render() {
        this.container.innerHTML = `
      <div class="startup-container">
        <h1>Добро пожаловать в наше приложение</h1>
        <p>Пожалуйста, войдите или зарегистрируйтесь для продолжения</p>
        <div class="buttons-container">
          <button id="login-btn" class="primary-btn">Войти</button>
          <button id="register-btn" class="secondary-btn">Зарегистрироваться</button>
        </div>
      </div>
    `;
    }

    addEventListeners() {
        const loginBtn = document.getElementById('login-btn');
        const registerBtn = document.getElementById('register-btn');

        if (loginBtn) {
            loginBtn.addEventListener('click', () => {
                window.location.href = '/login';
            });
        }

        if (registerBtn) {
            registerBtn.addEventListener('click', () => {
                window.location.href = '/register';
            });
        }
    }
}