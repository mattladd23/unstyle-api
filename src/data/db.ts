import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import type { InitialValue } from '../types/InitialValue.js';
import type { InitialValuesData } from '../types/InitialValuesData.js';

const dbFile = 'src/data/db.json';
const tempDbFile = 'src/data/temp/tempDb.json';
const adapter = new JSONFile<InitialValuesData>(tempDbFile);
export const db = new Low<InitialValuesData>(adapter, { initialValues: [] });

export const updateDb = async (initialValues: InitialValue[]) => {

    // Update initial values data
    db.data = { initialValues };

    // Save the updated data
    await db.write();
}