
const form = document.querySelector("#form-list")
const btn = document.querySelector("#btn")
const list = document.querySelector("ul")

function addItem(event){
    event.preventDefault()
    let value = document.querySelector("#fitem").value
    if(value){
        form.reset()

        const li = document.createElement("li")
    
        li.setAttribute("id", "li-elem")
        li.textContent = value
        list.appendChild(li)
        
        let del_btn = document.createElement("button")
        del_btn.addEventListener("click", function(){
            list.removeChild(li)
            
        })

        del_btn.setAttribute("id", "del_button")
        del_btn.textContent = "Del"
        li.appendChild(del_btn)
        
        
        
    }
    
} 
btn.addEventListener("click", addItem)


