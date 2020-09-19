const name='Milesh Kotadia';
let letter='';
let index=0;
(function typing(){
    letter=name.slice(0,++index);
    document.querySelector('.my-name').textContent=letter;
    // if(letter.length===name.length){
    //     index=0;
    // }
    setTimeout(typing,300);
})();

window.addEventListener('scroll',scrolling);

function scrolling(){
    let contents=document.querySelectorAll('.shade');
    for(let i=0;i<contents.length;i++){
        let position=contents[i].getBoundingClientRect().top;
        let size=window.innerHeight/1.5;
        if(position<size){
            contents[i].classList.add('adding-shade-effect');
        }
    }
    

}