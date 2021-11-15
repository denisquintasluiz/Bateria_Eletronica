document.body.DOCUMENT_NODE=addEventListener("keyup",(event)=>{
   playSound(event.code.toLowerCase()); 
});
  var p = new Array();

  p.length;
document.querySelector('.composer button').addEventListener('click',()=>{
    let song = document.querySelector('#input').value;
    
    if(song !== ''){
        let songArray = song.split(''); //tranforma a string lida em um Array
        playComposition(songArray);
    }
});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);// serve para selecionar dinamicamente as tags de <audio>
    let keyElement = document.querySelector(`div [data-key ="${sound}"]`); // serve para selecionar os data-keys das divs do teclado dinamicamente.

    if(audioElement){
        audioElement.currentTime = 0; //resetar o ponteiro do audio para estado inicial.
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add("active");
        setTimeout(()=>{
            keyElement.classList.remove("active");
        }, 300);
    }
}

function playComposition(songArray){
    let delay=0;
    for(let i=0;i<songArray.length;i++){
            if(songArray[i] !==''){
                setTimeout(()=>{
                    playSound("key"+songArray[i]);
                }, delay);
            }
         delay += 250;   
    }
}