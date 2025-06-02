import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import type { InitialValue } from '../types/InitialValue.js';
import type { InitialValuesData } from '../types/InitialValuesData.js';

const dbFile = 'src/data/db.json';
const prodAdapter = new JSONFile<InitialValuesData>(dbFile);
export const prodDb = new Low<InitialValuesData>(prodAdapter, { initialValues: [] });

const tempDbFile = 'src/data/temp/tempDb.json';
const tempAdapter = new JSONFile<InitialValuesData>(tempDbFile);
export const tempDb = new Low<InitialValuesData>(tempAdapter, { initialValues: [] });

export const updateTempDb = async (initialValues: InitialValue[]) => {
    // Update initial values data
    tempDb.data = { initialValues };

    // Save the updated data
    await tempDb.write();
}

export const updateProdDb = async (initialValues: InitialValue[]) => {
    // Update initial values data
    prodDb.data = { initialValues };

    // Save the updated data
    await prodDb.write();
}