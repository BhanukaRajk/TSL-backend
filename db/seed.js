import dotenv from 'dotenv';

import {
    User,
    Material,
    Supplier
} from "../models/models.js";
import {
    ACTIVE,
    ADMIN, CUSTOMER, TAILOR, OPERATION_ASSISTANT, PRODUCT_MANAGER
} from "../constants/constants.js";
import supplierSeed from './seeds/supplierSeed.js';
import materialSeed from './seeds/materialSeed.js';

dotenv.config();

const defaultPassword = process.env.DEFAULT_PASSWORD;

const seed = async () => {
    try {
        User.findOrCreate({
            where: { mobileNo: '1234567890' },
            defaults: {
                email: 'admin@email.com',
                password: defaultPassword,
                firstName: 'Admin',
                lastName: 'Test',
                role: ADMIN,
                progress: ACTIVE,
                image: 'avatar.png',
            }
        });

        User.findOrCreate({
            where: { mobileNo: '0773364290' },
            defaults: {
                email: 'kavisula@email.com',
                password: defaultPassword,
                firstName: 'Kavishka',
                lastName: 'Sulakshana',
                role: CUSTOMER,
                progress: ACTIVE,
                image: 'costume1.jpeg',
            }
        });

        User.findOrCreate({
            where: { mobileNo: '07645902431' },
            defaults: {
                email: 'sunil@email.com',
                password: defaultPassword,
                firstName: 'Sunil',
                lastName: 'Perera',
                role: CUSTOMER,
                progress: ACTIVE,
                image: 'costume1.jpeg',
            }
        });

        User.findOrCreate({
            where: { mobileNo: '0712340991' },
            defaults: {
                email: 'nimal@email.com',
                password: defaultPassword,
                firstName: 'Nimal',
                lastName: 'Fernando',
                role: CUSTOMER,
                progress: ACTIVE,
                image: 'costume1.jpeg',
            }
        });

        User.findOrCreate({
            where: { mobileNo: '0753429081' },
            defaults: {
                email: 'mamatailor@email.com',
                password: defaultPassword,
                firstName: 'John',
                lastName: 'Taylor',
                role: TAILOR,
                progress: ACTIVE,
                image: 'costume2.jpeg',
            }
        });

        User.findOrCreate({
            where: { mobileNo: '0778235998' },
            defaults: {
                email: 'op_assistant@email.com',
                password: defaultPassword,
                firstName: 'Bhanuka',
                lastName: 'Rajapaksha',
                role: OPERATION_ASSISTANT,
                progress: ACTIVE,
                image: 'costume3.jpeg',
            }
        });

        User.findOrCreate({
            where: { mobileNo: '0773098124' },
            defaults: {
                email: 'manager@email.com',
                password: defaultPassword,
                firstName: 'Viraj',
                lastName: 'Sandakalum',
                role: PRODUCT_MANAGER,
                progress: ACTIVE,
                image: 'costume4.jpeg',
            }
        });

        await Supplier.bulkCreate(supplierSeed);
        await Material.bulkCreate(materialSeed);
    } catch (error) {
        console.log(error);
    }
}

export default seed;