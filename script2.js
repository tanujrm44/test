/*const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 370, owners: ["Michael"] },
]

dogs.forEach(dog => {
  dog.recommendedFood = (dog.weight ** 0.75 * 28).toFixed(2)
})

const sarahDog = dogs.find(dog => dog.owners.includes("Sarah") === true)
sarahDog.recommendedFood * 0.9

const isEatingOk = dog =>
  dog.curFood * 0.9 < dog.recommendedFood &&
  dog.recommendedFood < dog.curFood * 1.1

//console.log(isEatingOk(dogs[3]))

//if (isEatingOk(sarahDog)) {
//  console.log("sarah's dog is eating ok")
//} else {
//  console.log("sarah's dog is eating too much or too less")
//}

const dogOwnersEatingOk = []
const dogOwnersNotEatingOk = []

dogs.map(dog => {
  if (isEatingOk(dog)) {
    dogOwnersEatingOk.push(...dog.owners)
  } else {
    dogOwnersNotEatingOk.push(...dog.owners)
  }
})

console.log("eating ok", dogOwnersEatingOk)
console.log("not eating ok", dogOwnersNotEatingOk)

console.log(`${dogOwnersEatingOk}'s dogs eat ok`)
console.log(`${dogOwnersNotEatingOk}'s dogs do not eat ok`)
*/

//*****************************
/*
const johnObj = {
  name: "John",
  age: "25",
  desc: function (job, company) {
    console.log(
      `This is ${this.name} of age ${this.age}. I do ${job} in ${company}`
    )
    //console.log(this)
  },
}

//johnObj.desc()

const janeObj = {
  name: "Jane",
  age: "23",
}

//johnObj.desc.call(janeObj, "development", "apple")

const janeObjDev = johnObj.desc.bind(janeObj, "development")

janeObjDev("apple")
*/

//********************************************* */

const courses = [
  { name: "React", type: "Frontend" },
  { name: "Angular", type: "Frontend" },
  { name: "Vue", type: "Frontend" },
  { name: "C#", type: "Backend" },
  { name: "Java", type: "Backend" },
  { name: "Oracle", type: "Database" },
  { name: "MySQL", type: "Database" },
]

function groupBy(arr) {
  let list = {}

  arr.forEach(el => {
    if (list[el.type]) {
      list[el.type].push(el)
    } else {
      list[el.type] = [el]
    }
  })
  return list
}

console.log(groupBy(courses))
