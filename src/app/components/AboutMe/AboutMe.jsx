'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Dribbble, Mail, Instagram } from 'lucide-react';
import Link from 'next/link';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-me-section" id="about">
      <div className="about-me-container">
        <div className="about-me-header-wrapper">
          <h2 className="about-me-preheading">About Me</h2>
          <h1 className="about-me-heading">
            One step after the other in pursuit of{' '}
            <span className="about-me-gradient">something greater.</span>
          </h1>
        </div>

        <div className="about-me-content-grid">
          <div className="about-me-profile-column">
            <div className="about-me-image-wrapper">
              <img
                src="/assets/images/about/profile-pic.webp"
                alt="Profile"
                className="about-me-profile-image"
              />
              <div className="about-me-image-overlay"></div>
            </div>

            <div className="about-me-profile-informations">
              <h3>About Me</h3>
              <ul>
                <li className="profile-item">
                  <span className="profile-label">Name</span>
                  <span className="profile-content">Japhet Adofo-Adjei</span>
                </li>
                <li className="profile-item">
                  <span className="profile-label">Profession</span>
                  <span className="profile-content">
                    Frontend developer &amp; Freelancer
                  </span>
                </li>
                <li className="profile-item">
                  <span className="profile-label">Hobbies</span>
                  <span className="profile-content">
                    Playing games, listening to music, watching anime and
                    pplaying basketball.
                  </span>
                </li>
                <li className="profile-item">
                  <span className="profile-label">Favorite Language</span>
                  <span className="profile-content">JavaScript</span>
                </li>
                <li className="profile-item">
                  <span className="profile-label">Location</span>
                  <span className="profile-content">Ghana - Accra</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="about-me-content-column">
            <h5>Little about me</h5>
            <p className="about-me-intro">
              Hey, I’m Japhet Adofo-Adjei — a frontend developer obsessed with
              how digital experiences are built, from the tiniest interaction to
              full‑blown web apps
            </p>

            <h5>My Personality</h5>
            <div className="about-me-techstack">
              <div className="about-me-tech-item">
                <img
                  className="about-me-tech-icon"
                  src="/assets/images/about/idea.png"
                  alt="Teamwork"
                />
                <span className="about-me-tech-text">Innovative Thinker</span>
              </div>
              <div className="about-me-tech-item">
                <img
                  className="about-me-tech-icon"
                  src="/assets/images/about/fire.png"
                  alt="Problem Solving"
                />
                <span className="about-me-tech-text">
                  Curious & Problem Solver
                </span>
              </div>
              <div className="about-me-tech-item">
                <img
                  className="about-me-tech-icon"
                  src="/assets/images/about/code.png"
                  alt="Passion"
                />
                <span className="about-me-tech-text">Driven & Passionate</span>
              </div>
              <div className="about-me-tech-item">
                <img
                  className="about-me-tech-icon"
                  src="/assets/images/about/group.png"
                  alt="Communication"
                />
                <span className="about-me-tech-text">
                  Fast Learner & Collaborator
                </span>
              </div>
            </div>

            <div className="about-me-timeline">
              <h5>Achievements</h5>

              <div className="about-me-timeline-item">
                <div className="about-me-timeline-card">
                  <div className="about-me-timeline-header">
                    <div className="about-me-timeline-year">2021 - 2025</div>
                    <div className="about-me-timeline-company">
                      Higher Education
                    </div>
                  </div>
                  <h3 className="about-me-timeline-title">
                    Tertiary Education
                  </h3>
                  <p className="about-me-timeline-description">
                    I recently completed my degree program in Computer Science
                    at the Kwame Nkrumah Unoversity of Science and
                    Tecknology.{' '}
                  </p>
                </div>
              </div>

              <div className="about-me-timeline-item">
                <div className="about-me-timeline-card">
                  <div className="about-me-timeline-header">
                    <div className="about-me-timeline-year">2017 - 2020</div>
                    <div className="about-me-timeline-company">Education</div>
                  </div>
                  <h3 className="about-me-timeline-title">
                    Secondary School Certificate
                  </h3>
                  <p className="about-me-timeline-description">
                    I completed my secondary education at Suhum Secondary
                    Technical. Where i offered Science IT. Passionate about
                    debates, i lead my school to a debate competion and snagged
                    &quot;Best Debator.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
