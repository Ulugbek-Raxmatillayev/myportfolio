'use client';

import About from "./about/page";

export default function Home() {
  const socialLinks = [
    { href: "https://twitter.com/URaxmatill45627", icon: "fa-twitter" },
    { href: "https://github.com/Ulugbek-Raxmatillayev", icon: "fa-github" },
    { href: "https://instagram.com/ulugbekraxmatillayev__", icon: "fa-instagram" },
    { href: "https://www.linkedin.com/in/ulug-bek-raxmatillayev-7b11b2313/", icon: "fa-linkedin" },
  ];
  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/logo.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Ulug'bek Raxmatillayev</h1>
            <p>Front End Developer</p>
            <div className="social-links">
              {socialLinks && socialLinks.map((item, i) => {
                return (
                  <a href={item.href} target="_blank">
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
