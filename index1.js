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
    
    let listItem = document.getElementById("items")
    listItem.appendChild(li)

    document.getElementById("item-text").value = ""
}

document.getElementById("button").addEventListener("click", (e) => submitForm(e) )
// addNumbers({event: {screenX: 45}})

//event delegation

// ======= event bubbling
// ======= event capturing

// function addNumbers(x,y) {
//     console.log(x+y)
// }
// // var name = "aviral"

// function e() {
//     console.log("aviral")
// }

// let child = document.querySelector(".child");
// child.addEventListener("click", (e) => {
//     alert(1)
// })


// let main1 = document.querySelector(".main1");
// main1.addEventListener("click", (e) => {
//     alert(2)
// })

// let main = document.querySelector(".main");
// main.addEventListener("click", (e) => {
//     alert(3)
// })


let listWrapper = document.getElementById('items')

listWrapper.addEventListener("click", deleteItem) ;

function deleteItem(e) {
    // location.reload()
    // location.assign('www.google.com')
    // location.href = "https://www.google.com"
    // location.replace("https://www.google.com")
        // if(e.target.nodeName === 'BUTTON') {
        //     console.log(e.target)
        //     e.target.parentNode.remove()
        // }
}



////////////////////////////////////////BOM(BROWSER OBJECT MODEL)////////////////////////////////////////

//NAVIGATOR
// console.log(window.navigator === navigator)

// console.log(navigator.appVersion)


//LOCATION
// console.log(location.href)

// history.go(5)
// console.log(history)