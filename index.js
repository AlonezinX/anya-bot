
require('./database/bot')
const { default: MikuBotIncConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@adiwajshing/baileys")
const { state, saveState } = useSingleFileAuthState(`./${sessionName}.json`)
const pino = require('pino')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const { exec, spawn, execSync } = require('child_process')
const  { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep } = require('./lib/myfunc')
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const { say } =  require('cfonts')
const { color } = require('./lib/color')
say('ANYA-MD', {
    font: 'block',
    colors: ["#0ff",'green',"#ff0"],
    align: 'center',
    gradient: false,
    background: "transparent",
    letterSpacing: 1,
    lineHeight: 1,
    space: true,
    maxLenght: '0'

  })
  say(`Anya bot by alone no shawty's`, {
    font: 'console',
    align: 'center',
    gradient: ['red', 'green']
  })
async function startAnya() {
    const anya = MikuBotIncConnect({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: true,
        browser: ['ANYA-MD','Ubuntu','20.0.04'],
        auth: state,
        
    })

    store.bind(anya.ev)



    anya.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!anya.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(anya, mek, store),
        require("./anya")(anya, m, chatUpdate, store)
        } catch (err) {
            console.log(err)
        }
    })
    
    anya.ev.on('groups.update', async pea => {
       //console.log(pea)
    // Get Profile Picture Group
       try {
       ppgc = await anya.profilePictureUrl(pea[0].id, 'image')
       } catch {
       ppgc = 'https://shortlink.XeonBotIncarridho.my.id/rg1oT'
       }
       let lolXeon = { url : ppgc }
       if (pea[0].announce == true) {
       anya.send5ButImg(pea[0].id, `Configurações do grupo alteradas\n\nO grupo foi fechado pelo administrador, agora apenas o administrador pode enviar mensagens!`, `${nomedobot}`, lolXeon, [])
       } else if(pea[0].announce == false) {
       anya.send5ButImg(pea[0].id, `Configurações do grupo alteradas\n\nO grupo foi aberto pelo administrador, agora os participantes podem enviar mensagens!`, `${nomedobot}`, lolXeon, [])
       } else if (pea[0].restrict == true) {
       anya.send5ButImg(pea[0].id, `Configurações do grupo alteradas\n\nAs informações do grupo foram restritas, agora apenas o administrador pode editar as informações do grupo!`, `${nomedobot}`, lolXeon, [])
       } else if (pea[0].restrict == false) {
       anya.send5ButImg(pea[0].id, `Configurações do grupo alteradas\n\nAs informações do grupo foram abertas, agora os participantes podem editar as informações do grupo!`, `${nomedobot}`, lolXeon, [])
       } else {
       anya.send5ButImg(pea[0].id, `Configurações do grupo alteradas\n\nNome do grupo foi alterado para *${pea[0].subject}*`, `${nomedobot}`, lolXeon, [])
     }
    })
    
    function pickRandom(list) {
        return list[Math.floor(list.length * Math.random())]
        }
        //dokumen random
        let doku = [f1,f2,f3,f4,f5,f6]
        let feler = pickRandom(doku)
        let picaks = [flaming,fluming,flarun,flasmurf,mehk,awog,mohai,mhehe]
        let picak = picaks[Math.floor(Math.random() * picaks.length)]

 anya.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {

            let metadata = await anya.groupMetadata(anu.id)
            let participants = anu.participants
          /*  let chats = global.db.chats[m.chat]
            if (typeof chats !== 'object') global.db.chats[m.chat] = {}*/
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await anya.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await anya.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
if (anu.action == 'demote') {
                member = metadata.participants.length
               num = anu.participants[0]
                teks = `MEMBRO REBAIXADO\n\n@${num.split('@')[0]} foi rebaixado a membro comum...`
                anya.sendMessage(metadata.id, { text: teks, mentions: [num] })
            }
            if (anu.action == 'promote') {
            member = metadata.participants.length
        	num = anu.participants[0]
            teks = `@${num.split('@')[0]} foi promovido a administrador do grupo!`
	           anya.sendMessage(metadata.id, { text: teks, mentions: [num] })
		}                
                
const antifake = JSON.parse(fs.readFileSync('./database/antis/antifake.json'));
if(antifake.includes(anu.id)) {
let mdata = await anya.groupMetadata(anu.id)
if (anu.action == 'add'){ 
num = anu.participants[0]
if(!num.split('@')[0].startsWith(55)) {
await anya.sendMessage(m.chat, { text: '*numeros estrangeiros não são permitidos neste grupo, consulte um administrador*'})
anya.groupParticipantsUpdate(m.chat, [num], 'remove')
}
}
}                
const dontback = JSON.parse(fs.readFileSync('./database/dontback.json'))
		const dbackid = []
		for(i=0;i<dontback.length;++i) dbackid.push(dontback[i].groupId)
		if(dbackid.indexOf(anu.id) >= 0) {
			if (anu.action == 'add'){ 
				num = anu.participants[0]
				var ind = dbackid.indexOf(anu.id)
				if(dontback[ind].actived && dontback[ind].number.indexOf(num.split("@")[0]) >= 0) {
					await anya.sendMessage(m.chat, { text: '*Olha quem deu as cara por aqui, sente o poder do ban cabaço*'})
   setTimeout( () => {
	anya.groupParticipantsUpdate(m.chat, [num], 'remove')
}, 3000)
				}
			}
		}
                if (!wlcm.includes(anu.id)) return
                if (anu.action == 'add') {
                var buffer = await getBuffer(ppuser)
                var wangu = await getBuffer('https://telegra.ph/file/0444eb338c2215f918194.jpg')
                let fgclink = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                  he = `Mais um retardado em ${metadata.subject} @${num.split("@")[0]}😔\n${metadata.desc}`
                    
let buttons = [
{buttonId: `halo`, buttonText: {displayText: 'Bem vindo'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: feler,
jpegThumbnail:buffer,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 99999999999999,
caption: he,
footer: `© anya-md`,
buttons: buttons,
headerType: 4,
contextInfo: { externalAdReply:{
title:"@anya bot",
body:"by alone no shawty's",
showAdAttribution: true,
mediaType:2,
thumbnail: mhatadzenyu,
mediaUrl:`https://wa.me/+558898204406`, 
sourceUrl: `https://wa.me/+558898204406`,
}}
}
anya.sendMessage(anu.id, buttonMessage)
                } else if (anu.action == 'remove') {
                    var buffer = await getBuffer(ppuser)
                    var mhatadzenyu = await getBuffer('https://telegra.ph/file/0444eb338c2215f918194.jpg')
                    let fgclink = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 9999999,status: 200, thumbnail: buffer, surface: 200, message: `${metadata.subject}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                    sexo = `Saiu e não pagou a coca ${metadata.subject} @${num.split("@")[0]}😔\n${metadata.desc}`
                    
let buttons = [
{buttonId: `halo`, buttonText: {displayText: 'Tchauzinho'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: feler,
jpegThumbnail:buffer,
mentions: [num],
fileName: `${metadata.subject}`,
fileLength: 99999999999999,
caption: sexo,
footer: `${nomedobot}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
showAdAttribution: true,
title: `The AloneX Ofc`,
body: `adeus amigo(a)`,
mediaType:2,
thumbnail: buffer,
sourceUrl: `https://wa.me/+558898204406`,
mediaUrl: `https://wa.me/+558898204406`
}}
}
anya.sendMessage(anu.id, buttonMessage)
    
                }
            }
        } catch (err) {
            console.log(err)
        }
    })
    const http = require('http');
//by sacole 
/*var nextMinute = Math.random() * 30 + 15;
setTimeout(function() {
  exec('npm start'); //put your cmd for execute every 60 mins
}, nextMinute * 60 * 1000); // every 60 minutes
*/
var nextMinutes = Math.random() * 30 + 15;
//by sacole
function scheduleGc() {// garbage collector by sacole
    if (!global.gc) {//memory leak fix
    //  console.log('A coleta de lixo não é exposta');
      return;// the bot it will stop running for about 400ms.
    }
    
//by sacole
setTimeout(function(){
    global.gc();
    console.log('Manual gc', process.memoryUsage());
    scheduleGc();
  }, nextMinutes * 30 * 1000);
  //done now our garbage is being collected every 30 minutes
}
scheduleGc();
    anya.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    anya.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = anya.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    anya.getName = (jid, withoutContact  = false) => {
        id = anya.decodeJid(jid)
        withoutContact = anya.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = anya.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === anya.decodeJid(anya.user.id) ?
            anya.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    anya.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await anya.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await anya.getName(i + '@s.whatsapp.net')}\nFN:${await anya.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click To Chat\nitem2.EMAIL;type=INTERNET:GitHub: Miku-bot\nitem2.X-ABLabel:Follow Me On Github\nitem3.URL:YouTube: sacole\nitem3.X-ABLabel:Youtube\nitem4.ADR:;;miku, Mizoram;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	anya.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }
    
    anya.setStatus = (status) => {
        anya.query({
            tag: 'iq',
            attrs: {
                to: '@s.whatsapp.net',
                type: 'set',
                xmlns: 'status',
            },
            content: [{
                tag: 'status',
                attrs: {},
                content: Buffer.from(status, 'utf-8')
            }]
        })
        return status
    }
	
    anya.public = true

    anya.serializeM = (m) => smsg(anya, m, store)

    anya.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update	    
        if (connection === 'close') {
        let reason = new Boom(lastDisconnect?.error)?.output?.statusCode
            if (reason === DisconnectReason.badSession) { console.log(`Bad Session File, Please Delete Session and Scan Again`); process.exit(); }
            else if (reason === DisconnectReason.connectionClosed) { console.log("Connection closed, Reconnecting...."); startAnya(); }
            else if (reason === DisconnectReason.connectionLost) { console.log("Connection Lost from Server, Reconnecting..."); startAnya(); }
            else if (reason === DisconnectReason.connectionReplaced) { console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); process.exit(); }
            else if (reason === DisconnectReason.loggedOut) { console.log(`Device Logged Out, Please Delete Session And Scan Again.`); process.exit(); }
            else if (reason === DisconnectReason.restartRequired) { console.log("Restart Required, Restarting..."); startAnya(); }
            else if (reason === DisconnectReason.timedOut) { console.log("Connection TimedOut, Reconnecting..."); startAnya(); }
            else { console.log(`Unknown DisconnectReason: ${reason}|${connection}`) }
        }
        console.log('anya🤠', update)
    })
    
    anya.ev.on('creds.update', saveState)
    anya.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ image: img }, { upload: anya.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        imageMessage: message.imageMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            anya.relayMessage(jid, template.message, { messageId: template.key.id })
    }
     anya.send5ButGif = async (jid , text = '' , footer = '', but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: fs.readFileSync('./src/MikuBotInc.mp4'), gifPlayback: true }, { upload: anya.waUploadToServer })
         const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
         templateMessage: {
             hydratedTemplate: {
               videoMessage: message.videoMessage,
                   "hydratedContentText": text,
                   "hydratedFooterText": footer,
                   "hydratedButtons": but
                }
                }
                }), options)
                anya.relayMessage(jid, template.message, { messageId: template.key.id })
        }
        
    anya.send5ButImg = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
            let message = await prepareWAMessageMedia({ image: img }, { upload: anya.waUploadToServer })
            var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
            hydratedTemplate: {
            imageMessage: message.imageMessage,
                   "hydratedContentText": text,
                   "hydratedFooterText": footer,
                   "hydratedButtons": but
                }
                }
                }), options)
                anya.relayMessage(jid, template.message, { messageId: template.key.id })
        }
        
    anya.send5Vid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
            let message = await prepareWAMessageMedia({ video: vid }, { upload: anya.waUploadToServer })
            var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
            hydratedTemplate: {
            videoMessage: message.videoMessage,
                   "hydratedContentText": text,
                   "hydratedFooterText": footer,
                   "hydratedButtons": but
                }
                }
                }), options)
                anya.relayMessage(jid, template.message, { messageId: template.key.id })
        }
        
    anya.send5Loc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
            var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            templateMessage: {
            hydratedTemplate: {
                   "hydratedContentText": text,
                   "locationMessage": {
                   "jpegThumbnail": img },
                   "hydratedFooterText": footer,
                   "hydratedButtons": but
                }
                }
                }), options)
                anya.relayMessage(jid, template.message, { messageId: template.key.id })
        }
    
    anya.sendList = async (jid , title = '', text = '', buttext = '', footer = '', but = [], options = {}) =>{
            var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
            listMessage :{
                   title: title,
                   description: text,
                   buttonText: buttext,
                   footerText: footer,
                   listType: "  SELECT  ",
                   sections: but,
                   listType: 1
                }
                }), options)
                anya.relayMessage(jid, template.message, { messageId: template.key.id })
        }
    anya.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
        let buttonMessage = {
            text,
            footer,
            buttons,
            headerType: 2,
            ...options
        }
        anya.sendMessage(jid, buttonMessage, { quoted, ...options })
    }
    
    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    anya.sendText = (jid, text, quoted = '', options) => anya.sendMessage(jid, { text: text, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    anya.sendImage = async (jid, path, caption = '', quoted = '', options) => {
	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await anya.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} caption 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    anya.sendVideo = async (jid, path, caption = '', quoted = '', gif = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await anya.sendMessage(jid, { video: buffer, caption: caption, gifPlayback: gif, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} mime 
     * @param {*} options 
     * @returns 
     */
    anya.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
        let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        return await anya.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    anya.sendTextWithMentions = async (jid, text, quoted, options = {}) => anya.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    anya.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await anya.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }

    /**
     * 
     * @param {*} jid 
     * @param {*} text 
     * @param {*} footer
     * @param {*} options 
     * @returns 
     * 
     */
    anya.send5ButMsg = (jid, text = '' , footer = '', but = []) =>{
        let templateButtons = but
        var templateMessage = {
        text: text,
        footer: footer,
        templateButtons: templateButtons
        }
        anya.sendMessage(jid, templateMessage)
        }

    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    anya.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await anya.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
        return buffer
    }
	
    /**
     * 
     * @param {*} message 
     * @param {*} filename 
     * @param {*} attachExtension 
     * @returns 
     */
    anya.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }

    anya.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
     } 
    
    /**
     * 
     * @param {*} jid 
     * @param {*} path 
     * @param {*} filename
     * @param {*} caption
     * @param {*} quoted 
     * @param {*} options 
     * @returns 
     */
    anya.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
        let types = await anya.getFile(path, true)
           let { mime, ext, res, data, filename } = types
           if (res && res.status !== 200 || file.length <= 65536) {
               try { throw { json: JSON.parse(file.toString()) } }
               catch (e) { if (e.json) throw e.json }
           }
       let type = '', mimetype = mime, pathFile = filename
       if (options.asDocument) type = 'document'
       if (options.asSticker || /webp/.test(mime)) {
        let { writeExif } = require('./lib/exif')
        let media = { mimetype: mime, data }
        pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
        await fs.promises.unlink(filename)
        type = 'sticker'
        mimetype = 'image/webp'
        }
       else if (/image/.test(mime)) type = 'image'
       else if (/video/.test(mime)) type = 'video'
       else if (/audio/.test(mime)) type = 'audio'
       else type = 'document'
       await anya.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
       return fs.promises.unlink(pathFile)
       }
     anya.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
        let types = await anya.getFile(PATH, true)
        let { filename, size, ext, mime, data } = types
        let type = '', mimetype = mime, pathFile = filename
        if (options.asDocument) type = 'document'
        if (options.asSticker || /webp/.test(mime)) {
            let { writeExif } = require('./lib/sticker.js')
            let media = { mimetype: mime, data }
            pathFile = await writeExif(media, { packname: global.packname, author: global.packname, categories: options.categories ? options.categories : [] })
            await fs.promises.unlink(filename)
            type = 'sticker'
            mimetype = 'image/webp'
        }
        else if (/image/.test(mime)) type = 'image'
        else if (/video/.test(mime)) type = 'video'
        else if (/audio/.test(mime)) type = 'audio'
        else type = 'document'
        await anya.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
        return fs.promises.unlink(pathFile)
    }
    anya.parseMention = async(text) => {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
    }

    anya.copyNForward = async (jid, message, forceForward = false, options = {}) => {
        let vtype
		if (options.readViewOnce) {
			message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
			vtype = Object.keys(message.message.viewOnceMessage.message)[0]
			delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
			delete message.message.viewOnceMessage.message[vtype].viewOnce
			message.message = {
				...message.message.viewOnceMessage.message
			}
		}

        let mtype = Object.keys(message.message)[0]
        let content = await generateForwardMessageContent(message, forceForward)
        let ctype = Object.keys(content)[0]
		let context = {}
        if (mtype != "conversation") context = message.message[mtype].contextInfo
        content[ctype].contextInfo = {
            ...context,
            ...content[ctype].contextInfo
        }
        const waMessage = await generateWAMessageFromContent(jid, content, options ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo ? {
                contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo
                }
            } : {})
        } : {})
        await anya.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
        return waMessage
    }

    anya.cMod = (jid, copy, text = '', sender = anya.user.id, options = {}) => {
        //let copy = message.toJSON()
		let mtype = Object.keys(copy.message)[0]
		let isEphemeral = mtype === 'ephemeralMessage'
        if (isEphemeral) {
            mtype = Object.keys(copy.message.ephemeralMessage.message)[0]
        }
        let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
		let content = msg[mtype]
        if (typeof content === 'string') msg[mtype] = text || content
		else if (content.caption) content.caption = text || content.caption
		else if (content.text) content.text = text || content.text
		if (typeof content !== 'string') msg[mtype] = {
			...content,
			...options
        }
        if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
		if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
		else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
		copy.key.remoteJid = jid
		copy.key.fromMe = sender === anya.user.id

        return proto.WebMessageInfo.fromObject(copy)
    }


    /**
     * 
     * @param {*} path 
     * @returns 
     */
    anya.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
	    size: await getSizeMedia(data),
            ...type,
            data
        }

    }

    return anya
}

startAnya()


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
