$('.owl-carousel').owlCarousel({
    loop:true, /*deixa a navegação "infinita".*/
    margin:10, /*espaço entre os itens.*/
    nav:false, /*botões de navegação < e > . */
    responsive:{ /*faz com que o elemento se adapte ao tamanho da tela do usuario.*/
        0:{
            items:1 /*acima de 0px, aparece apenas 1 item.*/
        },
        600:{ /*acima de 600, aparecem 3 items.*/
            items:3
        },
        1000:{ /*acima de 1000px aparecem 5 items.*/
            items:5 
        } /*note que na verdade acaba funcionando com intervalos.*/
    }
})