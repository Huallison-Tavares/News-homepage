const opcoes = document.querySelector('img.mobile')

opcoes.addEventListener('click', function(){
    document.querySelector('.opcoes').style.visibility = 'visible'
    const close = document.querySelector('img.close')
    document.querySelector('body').style.overflow = 'hidden'

    close.addEventListener('click', function() {   
        document.querySelector('.opcoes').style.visibility = 'collapse'
        document.querySelector('body').style.overflow = ''
    })
})
