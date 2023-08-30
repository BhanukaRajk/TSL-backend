import { Router } from "express";

// import { authUserRole } from "../middlewares/authUser.js";
// import { ADMIN } from "../constants/constants.js";
import { addReturn, getReturns, removeReturn, updateReturn } from "../controllers/returnController.js";

const router = Router();

router.post("/add-return", addReturn);
router.get("/get-returns", getReturns);
router.post("/update-return", updateReturn);
router.delete("/remove-return/:id", removeReturn);
// router.post("/get-returns", getUsers);

export default router;