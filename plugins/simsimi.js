const axios = require('axios')
let handler = async (m, { text }) => {
  new Promise((resolve, reject) => {
        axios.get('https://fdciabdul.tech/api/ayla/?pesan=' + encodeURIComponent(text))
            .then((res) => {
    m.reply(res.data.jawab)
            })
  })
}

handler.command = /^((sim)?simi|simih)$/i
handler.group = false
handler.register = true

module.exports = handler

