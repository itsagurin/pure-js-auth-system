import {setAuthData} from "../../auth/auth.js";

export class RenderRegForm {
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
      <div class="register-form-container">
        <h2>Регистрация</h2>
        <div id="register-error" class="error-message"></div>
        <form id="registerForm">
          <div class="form-group">
            <label for="register-email">Email</label>
            <input type="email" id="register-email" placeholder="Введите ваш email" required>
          </div>
          <div class="form-group">
            <label for="register-password">Пароль</label>
            <input type="password" id="register-password" placeholder="Создайте пароль" required>
          </div>
          <div class="form-group">
            <label for="register-confirm-password">Подтверждение пароля</label>
            <input type="password" id="register-confirm-password" placeholder="Подтвердите пароль" required>
          </div>
          <div class="form-options">
            <div class="remember-me">
              <input type="checkbox" id="remember-me">
              <label for="remember-me">Запомнить меня</label>
            </div>
          </div>
          <button type="submit" class="btn-register">Зарегистрироваться</button>
        </form>
        <div class="form-footer">
          <p>Уже есть аккаунт? <a href="/" id="show-login">Войти</a></p>
        </div>
      </div>
    `;
    }

    addEventListeners() {
        const registerForm = document.getElementById('registerForm');
        const showLoginLink = document.getElementById('show-login');

        if (registerForm) {
            registerForm.addEventListener('submit', this.handleRegister.bind(this));
        }

        if (showLoginLink) {
            showLoginLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = '/';
            });
        }
    }

    handleRegister(e) {
        e.preventDefault();
        const errorContainer = document.getElementById('register-error');
        errorContainer.textContent = '';

        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        const rememberMe = document.getElementById('remember-me').checked;

        if (password !== confirmPassword) {
            errorContainer.textContent = 'Пароли не совпадают';
            return;
        }

        setAuthData(email, password, rememberMe);

        window.location.href = '/home';
    }
}