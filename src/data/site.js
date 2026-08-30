export const COMPANY = {
  name: "EOS Engenharia Sustentável",
  shortName: "EOS",
  concept: "Engenharia que transforma energia em futuro.",
  headline: "Energia inteligente. Engenharia que transforma.",
  support:
    "Soluções em energia solar e engenharia desenvolvidas para entregar eficiência, segurança e tranquilidade em cada etapa.",
  phoneDisplay: "(62) 98222-9109",
  phoneRaw: "5562982229109",
  whatsappDisplay: "(62) 98155-0187",
  whatsappRaw: "5562981550187",
  addressLine1: "Rua 230, 53 Q. 54. L. 1 e 2, Sala 02",
  addressLine2: "Setor Leste Universitário",
  city: "Goiânia — GO",
  postalCode: "74605-110",
  siteDisplay: "eosenergiasolar.com.br",
  siteUrl: "https://eosenergiasolar.com.br/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Rua+230%2C+53+Q.+54.+L.+1+e+2%2C+Sala+02+-+Setor+Leste+Universit%C3%A1rio%2C+Goi%C3%A2nia+-+GO%2C+74605-110",
  rating: "4,8",
  reviews: 29,
  whatsappMessage:
    "Olá! Gostaria de conhecer melhor as soluções da EOS Engenharia Sustentável.",
};

export function whatsappUrl(message = COMPANY.whatsappMessage) {
  return `https://wa.me/${COMPANY.whatsappRaw}?text=${encodeURIComponent(message)}`;
}

export function telUrl() {
  return `tel:+${COMPANY.phoneRaw}`;
}

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#a-eos", label: "A EOS" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#projetos", label: "Projetos" },
  { href: "#processo", label: "Processo" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#contato", label: "Contato" },
];

export const SOLUTIONS = [
  {
    id: "energia-solar",
    index: "01",
    title: "Energia solar",
    text: "Instalações fotovoltaicas para residências e empresas, projetadas para gerar energia com organização e segurança.",
    image: "/images/commercial-aerial.webp",
    alt: "Vista aérea de instalação fotovoltaica da EOS sobre telhado comercial",
  },
  {
    id: "engenharia",
    index: "02",
    title: "Engenharia",
    text: "Cada sistema é tratado como um projeto de engenharia: análise, execução e acompanhamento até a entrega.",
    image: "/images/commercial-roof.webp",
    alt: "Técnico da EOS em instalação fotovoltaica comercial de grande porte",
  },
  {
    id: "instalacoes",
    index: "03",
    title: "Instalações elétricas",
    text: "Execução elétrica alinhada ao sistema solar, com atenção à segurança da instalação e ao funcionamento do inversor.",
    image: "/images/electrical.webp",
    alt: "Quadro elétrico de geração distribuída com proteção e alimentação do inversor",
  },
  {
    id: "sustentaveis",
    index: "04",
    title: "Soluções sustentáveis",
    text: "Energia limpa pensada como decisão de engenharia — eficiente, durável e acompanhada depois da instalação.",
    image: "/images/panels-detail.webp",
    alt: "Módulos fotovoltaicos instalados sobre telhado cerâmico",
  },
];

export const PROCESS = [
  {
    index: "01",
    title: "Contato",
    text: "A conversa inicial organiza a necessidade e o caminho do projeto.",
  },
  {
    index: "02",
    title: "Análise",
    text: "O cenário é estudado para que a solução faça sentido na prática.",
  },
  {
    index: "03",
    title: "Projeto",
    text: "A engenharia define a instalação com clareza e critério técnico.",
  },
  {
    index: "04",
    title: "Instalação",
    text: "A execução é acompanhada para manter qualidade, prazo e segurança.",
  },
  {
    index: "05",
    title: "Entrega",
    text: "O sistema é apresentado pronto para operar, com transparência em cada etapa.",
  },
  {
    index: "06",
    title: "Pós-venda",
    text: "O acompanhamento continua depois da instalação — o diferencial citado pelos clientes.",
  },
];

export const PROJECTS = [
  {
    src: "/images/hero.webp",
    alt: "Projeto residencial com módulos fotovoltaicos e técnico sobre o telhado",
    title: "Projeto residencial",
    kind: "Instalação fotovoltaica",
    span: "hero",
  },
  {
    src: "/images/commercial-aerial.webp",
    alt: "Cobertura comercial com grande área de módulos fotovoltaicos",
    title: "Projeto comercial",
    kind: "Instalação fotovoltaica",
    span: "wide",
  },
  {
    src: "/images/ground-mount.webp",
    alt: "Dois arranjos fotovoltaicos instalados no solo",
    title: "Instalação fotovoltaica",
    kind: "Estrutura no solo",
    span: "tall",
  },
  {
    src: "/images/residential-roof.webp",
    alt: "Telhado residencial com módulos fotovoltaicos vistos de drone",
    title: "Projeto residencial",
    kind: "Cobertura",
    span: "square",
  },
  {
    src: "/images/commercial-roof.webp",
    alt: "Grande instalação comercial em cobertura metálica",
    title: "Projeto comercial",
    kind: "Cobertura",
    span: "wide",
  },
  {
    src: "/images/ground-array.webp",
    alt: "Arranjo fotovoltaico linear instalado em terreno",
    title: "Instalação fotovoltaica",
    kind: "Estrutura no solo",
    span: "tall",
  },
  {
    src: "/images/panels-detail.webp",
    alt: "Detalhe de módulos fotovoltaicos sobre telhas cerâmicas",
    title: "Módulos fotovoltaicos",
    kind: "Detalhe técnico",
    span: "square",
  },
];

export const TESTIMONIALS = [
  {
    name: "Nayara Brito",
    text: "Serviço de altíssima qualidade! A equipe da EOS é super atenciosa, organizada e transmite muita confiança em todo o processo. Desde o primeiro contato até a instalação, tudo foi feito com excelência e transparência. Recomendo de olhos fechados!",
  },
  {
    name: "Cairo Filho",
    text: "Sem dúvidas fiz a melhor escolha ao fechar com a EOS, o acompanhamento desde o primeiro contato até a entrega sem sombra de dúvida é o diferencial, sem contar o acompanhamento de pós venda. Indico de olhos fechados",
  },
  {
    name: "Fernando Passos",
    text: "Excelente empresa! Atendimento ágil, equipe muito atenciosa e comprometida. O sistema de energia solar foi instalado dentro do prazo e está funcionando perfeitamente. Super recomendo para quem busca qualidade e confiança!",
  },
];

export const TRUST_WORDS = [
  { word: "Qualidade", size: "xl" },
  { word: "Transparência", size: "lg" },
  { word: "Acompanhamento", size: "xxl" },
  { word: "Confiança", size: "lg" },
  { word: "Pós-venda", size: "md" },
  { word: "Profissionalismo", size: "xl" },
];
