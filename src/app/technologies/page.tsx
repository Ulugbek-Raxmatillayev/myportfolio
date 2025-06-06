import React from 'react';
import Image from 'next/image';
import { technoCardsType } from '../../../types/techsType';
import Link from 'next/link';

const technologies: technoCardsType[] = [
  { name: 'React JS', logo: '/images/technologies/react.png', description: 'A JavaScript library for building user interfaces.', link: 'https://react.dev/learn'},
  { name: 'Next JS', logo: '/images/technologies/nextjs.png', description: 'A React framework for production.', link: 'https://nextjs.org/docs' },
  { name: 'Vue JS', logo: '/images/technologies/vuejs.png', description: 'The Progressive JavaScript Framework.', link: 'https://vuejs.org/guide/introduction' },
  { name: 'JavaScript', logo: '/images/technologies/javascript.png', description: 'Programming language for the web.', link: 'https://devdocs.io/javascript/' },
  { name: 'HTML', logo: '/images/technologies/html.png', description: 'Standard markup language for creating web pages.', link: 'https://devdocs.io/html/' },
  { name: 'CSS', logo: '/images/technologies/css.png', description: 'Stylesheet language for describing the presentation of a document.', link: 'https://devdocs.io/css/' },
  { name: 'TypeScript', logo: '/images/technologies/typescript.png', description: 'A typed superset of JavaScript that compiles to plain JavaScript.', link: 'https://www.typescriptlang.org/docs/' },
  { name: 'Bootstrap', logo: '/images/technologies/bootstrap.png', description: 'A popular HTML, CSS, and JS library.', link: 'https://getbootstrap.com/docs/4.1/getting-started/introduction/' },
  { name: 'Tailwind', logo: '/images/technologies/tailwind.png', description: 'A utility-first CSS framework.', link: 'https://v2.tailwindcss.com/docs' },
  { name: 'Solid JS', logo: '/images/technologies/solidjs.png', description: 'A declarative JavaScript library for creating user interfaces.', link: 'https://docs.solidjs.com/' },
  { name: 'GraphQL', logo: '/images/technologies/graphql.png', description: 'A query language for your API.', link: 'https://graphql.org/learn/' },
  { name: 'Redux', logo: '/images/technologies/redux.png', description: 'A predictable state container for JavaScript apps.', link: 'https://redux.js.org/introduction/getting-started' },
];

const TechnologiesPage = () => {
  return (
    <section className="section" id="technologies">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Technologies</h2>
          </div>
        </div>
        <div className="row">
          {technologies.map((tech, index) => (
            <Link href={tech.link} target='blank' className="technologies-item padd-15" key={index}>
              <div className="technologies-item-inner shadow-dark">
                <div className="technology-logo">
                  <Image src={tech.logo} alt={`${tech.name} logo`} width={50} height={50} />
                </div>
                <h3>{tech.name}</h3>
                <p>{tech.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesPage; 