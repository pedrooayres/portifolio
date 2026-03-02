import ProjectCard from '@/components/ProjectCard'
const projects = [
  {
    title: 'Prontuário Psicológico',
    description:
      'Sistema web para gerenciamento de prontuários psicológicos, com foco em organização clínica, usabilidade e segurança das informações.',
    technologies: ['React', 'Next.js', 'TypeScript'],
    githubUrl: 'https://github.com/pedro-hma/prontuario-psicologico',
    liveUrl: 'https://prontuario-psicologico.vercel.app',
  },
  {
    title: 'Projeto Vida Plena',
    description:
      'Aplicação desenvolvida como projeto prático com foco em organização, estruturação de funcionalidades e lógica de negócio.',
    technologies: ['React', 'JavaScript'],
    githubUrl: 'https://github.com/pedrooayres/Projeto-Vida-Plena',
  },
  {
    title: 'Projeto Final de Estagiário – CEO',
    description:
      'Projeto final desenvolvido durante estágio, aplicando conceitos práticos de desenvolvimento de software e resolução de problemas reais.',
    technologies: ['JavaScript', 'Lógica de Programação'],
    githubUrl:
      'https://github.com/pedrooayres/Projeto-Final-de-Estagiario---CEO',
  },
  {
    title: 'Projeto POO',
    description:
      'Projeto acadêmico focado na aplicação dos pilares da Programação Orientada a Objetos.',
    technologies: ['Java', 'POO'],
    githubUrl: 'https://github.com/pedro-hma/Projeto-POO',
  },
  {
    title: 'Estrutura de Dados',
    description:
      'Implementações de estruturas de dados clássicas, com foco em lógica e algoritmos.',
    technologies: ['Java', 'Algoritmos'],
    githubUrl:
      'https://github.com/pedro-hma/Projeto-Estrutura-de-Dados',
  },
  {
    title: 'Projeto Final PE 2024.1',
    description:
      'Projeto final da disciplina de Programação Estruturada.',
    technologies: ['C'],
    githubUrl:
      'https://github.com/pedro-hma/projeto-final-pe2024.1',
  },
]
export default function Projects() {
  return (
    <section id="projetos">
      <div className="container">
        <h2>Projetos</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}