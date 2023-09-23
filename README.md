<br>
<p align="center"><strong>btn-kit</strong></p>

<p align="center"><sup>btn-kit is a Vue 3 component for creating buttons for web applications.<br>Built-in features include icon support, different button types and sizes, states, effects.</sup></p>

<div align="center">

[![npm](https://img.shields.io/npm/v/btn-kit.svg?colorB=brightgreen)](https://www.npmjs.com/package/btn-kit)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/btn-kit.svg)](https://github.com/ux-ui-pro/btn-kit)
[![NPM Downloads](https://img.shields.io/npm/dm/btn-kit.svg?style=flat)](https://www.npmjs.org/package/btn-kit)

</div>

<p align="center"><sup>1kB gzipped</sup></p>

<p align="center"><a href="https://btn-kit.ux-ui.pro/build">Constructor</a><br>
<a href="https://codesandbox.io/s/btn-kit-npm-qpgzlf">Sandbox</a><br>
<a href="https://btn-kit.ux-ui.pro/docs">Docs</a></p>
<br>

**Install**

```console
$ yarn add btn-kit
```
<br>

**Import**

```javascript
import AppButton from 'btn-kit'
import 'btn-kit/dist/index.css'

app.component('AppButton', AppButton)
```
<br>

**Usage**

```vue
<template>
    <AppButton
        theme="awesome"
        size="md"
    >
        <span class="label">Text</span>
    </AppButton>
</template>

<style lang="scss">
.btn--theme {
    &-awesome {
        --bk-background-h: 180;
        --bk-background-s: 100%;
        --bk-background-l: 25%;
        --bk-color-h: 0;
        --bk-color-s: 0%;
        --bk-color-l: 90%;
    }
}
</style>
```
<br>

**License**

btn-kit is released under MIT license