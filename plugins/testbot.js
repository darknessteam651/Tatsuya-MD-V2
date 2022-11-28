import { generateWAMessageFromContent } from "@adiwajshing/baileys"



let handler  = async (m, { conn }) => {



let prep = generateWAMessageFromContent(m.chat, { liveLocationMessage: { 

degreesLatitude: 34.672314, degreesLongitude: 135.484802,

caption: 'Bot sudah aktif_-',

sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: null

}}, { quoted: m

					})



return conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id })

}



handler.customPrefix = /^(bot)$/i
handler.command = new RegExp

export default handler