let i=0;
let id;
let changeText=()=>{
    let text=['Hey Siri, turn off the lights downstairs','Hey Siri, make it warmer','Hey Siri, set my bedtime scene'];
    let container=document.getElementById("changingText");
    let id=setInterval(function(){
        if(i===text.length){
            i=0;
        }
        container.innerHTML=null;
        let texts=text[i];
        container.append(texts);
        i++;
    },3000)
}
changeText();