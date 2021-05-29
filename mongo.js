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