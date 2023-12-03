let nav = document.querySelector('#NAV');  
let logo = document.querySelector('#logoo');

let icons = document.querySelectorAll("#NAV ul li a ")
// console.log(icon);
 
let bar = document.querySelector("#NAV .navbar-toggler")
window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY;
  
    if (verticalScrollPx >  100.7999877929688) {
      nav.classList.add("bg-body-tertiary")
      nav.style.borderBottom = "none"
      nav.style.boxShadow = "5px 5px 15px 0 rgba(31, 31, 31, 0.07)"
      bar.classList.add("text-dark")
      logo.classList.add("text-dark")
      icons.forEach(icon =>{
        icon.classList.add("text-dark")
        
      })
    }else{
      nav.classList.remove("bg-body-tertiary")
      bar.classList.remove("text-dark")

      nav.style.borderBottom = "revert-layer"
      logo.classList.remove("text-dark")
      icons.forEach(icon =>{
        icon.classList.remove("text-dark")
      })

    }
  });
