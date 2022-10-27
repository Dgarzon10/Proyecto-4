var btn_menu=document.querySelector("#btn_menu")
            var sidebar=document.querySelector(".BarraLateral")
            var mainpage=document.querySelector(".wrapper");
            var elementoLat=document.querySelectorAll(".elementoLat");
            var LetrasEL=document.querySelectorAll(".LetrasEL");

            btn_menu.onclick=function(){
                sidebar.classList.toggle("active");
                mainpage.classList.toggle("active");
                elementoLat.forEach(elementoLat => {
                    elementoLat.classList.toggle("active");
                });
                LetrasEL.forEach(LetrasEL => {
                    LetrasEL.classList.toggle("active");
                });
            }