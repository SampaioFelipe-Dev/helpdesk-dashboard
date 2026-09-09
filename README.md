# Helpdesk Dashboard 💻

Projeto de um painel de controle para suporte técnico e atendimento de chamados, desenvolvido para praticar e evoluir os estudos com React.

## 🚀 O que já funciona no projeto:

- **Listagem Dinâmica:** Os chamados são renderizados automaticamente na tela através de um array de dados utilizando `.map()`.
- **Métricas em Tempo Real:** O sistema calcula sozinho a quantidade total de chamados, quantos estão abertos/em andamento e quantos já foram fechados.
- **Filtros por Status:** Botões interativos que permitem alternar a visualização entre todos os chamados, abertos ou fechados, utilizando estados (`useState`) e mantendo a lista original intacta.
- **Estrutura Modular:** Organizado em componentes separados (`Sidebar` e `MainContent`) com um layout corporativo construído usando CSS Flexbox.

## 🛠️ Tecnologias utilizadas:

- **React** (com Vite)
- **JavaScript (ES6+)**
- **CSS3**

## ⚙️ Como rodar o projeto na sua máquina:

Se quiser clonar e testar o código por aí, siga os passos abaixo no seu terminal:

1. Clone o repositório:
   ```bash
git clone [https://github.com/SampaioFelipe-Dev/helpdesk-dashboard.git](https://github.com/SampaioFelipe-Dev/helpdesk-dashboard.git)

Entre na pasta do projeto:
Bash
cd helpdesk-dashboard

Instale as dependências:
Bash
npm install

Rode o servidor de desenvolvimento:
Bash
npm run dev

Projeto em constante evolução conforme novos recursos (como formulários de cadastro e categorias) vão sendo implementados.
