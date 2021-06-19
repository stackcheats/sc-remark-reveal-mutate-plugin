# Remark Reveal Mutate

A Gatsby Remark plugin to mutate Markdown contents for [`reveal.js`](https://revealjs.com/).

> This implementation is inspired by [gatsby-remark-slidify](https://www.npmjs.com/package/gatsby-remark-slidify)

[:construction: Plugin Under Development]

## Installation

```sh
# not published to npm registry. hence use `npm link` to use the plugin locally
npm link <path to sc-remark-reveal-mutate-plugin>
```

## Configure

Add the following plugin configuration in `gatsby-config.js` to activate the plugin

> This is a `remark` mutate plugin. Hence, the plugin should be configured as a plugin of `gatsby-transformer-remark`

```js
{
    resolve: `gatsby-transformer-remark`,
    options: {
        plugins: [
            {
                resolve: 'sc-remark-reveal-mutate',
            },
        ],
    },
},
```

### Markdown Content

The following structure is used to represent the markdown contents for `reveal` slide deck.

```sh
reveal: true    # frontmatter says it is reveal content
--v--           # used to annotate vertical slide
--h--           # used to annotate horizontal slide
reveal-note:     # used to annotate notes
```

A sample markdown content is given below

```md
---
reveal: true
---

# StackCheats

StackCheats is a personal blog created by Athiththan.

--h--

## Now Supports Reveal!!!

StackCheats now supports `revealjs` slide decks to provide more feasible contents. Now you can move down to learn more

--v--

## Yay!!!

Now you are watching a vertical slide content

reveal-note:

This a side (speaker) note section presenting few additional points or notes relevant to this particular slide. 

```

## License

[MIT](LICENSE)
