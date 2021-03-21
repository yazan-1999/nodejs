
// const readline = require('readline')

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

/// данные

let data = {

  users: [
    {
      name: "John",
      address: {
        city: "GoodTown",
        country: "Amazing States of Unity"
      }
    },
    {
      name: "Marry",
      address: {
        city: "JobTown",
        country: "Employment Emirates"
      }
    },
  ]

}

// console.log(data.users[1].address.city)





//путь приходящий с фронтенда(юзером)
let path = "users.1.address.city"//rl.question()



let fullpath //переменная для ответа приоброзовоного пути



let re = /\.\w*?/g //регулярное вырожение для поиска по разделяющей точки

let segments = path.split(re)// забитие строки на подстроки по точкам

// console.log(segments.length)

let data_number = Number(segments[1]) // приоброзовываю сразу в номер users.(1).address.cit 



// цикл для работы с входящими данными переводя их в код
for (let i = 2; i < segments.length; i++) {
  // console.log(segments[i])

  switch (segments[i]) {
    case "name":
      fullpath = data.users[data_number].name;
      break;
    case "address":
      switch (segments[3]) {
        case "city":
          // console.log(segments)
          fullpath = data.users[data_number].address.city;
          break;
        case "country": {
          fullpath = data.users[data_number].address.country;
          break;
        }
      }
    break;
    default:
      console.log("результат: ");
  }
}
// console.log(data_number)

if (fullpath !== undefined) {
  console.log(fullpath)
} else {
  console.log("Ошибка данных !!!")
}



