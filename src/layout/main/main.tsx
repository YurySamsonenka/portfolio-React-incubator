import styled from 'styled-components';
import { Activity } from './activity/Activity';
import { Blog } from './blog/Blog';
import { Hero } from './hero/Hero';
import { marginButtom } from './placeholders';
import { Plans } from './plans/Plans';
import { Recommendations } from './plans/recommendations/Recommendations';
import { Portfolio } from './portfolio/Portfolio';
import { Separator } from './separator/Separator';
import { Services } from './services/Services';
import { Connection } from './connection/Connection';
import { Title } from './Title';
import { Contact } from './contact/Contact';
import { Map } from './map/Map';
import { Banners } from './banners/Banners';
import { Footer } from '../footer/Footer';

const activites = [
  {
    title: 'Education',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum',
    workstation: [
      {
        name: 'University of Toronto',
        humanStatus: 'Student',
        periodActivity: 'Jan 1016 - Dec 2021',
        certificate: 'Certificate of web training',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
      },
      {
        name: 'Programming Course',
        humanStatus: 'Student',
        periodActivity: 'Jan 1016 - Dec 2021',
        certificate: 'Certificate of web training',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
      },
      {
        name: 'Web developer courses',
        humanStatus: 'Student',
        periodActivity: 'Jan 1016 - Dec 2021',
        certificate: 'Certificate of web training',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
      },
    ],
  },
  {
    title: 'Work History',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum',
    workstation: [
      {
        name: 'Lead Web Designer',
        humanStatus: 'Student',
        periodActivity: 'Jan 1016 - Dec 2021',
        certificate: 'Certificate of web training',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
      },
      {
        name: 'Junior Web Designer',
        humanStatus: 'Student',
        periodActivity: 'Jan 1016 - Dec 2021',
        certificate: 'Certificate of web training',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
      },
      {
        name: 'Senior Web Designer',
        humanStatus: 'Student',
        periodActivity: 'Jan 1016 - Dec 2021',
        certificate: 'Certificate of web training',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.',
      },
    ],
  },
];

export const Main = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Plans />
      <Separator />
      <Recommendations />
      {activites.map((el) => {
        return <Activity key={el.title} data={el} />;
      })}
      <Portfolio />
      <Blog />
      <TwoSections id="contact">
        <Connection />
        <Contact />
      </TwoSections>
      <Map />
      <Banners />
      <Footer />
    </main>
  );
};

const TwoSections = styled.div`
  ${marginButtom}
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 70px;
  row-gap: 70px;
  column-gap: min(max(10px, 3%), 30px);

  ${Title} {
    margin-bottom: 51px;
  }
`;
