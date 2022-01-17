## Bravi Technical Test

Este é o repositório da aplicação web do Bravi Technical Test

### Instalação

É necessário ter instalado o [Node.js](https://nodejs.org/en/) na versão 14.x ou superior. As instruções de como instalar podem ser conferida em detalhes [no repositório oficial do projeto](https://github.com/nodesource/distributions/blob/master/README.md#debinstall). Caso você esteja usando o Ubuntu, os comandos são os seguintes:

```
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

e também o yarn.

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update
sudo apt install yarn --no-install-recommends
```

Por fim, para rodar esta aplicação, clone o repositório e execute o comando `yarn` na raíz do projeto, para instalar as dependências.

```
git clone https://github.com/casanej/bravi-tech-test.git
yarn
```

### Execução

Execute o comando `yarn start`. E a aplicação irá abrir na porta 3000.

### Build

Execute o comando `yarn build`. Os arquivos gerados estarão dentro da pasta `./build/`

A publicação é feita através dos arquivos contidos dentro da pasta `build/`.
