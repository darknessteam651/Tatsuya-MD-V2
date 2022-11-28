export async function all(m) {
    if (!m.isGroup)
        return
    let chats = global.db.data.chats[m.chat]
    if (!chats.expired)
        return !0
    if (+new Date() > chats.expired) {
        let imgr = flaaa.getRandom()
        let caption = `Bye? *${this.user.name}* akan left dari grup!!`
    await this.sendButton(m.chat, caption, wm, `${imgr + 'Expired Habis :/'}`, [['OKE', 'Ok'], ['SEWA BOT', '.sewabot']], fpay)
        await this.groupLeave(m.chat)
        chats.expired = null
    }
}