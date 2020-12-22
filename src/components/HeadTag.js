const { html } = require('htm/preact')

const HeadTag = ({ data }) => html`
  <head>
    <meta charset="utf-8" />
    <meta content="ie=edge" http-equiv="x-ua-compatible" />
    <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
    <meta content="ie=edge" http-equiv="X-UA-Compatible" />
    <meta content="#ffffff" name="msapplication-TileColor" />
    <meta content="/favicon/ms-icon-144x144.png" name="msapplication-TileImage" />
    <title>${data.title}</title>
    <link rel="stylesheet" href="/assets/main.css?${data.cacheBust.mainCss}" type="text/css" />

    <link href="/favicon/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
    <link href="/favicon/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
    <link href="/favicon/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
    <link href="/favicon/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
    <link href="/favicon/apple-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
    <link href="/favicon/apple-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
    <link href="/favicon/apple-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
    <link href="/favicon/apple-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
    <link href="/favicon/apple-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
    <link href="/favicon/android-icon-192x192.png" rel="icon" sizes="192x192" type="image/png" />
    <link href="/favicon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
    <link href="/favicon/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png" />
    <link href="/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
  </head>
`

module.exports = HeadTag
