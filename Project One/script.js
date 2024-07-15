const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        let color = event.target.id;
        body.style.backgroundColor = color;
        if(color === 'black'){
            body.style.color = 'white';
        }
        if(color === 'white'){
            body.style.color = 'black';
        }
    })
})