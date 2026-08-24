let userInput = document.getElementById("userContentInput")
let searchInput = document.getElementById("searchInput")
let homeContent = document.getElementById("homeContent")

let items = []

if( localStorage.getItem("todoNTI") != null ){
    items = JSON.parse( localStorage.getItem("todoNTI") )
    displayItem()
}

function addItem() { 

    if (userInput.value == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter Value!",
        });

    }else{

        items.push(userInput.value)
        displayItem()
    
        localStorage.setItem("todoNTI" , JSON.stringify(items) )

         Swal.fire({
            title: "Added Successful!",
            icon: "success",
            draggable: true
        });
    }
}


function displayItem(){
    let container = ``

    for(let i = 0 ; i < items.length ;  i++){
        
        container += `<div class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
                        <p id="itemContent" class="m-0 p-0">Content:  ${ items[i] } </p>
                        <i class="fa-sharp fa-solid fa-trash" onclick="deleteItem(${i})"></i>
                    </div>`

    }

    homeContent.innerHTML = container
}


function deleteItem(index){

    items.splice( index ,1)
    displayItem()
    localStorage.setItem("todoNTI" , JSON.stringify(items) )

}


searchInput.addEventListener("input" , function(event){
    searchItem(event.target.value)
})



function searchItem(searchValue){
    let container = ``

    for(let i = 0 ; i < items.length ;  i++){
        
        if(  items[i].toLowerCase().includes(searchValue.toLowerCase())  ){
            
            container += `<div class="home-item mb-2 rounded-pill text-dark mx-auto w-50 bg-danger d-flex justify-content-between align-items-center">
                            <p id="itemContent" class="m-0 p-0">Content:  ${ items[i].toLowerCase().replace(searchValue.toLowerCase() , `<span class="text-white fw-bold">${searchValue}</span>` ) } </p>
                            <i class="fa-sharp fa-solid fa-trash" onclick="deleteItem(${i})"></i>
                        </div>`
        }

    }

    homeContent.innerHTML = container
}














































// local storage , cookies , session (store)
//   5MB-10MB    ,   4KB   ,  5MB-10MB
//     no server ,  yes server , no server
//            USE

// local storage
// localStorage.setItem("welcome" , "hello every one")
// localStorage.removeItem("welcome")
// localStorage.clear()
// localStorage.length
// console.log(  localStorage.getItem("welcome44444444444")   ) // null
// localStorage.key(0)

// let age = [10 , 15 , 20 , 25]

// console.log( localStorage.setItem("hi" , JSON.stringify(age))  );
// console.log(   JSON.parse(   localStorage.getItem("hi") )  )
