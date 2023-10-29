// TABLE FOR COSTUMES
import { DataTypes } from "sequelize";

import sequelize from "../db/db.js";

const Costume = sequelize.define(
    'Costume',
    {
        itemId: { // GLOBAL ID
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        costumeName: { // NAME OF THE COSTUME
            type: DataTypes.STRING,
            allowNull: false,
        },
        costumeType: { // 'JACKET' OR 'PANT'
            type: DataTypes.STRING,
            allowNull: false,
        },
        customization: { // JSON OBJECT WITH SELECTED STYLES
            type: DataTypes.JSON,
            allowNull: false,
        },
        measurementType: { // STANDARD OR CUSTOMIZED
            type: DataTypes.STRING,
            allowNull: false,
        },

        // STANDARD => { SIZE: S, SHOULDER: 25, CHEST: 30, WAIST: 30, HIP: 30, SLEEVE: 30, LENGTH: 30 }
        // CUSTOM => { SHOULDER: 25, CHEST: 30, WAIST: 30, HIP: 30, SLEEVE: 30, LENGTH: 30 }

        measurements: { // IF STANDARD SIZE USED, THERE WILL BE A ADDITIONAL KEY FOR S, M, L, XL, XXL
            type: DataTypes.JSON,
            allowNull: false,
        },
        quantity: { // NUMBER OF ITEMS REQUIRED
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tailor: { // TAILOR IDS FOR THIS COSTUME (THERE CAN BE ONE OR MORE)
            type: DataTypes.JSON,
            allowNull: true,
        },
    },
    {
        tableName: 'costumes',
    }
);

export default Costume;