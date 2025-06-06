'use client';

import { useState } from 'react';
import type { NextPage } from "next";
import Link from 'next/link';

interface PortfolioItem {
  id?: number;
  type?: string;
  title?: string;
  category?: string;
  image?: string;
  link?: string | undefined;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Travel site",
    type: 'clone',
    category: "web-design",
    image: "/imgs/portfolio/1.jpg"
  },
  {
    id: 2,
    title: "Fast Food",
    type: 'clone',
    category: "web-design",
    image: "/imgs/portfolio/2.jpg"
  },
  {
    id: 3,
    title: "Medicine Farm",
    type: 'clone',
    category: "web-design",
    image: "/imgs/portfolio/3.jpg"
  },
  {
    id: 4,
    title: "IELTS Testy",
    type: 'original',
    category: "web-design",
    image: "/imgs/portfolio/4.jpg",
    link: 'https://testy.uz'
  },
  {
    id: 6,
    title: "Cuda",
    type: 'clone',
    category: "web-design",
    image: "/imgs/portfolio/6.jpg"
  }
];

const Portfolio: NextPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.type === activeFilter);

  return (
    <div className="main-content">
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
              <div className="portfolio-item padd-15" key={item.id} data-category={item.category}>
                <div className="portfolio-item-inner shadow-dark">
                  <div className="portfolio-img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="portfolio-info">
                    <h4>{item.title}</h4>
                    <div className="icon">
                      <i className="fa fa-search" />
                    </div>
                    {item.link &&
                      <Link href={item.link && item.link} target='blank' className="icon">
                        <i className="fa fa-search" />
                      </Link>
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
