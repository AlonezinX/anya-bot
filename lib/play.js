const fs = require('fs')
const crypto = require('crypto')
var dados = JSON.parse(fs.readFileSync('./database/dados.json'));
var listUser = new Set()

const addContg = (sender, msg) => {
obj = {
        "jid": sender,
        "yt": msg
    }
    dados.push(obj)
    fs.writeFileSync('./database/dados.json', JSON.stringify(dados))
listUser.add(sender)
setTimeout(() => {
        listUser.delete(sender)
        fs.writeFileSync('./database/dados.json', JSON.stringify(dados))
        let position = false
        Object.keys(dados).forEach((i) => {
            if (dados[i].jid == sender) {
                dados.splice(position, 1)
            }
        })
        fs.writeFileSync('./database/dados.json', JSON.stringify(dados))
    }, 15000);
}
    

function verifContg(sender) {
    return !!listUser.has(sender)
}


const verContg = (sender) => {
fs.writeFileSync('./database/dados.json', JSON.stringify(dados))
        function a(sender) {
        let position = false
yt = "aaa"
        Object.keys(dados).forEach((i) => {
            if (dados[i].jid == sender) {
                position = i
            }
        })
        if (position !== false) {
            yt = `${dados[position]?.yt}`
           // dados.splice(position, 1)
        } else {
            yt = false
        }
return yt
}
fs.writeFileSync('./database/dados.json', JSON.stringify(dados))
return a(sender)
}

const resetContg = (sender) => {
let position = false
Object.keys(dados).forEach((i) => {
if (sender == dados[i]?.jid) {
dados.splice(i, 1)
}
})
return true
}

module.exports = {
    addContg,
    verifContg,
    verContg,
    resetContg
}