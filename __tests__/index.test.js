import reverse from "../src/index.js";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
const text = readFile('text.txt');
const result = readFile('revers-text.txt');

test('reverse', () => {
    expect(reverse('hello world')).toEqual('dlrow olleh');
    expect(reverse('')).toEqual('');
    expect(reverse(text)).toEqual(result);  
    
});
