export class RenderLoginForm {
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
      <div class="login-form-container">
        <h2>Вход в систему</h2>
        <form id="loginForm">
          <div class="form-group">
            <label for="login-email">Email</label>
            <input type="email" id="login-email" placeholder="Введите ваш email" required>
          </div>
          <div class="form-group">
            <label for="login-password">Пароль</label>
            <input type="password" id="login-password" placeholder="Введите ваш пароль" required>
          </div>
          <div class="form-options">
            <div class="remember-me">
              <input type="checkbox" id="remember-me">
              <label for="remember-me">Запомнить меня</label>
            </div>
            <a href="#" class="forgot-password">Забыли пароль?</a>
          </div>
          <button type="submit" class="btn-login">Войти</button>
        </form>
        <div class="form-footer">
          <p>Нет аккаунта? <a href="/register" id="show-register">Зарегистрироваться</a></p>
        </div>
      </div>
    `;
    }

    addEventListeners() {
        const loginForm = document.getElementById('loginForm');
        const showRegisterLink = document.getElementById('show-register');

        if (loginForm) {
            loginForm.addEventListener('submit', this.handleLogin.bind(this));
        }

        if (showRegisterLink) {
            showRegisterLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = '/register';
            });
        }
    }

    handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const rememberMe = document.getElementById('remember-me').checked;

        console.log('Логин пользователя:', { email, password, rememberMe });

        window.location.href = '/home';
    }
}