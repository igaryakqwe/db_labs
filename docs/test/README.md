# Тестування працездатності системи


## Передумови

### 1. Встановити залежнсті проекту
```bash
$ npm install
```

### 2. Запустити сервер
```bash
$ npm run dev
```
## Перевірити працездатність сервісів

### GET запит на отримання всіх користувачів

<img src="./images/postman/get-all-users.png">

### GET запит на отримання користувача за id

<img src="./images/postman/get-user-by-id.png">

### POST запит на створення користувача (повертається створений користувач)

<img src="./images/postman/add-user.png">

### PUT запит на оновлення користувача за id (повертається оновлений користувач)

<img src="./images/postman/update-user.png">

### DELETE запит на видалення користувача за id (повертається повідомлення та видалений користувач)

<img src="./images/postman/delete-user.png">

## Клієнтська частина, яка теж взаємодіє з базою даних

### GET запит на отримання всіх користувачів (сторінка з усіма користувачами)

<img src="./images/client/get-all-users.png">

### GET запит на отримання користувача за id (сторінка з користувачем)

<img src="./images/client/get-user-by-id.png">

### POST запит на створення користувача (форма для додавання користувача)

<img src="./images/client/add-user.png">

### PUT запит на оновлення користувача за id (форма для оновлення користувача)

<img src="./images/client/update-user.png">

### DELETE запит на видалення користувача за id (вікно з підтвердженням видалення користувача)

<img src="./images/client/delete-user.png">
