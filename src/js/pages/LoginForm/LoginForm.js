export class RenderLoginForm {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.render();
        this.addEventListeners();
    }

    render() {
        this.container.innerHTML = `
      <div class="login-form-container">
        <h2>Вход в систему</h2>
        <div id="login-error" class="error-message"></div>
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
        const errorContainer = document.getElementById('login-error');
        errorContainer.textContent = '';

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const rememberMe = document.getElementById('remember-me').checked;

        const storedData = localStorage.getItem('loginData');
        if (!storedData) {
            errorContainer.textContent = "Пользователь не найден. Пожалуйста, зарегистрируйтесь.";
            return;
        }

        const { email: registeredEmail, password: registeredPassword } = JSON.parse(storedData);

        if (email === registeredEmail && password === registeredPassword) {
            localStorage.setItem('loginData', JSON.stringify({ email, password, rememberMe }));
            window.location.href = '/home';
        } else {
            errorContainer.textContent = "Неверный email или пароль";
        }
    }
}