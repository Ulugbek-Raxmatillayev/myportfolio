'use client';

import type { NextPage } from "next";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h3>I&apos;m Ulugbek Raxmatillayev and <span>Front End Developer</span></h3>
                  <p>
                    I&apos;m a Front End Developer with a passion for creating beautiful and functional websites. I have experience in HTML, CSS, JavaScript, React, Next.js, and other modern web technologies.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>Birthday : <span>15 June 2005</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Age : <span>18</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Website : <span>www.urfolio.vercel.app</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Email : <span>ulugbekraxmatillayev615@gmail.com</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Degree : <span>CS</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Phone : <span>+998 88-034-09-12</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>City : <span>Qarshi</span></p>
                    </div>
                    <div className="info-item padd-15">
                      <p>Freelance : <span>Available</span></p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a href="#" className="btn">Download CV</a>
                      <Link
                        href="/contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>HTML</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }}></div>
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>CSS</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }}></div>
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>JavaScript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "85%" }}></div>
                        <div className="skill-percent">85%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>React</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }}></div>
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Next.js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "75%" }}></div>
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>TypeScript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }}></div>
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2020 - 2024
                          </h3>
                          <h4 className="timeline-title">Bachelor in Computer Science</h4>
                          <p className="timeline-text">
                            I&apos;m currently pursuing my Bachelor&apos;s degree in Computer Science, focusing on web development and software engineering.
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2016 - 2020
                          </h3>
                          <h4 className="timeline-title">High School Diploma</h4>
                          <p className="timeline-text">
                            Completed high school with a focus on mathematics and computer science.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2023 - Present
                          </h3>
                          <h4 className="timeline-title">Front End Developer</h4>
                          <p className="timeline-text">
                            Working as a freelance Front End Developer, creating responsive and modern websites using React and Next.js.
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot"></div>
                          <h3 className="timeline-date">
                            <i className="fa fa-calendar"></i> 2022 - 2023
                          </h3>
                          <h4 className="timeline-title">Web Development Intern</h4>
                          <p className="timeline-text">
                            Interned at a web development company, learning and implementing modern web technologies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
