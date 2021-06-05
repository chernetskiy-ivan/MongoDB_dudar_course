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