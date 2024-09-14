const button = document.querySelectorAll(".btn");
const input = document.querySelector("#searchbox");
const boxes = document.querySelectorAll(".box");

input.addEventListener('keyup',(e)=>{
    const searchtext = (e.target.value.toLowerCase().trim());
    boxes.forEach((box)=>{
        const boxdata = box.dataset.item;
        if(boxdata.includes(searchtext)){
               box.style.display ='block';
               
        }
        else{
            box.style.display = 'none'
        
    
        }
    });

});


