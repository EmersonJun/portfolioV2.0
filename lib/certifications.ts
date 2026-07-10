export interface Certification {
  title: string
  issuer: string
  date: string
  hours?: string
  description: string
  skills: string[]
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    title: "Java COMPLETO: Do Zero ao Profissional + Projetos!",
    issuer: "Udemy",
    date: "Jan 2026",
    hours: "77h",
    description:
      "Formação completa em Java, da sintaxe básica à orientação a objetos, estruturas de dados e projetos práticos de nível profissional.",
    skills: ["Java", "POO", "Projetos"],
    credentialUrl: "/certificados/java.pdf",
  },
  {
    title: "Introdução à Análise de Dados — Microsoft Power BI",
    issuer: "Fundação Bradesco — Escola Virtual",
    date: "Set 2025",
    hours: "5h",
    description:
      "Fundamentos de análise e visualização de dados com Microsoft Power BI para apoio à tomada de decisão.",
    skills: ["Power BI", "Análise de Dados"],
    credentialUrl: "/certificados/power-bi.pdf",
  },
  {
    title: "SAP BTP para Funcionais",
    issuer: "Assumtek",
    date: "Set 2025",
    hours: "27h",
    description:
      "Visão geral da SAP Business Technology Platform: serviços de cloud, integração e extensão de aplicações S/4HANA com Fiori e CDS Views.",
    skills: ["SAP BTP", "S/4HANA", "Cloud"],
    credentialUrl: "/certificados/btp.pdf",
  },
  {
    title: "SAP S/4HANA TRM — Treasury and Risk Management",
    issuer: "Assumtek",
    date: "Out 2025",
    hours: "35h",
    description:
      "Gestão de tesouraria e risco no SAP: mercado monetário, captação, gestão de juros e localização Brasil.",
    skills: ["SAP TRM", "Treasury", "S/4HANA"],
    credentialUrl: "/certificados/trm.pdf",
  },
  {
    title: "SAP EWM — Extended Warehouse Management",
    issuer: "Assumtek",
    date: "Out 2025",
    hours: "115h",
    description:
      "Gestão avançada de depósitos no SAP: processos de entrada e saída, inventário, gestão de recursos e integração com produção (PP).",
    skills: ["SAP EWM", "Logística", "S/4HANA"],
    credentialUrl: "/certificados/ewm.pdf",
  },
  {
    title: "SAP Embedded Analytics + CDS Views",
    issuer: "Assumtek",
    date: "Out 2025",
    hours: "20h",
    description:
      "Desenvolvimento de relatórios analíticos no S/4HANA com CDS Views, Virtual Data Models e aplicações Fiori.",
    skills: ["CDS Views", "Embedded Analytics", "Fiori"],
    credentialUrl: "/certificados/embedded-analytics.pdf",
  },
  {
    title: "SAP DEBUG para Funcionais",
    issuer: "Assumtek",
    date: "Set 2025",
    hours: "14h",
    description:
      "Técnicas de depuração ABAP: análise de dumps, busca de exits/badis e resolução de incidentes no SAP S/4HANA.",
    skills: ["ABAP", "Debug", "SAP"],
    credentialUrl: "/certificados/debug.pdf",
  },
  {
    title: "Essentials Concepts: Fundamentos e Estruturas SAP",
    issuer: "Assumtek",
    date: "Set 2025",
    hours: "3,5h",
    description:
      "Conceitos essenciais do SAP: arquitetura, principais módulos (FI, CO, MM, SD, PP) e navegação no sistema.",
    skills: ["SAP", "ERP"],
    credentialUrl: "/certificados/essentials-concepts.pdf",
  },
  {
    title: "Segurança em Tecnologia da Informação",
    issuer: "Fundação Bradesco — Escola Virtual",
    date: "Set 2025",
    hours: "12h",
    description:
      "Princípios de segurança da informação, boas práticas e proteção de dados em ambientes corporativos.",
    skills: ["Segurança", "TI"],
    credentialUrl: "/certificados/seguranca-ti.pdf",
  },
  {
    title: "Design Thinking para Educadores",
    issuer: "Fundação Bradesco — Escola Virtual",
    date: "Set 2025",
    hours: "20h",
    description:
      "Metodologia Design Thinking para resolução criativa de problemas e desenvolvimento de soluções centradas no usuário.",
    skills: ["Design Thinking", "Inovação"],
    credentialUrl: "/certificados/design-thinking.pdf",
  },
  {
    title: "IA para seu Novo Emprego: do Currículo à Entrevista",
    issuer: "Fundação Bradesco — Escola Virtual",
    date: "Set 2025",
    hours: "2h",
    description:
      "Uso de inteligência artificial para preparação profissional, da construção do currículo à entrevista.",
    skills: ["IA", "Carreira"],
    credentialUrl: "/certificados/ia-emprego.pdf",
  },
  {
    title: "AWS — Fundamentos de Cloud",
    issuer: "AWS",
    date: "2025",
    description:
      "Fundamentos de computação em nuvem com Amazon Web Services, serviços principais e conceitos de infraestrutura.",
    skills: ["AWS", "Cloud"],
    credentialUrl: "/certificados/aws.pdf",
  },
  {
    title: "GPT para Desenvolvedores",
    issuer: "Curso Online",
    date: "2025",
    description:
      "Aplicação de modelos GPT e IA generativa no desenvolvimento de software e automação de tarefas.",
    skills: ["IA", "GPT", "Desenvolvimento"],
    credentialUrl: "/certificados/gpt-devs.pdf",
  },
]
