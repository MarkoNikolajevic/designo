import styles from '../styles/GraphicDesign.module.scss';
import InnerPageHeader from '../components/InnerPageHeader/InnerPageHeader';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectCta from '../components/ProjectCta/ProjectCta';
import graphicDesignProjects from '../utils/graphicDesignProjects';

export default function GraphicDesign() {
  return (
    <>
      <InnerPageHeader
        title='Graphic Design'
        paragraph='We deliver eye-catching branding materials that are tailored to meet your business objectives.'
      />
      <section>
        <div className={`${styles.grid} container`}>
          {graphicDesignProjects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                img={project.img}
                title={project.title}
                description={project.description}
              />
            );
          })}
        </div>
      </section>
      <section>
        <div className={`${styles.cta__grid} container`}>
          <ProjectCta id='app' link='/app-design' title='App design' />
          <ProjectCta
            id='web'
            link='/web-design'
            title='Web design'
          />
        </div>
      </section>
    </>
  );
}
