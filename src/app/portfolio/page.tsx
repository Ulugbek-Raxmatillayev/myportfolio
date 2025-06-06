'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { NextPage } from "next";
import Link from 'next/link';

interface PortfolioItem {
  id: number;
  title: string;
  type: 'clone' | 'original';
  image: string;
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Travel site",
    type: "clone",
    image: "/imgs/portfolio/1.jpg"
  },
  {
    id: 2,
    title: "Fast Food site",
    type: "clone",
    image: "/imgs/portfolio/2.jpg"
  },
  {
    id: 3,
    title: "Medicine Farm",
    type: "clone",
    image: "/imgs/portfolio/3.jpg",
  },
  {
    id: 4,
    title: "IELTS Testy",
    type: "original",
    image: "/imgs/portfolio/4.jpg",
    link: "https://testy.uz/"
  },
  {
    id: 5,
    title: "Dreams website",
    type: "clone",
    image: "/imgs/portfolio/5.jpg",
  },
  {
    id: 6,
    title: "Cuda Website",
    type: "clone",
    image: "/imgs/portfolio/6.jpg",
  }
];

const Portfolio: NextPage = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.type === activeFilter);

  return (
    <>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button
                className={activeFilter === 'all' ? 'active' : ''}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button
                className={activeFilter === 'clone' ? 'active' : ''}
                onClick={() => setActiveFilter('clone')}
              >
                Clones
              </button>
              <button
                className={activeFilter === 'original' ? 'active' : ''}
                onClick={() => setActiveFilter('original')}
              >
                Originals
              </button>
            </div>
          </div>
          <div className="row">
            {filteredItems.map((item) => (
              <div className="portfolio-item padd-15" key={item.id}>
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={200}
                      className="portfolio-item-thumb"
                    />
                  </div>
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <div className="icon">
                      <div>
                        <i className="fa fa-external-link" />
                      </div>
                      {item.link &&
                        <Link href={item.link} target="_blank">
                          <i className="fa fa-external-link" />
                        </Link>
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
