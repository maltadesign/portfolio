# Portfolio (GitHub Pages)

Estrutura inicial para hospedar um portfólio estático no **GitHub Pages** com domínio próprio.

## Publicação rápida
1. Faça upload de todos os arquivos para um repositório novo (ex.: `portfolio`).
2. Em **Settings → Pages**, selecione **Deploy from a branch** e a branch `main` na pasta `/` (root).
3. Acesse a URL `https://SEU-USUARIO.github.io/portfolio/` (ou `SEU-USUARIO.github.io` se publicar no repositório com esse nome).

## Domínio próprio (opcional)
- Em **Settings → Pages**, em **Custom domain**, adicione seu domínio (ex.: `fernandomalta.com`). Isso cria/atualiza o arquivo `CNAME`.
- No **DNS** do seu provedor, para **apex** (`example.com`) crie **A records** apontando para os IPs do GitHub Pages:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
e (opcional) **AAAA** para IPv6:
```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

- Para o **subdomínio** `www`, crie um **CNAME** apontando para `SEU-USUARIO.github.io`.

Depois de propagar o DNS (pode levar até 24h), ative **Enforce HTTPS** nas configurações do Pages.

Referências: documentação oficial do GitHub Pages.

## Estrutura
```
/
├─ index.html
├─ cases/
│  └─ case-exemplo.html
├─ assets/
│  ├─ css/style.css
│  ├─ js/main.js
│  └─ images/ (thumbnails e hero)
├─ CNAME (opcional, será criado ao configurar domínio no Pages)
└─ .nojekyll
```

## Edite
- Substitua as imagens da pasta `assets/images` pelos seus arquivos (mantenha os nomes ou ajuste os paths no HTML).
- Duplique `cases/case-exemplo.html` para criar novas páginas de case.
