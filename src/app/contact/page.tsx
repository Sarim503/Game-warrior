'use client';

import PageInfo from '@/components/PageInfo';
import { CONTACT_CONFIG } from '@/config/contact';

export default function ContactPage() {
  return (
    <>
      <PageInfo
        title="Contact us"
        description="Passionate 3D Graphics Designer & Animator with 6 years of professional experience creating high-quality assets for games and digital media. My strong love for video games, animated characters, and digital art inspired me to build a career where creativity meets technology.
."
        bgImage="/img/page-top-bg/5.jpg"
      />
      <section className="page-section spad contact-page">
        <div className="container">
        
          <div className="row">
            <div className="col-lg-8 mx-auto">
        
              <ul className="contact-info-list">
                <li>
                  <div className="cf-left">Address</div>
                  <div className="cf-right">{CONTACT_CONFIG.address}</div>
                </li>
                <li>
                  <div className="cf-left">Phone</div>
                  <div className="cf-right">
                    <a href={`tel:${CONTACT_CONFIG.phone.replace(/\s/g, '')}`}>{CONTACT_CONFIG.phone}</a>
                  </div>
                </li>
                <li>
                  <div className="cf-left">E-mail</div>
                  <div className="cf-right">
                    <a href={`mailto:${CONTACT_CONFIG.email}`}>{CONTACT_CONFIG.email}</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .map-placeholder {
          height: 300px;
          background: var(--bg-elevated);
          border-radius: 8px;
          margin-bottom: 40px;
        }
        .comment-title { margin-bottom: 25px; }
        .contact-info-list {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }
        .contact-info-list li {
          margin-bottom: 15px;
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
        }
        .cf-left {
          font-weight: 600;
          color: var(--accent);
          min-width: 80px;
        }
        .cf-right { color: var(--text-secondary); }
        .cf-right a:hover { color: var(--accent); }
      `}</style>
    </>
  );
}
