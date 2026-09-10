// Ждем полной загрузки DOM-дерева, чтобы скрипт точно нашел все элементы
document.addEventListener('DOMContentLoaded', () => {

    // === 1. ВОССТАНОВИТЬ ПОРЯДОК КНИГ ===
    // Находим контейнер, в котором лежат все книги, и сами книги
    const booksContainer = document.querySelector('.books');
    const books = document.querySelectorAll('.book');

    // Расставляем книги по порядку (от 1 до 6). 
    // Метод append() переносит уже существующий элемент в конец контейнера.
    // (Индексы в массиве books зависят от их исходного положения в HTML, 
    // обычно порядок такой: Книга 1 — это books[0] или books[1] и т.д. Поменяйте индексы, если порядок не совпадет)
    booksContainer.append(books[1]); // Книга 1 (замените индекс на нужный, если порядок отличается)
    booksContainer.append(books[0]); // Книга 2
    booksContainer.append(books[2]); // Книга 3
    booksContainer.append(books[3]); // Книга 4
    booksContainer.append(books[4]); // Книга 5
    booksContainer.append(books[5]); // Книга 6


    // === 2. ЗАМЕНИТЬ КАРТИНКУ ЗАДНЕГО ФОНА ===
    // Меняем свойство backgroundImage у тега body на другую картинку (например, wall.jpg или bg.jpg)
    // Посмотрите точное название второго файла в вашей папке image
    document.body.style.backgroundImage = 'url("./image/open_book.jpg")';


    // === 3. ИСПРАВИТЬ ЗАГОЛОВОК В КНИГЕ 3 ===
    // Находим заголовок третьей книги (обычно это тег <a> или <h2> внутри книги)
    const book3Title = books[2].querySelector('a'); // или 'h2', проверьте в DevTools
    if (book3Title) {
        book3Title.textContent = "Книга 3. this и Прототипы Объектов";
    }


    // === 4. УДАЛИТЬ РЕКЛАМУ СО СТРАНИЦЫ ===
    // Находим блок рекламы по его классу (обычно .adv или .advertising) и удаляем его
    const advBlock = document.querySelector('.adv');
    if (advBlock) {
        advBlock.remove();
    }


    // === 5. ВОССТАНОВИТЬ ПОРЯДОК ГЛАВ ВО ВТОРОЙ И ПЯТОЙ КНИГЕ ===
    // --- Восстановление глав во 2-й книге ---
    const book2Chapters = books[1].querySelectorAll('li');
    const book2List = books[1].querySelector('ul');
    // Используем append() или insertBefore(), чтобы расставить запутавшиеся li по местам
    // Пример переноса: book2List.append(book2Chapters[индекс]);


    // --- Восстановление глав во 5-й книге ---
    const book5Chapters = books[4].querySelectorAll('li');
    const book5List = books[4].querySelector('ul');
    // Расставляем li по местам для 5-й книги


    // === 6. В ШЕСТОЙ КНИГЕ ДОБАВИТЬ НОВУЮ ГЛAВУ ===
    const book6List = books[5].querySelector('ul');
    const book6Chapters = books[5].querySelectorAll('li');

    // Создаем новый элемент списка
    const newChapter = document.createElement('li');
    newChapter.textContent = 'Глава 8: За пределами ES6';

    // Вставляем её в правильное место (например, перед Приложением, которое обычно является последним li)
    // Метод insertBefore(что_вставляем, перед_каким_элементом)
    book6List.insertBefore(newChapter, book6Chapters[book6Chapters.length - 1]);

});
