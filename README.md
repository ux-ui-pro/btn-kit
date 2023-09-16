<div align="center">
<br>

# btn-kit
<sup>btn-kit is a customizable button component for web apps with built-in features like icon support,<br>
predefined styles, various button types and sizes, and UI customization.</sup>

[![npm](https://img.shields.io/npm/v/btn-kit.svg?colorB=brightgreen)](https://www.npmjs.com/package/btn-kit)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/btn-kit.svg)](https://github.com/ux-ui-pro/btn-kit)
[![NPM Downloads](https://img.shields.io/npm/dm/btn-kit.svg?style=flat)](https://www.npmjs.org/package/btn-kit)

<sup>1kB gzipped</sup>

<h3><a href="https://qpgzlf.csb.app/">Demo</a></h3>
</div>
<br>

## Install
```
$ yarn add btn-kit
```
<br>

## Use
<sub>import</sub>
```javascript
import { createApp } from 'vue';
import AppButton from 'btn-kit';
import App from './App.vue';

const app = createApp(App);

app.component('AppButton', AppButton);
app.mount('#app');
```

<sub>To use all the functionality of btn-kit, it is enough to create a button theme, to set its background color and text color.</sub>
```vue
<template>
    <AppButton
        theme="awesome"
        size="lg"
        variation="text"
        shape="rounded"
        disabled
        ripple
    >
        <Icon id="icon_name"/>
        <span class="label">Text</span>
    </AppButton>
</template>

<style lang="scss" scoped>
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

## Options
| Option         | Type     | Default      | Description                              |
| :------------- | :------: | :----------: | :--------------------------------------- |
| **theme**      | String   | —            | ...                                      |
| **size**       | String   | `md`         | `sm`, `md`, `lg` — ...                   |
| **shape**      | String   | —            | `rounded` — ...<br>`round` — ...         |
| **variation**  | String   | contained    | `outlined` — ...<br>`text` — ...         |
| **ripple**     | Boolean  | `false`      | ...                                      |
| **disabled**   | Boolean  | `false`      | ...                                      |
| **progress**   | Boolean  | `false`      | ...                                      |
<br>

## Events
| Option         | Type     | Default      | Description                              |
| :------------- | :------: | :----------: | :--------------------------------------- |
| **route**      | String   | —            | ...                                      |
| **href**       | String   | —            | ...                                      |
| **@click**     | String   | —            | ...                                      |
<br>

## Customize
```css
--vbk-ripple-background
--vbk-ripple-mix-blend
--vbk-ripple-opacity
--vbk-ripple-speed


--vbk-color-h
--vbk-color-s
--vbk-color-l
--vbk-color-a

--vbk-background-h
--vbk-background-s
--vbk-background-l
--vbk-background-a


--vbk-icon-size


--vbk-font-weight
--vbk-font-size
--vbk-text-transform
--vbk-letter-spacing


--vbk-group-padding


--vbk-border-width

--vbk-rounded-radius
--vbk-round-radius

--vbk-outline-color

?
--vbk-background-active
--vbk-background-hover
?
```
<br>

## License
btn-kit is released under MIT license