const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const productRoutes = require('./productRoutes');
const cartRoutes = require("./cartRoutes");
const userRoutes = require("./userRoutes");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/user", userRoutes)
router.use("/product", productRoutes)
router.use("/cart", cartRoutes)

module.exports = router;
