# Ben's CD for Monorepos

## cdp <package-name>

`cdp` stands for "Change Directory - Package"

Example

```bash
front-end/packages/assets>
$ cdp assets-ui

front-end/apps/assets-ui>
$
```

## lsp

`lsp` stands for "List - Packages"

Example

```bash
front-end/packages/assets>
$ lsp
Packages: assets | assets-ui | ignition-root | pendo | side-bar | tailwind-config | ui-components | ui-icons | cypress-e2e | front-end
```

If you use either command outside of the `front-end` monorepo, you'll get a message telling you as much.

## Setup

1. Clone this repo

2. `npm i`

Done! Now you can use `cdp <package-name>` and `lsp` in Bash shells.
