# ORION BOOTCAMP

## EXERCÍCIOS DA SEMANA 1:

### Para inicializar a estrutura do exercício 1 foram utilizados os seguintes passos:

#### Criar o package.json:
```npm init -y```

#### Instalar o typescript:
```npm i --save-dev typescript```

#### Criar o arquivo tsconfig:
```npx tsc --init```

#### Configurações adicionais:
1 - No package.json, em "scripts", adicionar:

```"start": "tsc --watch"```

2 - No tsconfig.json, configurar a pasta de destino da compilação do TS em JS:

```"outDir": "./dist",```

3 - No tsconfig.json, configurar como os módulos dever ser definidos:

```"module": "ES6",```

### Para executar o projeto, execute

#### 1)

```git clone git@github.com:Ricardonovais1/orion-bootcamp.git```

#### 2)

```cd orion-bootcamp```

#### 3)

```npm install```

#### 4)

```npm start```

#### 5)

Acesse: http://localhost:5500


### a) Dar exemplo de uso com uma palavra recebida via parâmetro de uma função:

Altere a variável chosenWord o retorno no console do navegador será atualizado ao recarregar a página.

### b) Dar exemplo de uso com uma palavra recebida via input no formulário:

Abra http://localhost:5500, insira uma expressão no input e clique em 'Ver resultado'.

