FROM node:22

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia os arquivos de package.json e package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expondo a porta que o aplicativo usará
EXPOSE 3000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]