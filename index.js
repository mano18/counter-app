// document.getElementById("count-el").innerText=5

let countEl=document.getElementById('count-el')

let saveEl=document.getElementById('save-el')
console.log(countEl)

let count=0
function increment(){
    //console.log("clicked")
    count=count+1
    countEl.innerText=count
    //console.log(count)

}

function save(){
    let countStr= count + "  - "
    saveEl.textContent+=countStr
      
    console.log(saveEl)
    countEl.innerText=count=0
}

