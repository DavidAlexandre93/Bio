<h1 align="center">☕ Bio - David Alexandre Fernandes</h1>

Projeto reorganizado para uma arquitetura frontend moderna com **React + Vite**, componentização e separação por responsabilidades.

## Estrutura

```bash
.
├── .github/
│   ├── workflows/      # CI/CD e segurança
│   └── dependabot.yml  # atualização automática de dependências
├── public/
│   └── assets/         # imagens e ícones estáticos
├── scripts/
│   └── deploy.sh       # deploy via SSH + rsync por ambiente
├── src/
│   ├── components/     # componentes reutilizáveis de UI
│   ├── data/           # dados de conteúdo centralizados
│   ├── hooks/          # lógica de animação e comportamento
│   ├── styles/         # estilos globais
│   ├── __tests__/      # testes unitários
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── vite.config.js
```

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run format:check
npm run test
npm run test:coverage
npm run build
npm run preview
```

## Pipeline de CI/CD

### CI (`.github/workflows/frontend-ci.yml`)

1. Instalação reprodutível (`npm ci` com cache de npm).
2. Lint (`npm run lint`).
3. Formatação (`npm run format:check`).
4. Testes unitários (`npm run test`).
5. Cobertura com thresholds (`npm run test:coverage`).
6. Validação de build (`npm run build`).
7. Geração de artefatos (`dist` e `coverage`).
8. Segurança com `npm audit --audit-level=high`.
9. Dependency review em PR.
10. Quality gate final obrigatório.

### Segurança contínua

- `CodeQL` para análise estática de vulnerabilidades (`.github/workflows/codeql.yml`).
- `Dependabot` para atualizações de dependências npm e GitHub Actions (`.github/dependabot.yml`).

### CD (`.github/workflows/frontend-cd.yml`)

Deploy automatizado por ambiente:

- `develop` → `development`
- `main` → `staging`
- `workflow_dispatch` → promoção para `staging` ou `production`

### Regras de promoção para produção

1. A promoção de produção é apenas manual (`workflow_dispatch`).
2. `source_ref` deve ser `main` ou `refs/tags/v*`.
3. Ambiente `production` deve ter proteção habilitada no GitHub (required reviewers).
4. Deploy usa o mesmo artefato gerado no job de build para garantir rastreabilidade.

### Segredos esperados por ambiente

- Chave SSH compartilhada:
  - `DEPLOY_SSH_KEY`
- Development:
  - `DEV_DEPLOY_HOST`, `DEV_DEPLOY_USER`, `DEV_DEPLOY_PATH`
- Staging:
  - `STG_DEPLOY_HOST`, `STG_DEPLOY_USER`, `STG_DEPLOY_PATH`
- Production:
  - `PRD_DEPLOY_HOST`, `PRD_DEPLOY_USER`, `PRD_DEPLOY_PATH`

## Autor

David Alexandre Fernandes
