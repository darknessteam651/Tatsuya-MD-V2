let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `📮 *SC PRIVATE AWOKAWOK :v*

`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*TATSUYA BOT GITHUB*', 'status@broadcast') 
}
handler.help = ['github']
handler.tags = ['info']
handler.command = /^(github)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 25

export default handler 