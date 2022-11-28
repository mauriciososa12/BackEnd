const fs = Require("fs");
class productManager{
    constructor(products){
        this.path = products;
    }

    addProduct = async (title , description, price, thumbnail, code, stock) =>{
        if = (title , description, price, thumbnail, code, stock) return 
        if = (fs.existSync(this.path)){
        let info = await (fs.promise.readFile);
        let result = JSON.parse(info);
        const codecheck = result.find (product);
        if (codecheck){
            console.log(
                "The CODE EXIST");
            )
        }
        else{
            if( result.length > 0){
                let idProduct = result[ result]
                let NewProduct ={
                    Id = idProduct, 
                    title, 
                    description,
                    price,
                    thumbnail,
                    code,
                    stock,
                };
                result.push(NewProduct);
                await fs.promise.writeFile(this.path,JSON.stringify(result,null,))
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





       






}



