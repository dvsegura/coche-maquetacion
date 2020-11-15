window.onload = main();
var cont = 1;

function main(){  

    document.getElementsByClassName("logo")[0].onclick = function(){   
        
        if(cont == 1){            
            $('.menu').animate({
                right:'0'
            });
            cont = 0;
        }else{
            cont = 1;
            $('.menu').animate({
                right:'-100%'
            });
        }

    };
}