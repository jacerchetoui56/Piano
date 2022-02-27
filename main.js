const keys = ['s','e','d','r','f','t','g','h','u','j','i','k','l','o','m',]
const sounds = document.querySelectorAll("audio")
const elms = document.querySelectorAll('[data-sound]')

console.log(elms[4].getAttribute("data-sound"))

elms.forEach((element)=>{
    element.addEventListener('click',()=>{
        console.log(element.getAttribute("data-sound"))
        playsound(element.getAttribute('data-sound'));
    })
})

function playsound(n){
    console.log(sounds[n].id)
    sounds[n].currentTime = 0
    sounds[n].play()
    setTimeout(() => {
        sounds[n].pause()
    }, 1300);
}

document.addEventListener('keypress',(event)=>{
    let key = event.key;
    for(let i=0;i<keys.length;i++){
        if(key == keys[i]) playsound(i);
    }
})


// sounds.forEach((sound)=>{
    //     sound.currentTime = 0
//     sound.play()
//     setTimeout(() => {
    //         sound.pause()
    //     }, 1000);
    // })
    
    
    
    // const c4 = document.querySelector("#c4")
    // const c4sound = document.querySelector("#c4sound")
    
    // c4.addEventListener('click', ()=>{
    //     c4sound.currentTime = 0;
    //     c4sound.play();
    //     setTimeout(()=>{
    //         c4sound.pause()
    //     } ,1000)
    // })