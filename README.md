# Расчёт коэффициентов лавинного эффекта в блоковом шифре AES

## Как запустить программу (без установки):

1. Копируем содержимое файла index.js
2. Вставляем скопированный код на сайте: [Онлайн-компилятор JavaScript](https://www.programiz.com/javascript/online-compiler/)
3. Вносим свои данные из лабораторной работы (см. пункт "Как пользоваться программой")
4. Нажимаем кнопку "Run"
5. Получаем результаты

## Как пользоваться программой:

1. Строку withoutOneData заполняем данными, полученными в результате шифрования без "1"
https://github.com/dumbus/avalancheEffect/blob/84d124afc5a085e9e13f6bf49884e1ed005e3986/index.js#L2-L13

2. Строку withOneData заполняем данными, полученными в результате шифрования с "1"
https://github.com/dumbus/avalancheEffect/blob/84d124afc5a085e9e13f6bf49884e1ed005e3986/index.js#L16-L27

3. Запускаем программу

## Требования к предоставляемым данным:

* Переменная с данными должна содержать 10 раундов шифрования, каждый раунд шифрования отделяется от предыдущего переносом строки

* Каждая раунд шифрования проверяется на наличие недопустимых символов (допустимыми символами считаются: `abcdef0123456789`)

* Каждый раунд шифрования должен содержать 32 значащих символа (пробелы в обрезаются и в учёт не идут)

> Если в данных допущена ошибка, программа выведет в консоль соответствующее сообщение (с указанием блока данных (с "1" или без "1"), номера строки и типа допущенной ошибки).

### Примеры данных, предоставленных с ошибками:

1. Неверное количество строк:

```
const withoutOneData = `
  7109cc53 ff266014 847ee03a 5f46bd42
  b831192c 60ddbdfa b0e7e6ad d84b3370
`;
```

*Скриншот с ошибкой:*  
![Неверная длина массива](https://user-images.githubusercontent.com/79057837/232645642-9c334d90-5102-430e-8a53-fe40e08af71f.png)

2. Использование недопустимых символов:
```
const withoutOneData = `
  абвгдежз абвгдежз абвгдежз абвгдежз
  абвгдежз абвгдежз абвгдежз абвгдежз
  абвгдежз абвгдежз абвгдежз абвгдежз
  абвгдежз абвгдежз абвгдежз абвгдежз
  абвгдежз абвгдежз абвгдежз абвгдежз
  абвгдежз абвгдежз абвгдежз абвгдежз
  абвгдежз абвгдежз абвгдежз абвгдежз
  абвгдежз абвгдежз абвгдежз абвгдежз
  абвгдежз абвгдежз абвгдежз абвгдежз
  абвгдежз абвгдежз абвгдежз абвгдежз
`;
```

*Скриншот с ошибкой:*  
![Недопустимые символы](https://user-images.githubusercontent.com/79057837/232645785-91a88cf4-3a42-4184-85a9-f6ca59aa0836.png)

3. Недостаточное количество значащих символов:
```
const withoutOneData = `
  7109cc53 ff266014
  b831192c 60ddbdfa
  4b9f356e 6f2ba661
  7e239dee d474e285
  2239f94d 8cd6e0c0
  17faf007 98b00e89
  ac4de44a abfb129a
  934b20a3 843df823
  a846aaec 0b55b0eb
  eb53dc79 6094a398
`;
```

*Скриншот с ошибкой:*  
![Неверная длина строки](https://user-images.githubusercontent.com/79057837/232645806-6200b73d-5c9c-4cde-afd2-122261c2c538.png)

### Примеры данных, предоставленных без ошибок:

```
const withoutOneData = `
  7109cc53 ff266014 847ee03a 5f46bd42
  b831192c 60ddbdfa b0e7e6ad d84b3370
  4b9f356e 6f2ba661 721c1c02 e14ea7d2
  7e239dee d474e285 fb182a32 23a7fb71
  2239f94d 8cd6e0c0 976c7642 d4bd7c85
  17faf007 98b00e89 517f11d3 d536dab8
  ac4de44a abfb129a b2c4462c 2da9871c
  934b20a3 843df823 0e507c1a 36f2c549
  a846aaec 0b55b0eb 3aae62de 5a37721a
  eb53dc79 6094a398 022383e8 e781576a
`;
```
*Скриншот с результатами работы программы:*  
![Full Example Result](https://user-images.githubusercontent.com/79057837/232645903-0beb95d3-c4b7-4ebf-8f5b-73b9cfad25a5.png)
