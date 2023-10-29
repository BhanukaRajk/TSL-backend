// TABLE FOR ALL ACCESSORIES
import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Accessory = sequelize.define(
    'Accessory',
    {
        itemId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        itemName: { // TODO: GET THE QUANTITY AND CREATE RECORDS FOR EACH ITEM WITH SAME NAME
            type: DataTypes.STRING,
            allowNull: false,
        },
        material: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // size: {
        //     type: DataTypes.STRING(5),
        //     allowNull: false,
        // },
        accessoryType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: true,
        },
    },
    {
        tableName: 'accessories',
    }
);

export default Accessory;