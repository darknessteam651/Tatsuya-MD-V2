
let handler = async (m, { conn, args, usedPrefix, command, isPrems, isOwner }) => {
    if (!args[0]) return m.reply('Link?')
    const sections = [
	{
	title: "🎙️ Audio",
	rows: [
	    {title: "Get Audio", rowId: `${usedPrefix}getaud ${args[0]} audio`},
	    {title: "YT Audio", rowId: `${usedPrefix}yta ${args[0]}`},
	    {title: "Ytmp3Juice", rowId: `${usedPrefix}yta ${args[0]} yes`}
	]
    },
    {
	title: "🎥 Video",
	rows: [
	    {title: "Quality 1080p", rowId: `${usedPrefix}getvid ${args[0]} 1080`},
{title: "Quality 720p", rowId: `${usedPrefix}getvid ${args[0]} 720`},
{title: "Quality 480p", rowId: `${usedPrefix}getvid ${args[0]} 480`},
{title: "Quality 360p", rowId: `${usedPrefix}getvid ${args[0]} 360`},
{title: "YT Mp4", rowId: `${usedPrefix}ytmp4 ${args[0]}`},
{title: "Ytmp4Juice", rowId: `${usedPrefix}ytmp4 ${args[0]} yes`}
	]
    },
   
]

const listMessage = {
  text: `${htjava}  ᴩʟᴇᴀꜱᴇ ꜱᴇʟᴇᴄᴛ yᴏᴜʀ ᴍᴇᴅɪᴀ ᴛyᴩᴇ...`,
  footer: botdate,
  title: " 📥 𝗬𝗧 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥",
  buttonText: "List Download",
  sections
}

return conn.sendMessage(m.chat, listMessage, { quoted: fpay})
}

handler.help = ['ytd']
handler.tags = ['downloader']
handler.command = /^ytd(mp[34]|[av])?$/i
handler.exp = 3

export default handler
