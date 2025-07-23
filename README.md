# **MBRAS - Landing Page Imobiliária**  

🚀 **Next.js | React.js | MongoDB Atlas**  

Uma landing page dinâmica para a empresa **MBRAS**, com:  
✔ **Rota dinâmica** por código do imóvel.  
✔ **Galeria de fotos** interativa.  
✔ **Formulário de contato** (nome, telefone, e-mail).  

---

## **📌 Pré-requisitos**  
- Node.js (v18+)  
- npm ou yarn  
- Conta no **MongoDB Atlas** (para o banco de dados utilizado para o cadastro de usuários)  

---

## **⚙️ Configuração**  

### **1. Clone o repositório**  
```bash
git clone https://github.com/seu-usuario/mbras-landing.git
cd mbras-landing
```

### **2. Instale as dependências**  
```bash
npm install
# ou
yarn install
```

### **3. Configure as variáveis de ambiente**  
Crie um arquivo `.env.local` na raiz do projeto e adicione:  
<strong>Importante</strong>! ==>
Como é para apresentação da aplicação, não há risco de compartilhar as variáveis de ambiente
```env
DB_CONNECTION_STRING=mongodb+srv://pedrorogel3:QFUEjHBK4paBW22N@frontend-challenge.gpwo1bd.mongodb.net/?retryWrites=true&w=majority&appName=frontend-challenge
```
 

### **4. Inicie o servidor**  
```bash
npm run dev
# ou
yarn dev
```
Acesse: [http://localhost:3000](http://localhost:3000)  

---

## **🚀 Funcionalidades**  

### **🔗 Rotas Dinâmicas**  
- Acesse imóveis pelo código:  
  ```
  /imovel/[codigo]
  ```
  Exemplo: `http://localhost:3000/imovel/MB16912`  

### **📸 Galeria de Fotos**  
- Efeito hover nas imagens.  
- Modal com carrossel ao clicar.  

### **📞 Formulário de Contato**  
- Salva dados no **MongoDB Atlas**.  
- Campos:  
  - Nome  
  - Telefone  
  - E-mail  

---

## **🛠 Tecnologias Utilizadas**  
- **Frontend**: Next.js, React.js, Tailwind CSS  
- **Backend**: API Routes (Next.js)  
- **Banco de Dados**: MongoDB Atlas (Cloud)  

---

## **📦 Estrutura do Projeto**  
```
src/
├── app/
|   ├── api/user              # Rota para cadastrar usuário
│   ├── forms/                # Rota layout para cadastro dos usuários
│   ├── galery/               # Página da galeria
│   ├── imovel/[codigo]       # Rota dinâmica
│   └── layout/               # Componentes globais
│   └── main/                 # Rota Principal
│   └── globals.css           # Estilos Globais
│   └── layout                # Layout Principal
│   └── page.tsx              # Rota Principal
├── components                # Components utilizado na aplicação
├── data/                     # Dados dos imóveis
├── lib/                      # Utilizado para fazer a conexão com o DB
├── models/                   # Utilizado para criar modelos/tipagem das pages
├── models/                   # Utilizado para criar modelos/tipagem das pages
├── styles/                   # Utilizado para estelizar a aplicação
├── ui/                       # Interfaces das Páginas renderizadas em app/

```

**Pronto para testar?** Clone, configure e acesse:  
👉 [http://localhost:3000](http://localhost:3000)  

**Dúvidas?** Abra uma **issue** no repositório!  

--- 

✍️ **Feito com Next.js + MongoDB Atlas** 🚀
