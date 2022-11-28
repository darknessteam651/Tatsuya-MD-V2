/*import fs from 'fs';
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix }) => {

    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
    let name = await conn.getName(who)
    
    let img = fs.readFileSync('./thumbnail.jpg');
    await conn.sendButton(m.chat, 'Scan QR Di atas\n❏ Donasi minimal 500p :v', 'Makasih, thanks for you donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, { mentions: conn.parseMention(caption), fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
        externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sig
     }}
  })
break
            }
       }
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(kulkas)$/i

export default handler

*/