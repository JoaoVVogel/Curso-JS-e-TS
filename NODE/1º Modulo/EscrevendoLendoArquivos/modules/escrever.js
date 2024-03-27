const fs = require('fs').promises;

module.exports = (caminho, formato) => {
    fs.writeFile(caminho, formato, {flag: 'w'});
    console.log('escreveu');
};