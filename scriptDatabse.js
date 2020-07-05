//Despues de cargar los proveedores, ejecute la funcion cargarStock() y el stock se cargará automáticamente.
//Al  intentar comprar un item, si el cliente no está registrado, este se registrará automáticamente


db.proveedores.insert({
  "id":1,
  "ciudad":"Bogota",
  "nombre":"SportMode",
  "totalComprado":0,
  "productos":[
    {
        "idProducto":1,
        "nombreProducto":"audifonos",
        "precioCompra":5000,
        "precioVenta":6000,
        "categoria":"perifericos",
        "especificaciones":["gris","100gb"],
        "cantidad":0
    },
    {
        "idProducto":2,
        "nombreProducto":"audifonosDiferentes",
        "precioCompra":5500,
        "precioVenta":7000,
        "categoria":"perifericos",
        "especificaciones":["gris","100gb"],
        "cantidad":0
    }
  ]
})
db.proveedores.insert({
  "id":2,
  "ciudad":"Ibagué",
  "nombre":"Ferrebueno",
  "totalComprado":0,
  "productos":[
    {
        "idProducto":3,
        "nombreProducto":"cautin",
        "precioCompra":5000,
        "precioVenta":8000,
        "categoria":"elementos",
        "especificaciones":["gris","100gb"],
        "cantidad":0
    },
    {
        "idProducto":4,
        "nombreProducto":"protoboard",
        "precioCompra":5500,
        "precioVenta":9000,
        "categoria":"elementos",
        "especificaciones":["gris","100gb"],
        "cantidad":0
    }
  ]
})
db.proveedores.insert({
  "id":3,
  "ciudad":"Barranquilla",
  "nombre":"TuMundo",
  "totalComprado":0,
  "productos":[
    {
        "idProducto":5,
        "nombreProducto":"aguacate",
        "precioCompra":200,
        "precioVenta":1000,
        "categoria":"comida",
        "especificaciones":["gris","100gb"],
        "cantidad":0
    },
    {
        "idProducto":6,
        "nombreProducto":"portatil-dell",
        "precioCompra":15500,
        "precioVenta":117000,
        "categoria":"computadores",
        "especificaciones":["gris","100gb"],
        "cantidad":0
    },
    {
        "idProducto":7,
        "nombreProducto":"portatil-acer",
        "precioCompra":25500,
        "precioVenta":217000,
        "categoria":"computadores",
        "especificaciones":["gris","100gb"],
        "cantidad":0
    },
    {
        "idProducto":8,
        "nombreProducto":"portatil-gamer",
        "precioCompra":15500,
        "precioVenta":117000,
        "categoria":"computadores",
        "especificaciones":["gris","100gb"],
        "cantidad":0
    },
    {
        "idProducto":9,
        "nombreProducto":"portatil-gamer-rojo",
        "precioCompra":15505,
        "precioVenta":117005,
        "categoria":"computadores",
        "especificaciones":["gris","4gb"],
        "cantidad":0
    },
    {
        "idProducto":10,
        "nombreProducto":"portatil-dañado",
        "precioCompra":15505,
        "precioVenta":117005,
        "categoria":"computadoresReparar",
        "especificaciones":["blanco","4gb"],
        "cantidad":0
    }
  ]
})

db.proveedores.insert({
  "id":4,
  "ciudad":"NuncaJamas",
  "nombre":"Tecnocenter",
  "totalComprado":0,
  "productos":[
    {
        "idProducto":11,
        "nombreProducto":"b450",
        "precioCompra":200,
        "precioVenta":1000,
        "categoria":"componentes",
        "especificaciones":["motherboard","am4"],
        "cantidad":0
    },
    {
        "idProducto":12,
        "nombreProducto":"amd rx 550",
        "precioCompra":15500,
        "precioVenta":115000,
        "categoria":"componentes",
        "especificaciones":["grafica","am6"],
        "cantidad":0
    },
    {
        "idProducto":13,
        "nombreProducto":"fuente-aerocool",
        "precioCompra":5500,
        "precioVenta":17000,
        "categoria":"componentes",
        "especificaciones":["500 watts","4gb"],
        "cantidad":0
    },
    {
        "idProducto":14,
        "nombreProducto":"chasis",
        "precioCompra":15500,
        "precioVenta":117000,
        "categoria":"componentes",
        "especificaciones":["blanco","4gb"],
        "cantidad":0
    },
    {
        "idProducto":15,
        "nombreProducto":"monitor",
        "precioCompra":15505,
        "precioVenta":117005,
        "categoria":"componentes",
        "especificaciones":["blanco","4gb"],
        "cantidad":0
    },
    {
        "idProducto":16,
        "nombreProducto":"memoria ram",
        "precioCompra":15505,
        "precioVenta":117005,
        "categoria":"componentes",
        "especificaciones":["blanco","4gb"],
        "cantidad":0
    },
    {
        "idProducto":17,
        "nombreProducto":"memoria optane",
        "precioCompra":155025,
        "precioVenta":1170025,
        "categoria":"componentes",
        "especificaciones":["verde","100gb"],
        "cantidad":0
    },
    {
        "idProducto":18,
        "nombreProducto":"memoria ram",
        "precioCompra":15505,
        "precioVenta":117005,
        "categoria":"componentes",
        "especificaciones":["blanco","4gb"],
        "cantidad":0
    },
    {
        "idProducto":19,
        "nombreProducto":"memoria ram",
        "precioCompra":15505,
        "precioVenta":117005,
        "categoria":"computadores",
        "especificaciones":["blanco","4gb"],
        "cantidad":0
    },
    {
        "idProducto":20,
        "nombreProducto":"memoria ram",
        "precioCompra":15505,
        "precioVenta":117005,
        "categoria":"computadores",
        "especificaciones":["verde","4gb"],
        "cantidad":0
    }
  ]
})
db.system.js.save({
  _id:"Clientes",
  value:function (){
    print(db.clientes.find().toArray())
  }
})

db.system.js.save({
  _id:"buscarClienteCC",
  value:function (cedulac){
    print(db.clientes.find({"cedula":123}).toArray())
  }
})

db.system.js.save({
  _id:"buscarClienteNombre",
  value:function (nombre){
    print(db.clientes.find({"nombre":nombre}).toArray())
  }
})

db.system.js.save({
  _id:"buscarProveedorId",
  value:function (id){
    print(db.proveedores.find({"id":id}).toArray())
  }
})

db.system.js.save({
  _id:"buscarProveedorNombre",
  value:function (nombre){
    print(db.proveedores.find({"nombre":nombre}).toArray())
  }
})

db.system.js.save({
  _id:"buscarProveedorProducto",
  value:function (nombre){
    print(db.proveedores.find({"productos":{$elemMatch:{"nombreProducto":nombre}}}).toArray())
  }
})

db.system.js.save({
  _id:"buscar_productos_categoria",
  value:function (cat){
    print(db.stock.find({"categoria":cat}).toArray())
  }
})

db.system.js.save({
  _id:"buscar_productos_especificacion",
  value:function (especificacion){
      productos=productosManejados()
    for(i=0;i<productos.length;i++){
        currentpro=productos[i].especificaciones
        val = currentpro.indexOf(especificacion)
        if(val!=-1){
            print("ID Producto: "+productos[i].idProducto+" "+productos[i].nombreProducto)
       }
  }
}
})

db.system.js.save({
  _id:"buscar_productos_id",
  value:function (id){
    print(db.stock.find({"idProducto":id}).toArray())
  }
})

db.system.js.save({
  _id:"cargarStock",
  value:function (){
    pv = db.proveedores.find({"id":{$ne:""}},{productos:true}).toArray()
    for(i=0;i<pv.length;i++){
       productos = pv[i].productos
      db.stock.insert(productos)
    }
  }
})

db.system.js.save({
  _id:"clienteRegistrado",
  value:function (cedulaCliente){
    var clientes = db.clientes.find({"cedula":cedulaCliente}).toArray()
    if(clientes.length==1){
      return true
    }
    else{
      return false
    }
  }
})

db.system.js.save({
  _id:"encargarProducto",
  value:function (idProducto,cantidad){
    valorComprado=db.stock.find({"idProducto":idProducto}).toArray()[0].precioCompra
    db.stock.update({"idProducto":idProducto},{$inc:{"cantidad":+cantidad}})
    proveedor = db.proveedores.find({"productos":{$elemMatch:{"idProducto":idProducto}}}).toArray()//retorna el proveedor que vende ese producto
    proveedorID = proveedor[0].id
    db.proveedores.update({"id":proveedorID},{$inc:{"totalComprado":+(valorComprado*cantidad)}})
    espec = proveedor[0].productos
    for(i=0;i<espec.length;i++){//recorremos el catalogo del proveedor buscando el producto que necesitamos
        if(espec[i].idProducto==idProducto){
            especificaciones = espec[i].especificaciones
        }
    }
    db.compras.insert({"proveedorid":proveedorID,"productoid":idProducto,"cantidad":cantidad,especificaciones})//especificaciones se agrega directamente como un JSON
    valorComprado=db.stock.find({"idProducto":idProducto}).toArray()[0].precioVenta
    comprado=valorComprado*cantidad
    db.proveedores.update({"proveedorid":proveedorID},{$inc:{"totalComprado":+comprado}})
    print("Insertado")
  }
})

db.system.js.save({
  _id:"maximaCantidadCompradaCliente",
  value:function (){
        print(db.ventas.find().sort({"cantidad":-1}).limit(1).toArray())
    }
})

db.system.js.save({
  _id:"maximaCantidadCompradaProveedor",
  value:function (){
        print(db.compras.find().sort({"cantidad":-1}).limit(1).toArray())
    }
})

db.system.js.save({
  _id:"maximoGastoCliente",
  value:function (){
        print(db.clientes.find().sort({"totalGastado":-1}).limit(1).toArray())
    }
})

db.system.js.save({
  _id:"maximoGastoProveedor",
  value:function (){
        print(db.proveedores.find().sort({"totalComprado":-1}).limit(1).toArray())
    }
})

db.system.js.save({
  _id:"productoDisponible",
  value:function (idProducto,numero){//Revisar que el producto esté disponible y no se vendan mas de los que hay
    var producto = db.stock.find({$and:[{"idProducto":idProducto},{"cantidad":{$gte:numero}}]}).toArray()
    if(producto.length==1){
      return true
    }
    else{
      return false
    }
  }
})

db.system.js.save({
  _id:"productosManejados",
  value:function (){
        prod=db.stock.find().pretty().toArray()
        return prod
    }
})

db.system.js.save({
  _id:"productosNOStock",
  value:function (){
        print(db.stock.find({"cantidad":0}).toArray())
    }
})

db.system.js.save({
  _id:"productosStock",
  value:function (){
        print(db.stock.find({"cantidad":{$gt:0}}).toArray())
    }
})

db.system.js.save({
  _id:"proveedores",
  value:function (){
    print(db.proveedores.find().toArray())
  }
})

db.system.js.save({
  _id:"registrarCliente",
  value:function (cedulaa,nombre,actividadComercial){
    var clientes = db.clientes.find({"cedula":cedulaa})
    var clientesArray = clientes.toArray()
    if (clientesArray.length==0){
        db.clientes.insert({
        "cedula":cedulaa,
        "nombre":nombre,
        "actividadComercial":actividadComercial,
        "puntos":0,
        "totalGastado":0
        })
    }
    else{
        print("El cliente ya existe")
        }
    }
})

db.system.js.save({
  _id:"totaGastoProveedor",
  value:function (id){
        print(db.proveedores.find({"id":id},{"totalComprado":true}).toArray()[0])
    }
})

db.system.js.save({
  _id:"",
  value:
})

db.system.js.save({ //funcion para hacer una venta, solo si hay stock y el cliente está registrado
  _id:"vender",
  value:function (cedulaCliente,nombreCliente,actividadComercial,idProduct,cantidad){
    if(clienteRegistrado(cedulaCliente)){
      if(productoDisponible(idProduct,cantidad)){
        gastado = (valorComprado=db.stock.find({"idProducto":cantidad}).toArray()[0].precioVenta)*cantidad
        db.clientes.update({"cedula":cedulaCliente},{$inc:{"puntos":+cantidad}})
        db.clientes.update({"cedula":cedulaCliente},{$inc:{"totalGastado":+gastado}})
        db.stock.update({"idProducto":idProduct},{$inc:{"cantidad":-cantidad}})//reduce la cantidad que queda
        if(db.stock.findOne({$and:[{"idProducto":idProduct},{"cantidad":0}]})!=null){//si se acaban encarga mas
            encargarProducto(idProduct,20)
        }
        db.ventas.insert({"clienteid":cedulaCliente,"productoid":idProduct,"cantidad":cantidad})
        print("Compra exitosa.")
      }
      else{
        encargarProducto(idProduct,20)
        print("El producto no está disponible, lo hemos encargado y pronto estará en la tienda.")
      }
    }
    else{
      registrarCliente(cedulaCliente,nombreCliente,actividadComercial)
      return vender(cedulaCliente,nombreCliente,actividadComercial,idProduct,cantidad)
    }
  }
})
