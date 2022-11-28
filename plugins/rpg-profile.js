import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import moment from 'moment-timezone'
import { sticker } from '../lib/sticker.js'
import fs from "fs"

let handler = async (m, { conn, args, usedPrefix, command }) => {

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(who)
    let pp = await conn.profilePictureUrl(who).catch(_ => './src/avatar_contact.png')
    if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
     let math = max - xp
let caption = `*YOUR PROFILE*
*🏷️ Nama:* ${registered ? '(' + name + ') ' : ''} 
*🪀 Tag:* @${who.split("@")[0]}
*❤️ Pasangan:*  ${pasangan ? `@${pasangan.split("@")[0]}` : `Tidak Punya`}
*💲 Money:* *RP* ${money}
*🏆 Level* ${level}
*🎋 Role:* ${role}
*🧬 XP:* TOTAL ${exp}
*📨 Terdaftar:* ${registered ? '✅ (' + new Date(regTime).toLocaleString() + ')' : '❌'} ${lastclaim > 0 ? '\n*⏱️Terakhir Klaim:* ' + new Date(lastclaim).toLocaleString() : ''}\n\n Ketik ${usedPrefix}inv untuk melihat Inventory RPG`
await conn.sendButton(m.chat, bottime, caption, pp, [
                ['LEVELUP', `${usedPrefix}levelup`],
                ['CLAIM', `${usedPrefix}claim`]
            ], m, {
            fileLength: fsizedoc,
            seconds: fsizedoc,
            contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: bottime,
    body: botdate,
    thumbnail: await(await fetch(thumb)).buffer(),
    sourceUrl: sgc
     }}
  })
}

handler.help = ['profile'].map(v => v + ' <url>')
handler.tags = ['rpg']

handler.command = /^(pro(fil)?(file)?)$/i

export default handler

const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})})