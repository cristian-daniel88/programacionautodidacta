const express = require('express')
const app = express()


app.get('/', (req, res) => {
    const productos = [];

    productos[0] = {Marca: "Peugeot",
                          Modelo: "206",
                          Puertas: 4,
                          Precio: "$200.000,00"},
    
    productos[1] =    {Marca: "Honda",
                            Modelo: "Titan",
                            Cilindrada: "125c",
                            Precio: "$60.000,00"},
    
    productos[2] =   {Marca: "Peugeot", 
                            Modelo: "208", 
                            Puertas: 5, 
                            Precio: "$250.000,00"},
    
    productos[3] =   {Marca: "Yamaha",
                            Modelo: "YBR",
                            Cilindrada: "160c",
                            Precio: "$80.500,50"
                            };
    
                         
    
    var i, item;
    
    for (i = 0; i < productos.length; i++) {
        let row ="";
        let startRow = true;
        for (item in productos[i]) {
            if (!startRow)
                row += " // ";
            else
                startRow = false;
            row += item + ": " + productos[i][item];
        }
        console.log(row);
       
    }
    res.send('Resultado impreso en consola')
   
   var cero = productos[0].Precio.substring(1)
   var uno = productos[1].Precio.substring(1) 
   var dos = productos[2].Precio.substring(1) 
   var tres = productos[3].Precio.substring(1)

 

   console.log( '============================='+"\n" + cero, uno, dos, tres)
   
  
   
})
 
app.listen(4000, () => {
    console.log('Server on port 3000')
})
