const request = require('request')
const fs = require('fs')

module.exports = class Speech {
  constructor(token) {
    this.token = token
  }

  speech(options) {
    return new Promise((resolve, reject) => {
      const filename = `${options.filename}.${options.format}`
      const stream = fs.createWriteStream(filename)
            stream.on('close', () => resolve(filename))

      delete options.filename
             options.key = this.token

      request({
        url: 'https://tts.voicetech.yandex.net/generate',
        method: 'POST',
        form: options
      }).pipe(stream)
    })
  }
}
