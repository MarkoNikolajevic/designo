import styles from '../styles/Home.module.scss';
import HomeHeader from '../components/HomeHeader/HomeHeader';
import ProjectCta from '../components/ProjectCta/ProjectCta';
import ProcessCard from '../components/ProcessCard/ProcessCard';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <section>
        <div className={`${styles.home__projectCta__grid} container`}>
          <ProjectCta id='web' link='/web-design' title='Web design' />
          <ProjectCta id='app' link='/app-design' title='App design' />
          <ProjectCta
            id='graphic'
            link='/graphic-design'
            title='Graphic design'
          />
        </div>
      </section>
      <section id='processCard-section'>
        <div className='container processCard__grid'>
          <ProcessCard
            process='Passionate'
            description='Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.'
            processImg='./assets/home/desktop/illustration-passionate.svg'
            imgBgClass='to_left_bg'
          />
          <ProcessCard
            process='Resourceful'
            description='Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.'
            processImg='./assets/home/desktop/illustration-resourceful.svg'
            imgBgClass='to_bottom_bg'
          />
          <ProcessCard
            process='Friendly'
            description=' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'
            processImg='./assets/home/desktop/illustration-friendly.svg'
            imgBgClass='to_top_bg'
          />
        </div>
      </section>
    </>
  );
}
