class Product_manger ={
    constructor ();{ this.product = [] 

    GetNextProductID = () => {
        const amount = this.product.length
        const productID = (amount > 0) ? this.products [ämount - 1 ].id 1 : 1;
        return productID;} 
    


    GetProducts = () => {
        return this.products
    }
    GetProductsByID = (productID) =>{
        const product_found = this.product.find (element.id == productID)
        if (product_found) { console.log ("the product exist: ":product_found.title);}
        else {
            console .log ("NO DATA")
        }

        addproduct = ( title , description, price, thumbnail, code, stock) => {
        
        if (this.product.some(P => P.code == code)) return
        
            const product ={
            id: this.GetProductsByID,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,

        }
        

        
        }


    }
}

const Duplicated = (element)=> element == product.code;
if (this.product.some(Duplicated)){ this.product.push(product)}
else (console.log ("THE CODE IS ALREADY DUPLICATED"))

const product = new Product_manger


console.log("call",product.GetProducts);


product.addproduct("Book 1","Training boxing",30, "image","code1",10)
product.addproduct("Book 2","Training boxing",20, "image","code1",10)
product.addproduct("Book 3","Training boxing",15, "image","code1",10)
product.addproduct("Book 3","Training boxing",80, "image","code1",10)
product.addproduct("Book 4","Training boxing",50, "image","code1",10)

product.GetProductsByID(1)

console.log("AFTER PUSH"), product.GetProducts()