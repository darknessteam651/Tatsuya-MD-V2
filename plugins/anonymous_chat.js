async function handler(m, { command }) {
    let imgr = flaaa.getRandom()
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) return this.sendButton(m.chat, '*Kamu tidak berada di Server anonymous Chat*\nYuk, Waktunya Mencari teman...', 'Loading...', `${imgr + 'Anonymous Chat'}`, [['CARI TEMAN', `.start`],['MENU', '.menu']], fpay)
            m.reply('『 SUKSES DELETE 』\nSukses, Ingin mencari teman? Gunakan command .start')
            let other = room.other(m.sender)
            if (other) await this.sendButton(other, '_Teman kamu telah memutuskan Chat anonymous :)_\nYuk waktunya cari teman baru...', 'Loading...', `${imgr + 'Anonymous Chat'}`, [['CARI TEMAN', `.start`],['DONASI', '.donasi']], fpay)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) return this.sendButton(m.chat, '*Kamu masih Berada di anonymous Chat, Ingin menghapus Sesi Anonymous chat?*', 'Menunggu...', `${imgr + 'Anonymous Chat'}`, [['KELUAR', `.leave`]], fpay)
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                await this.sendButton(room.a, 'Sukses Menemukan teman untuk kamu, Mulai lah berbicara dengan orang tidak di kenal\n\nKatakan Hallo\n*❏ NOTE:* Jika pesan kamu tidak di balas kemungkinan teman kamu sedang offline/Sibuk\n\n*Cara penggunaan*\n*.leave* Untuk keluar dari anonymous chat\n*.start* Untuk memulai anonymous chat\n*.sendkontak* Untuk mengirim kontak anda ke teman anonymous\n*.next* Untuk skip teman anonymous...', 'Menunggu Balasan...', `${imgr + 'Anonymous Chat'}`, [['CARI TEMAN LAIN', `.next`],['SEND KONTAK', '.sendkontak']], fpay)
                room.b = m.sender
                room.state = 'CHATTING'
                await this.sendButton(room.a, 'Sukses Menemukan teman untuk kamu, Mulai lah berbicara dengan orang tidak di kenal\n\nKatakan Hallo\n*❏ NOTE:* Jika pesan kamu tidak di balas kemungkinan teman kamu sedang offline/Sibuk\n\n*Cara penggunaan*\n*.leave* Untuk keluar dari anonymous chat\n*.start* Untuk memulai anonymous chat\n*.sendkontak* Untuk mengirim kontak anda ke teman anonymous\n*.next* Untuk skip teman anonymous...', 'Menunggu Balasan...', `${imgr + 'Anonymous Chat'}`, [['CARI TEMAN LAIN', `.next`],['SEND KONTAK', '.sendkontak']], fpay)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                await this.sendButton(m.chat, '_Sedang mencari teman Random_\nMohon tunggu *±10 Menit...*', 'Loading...', `${imgr + 'Anonymous Chat'}`, [['BATALKAN', `.leave`]], m)
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = ['anonymous']
handler.command = ['start', 'leave', 'next']

handler.private = true

export default handler