# Guia de Configuração do Projeto

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Abra seu navegador e acesse:**
   ```
   http://localhost:3000
   ```

4. **Construa e inicie os containers Docker:**
   ```bash
   docker-compose up --build
   ```

5. **Execute as migrações do Prisma:**
   ```bash
   docker-compose exec app npx prisma migrate dev
   ```

6. **Pare e remova os containers Docker:**
   ```bash
   docker-compose down
   ```
