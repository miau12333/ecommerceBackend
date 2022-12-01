const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ecommerce appi en node js",
            version: "1.0.0",
            description: "API que permite gestionar una tienda virtual."
        },
    },
        apis:["./src/routes/users.routes.js",
         "./src/models/users.models.js","./src/routes/products.routes.js",
         "./src/models/products.models.js","./src/routes/carts.routes.js",
         "./src/models/productsInCarts.model.js","./src/routes/auth.routes.js", 
         "./src/routes/orders.routes.js", "./src/models/orders.models.js"
        ]
    
    };

const swaggerSpec = swaggerJSDoc(options);

//funcion para configurar la documentación.
//dos parametros -> app express, port donde se ejecuta
const swaggerDocs = (app, port)=>{
    //manejador para la ruta de nuestra documentación.
    app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    //podemos definir nuestra documentación en formato json.
    app.get("/api/v1/docs.json",(req, res)=>{
        res.setHeader("ContentType", "applicattion/json");
        res.send(swaggerSpec);
    });

    console.log(`Documentación disponible en http://localhost:${port}/api/v1/docs`);
};

module.exports = swaggerDocs;

