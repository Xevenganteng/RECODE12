let handler = async (m, { conn, args, usedPrefix }) => {

let res = await conn.query({
  json: ["action", "inviteReset", m.chat]
    })
  await m.reply('Link Group Berhasil Direset!\n\nLink Baru :\nhttps://chat.whatsapp.com/' + res.code)
}
handler.command = /^revoke$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler