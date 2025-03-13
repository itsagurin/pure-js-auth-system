export class HomePage {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.render();
        this.addEventListeners();
        this.populateUpdateForm();
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
          
          <h2>Изменить данные аккаунта</h2>
          <form id="update-form">
            <div class="form-group">
              <label for="update-email">Email</label>
              <input type="email" id="update-email" placeholder="Введите новый email" required>
            </div>
            <div class="form-group">
              <label for="update-password">Новый пароль</label>
              <input type="password" id="update-password" placeholder="Введите новый пароль" required>
            </div>
            <button type="submit" class="btn-update">Сохранить изменения</button>
          </form>
          <div id="update-message" class="update-message"></div>
          
          <hr>
          <button id="delete-account-btn" class="btn-delete">Удалить аккаунт</button>
        </div>
      </div>
    `;
    }

    addEventListeners() {
        const logoutBtn = document.getElementById('logout-btn');
        const updateForm = document.getElementById('update-form');
        const deleteAccountBtn = document.getElementById('delete-account-btn');

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => {
                window.location.href = '/';
            });
        }

        if (updateForm) {
            updateForm.addEventListener('submit', this.handleUpdate.bind(this));
        }

        if (deleteAccountBtn) {
            deleteAccountBtn.addEventListener('click', this.handleDelete.bind(this));
        }
    }

    populateUpdateForm() {
        const data = localStorage.getItem('loginData');
        if (data) {
            const { email } = JSON.parse(data);
            const updateEmailInput = document.getElementById('update-email');
            if (updateEmailInput) {
                updateEmailInput.value = email;
            }
        }
    }

    handleUpdate(e) {
        e.preventDefault();
        const updateMessage = document.getElementById('update-message');
        updateMessage.textContent = '';

        const newEmail = document.getElementById('update-email').value.trim();
        const newPassword = document.getElementById('update-password').value.trim();

        if (!newEmail || !newPassword) {
            updateMessage.textContent = 'Пожалуйста, заполните все поля для обновления.';
            return;
        }

        const storedData = localStorage.getItem('loginData');
        let updatedData = { email: newEmail, password: newPassword };
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            if (parsedData.rememberMe !== undefined) {
                updatedData.rememberMe = parsedData.rememberMe;
            }
            if (parsedData.expireAt !== undefined) {
                const remainingTime = parsedData.expireAt - Date.now();
                updatedData.expireAt = Date.now() + (remainingTime > 0 ? remainingTime : 5 * 60 * 1000);
            }
        }
        localStorage.setItem('loginData', JSON.stringify(updatedData));
        updateMessage.textContent = 'Данные аккаунта успешно обновлены.';
    }

    handleDelete() {
        if (confirm('Вы уверены, что хотите удалить аккаунт? Это действие необратимо.')) {
            localStorage.removeItem('loginData');
            window.location.href = '/register';
        }
    }
}
