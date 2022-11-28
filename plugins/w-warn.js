let handler = async (m, { conn, args, usedPrefix }) => {
    if (args.length > 0) {
        let imgr = flaaa.getRandom()
        let mention = args[0].replace(/[@.+-]/g, '').replace(' ', '')
        let ban = m.mentionedJid[0] || m.quoted.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
        let warning = global.db.data.users[ban].warning
        if (warning < 5) {
            global.db.data.users[ban].warning += 1
            m.reply(`*berhasil Warn!*`)
            conn.sendButton(ban, hiasan, '*Kamu di warn oleh moderator, dan sekarang kamu punya ' + (warning + 1) + ' warn. Ingat Jika kamu mendapat warn 5 kali kamu akan otomatis ke banned*', `${imgr + 'Warn'}`, [['Owner', usedPrefix + 'owner']],fpay)
        } else if (warning == 5) {
            global.db.data.users[ban].banned = true
            global.db.data.users[ban].warning = 0
            m.reply('*Dia sudah kebanned, karena mendapatkan 5 warn*')
            conn.sendButton(ban, hiasan, '*Kamu ke banned karena telah mendapatkan 5 kali warning*', `${imgr + 'User Banned'}`, [['Owner', usedPrefix + 'owner']],fpay)
        }
    } else conn.reply(m.chat, '*Siapa yang mau di Warn?*\n*Tag orangnya*', fpay)
}
handler.help = ['warn @tag']
handler.tags = ['owner', 'moderator']
handler.command = /^warn$/i
handler.mods = true

export default handler
