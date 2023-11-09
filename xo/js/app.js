let player = "x"
let Heding = document.querySelector(".heding")


function Begin(id){ 
    let element = document.getElementById(id)
    if(player === 'x' && element.innerHTML === ''){
        element.innerHTML="x"
        element.style.fontSize="50px"
        player = 'o'
        Heding.innerHTML= "O turn"
    }else if(player === 'o' && element.innerHTML === ''){
        element.innerHTML="o"
        element.style.fontSize="50px"
        player = 'x'
        Heding.innerHTML= "X turn"
    }
    Result()
    let clear = document.querySelector(".btn")
    clear.addEventListener("click" , function(){
    element.innerHTML="";
    Heding.innerHTML=" X O GAME"
    winner.innerHTML="the winner is"
    winner.style.fontSize="25px"
    player = "x"
    
})
   
};

let arr =[]
let winner= document.getElementById("winner")
function Result() {
    for (let i = 1; i < 10; i++) {
        arr[i]=document.getElementById('player' + i).innerHTML
    }
    if(arr[1] == arr[2] && arr[2]== arr[3] && arr[1] != ""){
    winner.innerHTML= `${arr[1]} is the winner <i class="fa-solid fa-trophy"></i>`
    winner.style.fontSize="50px"
    }
    else if (arr[4] == arr[5] && arr[5]== arr[6] && arr[5] != ""){
        winner.innerHTML= `${arr[4]} is the winner <i class="fa-solid fa-trophy"></i>`
        winner.style.fontSize="50px"
    }
    else if (arr[7] == arr[8] && arr[8]== arr[9] && arr[9] != ""){
        winner.innerHTML= `${arr[7]} is the winner <i class="fa-solid fa-trophy"></i>`
        winner.style.fontSize="50px"
    }
    else if (arr[1] == arr[4] && arr[4]== arr[7] && arr[1] != ""){
        winner.innerHTML= `${arr[7]} is the winner <i class="fa-solid fa-trophy"></i>`
        winner.style.fontSize="50px"
    }
    else if (arr[2] == arr[5] && arr[5]== arr[8] && arr[2] != ""){
        winner.innerHTML= `${arr[5]} is the winner <i class="fa-solid fa-trophy"></i>`
        winner.style.fontSize="50px"
    }
    else if (arr[3] == arr[6] && arr[6]== arr[9] && arr[3] != ""){
        winner.innerHTML= `${arr[6]} is the winner <i class="fa-solid fa-trophy"></i>`
        winner.style.fontSize="50px"
    }
    else if (arr[1] == arr[5] && arr[5]== arr[9] && arr[1] != ""){
        winner.innerHTML= `${arr[5]} is the winner <i class="fa-solid fa-trophy"></i>`
        winner.style.fontSize="50px"
    }
    else if (arr[3] == arr[5] && arr[5]== arr[7] && arr[3] != ""){
        winner.innerHTML= `${arr[7]} is the winner <i class="fa-solid fa-trophy"></i>`
        winner.style.fontSize="50px"
    }
}