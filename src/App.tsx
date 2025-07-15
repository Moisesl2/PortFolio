import CarouselSection from "./components/CarouselSection";
import { skills } from "./data/skills";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <h1>Portfólio - Moisés Henrique</h1>
      <p>
        Graduando em tecnologia da informação e desenvolvedor full stack com 2 anos de experiência 
        em desenvolvimento e manutenção de aplicações Web. Atualmente atuando como front-end 
        developer na AgCom Tecnologia com expertise em desenvolvimento front-end (React, Vue, 
        Angular) e desenvolvimento back-end (Node, Django Rest Framework, Java, banco de dados 
        relacionais SQL). Sou proficiente nas linguagens JavaScript/TypeScript, ferramenta de 
        versionamento GIT e metodologias ágeis. Busco aplicar minhas habilidades afim de 
        desenvolver soluções inovadoras agregando mais valor para a empresa e me desenvolvendo 
        profissionalmente. 
      </p>

      <CarouselSection title="Linguagens de Programação" items={skills.linguagens} />
      <CarouselSection title="Frameworks e Bibliotecas" items={skills.frameworks} />
      <CarouselSection title="Bancos de Dados" items={skills.DataBases} />
      <CarouselSection title="Outros Conhecimentos" items={skills.outros} />
    </div>
  );
}

export default App;
