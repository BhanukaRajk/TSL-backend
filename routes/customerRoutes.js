import { Router } from "express";

import { authUserRole, authJWT } from "../middlewares/authUser.js";
// import { ADMIN } from "../constants/constants.js";
import {
    setCoatMeasurements,
    setTrouserMeasurements,
    setCartItem,
    setCartItemForCustomSuit,
    getCartItems
} from "../controllers/customerController.js";

const router = Router();

// /api/customer
router.post("/set-coat-measurements", setCoatMeasurements);
router.post("/set-trouser-measurements", setTrouserMeasurements);
router.post("/add-to-cart", authJWT, setCartItem);
router.post("/add-custom-suit-to-cart", authJWT, setCartItemForCustomSuit);
router.get("/cart", authJWT, getCartItems);

export default router;