const imagenes = document.querySelectorAll('.galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedor = document.querySelector('.imagen-ligth')
const hamburgesa1 = document.querySelector(".hamburgesa");

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', () =>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})

contenedor.addEventListener('click', (e) => {
    if(e.target !== imagenesLight){
        contenedor.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburgesa1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedor.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburgesa1.style.opacity = '0'
}