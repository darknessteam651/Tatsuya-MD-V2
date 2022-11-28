let handler = async (m, { conn, command, usedPrefix, text, groupMetadata }) => {

let imgr = flaaa.getRandom()

if (!text) throw `Contoh:
${usedPrefix + command} Alay`
let em = ['🥶','🤨','🗿','🤔','😫','🤫','🥴','🤣','😊','😍']

    let toM = a => '@' + a.split('@')[0]
    let ps = groupMetadata.participants.map(v => v.id)
    let a = ps.getRandom()
    let am = em.getRandom()
    conn.sendButton(m.chat, bottime, `Sii Paling *${text}* Adalah ${toM(a)} ${am}`, `${imgr + 'Si paling'}`, [['COBA YANG LAIN', '.sipaling ' + text]], m,{mentions: [a]})
    
}
handler.help = ['sipaling'].map(v => v + ' <teks>')
handler.command = ['sipaling']
handler.tags = ['fun']

handler.group = true

export default handler