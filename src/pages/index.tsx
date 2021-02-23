import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout/Layout'
import HomeHeader from '../components/HomeHeader/HomeHeader';
import ProjectCta from '../components/ProjectCta/ProjectCta';

export default function Home() {
  return (
    <Layout>
      <HomeHeader />
      <section>
        <div className='container projectCta__grid'>
          <ProjectCta id='web' link='/web-design' title='Web design' />
          <ProjectCta id='app' link='/app-design' title='App design' />
          <ProjectCta
            id='graphic'
            link='/graphic-design'
            title='Graphic design'
          />
        </div>
      </section>
    </Layout>
  );
}
