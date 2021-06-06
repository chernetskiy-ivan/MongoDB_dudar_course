//здесь я буду писать команды которые будут вставлять в cmd для разбора того как они работатют 

//добаляем js объект в DB
db.users.insertOne(
    {
        "name":"Tom",
        "email":"test@mail.ru",
        "age":19,
        "hasCar":true,
        "favColors":["Зеленый", "Красный", "Желтый"],
        "child": {
            "name": "Jack",
            "surname": "Rich",
            "age": 5
        }
    }
)

//добавляю еще одного юзера
db.users.insertOne(
    {
        _id: 2,
        "name":"Pirs",
        "email":"test@mail.ru",
        "age":44,
        "hasCar":false,
        "favColors":["Черный", "Желтый"],
        "child": {
            "name": "Mike",
            "surname": "Philis",
            "age": 22
        }
    }
)

//добавляю юзера без одного старого поля, но с одним новым
db.users.insertOne(
    {
        "name":"Pirs",
        "email":"test@mail.ru",
        "age":44,
        "hasCar":false,
        "favColors":["Черный", "Желтый"],
        "password": "1234567"
    }
)

//insertMany()
db.users.insertMany([
    {
        "name":"Обоба",
        "email":"aboba@mail.ru",
        "age":29,
        "hasCar":false,
        "favColors":["Черный", "Желтый"],
        "password": "aswe1234567"
    },
    {
        "name":"Василий",
        "email":"vasi@mail.ru",
        "age":32,
        "hasCar":true,
        "favColors":["Черный", "Желтый"],
        "password": "1234567btrhtr"
    }
])

//выборка данных из коллекции
db.users.find({}, {_id: 0}).limit(2)

//сортировка данных по age по возрастанию (если -1 то по убыванию)
db.users.find({},{_id: 0}).sort({age: 1})

//сортировка данных по age и по email (сначало сортируется age и затем доки в которых одинаковый email сортируем их по email)
db.users.find({},{_id: 0}).sort({age: 1, email: -1})

//фильтруем документы и достаем по первому параметру в методе find
db.users.find({age: 44},{_id: 0})

//фильтруем или по age или по email
db.users.find({$or: [{age: 21},{email: "admimn@mail.ru"}]},{_id: 0})

//сортировка
db.users.find({$or: [{age: 44},{email: "admimn@mail.ru"}]},{_id: 0}).sort({email: 1})

//выборка на меньше или больше по какому-то критерию $lt и $gt соответсвенно($lte и $gte добавляет еще и =)
db.users.find({$or: [{age: {$lt: 40}}]},{_id: 0})

//достаю данные с определленными именами
db.users.find({name: {$in: ["Tom", "Обоба"]}}, {_id: 0})

//вывожу объекты с определенными полями
db.users.find({child: {$exists: true}}, {_id: 0})

//достаю объект с полем определенной длинны
db.users.find({favColors: {$size: 2}}, {_id: 0})

//достаю объект с значением в поле с определенным индексом
db.users.find({"favColors.1": "Желтый"}, {_id: 0})


//обновление и удаление данных

//db.users.updateOne({фильтр}, {устанавливаем значение})
db.users.updateOne({age: 32}, {$set: {age: 33}})

//изменяю не первый объект с подходящим параметром, а все
db.users.updateMany({age: 44}, {$set: {age: 43}})

//замена объекта
db.users.replaceOne({age: 33}, {name: "Kiril", age: 34, hasCar: 23, password: "234", hasWife: true})

//удаление одного объекта
db.users.deleteOne({age: 29})


//Объединение запросов в БД
db.users.bulkWrite([
    {
        insertOne: {
            "document": {name: "Mike", age: 45, email: "mike@mail.ru"}
        }
    },
    {
        deleteOne: {
            filter: {age: 43}
        }
    },
    {
        updateOne: {
            filter: {age: 19},
            update: {$set: {age: 18, name: "Ivar"}}
        }
    },
    {
        replaceOne: {
            filter: {name: "Kiril"},
            replacement: {name: "Кирилл", age: 33, email: "kiril@mail.ru"}
        }
    }
])


//Поиск на совпадение в тексте

//создаю новую коллекцию
db.articles.insertMany([
    {
        "title": "Акции компании растут",
        "anons": "Компании стремительно нобирают обороты",
        "text": "Рост фкций по всем фронтам",
        "date": new Date('2020-11-11')
    },
    {
        "title": "Открытие кофейни",
        "anons": "Новая кофей была открыта в городе Чишки",
        "text": "Все жители страны празднуют этот день!",
        "date": new Date('2021-11-11')
    },
    {
        "title": "Новости города",
        "anons": "Подставки для компьютеров",
        "text": "Новые подставки для компьютеров были завезены в магази",
        "date": new Date('2022-11-11')
    }
])