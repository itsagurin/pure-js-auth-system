import { RenderLoginForm } from "./js/pages/LoginForm/LoginForm.js";
import { RenderRegForm } from "./js/pages/RegForm/RegForm.js";
import { HomePage } from "./js/pages/HomePage/HomePage.js";
import { StartupPage } from "./js/pages/StartupPage/StartupPage.js";
import './style/main.css'
import './style/notfound.css'

const APP_CONTAINER_ID = 'app';

function ensureAppContainer() {
    let container = document.getElementById(APP_CONTAINER_ID);
    if (!container) {
        container = document.createElement('div');
        container.id = APP_CONTAINER_ID;
        document.body.appendChild(container);
    }
    return container;
}

function initApp() {
    ensureAppContainer();

    switch (location.pathname) {
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