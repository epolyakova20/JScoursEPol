document.addEventListener('DOMContentLoaded', () => {

    // === 1. ВОССТАНОВИТЬ ПОРЯДОК КНИГ ===
    const booksContainer = document.querySelector('.books');
    const books = document.querySelectorAll('.book');

    const book1 = books[1]; 
    const book2 = books[0]; 
    const book3 = books[4]; 
    const book4 = books[3]; 
    const book5 = books[5]; 
    const book6 = books[2]; 

    booksContainer.append(book1);
    booksContainer.append(book2);
    booksContainer.append(book3);
    booksContainer.append(book4);
    booksContainer.append(book5);
    booksContainer.append(book6);


    // === 2. ЗАМЕНИТЬ КАРТИНКУ ЗАДНЕГО ФОНА ===
    document.body.style.backgroundImage = 'url("./image/open_book.jpg")';


    // === 3. ИСПРАВИТЬ ЗАГОЛОВОК В КНИГЕ 3 ===
    const book3Title = book3.querySelector('a');
    if (book3Title) {
        book3Title.textContent = "Книга 3. this и Прототипы Объектов";
    }


    // === 4. УДАЛИТЬ РЕКЛАМУ СО СТРАНИЦЫ ===
    const advBlock = document.querySelector('.adv');
    if (advBlock) {
        advBlock.remove();
    }


    // === 5. ВОССТАНОВИТЬ ПОРЯДОК ГЛАВ ВО ВТОРОЙ И ПЯТОЙ КНИГЕ ===
    const book2List = book2.querySelector('ul');
    const book2Chapters = book2List.querySelectorAll('li');
    
    book2List.append(book2Chapters[0]);  // Введение
    book2List.append(book2Chapters[1]);  // Предисловие
    book2List.append(book2Chapters[2]);  // Глава 1
    book2List.append(book2Chapters[5]);  // Глава 2 
    book2List.append(book2Chapters[7]);  // Глава 3 
    book2List.append(book2Chapters[3]);  // Глава 4
    book2List.append(book2Chapters[4]);  // Глава 5
    book2List.append(book2Chapters[6]);  // Глава 6
    book2List.append(book2Chapters[8]);  // Приложение A
    book2List.append(book2Chapters[9]);  // Приложение B
    book2List.append(book2Chapters[10]); // Приложение C
    book2List.append(book2Chapters[11]); // Приложение D

    const book5List = book5.querySelector('ul');
    const book5Chapters = book5List.querySelectorAll('li');
    
    book5List.append(book5Chapters[0]); // Введение
    book5List.append(book5Chapters[1]); // Предисловие
    book5List.append(book5Chapters[7]); // Глава 1
    book5List.append(book5Chapters[3]); // Глава 2
    book5List.append(book5Chapters[4]); // Глава 3
    book5List.append(book5Chapters[2]); // Глава 4
    book5List.append(book5Chapters[5]); // Глава 5
    book5List.append(book5Chapters[6]); // Глава 6


    // === 6. В ШЕСТОЙ КНИГЕ ДОБАВИТЬ ГЛAВУ "Глава 8: За пределами ES6" ===
    const book6Title = book6.querySelector('a');
    if (book6Title) {
        book6Title.textContent = "Книга 6. ES6 и не только";
    }

    const book6List = book6.querySelector('ul');
    const book6Chapters = book6List.querySelectorAll('li');

    const newChapter = document.createElement('li');
    newChapter.textContent = 'Глава 8: За пределами ES6';

    book6List.insertBefore(newChapter, book6Chapters[7]);

});
