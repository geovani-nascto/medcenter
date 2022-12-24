window.onload = function(){
    document.querySelector('.menu-mobile').addEventListener('click', function(){
        if(document.querySelector('.menu nav ul').style.display == 'none'){
            document.querySelector('.menu nav ul').style.display = 'flex'
        }else{
            document.querySelector('.menu nav ul').style.display = 'none'
        }
    })
}