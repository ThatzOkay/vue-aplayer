<p align="center">
  <a href="https://aplayer.netlify.com">
    <img alt="vue-aplayer" src="https://user-images.githubusercontent.com/34600369/40580777-0dee07f0-613e-11e8-9a8b-a6f866db5986.png" width="500">
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@thatzokay/vue-aplayer"><img alt="NPM version" src="https://img.shields.io/npm/v/@thatzokay/vue-aplayer.svg?style=for-the-badge" /></a>
  <a href="https://github.com/ThatzOkay/vue-aplayer/actions/workflows/npm-publish.yml"><img alt="Build Status" src="https://github.com/ThatzOkay/vue-aplayer/actions/workflows/npm-publish.yml/badge.svg"></a>
  <a href="./LICENSE"><img alt="LICENSE MIT" src="https://img.shields.io/badge/license-mit-blue.svg?style=for-the-badge"></a>
  <a href="https://github.com/prettier/prettier"><img alt="Code Style: Prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge"></a>
</p>

> This is the branch for `@thatzokay/vue-aplayer` 3.

## Status: Beta

Most of the planned features are in place but there may still be bugs.

## Documentation

Docs are available at [aplayer.thatzokay.nl/docs/](https://aplayer.thatzokay.nl/docs/)

## Install

```bash
npm i @thatzokay/vue-aplayer
```

## Usage

[![Edit vue-aplayer-demo](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/devbox/vue-aplayer-demo-p4l2xj?embed=1)

```ts
import Vue from 'vue';
import { VueAPlayerPlugin } from '@thatzokay/vue-aplayer';

createApp(App)
  .use(VueAPlayerPlugin, {
    defaultCover: 'https://github.com/u3u.png'
  })
  .mount('#app');
```

## Related Projects

- [APlayer](https://github.com/MoePlayer/APlayer): Original project, thanks [@DIYgod](https://github.com/DIYgod)
- [Vue-Aplayer](https://github.com/SevenOutman/vue-aplayer): Another Vue implementation of APlayer by [@SevenOutman](https://github.com/SevenOutman)
- [Vue-Aplayer](https://github.com/MoePlayer/vue-aplayer): Originally forked from [@MoePlayer](https://github.com/MoePlayer)

## Contributing

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push origin my-new-feature`
5.  Submit a pull request :D

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://qwq.cat"><img src="https://avatars2.githubusercontent.com/u/20062482?v=4?s=100" width="100px;" alt="さくら"/><br /><sub><b>さくら</b></sub></a><br /><a href="https://github.com/MoePlayer/vue-aplayer/commits?author=u3u" title="Code">💻</a> <a href="https://github.com/MoePlayer/vue-aplayer/commits?author=u3u" title="Documentation">📖</a> <a href="#example-u3u" title="Examples">💡</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://diygod.me"><img src="https://avatars2.githubusercontent.com/u/8266075?v=4?s=100" width="100px;" alt="DIYgod"/><br /><sub><b>DIYgod</b></sub></a><br /><a href="#design-DIYgod" title="Design">🎨</a> <a href="#ideas-DIYgod" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://forkmeongithub.com/"><img src="https://avatars3.githubusercontent.com/u/27483702?v=4?s=100" width="100px;" alt="Rex Zeng"/><br /><sub><b>Rex Zeng</b></sub></a><br /><a href="https://github.com/MoePlayer/vue-aplayer/issues?q=author%3ARexSkz" title="Bug reports">🐛</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nunojesus"><img src="https://avatars0.githubusercontent.com/u/34600369?v=4?s=100" width="100px;" alt="Nuno Jesus"/><br /><sub><b>Nuno Jesus</b></sub></a><br /><a href="#design-nunojesus" title="Design">🎨</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ThatzOkay"><img src="https://avatars.githubusercontent.com/u/6585530?v=4?s=100" width="100px;" alt="ThatzOkay"/><br /><sub><b>ThatzOkay</b></sub></a><br /><a href="https://github.com/ThatzOkay/vue-aplayer/commits?author=ThatzOkay" title="Code">💻</a> <a href="https://github.com/ThatzOkay/vue-aplayer/commits?author=ThatzOkay" title="Documentation">📖</a> <a href="#example-ThatzOkay" title="Examples">💡</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind are welcome!

## Author

**vue-aplayer** © [u3u](https://github.com/u3u), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by u3u with help from contributors ([list](https://github.com/MoePlayer/vue-aplayer/contributors)).

> [qwq.cat](https://qwq.cat) · GitHub [@u3u](https://github.com/u3u)
