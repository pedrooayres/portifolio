import Image from "next/image"
export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <Image src="/public/fotoPedro.png"alt="Pedro Ayres" width={150}height={150}className="profile-photo"/>
        <h1>Pedro Ayres</h1>
        <p>
          Desenvolvedor interessado em tecnologia e construção de aplicações web modernas.
          Trabalho com React, Next.js e TypeScript, além de ter experiência com Java e estruturas de dados.
          Busco constantemente aprender novas ferramentas e aprimorar minhas habilidades de desenvolvimento.
        </p>
        <div className="hero-actions">
          <a href="#projetos" className="button-neon">Ver projetos</a>
          <a href="#contato" className="button-outline">Entrar em contato</a>
        </div>
      </div>
    </section>
  )
}