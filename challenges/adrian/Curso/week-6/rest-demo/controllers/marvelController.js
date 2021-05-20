const marvelList = require('../constantes/marvelMock')

module.exports = {
    getAll: (req, res)=>{
        res.json(marvelList)
    },    
}