
# 🚀 Hello Pages — статический сайт на GitHub Pages

<div align="center">

![Deploy to GitHub Pages](https://github.com/ВАШ-USERNAME/hello-pages/actions/workflows/deploy.yml/badge.svg)
![Made with HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Made with CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Made with JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)

**✨ Красивый статический сайт из 5 страниц с анимациями, задеплоенный через CI/CD ✨**

[🌐 Живой сайт](https://wrehe0.github.io/hello-pages1/) · [📦 Деплои](https://github.com/wrehe0/hello-pages1/deployments) · [⚙️ Environments](https://github.com/wrehe0/hello-pages1/settings/environments) · [🐛 Issues](https://github.com/wrehe0/hello-pages1/issues)

</div>

---
```
📁 static-site
├── 📁 .github
│   └── 📁 workflows
│       └── ⚙️ deploy.yml
├── 📄 about.html
├── 📄 contact.html
├── 📄 games.html
├── 📄 index.html
├── 📄 portfolio.html
├── 📄 README.md
├── ⚡ script.js
├── 📄 services.html
└── 🎨 styles.css
```
## 📖 О проекте

> Этот проект — практическая демонстрация того, как создать современный статический сайт и **автоматически** публиковать его в интернете при каждом коммите.

Сайт написан на чистых **HTML + CSS + JavaScript** без сборщиков и фреймворков. Дизайн — тёмная тема с неоново-синими акцентами, плавные анимации при скролле и анимированный счётчик на главной странице.

Деплой настроен через **GitHub Actions** — при каждом пуше в ветку `main` сайт автоматически пересобирается и публикуется на **GitHub Pages**.

---

## 🌟 Возможности

- 🎨 **Современный дизайн** — тёмная тема, градиенты, плавные тени
- 🎬 **JS-анимации** — появление элементов при скролле через Intersection Observer
- 🔢 **Анимированный счётчик** — на главной странице
- 📱 **Адаптивная вёрстка** — корректно работает на мобильных
- 🚀 **CI/CD через GitHub Actions** — автоматический деплой при пуше
- 🌍 **Живой URL** — сайт доступен по кликабельной ссылке
- 📊 **История деплоев** — видны во вкладке Deployments

---


## 🗂️ Структура проекта

```mermaid
graph TD
    ROOT["📁 static-site"]
    
    ROOT --> GH["📁 .github"]
    GH --> WF["📁 workflows"]
    WF --> DEPLOY["⚙️ deploy.yml"]
    
    ROOT --> ABOUT["📄 about.html"]
    ROOT --> CONTACT["📄 contact.html"]
    ROOT --> GAMES["📄 games.html"]
    ROOT --> INDEX["📄 index.html"]
    ROOT --> PORTFOLIO["📄 portfolio.html"]
    ROOT --> README["📄 README.md"]
    ROOT --> SCRIPT["⚡ script.js"]
    ROOT --> SERVICES["📄 services.html"]
    ROOT --> STYLES["🎨 styles.css"]

    style ROOT fill:#00d4ff,stroke:#0077b6,color:#000,stroke-width:2px
    style GH fill:#1e1e2e,stroke:#00d4ff,color:#fff
    style WF fill:#1e1e2e,stroke:#00d4ff,color:#fff
    style DEPLOY fill:#ff6b6b,stroke:#c92a2a,color:#fff
    style ABOUT fill:#1e1e2e,stroke:#00d4ff,color:#fff
    style CONTACT fill:#1e1e2e,stroke:#00d4ff,color:#fff
    style GAMES fill:#1e1e2e,stroke:#00d4ff,color:#fff
    style INDEX fill:#1e1e2e,stroke:#00d4ff,color:#fff
    style PORTFOLIO fill:#1e1e2e,stroke:#00d4ff,color:#fff
    style README fill:#1e1e2e,stroke:#00d4ff,color:#fff
    style SCRIPT fill:#f7df1e,stroke:#b8a000,color:#000
    style SERVICES fill:#1e1e2e,stroke:#00d4ff,color:#fff
    style STYLES fill:#1572b6,stroke:#0d4a7a,color:#fff
```

---

## 📄 Страницы сайта

| # | Страница | Иконка | Описание |
|:-:|----------|:------:|----------|
| 1 | [index.html](index.html) | 🏠 | Главная — hero-секция, анимации, знакомство с проектом |
| 2 | [about.html](about.html) | 👤 | О проекте, команде и целях сайта |
| 3 | [services.html](services.html) | 💼 | Услуги в виде карточек с иконками |
| 4 | [portfolio.html](portfolio.html) | 🖼️ | Портфолио с примерами работ |
| 5 | [games.html](games.html) | 🎮 | Игровой раздел с интерактивом на JS |
| 6 | [contact.html](contact.html) | ✉️ | Форма обратной связи и контакты |

> 💡 **Навигация:** все страницы связаны общим меню в шапке и футером.  
> Стили подключены из одного файла `styles.css`, скрипты — из `script.js`.

---

## 🛠️ Технологии

<div align="center">

| Технология | Назначение |
|:---:|:---|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=flat-square) | Разметка страниц |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat-square) | Стили, Flexbox, Grid, анимации |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square) | Интерактив, Intersection Observer |
| ![GitHub Actions](https://img.shields.io/badge/-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white&style=flat-square) | CI/CD пайплайн |
| ![GitHub Pages](https://img.shields.io/badge/-GitHub%20Pages-222222?logo=githubpages&logoColor=white&style=flat-square) | Хостинг сайта |

</div>

---

## 🚀 CI/CD Pipeline

```mermaid
flowchart LR
    A[👨‍💻 git push] --> B[🔔 Trigger workflow]
    B --> C[📥 Checkout]
    C --> D[⚙️ Setup Pages]
    D --> E[📦 Upload artifact]
    E --> F[🚀 Deploy]
    F --> G[🌐 Live site]

    style A fill:#00d4ff,color:#000
    style G fill:#00ff88,color:#000
    style F fill:#ff6b6b,color:#fff
```

**Как это работает:**

1. 🧑‍💻 Разработчик делает `git push` в ветку `main`
2. 🔔 GitHub Actions автоматически запускает workflow
3. 📥 Код клонируется в runner
4. 📦 Артефакт (сайт) загружается
5. 🚀 Деплой на GitHub Pages
6. 🌐 Сайт обновляется по живому URL

---


## 📊 История деплоев

Каждый пуш в `main` создаёт новую запись в разделе **Deployments** репозитория:

👉 [**Смотреть все деплои →**](https://github.com/wrehe0/hello-pages1/deployments)

Каждый деплой содержит:

- ✅ Статус (success / failure)
- 📅 Дату и время
- 👤 Автора коммита
- 🔗 Кликабельную ссылку на задеплоенную версию

---

## ⚙️ Environments

Проект использует GitHub Environment **`github-pages`**:

👉 [**Открыть Environments →**](https://github.com/wrehe0/hello-pages1/settings/environments)

---

## 📁 Структура workflow

```yaml
📁 .github/
└── 📁 workflows/
    └── ⚙️ deploy.yml    # CI/CD пайплайн
```

Файл `deploy.yml` содержит:

- 🔔 Триггер на `push` в `main` и `workflow_dispatch`
- 🔐 Необходимые permissions для деплоя
- 📦 Шаги: checkout → setup-pages → upload-artifact → deploy

---

## 🤝 Как внести вклад

1. 🍴 Форкни репозиторий
2. 🌿 Создай ветку: `git checkout -b feature/amazing-feature`
3. 💾 Закоммить: `git commit -m "Add amazing feature"`
4. 🚀 Запушь: `git push origin feature/amazing-feature`
5. 🔃 Открой Pull Request

---

## 📜 Лицензия

Этот проект распространяется под лицензией **MIT** — используй свободно! 🎉

---

<div align="center">

### 💙 Спасибо за внимание!



</div>
```
