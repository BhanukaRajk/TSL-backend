import { Customer, Cart } from "../models/models.js";
import { CoatMeasurements, TrouserMeasurements } from "../models/CustomerModel.js";

export const setCoatMeasurements = async (req, res) => {
    const { userId } = req.params;
    const { measurements } = req.body;

    try {
        const customer = await Customer.findOne({ where: { userId } });
        if (!customer) {
            res.status(404).json({ message: "Customer not found" });
        } else {
            const coatMeasurements = new CoatMeasurements(measurements);
            customer.coatMeasurements = coatMeasurements;
            await customer.save();
            res.status(200).json({ message: "Measurements saved" });
        }
    } catch (error) {
        console.log(error);
    }
};

export const setTrouserMeasurements = async (req, res) => {
    const { userId } = req.params;
    const { measurements } = req.body;

    try {
        const customer = await Customer.findOne({ where: { userId } });
        if (!customer) {
            res.status(404).json({ message: "Customer not found" });
        } else {
            const trouserMeasurements = new TrouserMeasurements(measurements);
            customer.trouserMeasurements = trouserMeasurements;
            await customer.save();
            res.status(200).json({ message: "Measurements saved" });
        }
    } catch (error) {
        console.log(error);
    }
};

export const setCartItem = async (req, res) => {
    const userId = req.user.userId;
    const { itemId, description, price, size, quantity } = req.body;

    try {
        // TODO: check if item is already in cart
        const cartItem = new Cart({ customerId: userId, itemId, description, size, quantity, price });
        await cartItem.save();
        res.status(201).json({ message: "Item added to cart" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const setCartItemForCustomSuit = async (req, res) => {
    const userId = req.user.userId;
    const { description, price, quantity, selection } = req.body;

    try {
        const cartItem = new Cart({ customerId: userId, description, quantity, price, selection });
        await cartItem.save();

        res.status(201).json({ message: "Item added to cart" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getCartItems = async (req, res) => {
    const { userId } = req.user;

    try {
        const cartItems = await Cart.findAll({ where: { customerId: userId } });
        res.status(200).json(cartItems);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const hireCostume = async (req, res) => {
    const { userId } = req.user;
    const { costumeId, costumeName, size, quantity } = req.body;

    try {
        const customer = await Customer.findOne({ where: { userId } });
        if (!customer) {
            res.status(404).json({ message: "Customer not found" });
        } else {
            const cartItem = new Cart({ customerId: userId, itemId: costumeId, description, size, quantity });
            await cartItem.save();
            res.status(200).json({ message: "Item added to cart" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
};