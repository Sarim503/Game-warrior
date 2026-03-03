'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const heroSlides = [
  { img: '/img/slider-1.jpg', title: 'Individual', span: '/ Animator', subtitle: '' },
  { img: '/img/slider-2.jpg', title: 'Individual', span: '/ Animator', subtitle: '' },
];

interface FeatureItem {
  type: string;
  cata: string;
  title: string;
  sketchfabUrl?: string;
  modelPageUrl?: string;
  img?: string;
}

const features: FeatureItem[] = [
  {
    type: 'sketchfab',
    cata: '3d-model',
    title: 'Vintage Eggbeater Drill Game Ready Animated',
    sketchfabUrl: 'https://sketchfab.com/models/32123e1e88104e799ed541efd3196749/embed',
    modelPageUrl: 'https://sketchfab.com/3d-models/vintage-eggbeater-drill-game-ready-animated-32123e1e88104e799ed541efd3196749?utm_medium=embed&utm_campaign=share-popup&utm_content=32123e1e88104e799ed541efd3196749'
  },
  {
    type: 'sketchfab',
    cata: '3d-model',
    title: 'Vespula Pensylvanica, A flying yellow bugs',
    sketchfabUrl: 'https://sketchfab.com/models/deee12701f784e51a56c5bd27d72adae/embed',
    modelPageUrl: 'https://sketchfab.com/3d-models/vespula-pensylvanica-a-flying-yellow-bugs-deee12701f784e51a56c5bd27d72adae?utm_medium=embed&utm_campaign=share-popup&utm_content=deee12701f784e51a56c5bd27d72adae'
  },
  {
    type: 'sketchfab',
    cata: '3d-model',
    title: 'Frog Jump',
    sketchfabUrl: 'https://sketchfab.com/models/a3e1dfd0a6134060a0e23d5772edb42f/embed',
    modelPageUrl: 'https://sketchfab.com/3d-models/frog-jump-a3e1dfd0a6134060a0e23d5772edb42f?utm_medium=embed&utm_campaign=share-popup&utm_content=a3e1dfd0a6134060a0e23d5772edb42f'
  },
  {
    type: 'sketchfab',
    cata: '3d-model',
    title: 'Bigger Than Me',
    sketchfabUrl: 'https://sketchfab.com/models/8ee08135401d420b904bf6bd7830cdea/embed',
    modelPageUrl: 'https://sketchfab.com/3d-models/bigger-than-me-8ee08135401d420b904bf6bd7830cdea?utm_medium=embed&utm_campaign=share-popup&utm_content=8ee08135401d420b904bf6bd7830cdea'
  },
];

const recentGames = [
  { img: '/logo/image11.png', cata: 'new', title: 'Basic or Advanced Human Character Rig', description: 'Professional human armature setup with clean bone hierarchy, optimized for animation, game engines, and realistic character movement.' },
  { img: '/logo/image22.png', cata: 'new', title: 'Quadruped Animal Rig System', description: 'Custom-built animal armature designed for smooth walk cycles, natural motion, and full control for game and cinematic animation.' },

];



interface ReviewItem {
  videoUrl: string;
  score?: string;
  scoreClass?: string;
  title: string;
  description?: string;
}

const reviews: ReviewItem[] = [
  { videoUrl: 'https://www.youtube.com/embed/0QQqa08C0tc', title: 'Rukh3D - YouTube', description: 'Watch our latest video content.' },
  { videoUrl: 'https://www.youtube.com/embed/vDGyPCpSQyI', title: 'Rukh3D - YouTube', description: 'Watch our latest video content.' },
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
                  Animator Rigger and Character Artist creating animated characters creatures and game ready assets I focus on clean rigs smooth deformation and expressive motion building optimized models for real time projects and interactive experiences.
</p>
                
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
              <div key={i} className="col-lg-3 col-md-6 p-1">
                {f.type === 'sketchfab' && f.sketchfabUrl ? (
                  <div className="feature-item sketchfab-container">
                    <span className={`cata ${f.cata}`}>{f.cata}</span>
                    <div className="sketchfab-embed-wrapper">
                      <iframe
                        title={f.title}
                        frameBorder={0}
                        allowFullScreen
                        allow="autoplay; fullscreen; xr-spatial-tracking"
                        src={f.sketchfabUrl}
                      />
                      <p style={{fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A'}}>
                        <a
                          href={f.modelPageUrl}
                          target="_blank"
                          rel="nofollow"
                          style={{fontWeight: 'bold', color: '#1CAAD9'}}
                        >
                          {f.title}
                        </a> by <a
                          href="https://sketchfab.com/rukh3d?utm_medium=embed&utm_campaign=share-popup"
                          target="_blank"
                          rel="nofollow"
                          style={{fontWeight: 'bold', color: '#1CAAD9'}}
                        >
                          Rukh3D
                        </a> on <a
                          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup"
                          target="_blank"
                          rel="nofollow"
                          style={{fontWeight: 'bold', color: '#1CAAD9'}}
                        >
                          Sketchfab
                        </a>
                      </p>
                    </div>
                  </div>
                ) : f.img ? (
                  <div className="feature-item set-bg" style={{ backgroundImage: `url(${f.img})` }}>
                    <span className={`cata ${f.cata}`}>{f.cata}</span>
                    <div className="fi-content text-white">
                      <h5><Link href="#">{f.title}</Link></h5>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Games */}
      <section
        className="recent-game-section spad set-bg"
        // style={{ backgroundImage: 'url(/img/recent-game-bg.png)' }}
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
                    <p>{g.description}</p>
                   
                
                   
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
        style={{
          backgroundImage: 'url(/img/review-bg.png)',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container">
          <div className="section-title">
            <div className="cata new">new</div>
            <h2>Recent Videos</h2>
          </div>
          <div className="row">
            {reviews.map((r, i) => (
              <div key={i} className="col-lg-3 col-md-6">
                <div className="review-item">
                  <div className="review-video">
                    <iframe
                      src={r.videoUrl}
                      title={r.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="review-text">
                    <h5>{r.title}</h5>
                    <p>{r.description || ''}</p>
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
        .sketchfab-container {
          height: clamp(250px, 30vw, 415px);
          position: relative;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
        }
        .sketchfab-embed-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .sketchfab-embed-wrapper iframe {
          width: 100%;
          height: 100%;
          border: none;
        }
        .feature-item:not(.sketchfab-container)::after {
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
        .review-video {
          position: relative;
          margin-bottom: 15px;
          border-radius: 8px;
          overflow: hidden;
          aspect-ratio: 16/9;
        }
        .review-video iframe {
          width: 100%;
          height: 100%;
          border: none;
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
