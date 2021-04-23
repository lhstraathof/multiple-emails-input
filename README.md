[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">

  <h3 align="center">MeiMei - Multiple Email Input</h3>

  <p align="center">
    MeiMei: A simple easy to use vanilla JavaScript library for creating input fields that accept multiple email addresses.
    <br />
    <a href="https://lhstraathof.github.io/multiple-emails-input/">View Demo</a>
    ·
    <a href="https://github.com/lhstraathof/multiple-emails-input/issues">Report Bug</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#options">Options</a></li>
        <li><a href="#api">API</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#example">Example</a></li>
    <li><a href="#example">Todo</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

There are lots of component libraries with email inputs, yet very few that focus on multi email input and vanilla js.
This library adds multi email input functionality possible in your web application.

This library is the result of a code challenge. It does not include full unit-test coverage or performance optimization. Just examples of unit-tests as a confrontation piece.

### Built With

This project is primarily build with

- [Typescript](https://www.typescriptlang.org/)
- [PostCSS](https://postcss.org/)
- [Webpack](https://webpack.js.org/)

For rest: see package.json

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/lhstraathof/multiple-emails-input.git
   ```
2. Duplicate meimei-lib.min.js from ./dist/
3. Import meimei-lib-min.js before the closing tag </body> and start using it
   ```HTML
   <div class="input-target"></div>
   <script src="./meimei-lib.min.js"></script>
   <script>
    var inputContainerNode = document.querySelectorAll('.input-target');
    var emailsInput1 = MeiMei(inputContainerNode);
   </script>
   ```

### Options

**Name**|**Type**|**Description**|**Default**
-----|-----|-----|-----
placeholder|string|The placeholder tekst for the input field|add more people…
onAddEntry|function|Triggers after adding an entry| 
onRemoveEntry|function|Triggers after removing an entry| 
theme|object|You can overwrite the default classes with your own theme| 

You can add options as a second parameter to MeiMei:
```HTML
   <div class="input-target"></div>
   <script src="./meimei-lib.min.js"></script>
   <script>
    var customProps = {
        placeholder: 'Hi, add emails here',
    };
    var inputContainerNode = document.querySelectorAll('.input-target');
    var emailsInput1 = MeiMei(inputContainerNode, customProps);
   </script>
```

A custom theme with your own classes can be added, for example:
```JS
    var theme = {
        box: "custom-box-class",
        input: "custom-input-class",
        chip: "custom-chip-class",
        chipInvalid: "custom-chipInvalid-class",
        cross: "custom-cross-icon-class"
    };
    var customProps = { theme: theme };
    var inputContainerNode = document.querySelectorAll('.input-target');
    var emailsInput1 = MeiMei(inputContainerNode, customProps);
```

### API

After adding MeiMei to your page and assigning it to a variable, you get access to the API and its follow methods:

**Name**|**Type**|**Description**
-----|-----|-----
add|function|Manually add an entry. This function accepts a string to add as entry to MeiMei
entryList|array|Array of entries active in the MeiMei element
inputFieldRef|element|Reference to the input field of MeiMei
optionalProps|object|The optional props you may have provided
ref|element|The box element of MeiMei
remove|function|Manually remove an entry. This function accepts a ref from to the entryList (see API) and removes it from MeiMei

<!-- USAGE EXAMPLES -->

## Usage

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner (jest).

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles Typescript in production mode and optimizes the build.

## Example

To see the live demo, go to [https://lhstraathof.github.io/multiple-emails-input/](https://lhstraathof.github.io/multiple-emails-input/)

<!-- TODO -->

## TODO

As this library is the result of a code challenge, there is still lots to be done:

- Proper cross browser testing
- Make library available via NPM
- Update webpack config to export to UMD, es-module, etc.
- Deploy to CDN
- Add unit-tests
- Optimize performance
- Add life-cycle methods and extend API
- Add more theme's
- Optimize sanitization
- Optimize security

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Lars Straathof - [Lars.Amsterdam](https://lars.amsterdam) - mail@lars.amsterdam

Project Link: [https://github.com/lhstraathof/multiple-emails-input](https://github.com/lhstraathof/multiple-emails-input)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Img Shields](https://shields.io)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/lhstraathof/multiple-emails-input/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/lars-straathof/
