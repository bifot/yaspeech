# Ya Speech

Module for Yandex Speech API.

## Install

```
$ npm i yaspeech --save
```

## Usage

```javascript
const Speech = require('yaspeech')

const api = new Speech(process.env.speeh_token)

api.speech({
  filename: 'example',
  text: 'Hello, world!',
  format: 'mp3',
  lang: 'en-US',
  speaker: 'oksana',
  speed: 0.7,
  emotion: 'evil'
}).then(file => {
  console.log(file) // => 'example.mp3'
})
```

## License

MIT.
