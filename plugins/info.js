let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: UwiwBocah
╠➥ Script: @Nurotomo
║
╠➥ Github: https://github.com/Bot-wacap
╠➥ Instagram: @Uwiw_Bocah
╠➥ YouTube: BLANK
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ IM3: 0858-1365-5726
╠➥ IM3: 0856_9184-2186
║
║
║>Request? Wa.me/6285691842186
║
╠═〘 Khocret BOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

