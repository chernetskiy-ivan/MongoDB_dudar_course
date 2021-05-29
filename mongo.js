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