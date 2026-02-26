'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NewsTicker from '@/components/NewsTicker';

const heroSlides = [
  { img: '/img/slider-1.jpg', title: 'The Best', span: 'Games', subtitle: 'Out There' },
  { img: '/img/slider-2.jpg', title: 'The Best', span: 'Games', subtitle: 'Out There' },
];

const features = [
  { img: '/img/features/1.jpg', cata: 'new', title: 'Suspendisse ut justo tem por, rutrum' },
  { img: '/img/features/2.jpg', cata: 'strategy', title: 'Justo tempor, rutrum erat id, molestie' },
  { img: '/img/features/3.jpg', cata: 'new', title: 'Nullam lacinia ex eleifend orci porttitor' },
  { img: '/img/features/4.jpg', cata: 'racing', title: 'Lacinia ex eleifend orci suscipit' },
];

const recentGames = [
  { img: '/img/recent-game/1.jpg', cata: 'new', title: 'Suspendisse ut justo tem por, rutrum' },
  { img: '/img/recent-game/2.jpg', cata: 'racing', title: 'Susce pulvinar metus nulla, vel facilisis sem' },
  { img: '/img/recent-game/3.jpg', cata: 'adventure', title: 'Suspendisse ut justo tem por, rutrum' },
];

const tournaments = [
  { img: '/img/tournament/1.jpg', title: 'World Of WarCraft' },
  { img: '/img/tournament/2.jpg', title: 'DOOM' },
];

const reviews = [
  { img: '/img/review/1.jpg', score: '9.3', scoreClass: 'yellow', title: "Assassin's Creed" },
  { img: '/img/review/2.jpg', score: '9.5', scoreClass: 'purple', title: 'Doom' },
  { img: '/img/review/3.jpg', score: '9.1', scoreClass: 'green', title: 'Overwatch' },
  { img: '/img/review/4.jpg', score: '9.7', scoreClass: 'pink', title: 'GTA' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <NewsTicker />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-slider">
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className={`hs-item set-bg ${i === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="hs-text">
                <div className="container">
                  <h2>{slide.title} <span>{slide.span}</span> {slide.subtitle}</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada
                    lorem maximus mauris scelerisque, at rutrum nulla dictum.
                  </p>
                  <Link href="#" className="site-btn">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-dots">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={i === currentSlide ? 'active' : ''}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="feature-section spad">
        <div className="container">
          <div className="row">
            {features.map((f, i) => (
              <div key={i} className="col-lg-3 col-md-6 p-0">
                <div className="feature-item set-bg" style={{ backgroundImage: `url(${f.img})` }}>
                  <span className={`cata ${f.cata}`}>{f.cata}</span>
                  <div className="fi-content text-white">
                    <h5><Link href="#">{f.title}</Link></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link href="#" className="fi-comment">3 Comments</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Games */}
      <section
        className="recent-game-section spad set-bg"
        style={{ backgroundImage: 'url(/img/recent-game-bg.png)' }}
      >
        <div className="container">
          <div className="section-title">
            <div className="cata new">new</div>
            <h2>Recent Games</h2>
          </div>
          <div className="row">
            {recentGames.map((g, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="recent-game-item">
                  <div className="rgi-thumb set-bg" style={{ backgroundImage: `url(${g.img})` }}>
                    <div className={`cata ${g.cata}`}>{g.cata}</div>
                  </div>
                  <div className="rgi-content">
                    <h5>{g.title}</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit amet.</p>
                    <Link href="#" className="comment">3 Comments</Link>
                    <div className="rgi-extra">
                      <div className="rgi-star">
                        <Image src="/img/icons/star.png" alt="" width={20} height={20} />
                      </div>
                      <div className="rgi-heart">
                        <Image src="/img/icons/heart.png" alt="" width={20} height={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments */}
      <section className="tournaments-section spad">
        <div className="container">
          <div className="tournament-title">Tournaments</div>
          <div className="row">
            {tournaments.map((t, i) => (
              <div key={i} className="col-md-6">
                <div className="tournament-item mb-4 mb-lg-0">
                  <div className="ti-notic">Premium Tournament</div>
                  <div className="ti-content">
                    <div className="ti-thumb set-bg" style={{ backgroundImage: `url(${t.img})` }} />
                    <div className="ti-text">
                      <h4>{t.title}</h4>
                      <ul>
                        <li><span>Tournament Begins:</span> June 20, 2018</li>
                        <li><span>Tournament Ends:</span> July 01, 2018</li>
                        <li><span>Participants:</span> 10 teams</li>
                        <li><span>Tournament Author:</span> Admin</li>
                      </ul>
                      <p><span>Prizes:</span> 1st place $2000, 2nd place: $1000, 3rd place: $500</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        className="review-section spad set-bg"
        style={{ backgroundImage: 'url(/img/review-bg.png)' }}
      >
        <div className="container">
          <div className="section-title">
            <div className="cata new">new</div>
            <h2>Recent Reviews</h2>
          </div>
          <div className="row">
            {reviews.map((r, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="review-item">
                  <div className="review-cover set-bg" style={{ backgroundImage: `url(${r.img})` }}>
                    <div className={`score ${r.scoreClass}`}>{r.score}</div>
                  </div>
                  <div className="review-text">
                    <h5>{r.title}</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit ame.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero-section {
          position: relative;
          overflow: hidden;
        }
        .hero-slider {
          position: relative;
          height: clamp(400px, 70vw, 865px);
        }
        .hs-item {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          opacity: 0;
          transition: opacity 0.8s ease;
        }
        .hs-item.active {
          opacity: 1;
          z-index: 1;
        }
        .hs-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
        }
        .hs-text {
          position: relative;
          z-index: 1;
          width: 100%;
        }
        .hs-text h2 { color: white; margin-bottom: 20px; }
        .hs-text h2 span { color: var(--accent); }
        .hs-text p { color: rgba(255,255,255,0.9); margin-bottom: 25px; }
        .hero-dots {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 5;
        }
        .hero-dots button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: all 0.3s;
        }
        .hero-dots button.active {
          background: var(--accent);
          transform: scale(1.2);
        }
        .feature-item {
          height: clamp(250px, 30vw, 415px);
          position: relative;
        }
        .feature-item::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #000;
          opacity: 0.65;
        }
        .feature-item .cata { position: relative; z-index: 2; margin: 28px 0 0 29px; }
        .fi-content { position: absolute; bottom: 0; left: 0; right: 0; padding: 24px; z-index: 2; }
        .fi-content h5 { margin-bottom: 10px; }
        .fi-comment { font-size: 12px; opacity: 0.8; }
        .recent-game-section { background: var(--bg-card); }
        .rgi-thumb {
          height: 204px;
          padding: 25px 28px;
          position: relative;
        }
        .rgi-content {
          padding: 24px 22px 20px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          position: relative;
        }
        .rgi-content h5 { margin-bottom: 15px; }
        .rgi-extra {
          position: absolute;
          right: 0;
          bottom: 0;
          display: flex;
        }
        .rgi-star { background: var(--accent); padding: 8px; }
        .rgi-heart { background: var(--accent-new); padding: 8px; }
        .tournaments-section { background: var(--bg-secondary); }
        .tournament-title {
          display: inline-block;
          padding: 7px 25px;
          font-size: 12px;
          font-weight: 500;
          color: white;
          text-transform: uppercase;
          background: #fb6e10;
          margin-bottom: 30px;
        }
        .tournament-item { background: var(--bg-elevated); overflow: hidden; }
        .ti-notic {
          padding: 8px 21px;
          font-size: 12px;
          background: var(--accent);
          color: var(--bg-primary);
          font-weight: 700;
        }
        .ti-content { display: flex; flex-wrap: wrap; }
        .ti-thumb { width: 200px; height: 150px; min-width: 150px; }
        .ti-text { padding: 20px; flex: 1; }
        .ti-text ul { list-style: none; padding: 0; margin: 0 0 15px 0; }
        .ti-text li { margin-bottom: 8px; font-size: 14px; color: var(--text-secondary); }
        .ti-text span { color: var(--accent); margin-right: 8px; }
        .review-section { background: var(--bg-card); }
        .review-item { margin-bottom: 20px; }
        .review-cover {
          height: 200px;
          position: relative;
          margin-bottom: 15px;
        }
        .score {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 5px 12px;
          font-weight: 700;
          font-size: 18px;
        }
        .score.yellow { background: #fbb710; color: #000; }
        .score.purple { background: #694eae; color: #fff; }
        .score.green { background: #4eae60; color: #fff; }
        .score.pink { background: #ff205f; color: #fff; }
        .review-text h5 { margin-bottom: 8px; }
        @media (max-width: 991px) {
          .ti-content { flex-direction: column; }
          .ti-thumb { width: 100%; height: 200px; }
        }
      `}</style>
    </>
  );
}
