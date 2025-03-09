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
        <form id="registerForm">
          <div class="form-group">
            <label for="register-name">Имя</label>
            <input type="text" id="register-name" placeholder="Введите ваше имя" required>
          </div>
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
          <div class="terms">
            <input type="checkbox" id="terms-agree" required>
            <label for="terms-agree">Я согласен с <a href="#">условиями использования</a></label>
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
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        const termsAgree = document.getElementById('terms-agree').checked;

        if (password !== confirmPassword) {
            alert('Пароли не совпадают');
            return;
        }

        if (!termsAgree) {
            alert('Необходимо согласиться с условиями использования');
            return;
        }

        console.log('Регистрация пользователя:', { name, email, password });

        window.location.href = '/home';
    }
}