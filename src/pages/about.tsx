import styles from '../styles/About.module.scss';
import AboutUsHeader from '../components/AboutUsHeader/AboutUsHeader';
import AboutCard from '../components/AboutCard/AboutCard';
import LocationCard from '../components/LocationCard/LocationCard';

export default function About() {
  return (
    <>
      <AboutUsHeader />
      <AboutCard
        title='World-class talent'
        desc1='We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.'
        desc2='Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.'
        imgMobile='/assets/about/mobile/image-world-class-talent.jpg'
        imgMedium='/assets/about/tablet/image-world-class-talent.jpg'
        imgLarge='/assets/about/desktop/image-world-class-talent.jpg'
        altText='Girl looking pictures on the wall'
      />
      <section className={`${styles.about__grid} container`}>
        <LocationCard
          link='/locations/#canada'
          location='Canada'
          locationImg='/assets/shared/desktop/illustration-canada.svg'
          imgBgClass='to_top_bg'
        />
        <LocationCard
          link='/locations/#australia'
          location='Australia'
          locationImg='/assets/shared/desktop/illustration-australia.svg'
          imgBgClass='to_left_bg'
        />
        <LocationCard
          link='/locations/#united-kingdom'
          location='United Kingdom'
          locationImg='/assets/shared/desktop/illustration-united-kingdom.svg'
          imgBgClass='to_bottom_bg'
        />
      </section>
      <AboutCard
        title='The real deal'
        desc1='As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.'
        desc2='We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.'
        imgMobile='/assets/about/mobile/image-real-deal.jpg'
        imgMedium='/assets/about/tablet/image-real-deal.jpg'
        imgLarge='/assets/about/desktop/image-real-deal.jpg'
        altText='Hanging a picture on the wall'
        cardClass='real-deal'
      />
    </>
  );
}
