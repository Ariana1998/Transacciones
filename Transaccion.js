let mysql = require('mysql');
let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "ventas"
});

conn.connect(err => {
    if(err)
        console.log("Se conecto")
    else
        console.log("No se conecto")
})

let sql = "INSERT INTO producto (id, cantidadVendida,idVenta ,idProducto  ,subtotal, precioVenta, ) values (1,100,2, 3, 200.00, 20.00)";

conn.query(sql,(err,result)=> {
    if(err)
        console.log("Producto agregado")
    else
        console.log(result.insertId)

})

conn.end(err => {
    if(err)
        conn.off
    else
        console.log("La conexion prosigue")
})
