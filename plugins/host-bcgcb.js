import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, text } ) => {
let imgr = flaaa.getRandom()
let chats = Object.entries(conn.chats).filter(([_, chat]) => chat.isChats).map(v => v[0])
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  for (let id of chats) {
conn.sendButton(id, '────━┅ *BROADCAST* ┅━────\n' + bottime, text, `${imgr + 'Boardcast'}`, [['ANONYMOUS CHAT', '.start'],['MENU', '.menu']], false, { contextInfo: {
        externalAdReply: {
            title: `${htjava} BROADCAST`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb2)).buffer(),
         mediaUrl: sig
        }
     }
    })
  }
  m.reply('*D O N E !*')
}
handler.command = ['bcgcb']
handler.tags = ['host']
handler.help = ['bcgcb']

handler.rowner = true

export default handler
