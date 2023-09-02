// TABLE FOR FABRICS
import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Fabric = sequelize.define(
    'Fabric',
    {
        materialCode: {
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: true,
        },
        quantity: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        pattern: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        tableName: 'fabrics',
    }
);

export default Fabric;