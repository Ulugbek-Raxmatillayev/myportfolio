'use client';

import About from "./about/page";
import Image from 'next/image';

export default function Home() {
  const socialLinks = [
    { href: "https://x.com/URaxmatill45627", icon: "fa-twitter" },
    { href: "https://github.com/Ulugbek-Raxmatillayev", icon: "fa-github" },
    { href: "https://instagram.com/ulugbekraxmatillayev__", icon: "fa-instagram" },
    { href: "https://www.linkedin.com/in/ulug-bek-raxmatillayev-7b11b2313/", icon: "fa-linkedin" },
    { href: "https://t.me/rakhmatillayevulugbek", icon: "fa-telegram" },
  ];
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <Image 
              src="/imgs/logo.png"
              alt="Al Siam Profile"
              width={150}
              height={50}
              className="shadow-dark"
            />
            <h1>Ulug&apos;bek Raxmatillayev</h1>
            <p>I&apos;m a Front End Developer</p>
            <div className="social-links">
              {socialLinks && socialLinks.map((item, i) => {
                return (
                  <a key={i} href={item.href} target="_blank">
                    <i className={`fa ${item.icon}`} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
