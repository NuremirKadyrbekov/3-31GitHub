let insert = document.getElementById('insert')

document.addEventListener('keydown',(event)=>{
    insert.innerHTML = `
         <div>
         ${event.key}</div>
         <p>${event.keyCode}</p>
         <p>${event.code}</p>
    
    `
})