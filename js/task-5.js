/**
 *? Напишіть через свіч пошук автора мови програмування.
 *? Пишемо назву мови у шаблонному рядку отримує відповідь
 *? мова та автор
 *? PHP Расмус Лердорф
 *? C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
 *? Swift Кріс Латтнер
 *? JS Брендан Ейх
 *? Java Джеймс Гослінг
 *? Python Гвідо ван Россум
 */

function findAuthor(author) {
    switch (author) {
        case "C#":
            return "група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота";
        case "PHP":
            return "Расмус Лердорф";
        case "Swift":
            return "Кріс Латтнер";
        case "JS":
            return "Брендан Ейх";
        case "Java":
            return "Джеймс Гослінг";
        case "Python":
            return "Гвідо ван Россум";
        default:
            return "None";
    }
    
}
 console.log(findAuthor("dfd"));