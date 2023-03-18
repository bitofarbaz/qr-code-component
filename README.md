# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Github](https://github.com/bitofarbaz/qr-code-component)
- Live Site URL: [Github Pages](https://bitofarbaz.github.io/qr-code-component/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

#### Import & user custom font

In order to import custom font, i added the following snippet inside `<head>...</head>` tag of `./index.html`.

```html
<style>
  @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap");
</style>
```

Then to assign this font to root, i added the following snippet inside `./src/App/App.styled.ts` file.

```css
:root {
  font-family: "Outfit", sans-serif;
  font-size: 15px;
}
```

#### Defining theme's type.

`./src/styled.d.ts`

`./src/theme.ts`

`./src/App/App.tsx`

## Author

- Website - [Arbaz Ajaz](https://arbaz52.github.io/portfolio/)
- Frontend Mentor - [@bitofarbaz](https://www.frontendmentor.io/profile/bitofarbaz)
- Twitter - [@bitofarbaz](https://www.twitter.com/bitofarbaz)
