var ingredientsAll = []
var ingredients = []
var fruits = []
var roofs = []
var glass = "250ml"
var index = 0

var fruitsFilter = ["Morango", "Banana", "Kiwi"]
var roofsFilter = ["Cobertura de Morango", "Chocolate", "Leite Condensado"]

var message = "https://api.whatsapp.com/send/?phone=5585998381999&text=&type=phone_number&app_absent=0"

const select = document.querySelector("select")
const name = document.getElementById("name")
const burgh = document.getElementById("burgh")
const street = document.getElementById("street")
const home = document.getElementById("home")
const add = document.getElementById("add")

var selected = select.options[select.selectedIndex]

function setItems(i, content) {
  if (ingredientsAll.length < i) {
    ingredientsAll.push(content.target.name)
    if (fruitsFilter.includes(content.target.name)) {
      fruits.push(content.target.name)
    } else if (roofsFilter.includes(content.target.name)) {
      roofs.push(content.target.name)
    } else {
      ingredients.push(content.target.name)
    }
  }
}

function setCount(i) {
  let max = i
  add.innerText = `Você pode adicionar ${max}`
  if (ingredientsAll.length < i) {
    max = max - ingredientsAll.length
    add.innerText = `Você pode adicionar ${max}`
  } else {
    add.innerText = `Você pode adicionar 0`
  }
}

select.addEventListener("change", (e) => {
  selected = select.options[select.selectedIndex]
  add.innerText = `Você pode adicionar ${selected.value}`
})

var buttons = document.querySelectorAll("button").forEach((e) => {
  e.addEventListener("click", (e) => {
    setItems(selected.value, e)
    setCount(selected.value)
    glass = selected.innerText
    e.target.style.setProperty("background","rgba(49, 24, 57, .40)")
    e.target.style.setProperty("color", "#F9F2FC")
  })
})

const send = document.querySelector(".send").addEventListener("click", (e) => {
  
  var api = `*Cliente:* ${name.value}
*Bairro:* ${burgh.value}
*Rua:* ${street.value}
*Casa:* ${home.value}
*Copo:* ${glass}
*Adicionais:* ${ingredients == 0 ? "Nenhuma" : ingredients}
*Coberturas:* ${roofs.length == 0 ? "Nenhuma" : roofs}
*Frutas:* ${fruits.length == 0 ? "Nenhuma" : fruits}
  `
  message = encodeURI(`https://api.whatsapp.com/send/?phone=5585998381999&text=${api}&type=phone_number&app_absent=0`)
  window.open(message, '_blank')
})
