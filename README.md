# DanicaCatoni.github.io

Source for my personal site: https://danicacatoni.github.io

A fully static site (HTML, CSS and a small amount of JavaScript) served by GitHub Pages. There is no server-side code, database, CMS, cookies, analytics or third-party request: fonts are self-hosted and a strict Content Security Policy only allows files from this origin.

## Structure

```
index.html              the page
404.html                not-found page
assets/site.css         styles
assets/site.js          section navigation, filters, theme toggle
assets/fonts/           self-hosted Bricolage Grotesque and IBM Plex Sans (SIL OFL)
.well-known/security.txt  how to report a security issue
.nojekyll               serve files as-is (needed for .well-known)
```

## Reporting a vulnerability

See [`.well-known/security.txt`](.well-known/security.txt) or email danica.catoni@gmail.com.
