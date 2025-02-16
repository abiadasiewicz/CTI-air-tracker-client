import {customAlphabet} from 'nanoid';

const ALLOWED_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const generatePlaneCode = customAlphabet(ALLOWED_CHARS, 4);

export const generatePlaneCodes = (): string => generatePlaneCode();
