# Висновки

Під час розробки було розроблено сервіс для повного управління користувачем
і його даними. Сервіс дозволяє додавати користувачів, видаляти, та редагувати.
Метою розробки було навчитися взаємодіяти з базою даних, та розробити
сервіс, який буде виконувати всі необхідні дії над базою даних. Також було
розроблено веб-інтерфейс для зручного взаємодії з користувачем. Веб-інтерфейс
дозволяє виконувати всі дії описані вище.

Під час розробки було унікальним рішенням використати, в минулому клієнтський,
JavaScript фреймворк - Next.js. З виходом його 13 версії, в ньому з'явились
серверні дії, які дозволяють взаємодіяти з сервером і з базою даних в 
тому числі. Це дозволило розробити веб-інтерфейс, в деяких випадках не 
використовуючи ендпоїнти. Проте без них теж не обійшлося,
для того щоб прив'язати до кнопки дію на сервері, вони були необхідні,
проте в Next.js їх створити можливо.

Для взаємодії з базою данних було використано ORM - Prisma. Це дозволило
спростити написання запитів до бази данних, та розширило масштабованість 
проекту в майбутньому. Були описані всі моделі, які ми створювали в 
попередніх лабораторних роботах.

Також для стилізації веб-інтерфейсу було використано CSS фреймворк - TailwindCSS.

Отже, наш проект виконує всі поставлені завдання, та має деякий потенціал.
Архітектура яка використовувались, на жаль, ще не пройшла перевірку часом
і є фактично тестовим рішенням, проте вона дозволяє написати клієнт-серверну
взаємодію достатньо швидко і в одному репозиторії.
