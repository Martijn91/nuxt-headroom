# Nuxt Headroom

Easy integration of [Headroom.js](https://wicky.nillia.ms/headroom.js/) within a Nuxt app.

## Description

Headroom.js is a lightweight, high-performance JS widget (with no dependencies!) that allows you to react to the user's scroll. The header on this site is a living example, it slides out of view when scrolling down and slides back in when scrolling up.

This module is an extension for easy integration within a Nuxt web application.

## Getting Started

### Dependencies

- Nuxt 2.13+
- Nuxt > 2.10 || <= 2.12 requires @nuxt/components as dependency and added to buildModules

### Installing

```bash
npm i --save-dev nuxt-headroom
```

- Add 'nuxt-headroom' dependancy to buildModules @ nuxt.config.js
- Auto-import of components must be set true @ nuxt.config.js

### Usage

- How to run the program
- Step-by-step bullets

```vue
<template>
  <headroom>
    <header>Put your head code here...</header>
  </headroom>
</template>
```

### Props

```text
speed
```

Transition speed, in ms. Default: 350

```text
easing
```

Transition function. Default: ease-in-out

```text
disabled
```

Disable the headroom. Default: false

```text
upTolerance
```

Scroll tolerance when scrolling up before component is pinned, in px. Default: 5

```text
downTolerance
```

Scroll tolerance when scrolling down before component is pinned, in px. Default: 0

```text
scroller
```

Element to listen to scroll events on. Default: () => window

```text
classes
```

Css classes to apply. Default:

```javascript
{
  // when element is initialised
  initial : "headroom",
  // when scrolling up
  pinned : "headroom--pinned",
  // when scrolling down
  unpinned : "headroom--unpinned",
  // when above offset
  top : "headroom--top",
  // when below offset
  notTop : "headroom--not-top",
  // when at bottom of scoll area
  bottom : "headroom--bottom",
  // when not at bottom of scroll area
  notBottom : "headroom--not-bottom"
}
```

```text
offset
```

Height in px where the header should start and stop pinning. Default: 0

```text
zIndex
```

The z-index of component. Default: 9999

```text
footroom
```

Same behaviour but as a footer instead. Default: false

### Events

```text
pin
```

Callback when header is pinned.

```text
unpin
```

Callback when header is unpinned.

```text
unfix
```

Callback when header is unfixed.

```text
top
```

Callback when above offset.

```text
not-top
```

Callback when below offset.

```text
bottom
```

Callback when at bottom of page.

```text
not-bottom
```

Callback when moving away from bottom of page.

## Authors

Contributors names and contact info

Martijn Wennekes
[@gmail](martijnwennekes91@gmail.com)

## Version History

- 0.1
  - Initial Release

## License

[MIT License](http://opensource.org/licenses/MIT)

## Acknowledgments

- [vue-headroom](https://www.npmjs.com/package/vue-headroom)
