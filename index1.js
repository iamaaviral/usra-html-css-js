// let text = fetch('xyz.com').then().then()

// var btnText = "send"


// js can change??? all the html, all html attributes, all CSS,
// remove Element, remove attribut, add new html and attr


// console.log(document.documentURI)

// console.log(document.title)

// setTimeout(() => {
//     document.title = "new title"
// }, 3000)

// ==========================selecting any element=====================

// getElementById
// let headerElement = document.getElementById("header-title")
// let listElement = document.getElementsByClassName("list-group-item")
// let btnElement = document.getElementsByTagName("table")
// let header1 = document.querySelector("#items .list-group-item")
// let listGroup = document.querySelectorAll("#items .list-group-item")

// var itemList = document.querySelector("#items")
// console.log(itemList.parentElement)

// console.log(itemList.childNodes)
// console.log(itemList.children)
// firstChild (includes spaces)
// firstElementChild (includes spaces)

// lastChild (includes spaces)
// lastElementChild (includes spaces)

//nextSibling
//nextElementSibling

//previousSibling
//previousElementSibling

///////////////////////////creatingElement///////////////////////////

// let newDiv = document.createElement('div')
// newDiv.className = "hello"
// newDiv.id = "hello1"
// newDiv.setAttribute('title', 'hello Div')

// // // newDiv.innerText="this is a text"
// let newBtn = document.createElement('button')
// newBtn.className = "btn"
// newBtn.id = "btn1"

// let newBtn1 = document.createElement('button')
// newBtn1.className = "btn"
// newBtn1.id = "btn1"
// // //creating text nides
// // let newText = document.createTextNode("This is a text")

// newDiv.appendChild(newBtn)
// newDiv.appendChild(newBtn1)

// console.log(newText)
// console.log(newDiv)
// ---------------------------------

// <li class="list-group-item">
// <span>Item 1 </span>
// <button class="delete">X</button>
// </li>
// let li = document.createElement("li")
// li.className = "list-group-item"

// let span = document.createElement("span")
// span.innerText = document.getElementById("item-text").value

// let btn = document.createElement("button")
// btn.className = "delete"
// btn.innerText = "X"

// li.appendChild(span)
// li.appendChild(btn)

// console.log(li)

// ================================Event handlers===============================
// click a mouse
// mouseover
// mouseout
// input field is changed
// user presses a keyboard key
// user releases a keyboard key
//onload

// function onLoadFunction() {
//     alert('1')
// }

// function btnClicked() {
//     alert("clicked the button")
// }

// // function keyPressed() {

// // }

function submitForm(e) {
    e.preventDefault()
    let li = document.createElement("li")
    li.className = "list-group-item"
    
    let span = document.createElement("span")
    span.innerText = document.getElementById("item-text").value
    
    let btn = document.createElement("button")
    btn.className = "delete"
    btn.innerText = "X"
    
    li.appendChild(span)
    li.appendChild(btn)
    
    console.log(li)

}
// function onLoadFunction() {
//     alert('1')
// }
// document.querySelector("body").addEventListener("onload", onLoadFunction)
document.getElementById("button").addEventListener("click", submitForm)
// console.log(bodyElement)