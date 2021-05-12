const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.headerList')
  
    burger.addEventListener('click', ()=> {
      nav.classList.toggle('nav-active')
      console.log("radi")
    })
  }
  navSlide();

  const igra1 = document.querySelector(".igra1")
  const podkategorija = document.querySelector(".podkategorijaIgre")
  igra1.addEventListener('click',() => {
     podkategorija.innerHTML = `
     <div class="ponudaIgre igraHover">
     <div class="img">
     <img src="./images/igre/igre sa brojevima png/monkey 1.png" alt="">
     </div>
 </div>
 <div class="description">
 <p>opopopopopis igreopopopopopis igreopopopopopis igreopopopopopis igreopopopopopis igreopopopopopis igreopopopopopis igreopopopopopis igreopopopopopis igreopopopopopis igreopopopopopis igreopopopopopis igreopopopopopis igreopopopopopis igreopopopopopis igreopopopopopis igreopopopopopis igreopopopopopis igre</p>
 </div>
     <div class="ponudaIgre igraHover">
     <div class="img">
     <img src="./images/igre/igre sa brojevima png/092_magic_maths_box_400.png" alt="">
     </div>
 </div>
     <div class="ponudaIgre igraHover">
     <div class="img">
     <img src="./images/igre/igre sa brojevima png/074_money_match_cafe_box_400.png" alt="">
     </div>
 </div>
     <div class="ponudaIgre igraHover">
     <div class="img">
     <img src="./images/igre/igre sa brojevima png/032_bus_stop_box_400.png" alt="">     </div>
 </div>
     `;
  })

  