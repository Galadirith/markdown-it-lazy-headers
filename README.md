# markdown-it-lazy-headers

`markdown-it-lazy-headers` is a plugin for
[`markdown-it`](https://github.com/markdown-it/markdown-it) that relaxes the
syntax of [ATX headers](http://spec.commonmark.org/0.22/#atx-header) so that you
don't have to follow the opening sequence of `#` characters by a space. Should
you have any problems while installing or using `markdown-it-lazy-headers`
please open up a
[new issue](https://github.com/Galadirith/markdown-it-lazy-headers/issues).

## Installation

```
npm install --save markdown-it-lazy-headers
```

## Usage

```
var md = require('markdown-it')()
        .use(require('markdown-it-lazy-headers'));
```

## License

`markdown-it-lazy-headers` is released under the [MIT license](LICENCE.md).
