import { RenderLoginForm } from "./js/pages/LoginForm/LoginForm.js";
import { RenderRegForm } from "./js/pages/RegForm/RegForm.js";
import { HomePage } from "./js/pages/HomePage/HomePage.js";
import { StartupPage } from "./js/pages/StartupPage/StartupPage.js";
import { isAuthenticated } from './js/auth/auth.js';
import './style/main.css'
import './style/notfound.css'

const APP_CONTAINER_ID = 'app';

function initApp() {
    const path = location.pathname;

    if (path === '/home' && !isAuthenticated()) {
        const storedData = localStorage.getItem('loginData');
        if (!storedData) {
            window.location.href = '/login';
            return;
        }
    }

    switch (path) {
        case '/':
            new StartupPage(APP_CONTAINER_ID);
            break;
        case '/login':
            new RenderLoginForm(APP_CONTAINER_ID);
            break;
        case '/register':
            new RenderRegForm(APP_CONTAINER_ID);
            break;
        case '/home':
            new HomePage(APP_CONTAINER_ID);
            break;
        default:
            document.getElementById(APP_CONTAINER_ID).innerHTML = `
                <div class="not-found">
                  <h1>404</h1>
                  <p>Страница не найдена</p>
                  <a href="/">Вернуться на главную</a>
                </div>
            `;
    }
}

document.addEventListener('DOMContentLoaded', initApp);