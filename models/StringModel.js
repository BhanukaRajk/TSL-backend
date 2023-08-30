// TABLE FOR STRINGS
import { DataTypes } from "sequelize";
import sequelize from "../db/db.js";

const Strings = sequelize.define(
    'Strings',
    {
        material_code: {
            type: DataTypes.TEXT,
            allowNull: false,
            primaryKey: true,
        },
        quantity: {
            type: DataTypes.DOUBLE(12, 2),
            allowNull: false,
        },
        size: { // SIZE OF THE STRING
            type: DataTypes.DOUBLE(12, 2),
            allowNull: false,
        },
    },
    {
        tableName: 'strings',
    }
);

export default Strings;