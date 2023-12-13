# io-api-client

A REST API client for the GreenGame laboratory project.

# Installation

This library is written as ESM module. To use it your project needs to use ESM modules too.
First of all you have to set your script tag type to module:

```html
<script type="module" src="main.js"></script>
```

Then you can import the client in your main.js file:

```js
import {getUserData, updateRanking} from "https://unpkg.com/greengame-api-client@latest";
```

and use the functions as described below:

```js
const userData = await getUserData();
console.log(userData.username);
```

> A full example can be found in the [example](example) folder.

## Getting auto-completions and typechecking

> A full example that has auto-completions can be found in the [example](example) folder.

Above is the simplest way to use the client, but you won't get any auto-completions in your IDE.

To get auto-completions you have to setup TypeScript and install the client via npm.
The easiest way to do so it by copying files from the [example](example) folder into your project, namely:

- [package.json](example/package.json),
- [tsconfig.json](example/tsconfig.json),
- [.gitignore](example/.gitignore) (for safety reasons).

Also, the example tsconfig.json file has been configured to look for files in the src folder, so your JS files should be in the
src folder.

Then you have to install the dependencies via npm:

```bash
npm install
```

> This requires you to have npm installed. If you don't have npm installed, you can download
> it [here](https://nodejs.org/en/download/).

Then you have to add the importmap script to your html file:

```html
<script type="importmap">
{
    "imports": {
        "greengame-api-client": "https://unpkg.com/greengame-api-client@latest"
    }
}
</script>
``` 

And add your main.js below the script tag:

```html
<script src="src/main.mjs" type="module"></script>
```

This should give you auto-completions in your IDE:
