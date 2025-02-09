// sound logic
let sound_icon = document.querySelector('nav.screen i');
let audio = new Audio("sond/Coast - Anno Domini Beats.mp3");
sound_icon.addEventListener('click',()=>{
    sound_icon.classList.toggle('fa-volume-xmark');
    sound_icon.classList.toggle('fa-volume-high');
    let isplay = sound_icon.classList.contains('fa-volume-high');
    if(isplay){       
        audio.play();
        audio.volume = 0.5;
        audio.loop = true;
        audio.muted = false;
    }else{
            // audio.pause();
            audio.muted = true;
        }
})



// Music FUN..
function music() {
    if(audio.muted){
        sound_icon.classList.add('fa-volume-xmark');
        sound_icon.classList.remove('fa-volume-high');
    }else{
        sound_icon.classList.remove('fa-volume-xmark');
        sound_icon.classList.add('fa-volume-high');
    }
    audio.play();
    audio.volume = 0.5;
    audio.loop = true;
}

// Stop Chating when click!!!
// function StopChating() {
    
// }



// mesagge logic.
let load = document.querySelector('.screen.lowr .load');
let app = document.querySelector('.screen.about');

function generateMesagges(MesNum,side,img,...MesText){
    let messages=[];
    let Side = document.createElement('div');
    let chat_box = document.createElement('div');
    chat_box.className ="chat-box";

    // Side..
    if(side == "l"){
        Side.classList.add('left')
        load.classList.remove("writing")
        
    }else if(side == "r"){
        Side.classList.add('right')
        load.classList.add("writing")
        
    }else(
        Side.classList.add('left')

    )
    Side.appendChild(chat_box)

    // Add img
    if(img){
        let link = document.createElement('a');
        link.href = MesText[1];
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.innerText = [2]
        let image = document.createElement('img');
        image.src = MesText[0];
        messages.push(image)
        messages.push(link)
    }

    // MES..Loop
    for(let i = 0; i <= (MesNum-1) ; i++){
        messages.push(document.createElement('div'))
        messages[i].innerHTML = MesText[i];
        messages[i].className = "messag";
        chat_box.appendChild(messages[i])
    }
    
    // About MES..Style & ADD it To page..
    chat_box.firstChild.classList.add('firstM');
    chat_box.lastChild.classList.add('lastM');
    document.querySelector(".screen.about .mid").appendChild(Side);

    // Auto Scroll..
    app.scroll({
        top:app.scrollHeight,
        behavior:"smooth"
    });

    return Side;
};

// First message!!
load.classList.add("writing");
setTimeout(() => {
    load.classList.remove("writing");
    generateMesagges(4,"l",false,"am,Youssef Kandil","🔥 Front-End Developer | React.js & Next.js Specialist 🔥","📩 Email: youssefkandil35@gmail.com","how can i help you?");

}, 2000);




// Buttons logic
function AboutBtn(){
    // Music
    music()

    generateMesagges(2,"r",false,"Great But Why You?","👀🤔")
    
    setTimeout(() => {
        generateMesagges(5,"l",false,"✅ Affordable Pricing – High quality at a competitive cost","✅ Clean Code & Pixel-Perfect Design – For a seamless user experience","✅ Fully Responsive Design – Works flawlessly on all devices","✅ Top-Notch Quality – No compromises on performance or speed","✅ Interactive Web Animations – Bringing your website to life")
    }, 2000);
    setTimeout(() => {
        generateMesagges(1,"r",false,"Hoo that's Cool💙");
    }, 4000);
        setTimeout(() => {
        generateMesagges(2,"l",false,"🚀 Let’s build a modern, high-performing, and engaging website together!","📩 Email: youssefkandil35@gmail.com 💙")
        
    }, 7000);
};



function PortfolioBtn(){
    // Music
    music()

    generateMesagges(2,"r",false,"I want To see your Portfolio","💙👀");
    setTimeout(() => {
        generateMesagges(3,"l",true,"img/img1.jpg","https://youssef-kandil.github.io/GYM/" ,"you can vist it from link above💙")
    }, 2000);
    setTimeout(() => {
        generateMesagges(3,"l",true,"img/img3.png","https://www.creators-sa.com/" ,"you can vist it from link above💙")
    }, 4000);
    setTimeout(() => {
        generateMesagges(2,"l",false,"Do you want any thing else?","🥰")
    }, 6000);
};
