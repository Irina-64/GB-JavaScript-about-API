# GB-JavaScript-about-API
домашние задания курса JavaScript про API браузеров (gb.ru)

## Задание 1. DOM-дерево

Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

7. При разработке используйте Bootstrap для стилизации элементов.

## Задание 2. События, формы

1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

a. Контейнер для отображения текущего изображения.
b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

2. Используйте HTML для создания элементов интерфейса.

3. Используйте JavaScript для обработки событий:

a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида.

## Задание 3. Сетевые запросы

**Цель**: Разработать веб-приложение, которое каждый день будет отображать новое случайное изображение из коллекции Unsplash, давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.

**Регистрация на Unsplash:**

* Перейдите на веб-сайт Unsplash (https://unsplash.com/).
* Зарегистрируйтесь или войдите в свой аккаунт. (если у вас не было регистрации до этого, новый аккаунт создавать не нужно).

**Создание приложения:**

* Перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
* Нажмите "New Application".
* Заполните необходимую информацию о приложении (можете использовать http://localhost для тестирования).
* Получите свой API-ключ после создания приложения.

**Разработка веб-приложения:**

* Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк" и счетчик лайков.
* Используя JavaScript и ваш API-ключ, получите случайное изображение из Unsplash каждый раз, когда пользователь загружает страницу.
* Отобразите информацию о фотографе под изображением.
* Реализуйте функционал "лайка". Каждый раз, когда пользователь нажимает кнопку "лайк", счетчик должен увеличиваться на единицу.

**Дополнительные задачи (по желанию):**

* Добавьте функцию сохранения количества лайков в локальное хранилище, чтобы при новой загрузке страницы счетчик не сбрасывался.
* Реализуйте возможность просмотра предыдущих "фото дня" с сохранением их в истории просмотров.
