let form = document.getElementById("form")
let entry = document.getElementById("entry")
let toDoList = document.getElementById("todo-list")
let alert = document.querySelector('.alert')
let clearBtn = document.querySelector(".clear-btn")
let cancelBtn = document.querySelector(".cancel-btn")
let editBtn = document.querySelector(".edit-btn")
let submitBtn = document.querySelector(".submit-btn")

let editElement = null 

retrieveFromLocalStorage()

function retrieveFromLocalStorage(){
    const myNotes = localStorage.getItem("notes")
    const notes = JSON.parse(myNotes) || []

    console.log(notes)
    notes.forEach((note) => {
        var li = document.createElement("li")
        li.classList.add("list-item")

        var p = document.createElement("p")
        p.className=  "text"
        p.innerText = note.data
        
        var editIcon = document.createElement("i")
        editIcon.className= "bx bxs-edit bx-sm"
        editIcon.innerText = "edit"

        editIcon.addEventListener("click" , (e)=>{
          let p = editIcon.previousElementSibling 
          let text = p.innerText
          entry.value = text

        //   submitBtn.style.display = "none"
            submitBtn.classList.add("d-none")
            editBtn.classList.remove("d-none")
            cancelBtn.classList.remove("d-none")

            const boxes = document.querySelectorAll(".bx")
            for (let box of boxes) {
                box.classList.add("d-none")
            }
            clearBtn.classList.add("d-none")

            editElement = p

            
        })

        var checkIcon = document.createElement("i")
        checkIcon.className = "bx bx-check bx-sm"

        if (note.checked) {
            checkIcon.innerText= "Uncheck"
            li.classList.add("liChecked")
            
        }else {
            checkIcon.innerText= "check"

        }

        checkIcon.addEventListener("click" , ()=>{
            var checked = li.classList.toggle("liChecked")
            if (checked) {
                checkIcon.innerText = "UnCheck"
            }else {
                checkIcon.innerText = "check"

            }
            storeInLocalStorage()
        })
        var deleteIcon = document.createElement("i")
        deleteIcon.className = "bx bxs-trash bx-sm"
        deleteIcon.innerText = "delete"

        deleteIcon.addEventListener("click" , ()=>{
            li.remove()
            displayAlert("Deleted Successfully" , "alert-success")
            if (!toDoList.children.length){
                clearBtn.classList.add("d-none")
            }
            storeInLocalStorage()
        })


        li.appendChild(p)
        li.appendChild(editIcon)
        li.appendChild(checkIcon)
        li.appendChild(deleteIcon)

        toDoList.append(li)
        clearBtn.classList.remove("d-none")
    })
}

function storeInLocalStorage(){

    const lis = document.getElementsByClassName("list-item")
    const myNotes = Array.from(lis)
    const notesData = myNotes.map((note) => {
        const text = note.querySelector(".text").innerText
        const checked = note.classList.contains("liChecked")

        const data = {
            "data" : text , 
            "checked" : checked
        }
        return data 
    })
    // console.log(notesData)
    const notesDataString = JSON.stringify(notesData)
    localStorage.setItem("notes" , notesDataString)
}
// const friends = ["ahmed" , "mohamed", "ali"]
// const x = friends.map((name) => {
//     return name[0].toUpperCase() + name.slice(1)
// })
// console.log(x)

// const actualFriends = friends.filter((name)=>{
//     if (name[0] === "m"){
//         return false
//     }else {
//         return true
//     }

// })
// console.log(actualFriends)

let groupname = localStorage.getItem("groupname")
document.querySelector(".title").innerText = groupname
// localStorage.setItem("groupname" , "php100")

cancelBtn.addEventListener("click", ()=>{
    entry.value = ""
    editBtn.classList.add("d-none")
    cancelBtn.classList.add("d-none")
    submitBtn.classList.remove("d-none")

    let boxes = document.querySelectorAll(".bx")

    for (let box of boxes) {
        box.classList.remove("d-none")
    }
    clearBtn.classList.remove("d-none")
    editElement= null

    displayAlert("Operation Canceled" , "alert-success")


})

editBtn.addEventListener("click" , ()=>{
    editElement.innerText = entry.value
    entry.value = ""
    editBtn.classList.add("d-none")
    cancelBtn.classList.add("d-none")
    submitBtn.classList.remove("d-none")

    let boxes = document.querySelectorAll(".bx")

    for (let box of boxes) {
        box.classList.remove("d-none")
    }
    clearBtn.classList.remove("d-none")
    editElement = null

    displayAlert("Element updated successfully" , "alert-success")
    storeInLocalStorage()

})

function displayAlert(message , className) {
    alert.innerText = message
    alert.classList.add(className)

    setTimeout(()=>{
        alert.innerText = ""
        alert.classList.remove(className)
    } , 2000)
}
clearBtn.addEventListener("click" , ()=>{
    toDoList.innerText = ""
    clearBtn.classList.add("d-none")
    displayAlert("Items Cleared" , "alert-success")
    storeInLocalStorage()
})



form.addEventListener("submit" , (e)=>{
    e.preventDefault()

    var data = entry.value 

    if (data === "") {
        displayAlert("Data mustn't be empty" , "alert-danger")
       
    }else {

        var li = document.createElement("li")
        li.classList.add("list-item")

        var p = document.createElement("p")
        p.className=  "text"
        p.innerText = data
        
        var editIcon = document.createElement("i")
        editIcon.className= "bx bxs-edit bx-sm"
        editIcon.innerText = "edit"

        editIcon.addEventListener("click" , (e)=>{
          let p = editIcon.previousElementSibling 
          let text = p.innerText
          entry.value = text

        //   submitBtn.style.display = "none"
            submitBtn.classList.add("d-none")
            editBtn.classList.remove("d-none")
            cancelBtn.classList.remove("d-none")

            const boxes = document.querySelectorAll(".bx")
            for (let box of boxes) {
                box.classList.add("d-none")
            }
            clearBtn.classList.add("d-none")

            editElement = p

            
        })

        var checkIcon = document.createElement("i")
        checkIcon.className = "bx bx-check bx-sm"
        checkIcon.innerText= "check"

        checkIcon.addEventListener("click" , ()=>{
            var checked = li.classList.toggle("liChecked")
            if (checked) {
                checkIcon.innerText = "UnCheck"
            }else {
                checkIcon.innerText = "check"

            }
            storeInLocalStorage()
        })
        var deleteIcon = document.createElement("i")
        deleteIcon.className = "bx bxs-trash bx-sm"
        deleteIcon.innerText = "delete"

        deleteIcon.addEventListener("click" , ()=>{
            li.remove()
            displayAlert("Deleted Successfully" , "alert-success")
            if (!toDoList.children.length){
                clearBtn.classList.add("d-none")
            }
            storeInLocalStorage()
        })


        li.appendChild(p)
        li.appendChild(editIcon)
        li.appendChild(checkIcon)
        li.appendChild(deleteIcon)

        toDoList.append(li)

        entry.value=  ""


        displayAlert("Created Successfully"  , "alert-success")
       
        clearBtn.classList.remove("d-none")
        storeInLocalStorage()
    }
}) 
console.log(form)

// API : Application programming Interface 
// console 
// document dom
// window 
// setTimeout(()=>{
// console.log("hello")
// },2000)

// window.setTimeout
// var x = "hello"
// console.log( window.x)
// localStorage.setItem("groupname" , "php100")