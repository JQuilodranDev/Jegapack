const Projectimg = document.querySelectorAll('.img-project');
Projectimg.forEach(popup => popup.addEventListener('click',()=>{
   popup.classList.toggle('active')
}))