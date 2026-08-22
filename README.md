# WebAXP — Web Application Experience Package

WebAXP is the **packaging format** for WebAX applications. It defines how a WebAX app is bundled, versioned, described, and referenced so that it can be installed and run in any standards-compliant browser.

> **Note:** WebAXP is *not* the application framework. The framework (Business Logic Controller + UI component library) is **jcule** + **jellicule**, unified under the **WebAX** umbrella. WebAXP is only the package that wraps a finished app for distribution.

## Overview

A WebAXP package is a **bundle** (a directory) plus a **manifest** that describes it. The package is produced from a WebAX app's build output and consumed by the distribution layer (**WebAXD**) and, ultimately, the distribution network (**WebAXPDN**).

## Package contents

A WebAXP bundle contains:

- `index.html` — entry point
- `manifest.json` — PWA manifest with the `webax` extension field
- `app.js`, `styles.css`, and other core assets
- `service-worker.js` — offline support

## The `webax` manifest field

A WebAX app's PWA manifest carries a `webax` extension describing the package:

```json
{
  "name": "Example App",
  "start_url": "/index.html",
  "display": "standalone",
  "webax": {
    "version": "1.0.0",
    "publisher": "example.com",
    "package_id": "example-app",
    "permissions": ["storage", "network", "notifications"],
    "services": ["postgres", "ollama"],
    "distribution": {
      "webtorrent": "magnet:?xt=urn:btih:...",
      "archive": "https://example.com/example-app.zip",
      "repo": "https://github.com/example/example-app.git"
    }
  }
}
```

## Distribution references

A WebAXP package can be referenced three ways:

- **WebTorrent** — a magnet URI for P2P sharing.
- **Archive** — a `.zip` of the bundle.
- **Repository** — a Git URL for source access.

## Relationship to the rest of the ecosystem

- **WebAXP** = the package *format* (this project).
- **WebAXD** = the distribution *layer* that moves packages (direct / P2P / distributed).
- **WebAXPDN** = the P2P distribution *network* built on WebAXD.

## Status

Packaging format specification — in progress. See [`WebAX/docs/webaxp-format.md`](../WebAX/docs/webaxp-format.md) for details.

## License

MIT
