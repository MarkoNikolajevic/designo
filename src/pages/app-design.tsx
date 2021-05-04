import styles from '../styles/AppDesign.module.scss';
import InnerPageHeader from '../components/InnerPageHeader/InnerPageHeader';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import ProjectCta from '../components/ProjectCta/ProjectCta';
import appDesignProjects from '../utils/appDesignProjects';

export default function AppDesign() {
  return (
    <>
      <InnerPageHeader
        title='App Design'
        paragraph='Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.'
      />
      <section>
        <div className={`${styles.grid} container`}>
          {appDesignProjects.map((project) => {
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
          <ProjectCta id='web' link='/web-design' title='Web design' />
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
