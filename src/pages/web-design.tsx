import styles from '../styles/WebDesign.module.scss';
import InnerPageHeader from '../components/InnerPageHeader/InnerPageHeader';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectCta from '../components/ProjectCta/ProjectCta';
import webDesignProjects from '../utils/webDesignProjects';

export default function WebDesign() {
  return (
    <>
      <InnerPageHeader
        title='Web Design'
        paragraph='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'
      />
      <section>
        <div className={`${styles.grid} container`}>
          {webDesignProjects.map((project) => {
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
            id='graphic'
            link='/graphic-design'
            title='Graphic design'
          />
        </div>
      </section>
    </>
  );
}
