const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english, spanyol, ptbr } = require(`./language`)
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
//global apikeys
global.APIKeys = {
	'https://zenzapi.xyz': '805a6c3fa9', 
}

//settings
global.owner = ['558898204406',''] 
global.wame = ['558898204406'] 
global.pemilik = ['558898204406'] 
global.premium = ['558898204406'] 
global.pengguna = 'alone' 
global.footer = '@anya-md'
global.botnma = '@anya-md' 
global.botname = '@anya-md'
global.ownernma = "alone no shawty's"
global.sessionName = 'session' 
global.prefix = '!'
global.sp = '🔵' 
//global.sacoletyping = false
global.sacolereadgroup = true
global.sacolereadall = false
global.sacolerecord = true
global.available = true
global.unavailable = true
global.limittot = 100,
global.thumb = fs.readFileSync('./lib/anya.jpg')
global.reactmoji = '⚡'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
global.flaming = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mess = {
    success: '*sucesso!*',
    admin: '*Este recurso é apenas para administrador!*',
    botAdmin: '*o bot deve ser administrador primeiro!! *',
    owner: '*este recurso é apenas para o proprietário*',
    group: '*O recurso é apenas para grupos!*',
    grouponly: '*Somente modo de grupo*',
    private: '*Recursos usados ​​apenas para bate-papo privado!*',
    bot: '*Este recurso é apenas para o número do bot*',
    wait: '*aguarde um momento, anya bot esta processando...*',
}
global.limitawal = {
    premium: "Infinity", 
    free: 100000 
}
global.rpg = {
darahawal: 100,
besiawal: 15,
goldawal: 10,
emeraldawal: 5,
umpanawal: 5,
potionawal: 1
}
global.thumb = fs.readFileSync('./lib/anya.jpg')
global.visoka = { url: 'https://i.imgur.com/LbmTdhf.mp4' }
global.vid = { url: 'https://i.imgur.com/LbmTdhf.mp4' }

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.mehk = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='
global.awog = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mohai = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text='
global.mhehe = 'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text='

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
