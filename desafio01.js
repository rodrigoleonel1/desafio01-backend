class ProductManager {

    constructor() {
        this.products = []
    }

    idGenerator = () =>{
        const count = this.products.length
        if (count === 0){
            return 1
        } else {
            return (this.products[count-1].id) + 1     
        }
    }

    getProducts = () =>{
        return this.products
    }

    getProductById = ( id ) =>{
        const productById = this.products.find(e => e.id === id)
        if (productById === undefined){
            return console.error ("Not found.")
        } 
        return console.log(productById)

    }

    addProduct = ( title, description, price, thumbnail, code, stock ) =>{ 
        const id = this.idGenerator()

        if( !title || !description || !price || !thumbnail || !code || !stock ){
            console.error('No se pudo agregar el producto porque no se completaron todos los datos necesarios.')
            return
        }

        if (this.products.find(e => e.code === code)){
            console.error(`El producto ${title} no puede ser agregado porque ya existe un producto con el mismo código.`)
            return
        }

        this.products.push({
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        })
    }
}

//Instancia de la clase "ProductManager"
const productManager = new ProductManager()
//Primer llamado a "getProducts" que devuelve array vacío
console.log(productManager.getProducts()) 
//Primer llamado al método "addProduct" completando los campos
productManager.addProduct('Producto prueba', 'Esto es un producto prueba', 200, 'Sin imagen', 'abc123', 25)
//Segundo llamado a "getProduct" que ahora devuelve el producto agregado con el id "1" generado 
console.log(productManager.getProducts()) 
//Segundo llamdo al método "addProduct" completando los campos con los mismos datos de antes por lo que arroja un error sobre que se repite el código
productManager.addProduct('Producto prueba', 'Esto es un producto prueba', 200, 'Sin imagen', 'abc123', 25)
//"getProductById" devuelve el producto como objeto cuando lo encuentra por su id
productManager.getProductById(1)
//"getProductById" devuelve error cuando no encuentra el producto con el id indicado
productManager.getProductById(3)
