
//Traer productos
const getProducts = async() =>{
    try {
        const results = await fetch('./data/products.json');
        const data = await results.json();
        /*Mostrar los objetos por consola
        console.log(data.products);*/
        const products = data.products;
        return products;
    } catch (err) {
        console.log();
    }
};

//Cargar products
window.addEventListener('DOMContentLoaded', async() =>{
    const products = await getProducts();
    displayProductsItems(products);
});

const categoryCenter = document.querySelector(".category__center");

//Desplegar Productos
const displayProductsItems= items =>{
    let displayProduct = items.map(product=>
        `<div class="product category__product">
        <div class="product__header">
            <img src=${product.image} alt="">
        </div>
        <div class="product__footer">
            <h3>${product.title}</h3>
            <input type="checkbox" id="click">
            <a href=""><button type="button" class="product__btn">
                Ver
            </button></a>
            <!--Ver detalles Popup-->
            <div class="content-popup">
                <div class="popup-header">
                    <h3>${product.title}</h3>
                    <label for="click" class="fas fa-window-close"></label>
                </div>
                <div class="img-popup">
                    <img src=${product.image} alt="">
                </div>
                <div class="popup-info">
                    <h3 class="family">Catogoria : ${product.category}</h3>
                    <h4 class="family">Medidas : ${product.format}</h4>
                    <h4 class="family">Estructura : ${product.structure}</h4>
                    <a href="#" class="ficha-tecnica">Descargar ficha tecnica</a>
                </div>
                <div class="line"></div>
            </div>
        </div>
    </div>`
        );
        displayProduct = displayProduct.join('')
        if (categoryCenter) {
            categoryCenter.innerHTML = displayProduct;
        }
}

/*Filtrando Productos */

const filterBtn = document.querySelectorAll(".filter-btn");
const categoryContainer = document.getElementById("category");


if (categoryContainer) {
    categoryContainer.addEventListener("click", async e =>{
        const target = e.target.closest(".section__title");
        if(!target) return;

        const id= target.dataset.id;
        const products = await getProducts();

        if (id){
            //remove active from button
            Array.from(filterBtn).forEach(vtn => {
                btn.classList.remove("active");
            });
            target.classList.add("active");

            // Cargar productos
            let menuCategory = products.filter(product =>{
                if (product.category == id) {
                    return product;
                }
            });

            if (id == "Todos") {
                displayProductsItems(products);
            }else{
                displayProductsItems(menuCategory);
            }
        }
    });
}