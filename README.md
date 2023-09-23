<div align="center">
<br>

<p style="font-size: 24pt; font-weight: 600;">btn-kit</p>
<sup>btn-kit is a Vue 3 component for creating buttons for web applications.<br>
Built-in features include icon support, different button types and sizes, states, effects.</sup>

[![npm](https://img.shields.io/npm/v/btn-kit.svg?colorB=brightgreen)](https://www.npmjs.com/package/btn-kit)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/btn-kit.svg)](https://github.com/ux-ui-pro/btn-kit)
[![NPM Downloads](https://img.shields.io/npm/dm/btn-kit.svg?style=flat)](https://www.npmjs.org/package/btn-kit)

<sup>1kB gzipped</sup>

<p style="font-size: 14pt; font-weight: 400; line-height: 2;">
<a href="https://btn-kit.ux-ui.pro/build">Constructor</a><br>
<a href="https://qpgzlf.csb.app/">Sandbox</a><br>
<a href="https://btn-kit.ux-ui.pro/docs">Docs</a>
</p>
</div>
<br>

<p style="font-size: 18pt; font-weight: 600;">Install</p>

```bash
$ yarn add btn-kit
```
<br>

<p style="font-size: 18pt; font-weight: 600;">Import</p>
<p style="font-size: 2em; font-weight: 600;">Import</p>
<font size="6">Import</font>

```javascript
import AppButton from 'btn-kit'
import 'btn-kit/dist/index.css'

app.component('AppButton', AppButton)
```
<br>

<p style="font-size: 18pt; font-weight: 600;">Usage</p>

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
        --vbk-background-h: 180;
        --vbk-background-s: 100%;
        --vbk-background-l: 25%;
        --vbk-color-h: 0;
        --vbk-color-s: 0%;
        --vbk-color-l: 90%;
    }
}
</style>
```
<br>

<p style="font-size: 18pt; font-weight: 600;">License</p>

btn-kit is released under MIT license