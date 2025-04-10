const fs = require('fs');
const path = require('path');

const musicExist = fs.readdirSync('../A000/music');
for (const file of fs.readdirSync('./music')) {
    if (musicExist.includes(file)) {
        fs.rmSync(path.join('./music', file), { recursive: true });
        console.log(`Deleted ${file}`);
    }
}

const musicExistIds = musicExist.map(file => file.substring('music00'.length));
for (const file of fs.readdirSync('./SoundData')) {
    if (musicExistIds.includes(file.substring('music00'.length, 'music00'.length + 4))) {
        fs.unlinkSync(path.join('./SoundData', file));
        console.log(`Deleted ${file}`);
    }
}

// for (const file of fs.readdirSync('./MovieData')) {
//     if (musicExistIds.includes(file.substring('00'.length, '00'.length + 4))) {
//         fs.unlinkSync(path.join('./MovieData', file));
//         console.log(`Deleted ${file}`);
//     }
// }

const jacketExist = fs.readdirSync('../A000/AssetBundleImages/jacket');
for (const file of fs.readdirSync('./AssetBundleImages/jacket')) {
    if (!/\d{6}/.test(file)) continue;
    const id = /\d{6}/.exec(file)[0];
    if (jacketExist.includes(`ui_jacket_${id}.ab`)) {
        fs.unlinkSync(path.join('./AssetBundleImages/jacket', file));
        console.log(`Deleted ${file}`);
    }
}
