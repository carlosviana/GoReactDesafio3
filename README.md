# Anotações - Farnetani:

## Desafio 01

Configure uma estrutura ReactJS do zero com Babel, Webpack e Webpack Dev Server. Além disso, utilize as ferramentas ESLint, EditorConfig e Prettier durante o desenvolvimento desse projeto.

### Configurando Estrutura ReactJS do zero com Babel, Webpack e Webpack Dev Server

1. Criar o repositório no `github`

![New Repository](https://i.imgur.com/rlzTpO5.png)

![Repository Created](https://i.imgur.com/VitiUBx.png)

Url: `https://github.com/farnetani/goreact-desafio-01`

SSH: `git@github.com:farnetani/goreact-desafio-01.git`

:clap:

2. Criar o diretório

```
mkdir desafio-01
```

3. cd `desafio-01`

```
yarn init -y
```

4. Adicionar projeto ao github pela primeira vez

```
git init
git remote add origin git@github.com:farnetani/goreact-desafio-01.git
git add --all
git commit -m "yarn init da aplicação"

git pull origin master --allow-unrelated-histories

git push -u origin master
```

5. Instalando todas as dependências (pacotes) para a aplicação:

```
## Eslint no modo DEV
yarn add eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard -D

## Babel e Webpack / Webpack-dev-server no modo DEV
yarn add @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server -D

## Para converter propriedades como estáticas @babel/plugin-proposal-class-properties
yarn add @babel/plugin-proposal-class-properties -D

## React
yarn add react react-dom

## Lib prop-types para fazermos uma tipagem dentro do nosso código
yarn add prop-types

## SASS
yarn add css-loader node-sass sass-loader style-loader -D
```

Devemos ter algo conforme o nosso `package.json` abaixo:

```json
{
  "name": "desafio-01",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "webpack-dev-server --mode development"
  },
  "devDependencies": {
    "@babel/core": "^7.2.0",
    "@babel/plugin-proposal-class-properties": "^7.2.1",
    "@babel/preset-env": "^7.2.0",
    "@babel/preset-react": "^7.0.0",
    "babel-loader": "^8.0.4",
    "css-loader": "^2.0.0",
    "eslint": "^5.10.0",
    "eslint-config-standard": "^12.0.0",
    "eslint-plugin-import": "^2.14.0",
    "eslint-plugin-node": "^8.0.0",
    "eslint-plugin-promise": "^4.0.1",
    "eslint-plugin-standard": "^4.0.0",
    "node-sass": "^4.11.0",
    "sass-loader": "^7.1.0",
    "style-loader": "^0.23.1",
    "webpack": "^4.27.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
  },
  "dependencies": {
    "prop-types": "^15.6.2",
    "react": "^16.6.3",
    "react-dom": "^16.6.3"
  }
}
```

6. Criar o arquivo `.editorconfig` na raiz do projeto

```js
root = true

[*]
ident_style = space
ident_size = 2
charset = utf-8
trim_Trailing_whitespace = true
insert_final_newline = true
end_of_line = 'lf'
```

7. Criar o arquivo `.eslintrc.json` na raiz do projeto

```json
{
  "extends": "standard"
}
```

8. Criar o arquivo `webpack.config.js` na raiz do projeto

```js
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Aqui uso uma expressão regular
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
```

9. Criar o arquivo `.babelrc`

```js
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}

```

10. Configurar o script `dev` da aplicação no `package.json`

```json
  "scripts": {
    "dev": "webpack-dev-server --mode development"
  },
```

11. Criar a pasta `public` e dentro dela o arquivo `index.html` referenciando o nosso `bundle.js`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Desafio-01</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./bundle.js"></script>
  </body>
</html>
```

12. Criar a pasta `src` do projeto e o arquivo `index.js` dentro dela:

```js
import React, { Component } from 'react'
import { render } from 'react-dom'

class App extends Component {
  render() {
    return <h1>Hello World</h1>
  }
}

render(<App />, document.getElementById('app'))
```

13. Testar se a aplicação está rodando

```
yarn run dev

Abrir o navegador e carregar: http://localhost:8080

Result deve ser: Hello World
```

14. Melhorando o nosso `.eslintrc.json`

- Vamos instalar a dependência:

```
 yarn add babel-eslint@8 -D
```

- Refatorando o nosso `.eslintrc.json`

```json
{
	"parser": "babel-eslint",
	"extends": ["standard", "standard-react"],
	"env": {
		"browser": true,
		"jest": true
	},
	"plugins": ["react", "jsx-a11y", "import"],
	"rules": {
		"react/jsx-filename-extension": [
			"error",
			{
				"extensions": [".js", ".jsx"]
			}
		],
		"global-require": "off",
		"import/prefer-default-export": "off",
		"no-unused-vars": [
			"error",
			{
				"argsIgnorePattern": "^_"
			}
		],
		"indent": [2, "tab"],
		"no-tabs": "off",
		"react/jsx-indent": [2, 0]
	}
}


```

15. Adicionando o `prettier-eslint` ao projeto

```
yarn add prettier-eslint -D
```

16. Melhorando o nosso `eslint` para trabalhar com o `react`

url: `https://github.com/standard/eslint-config-standard-react`

Devemos instalar as dependências abaixo e depois declarar o `standard-react` no extends do `.eslint.json`:

```
yarn add -D eslint-config-standard eslint-config-standard-react eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react
```

Havia me esquecido da dependência abaixo do eslint

```
yarn add eslint-plugin-jsx-a11y
```

**Para baixar a estrutura do zero acima mencionada, basta digitar:**

```
git clone git@github.com:farnetani/goreact-desafio-01.git -b estrutura-inicial-oficial

yarn
```

Agora mãos na massa!

### Desafio

01. Criar a estrutura de pastas do projeto
```
|--src
   components
   styles
```

02. Criar o arquivo `app.scss` da aplicação
```scss
body {
  margin: 0;
  padding: 0;
  background: #e9ebee;
  font-family: sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}

h1,
h2,
h3,
h4 {
  margin: 0;
}

.header {
  background: #4267b2;
  border-bottom: 1px solid #29487d;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 20px;
    color: #ffffff;
  }
}

.post-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post {
  width: 700px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffffff;
  margin-top: 30px;

  .post-header-container {
    display: flex;
    align-items: center;

    .avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }

    .data-container {
      margin-left: 10px;

      display: flex;
      flex-direction: column;

      strong {
        font-size: 16px;
        color: #666666;
      }

      span {
        font-size: 14px;
        color: #999999;
        margin-top: 5px;
      }
    }
  }

  p {
    font-size: 16px;
    color: #333333;
    line-height: 24px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #eee;
  }
}
```

03. Um ponto importante no `standard-react` é que ele acusa erros de identação no código `jsx`, para evitar isso, seguir a referência do link: `https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md`, editando o arquivo `.eslintrc.json` e colocando as seguintes regras em `rules`:

```json
		"indent": [2, "tab"],
		"no-tabs": "off",
		"react/jsx-indent": [2, 0]
```
