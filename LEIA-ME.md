# Analytics configurado + Política de Privacidade

Os dois IDs já estão dentro do código. Esta pasta substitui a anterior — é só
arrastar tudo no upload do GitHub e está no ar.

```
GA4:     G-DHM80SYC63
Clarity: ym0v6xh6tq
```

---

## 1. Antes de tudo: não cole o snippet do Google no HTML

Aquele bloco que o Google te deu (`<script async src=".../gtag/js?id=G-DHM80SYC63">`)
é o **mesmo tag que o `analytics.js` já carrega**, só que sem consentimento.

Se você colar os dois, o site vai:

- carregar o gtag duas vezes e **contar cada visita em dobro**;
- disparar o GA4 antes do aceite do visitante, o que derruba o Consent Mode e o
  argumento de LGPD da página nova.

O `analytics.js` monta esse mesmo script em tempo de execução, com os mesmos
`gtag('js', new Date())` e `gtag('config', 'G-DHM80SYC63')` — só que depois de
declarar o estado do consentimento. **Ignore o snippet.** Vale o mesmo para o
código que o Clarity ofereceu.

(Detalhe de nomenclatura: o que o Google te entregou não é Tag Manager, é o tag
do próprio GA4, o `gtag.js`. O Tag Manager é outro produto, um gerenciador de
tags que você não precisa aqui.)

---

## 2. Arquivos

| Arquivo | O que é |
|---|---|
| `assets/js/analytics.js` | **atualizado** — IDs preenchidos, link da política no banner e no rodapé |
| `politica-de-privacidade/index.html` | **novo** — a página da política |
| `sitemap.xml` | **atualizado** — entrada nova da política |
| `index.html` | inalterado desde a última entrega (traz a linha do analytics) |
| as 5 páginas internas | idem |

Arraste **o conteúdo** da pasta, não a pasta: `index.html`, `sitemap.xml`, e as
pastas `assets`, `politica-de-privacidade`, `calculadora-*`,
`calculadoras-sob-medida` e `incorporadoras`.

---

## 3. A política de privacidade

Fica em `/politica-de-privacidade/`, com o layout das páginas de nicho
(`paginas.css`), tema claro/escuro e o mesmo menu. Está no sitemap e é indexável.

O link para ela aparece em três lugares, todos criados por JavaScript — nenhum
rodapé de HTML precisou ser editado:

- dentro do aviso de cookies, no fim do texto;
- no rodapé de todas as sete páginas, ao lado do botão "Cookies";
- no corpo da seção 6, onde o leitor pode reabrir o aviso.

### O que a página afirma

Escrevi a partir do que o site **de fato** faz, não de um modelo genérico:

- GA4 e Clarity só depois do aceite; antes disso o GA4 fica em modo restrito sem cookie;
- o site não tem formulário — contato acontece fora dele, no WhatsApp ou no e-mail;
- as calculadoras rodam inteiras no navegador e não mandam nada para servidor algum
  (conferi: não há `fetch`, `XMLHttpRequest` nem `form action` em nenhuma das três);
- GitHub Pages e Google Fonts recebem o IP da conexão por razões técnicas, e esse
  registro é deles, não seu;
- tabela de cookies com os nomes reais, incluindo o `_ga_DHM80SYC63` da sua propriedade;
- bases legais separadas por finalidade, os oito direitos do artigo 18 e o caminho
  da ANPD;
- prazo de resposta: 15 dias.

**Não sou advogado** e isso não é parecer jurídico. A página cobre bem o que um
site institucional sem cadastro precisa cobrir, e é mais honesta que a média do
mercado. Se você for usar a MAPA para vender site com LGPD inclusa, vale uma
leitura de um advogado em algum momento — inclusive para poder dizer ao cliente
que foi revisada.

### Duas coisas para conferir nos painéis

1. **GA4 → Admin → Configurações de dados → Retenção de dados.** O padrão é
   2 meses. A política diz "até 14 meses". Mude para **14 meses** — é o máximo
   permitido, é o que faz comparação ano a ano existir, e alinha o texto com a
   configuração real.
2. **Clarity → Settings.** Confirme que o mascaramento de conteúdo está no padrão
   (*Mask sensitive content*). A política afirma que texto digitado em campo não
   é reproduzido para você.

---

## 4. O que foi testado

Rodei o site inteiro localmente com os IDs reais, interceptando as chamadas
externas para conferir o que sai do navegador:

- as sete páginas mostram o banner na primeira visita e o link da política no rodapé;
- antes do aceite: `gtag/js?id=G-DHM80SYC63` carrega em modo restrito, `clarity.ms/tag/ym0v6xh6tq` **não** carrega;
- depois do aceite: os dois carregam e o `consent update` sobe com `analytics_storage: granted`;
- segunda visita não repergunta;
- trocar para EN ou ES muda o texto do banner, o rótulo do link e o rodapé, sem perder o link;
- o link "Cookies" na seção 6 da política reabre o aviso;
- mobile 390px: sem scroll horizontal, tabela de cookies com rolagem própria;
- zero erro de console.

Um detalhe que só apareceu no teste: trocar de idioma com o banner aberto estava
apagando o link da política junto com o texto. Corrigido — o texto e o link agora
são elementos irmãos.

---

## 5. Pontos em aberto

1. **A política só existe em português.** Se o visitante estiver em EN ou ES, o
   link aparece traduzido mas leva para a página em PT. Para um negócio brasileiro
   isso é aceitável; se quiser as três versões, é meia hora de trabalho.
2. **Quando o diagnóstico digital entrar no ar**, a política precisa de um
   parágrafo novo — o texto do visitante sai do navegador e vai para a API da
   TypeSafe. Eu escrevo junto com aquela entrega.
3. **`index-old.html` continua no repositório**, acessível por quem souber o
   endereço. Segue valendo a sugestão de apagar.
4. Nenhum evento leva dado pessoal: só seção de origem, categoria, idioma e
   tamanho de texto.
