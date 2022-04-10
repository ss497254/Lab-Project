const fs = require('fs');

const StateData = JSON.parse(fs.readFileSync('./latest.json').toString());
let LRUData = JSON.parse(fs.readFileSync('./LRU-cache.json').toString());

const maxLRU = 5;

const updateLRU = (data) => {
    let newLRUData = [data];
    for (let i = 0; i < LRUData.length; i++) {
        if (LRUData[i] != data) {
            newLRUData.push(LRUData[i]);
        }
    }
    if (newLRUData.length > maxLRU) newLRUData.pop();
    LRUData = newLRUData;
    fs.writeFileSync('./LRU.json', JSON.stringify(newLRUData, null, 4));
};

const useLRU = (key, value) => {
    for (let i = 0; i < LRUData.length; i++) {
        if (LRUData[i][key] === value) {
            updateLRU(LRUData[i]);
            return LRUData[i];
        }
    }
    for (let i = 0; i < StateData.length; i++) {
        if (StateData[i][key] === value) {
            updateLRU(StateData[i]);
            return StateData[i];
        }
    }
};

module.exports = useLRU;
