let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: Fahri
╠➥ Script: @Nurotomo
║
╠➥ Github: https://github.com/Bot-wacap
╠➥ Instagram: @cuppu_gamingch
╠➥ YouTube: cuppu_gaming
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ TELKOM: 0822-1180-2299
╠➥ TELKOM: 0822-5838-0684
║
║
║>Request? Wa.me/6282211802299
║
╠═〘 Cuppu BOT 〙 ═
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

