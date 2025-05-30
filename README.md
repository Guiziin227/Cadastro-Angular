# 📝 Sistema de Cadastro - Angular

> **Projeto de Aprendizado** - Sistema simples de cadastro de clientes desenvolvido para praticar conceitos fundamentais do Angular.

## 🎯 Objetivo do Projeto

- **Angular Framework** (versão 19.x)
- **Template-driven Forms**
- **Integração com APIs** (BrasilAPI)
- **Angular Material**
- **Validações de formulário**
- **Consumo de serviços HTTP**

## ✨ Funcionalidades

### 📋 Cadastro de Clientes
- Formulário completo de cadastro
- Campos: Nome, Email, CPF, Data de Nascimento
- Seleção de Estado e Município
- Validações de campos obrigatórios
- Máscaras para CPF e data

### 🌎 Integração com BrasilAPI
- **Estados**: Carregamento automático via API
- **Municípios**: Listagem dinâmica baseada no estado selecionado
- **Atualização em tempo real** quando troca de estado

### 🔧 Funcionalidades Técnicas
- **CRUD básico** (Create, Read, Update)
- **Armazenamento local** (sem banco de dados)
- **Navegação entre telas**
- **Feedback visual** com snackbars
- **Formulários reativos**

## 🛠️ Tecnologias Utilizadas

- **Angular 19.2.12**
- **Angular Material** (UI Components)
- **Angular Flex Layout**
- **ngx-mask** (máscaras de input)
- **HttpClient** (requisições HTTP)
- **TypeScript**
- **SCSS**

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── cadastro/          # Formulário de cadastro
│   │   └── consulta/          # Lista de clientes
│   ├── models/
│   │   ├── cliente.ts         # Modelo do cliente
│   │   └── brasil.models.ts   # Modelos da BrasilAPI
│   ├── services/
│   │   ├── cliente.service.ts # Serviço de clientes
│   │   └── brasilapi.service.ts # Integração com BrasilAPI
│   └── app.component.ts
└── assets/
```

## 🚀 Como Executar

### Pré-requisitos
- **Node.js** 18+ 
- **npm** ou **yarn**
- **Angular CLI** 19+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Guiziin227/Cadastro-Angular.git

# Entre no diretório
cd Cadastro-Angular

# Instale as dependências
npm install

# Execute o projeto
ng serve
```

### Acessando a aplicação
Abra o navegador em: http://localhost:4200

## 📱 Telas da Aplicação

### 1. **Cadastro de Cliente**
- Formulário com todos os campos
- Validações em tempo real
- Seleção dinâmica de estado/município
- Botões de salvar e limpar

### 2. **Consulta de Clientes**
- Lista de clientes cadastrados
- Opção de editar cliente existente
- Navegação de volta para o cadastro

## 🌐 APIs Utilizadas

### BrasilAPI
- **Estados**: `https://brasilapi.com.br/api/ibge/uf/v1`
- **Municípios**: `https://brasilapi.com.br/api/ibge/municipios/v1/{UF}`

> 💡 **Nota**: Não é necessário chave de API, é gratuita e aberta.

## 🧪 Scripts Disponíveis

```bash
# Desenvolvimento
ng serve                 # Inicia servidor dev na porta 4200

# Build
ng build                 # Build para produção
ng build --prod          # Build otimizado

# Testes
ng test                  # Testes unitários
ng e2e                   # Testes end-to-end

# Geração de componentes
ng generate component nome-componente
ng generate service nome-servico
```

## 📖 Conceitos Aprendidos

### Angular Fundamentals
- ✅ **Components** e **Templates**
- ✅ **Data Binding** (two-way binding)
- ✅ **Services** e **Dependency Injection**
- ✅ **Routing** e **Navigation**
- ✅ **HTTP Client** e **Observables**

### Forms
- ✅ **Template-driven Forms**
- ✅ **Validações** (required, pattern)
- ✅ **ngModel** e **form controls**
- ✅ **Máscaras de input**

### Angular Material
- ✅ **mat-form-field** e **mat-input**
- ✅ **mat-select** e **mat-option**
- ✅ **mat-card** e **mat-button**
- ✅ **mat-snackbar** para feedback

### Conceitos Estudados
- Template-driven vs Reactive Forms
- Component Lifecycle
- Services e HTTP
- Angular Material Design

