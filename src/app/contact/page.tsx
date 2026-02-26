'use client';

import NewsTicker from '@/components/NewsTicker';
import PageInfo from '@/components/PageInfo';

export default function ContactPage() {
  return (
    <>
      <NewsTicker />
      <PageInfo
        title="Contact us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum."
        bgImage="/img/page-top-bg/5.jpg"
      />
      <section className="page-section spad contact-page">
        <div className="container">
          <div className="map-placeholder" />
          <div className="row">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h4 className="comment-title">Contact us</h4>
              <p>
                Odio ultrices ut. Etiam ac erat ut enim maximus accumsan vel ac nisl. Duis feugiat
                bibendum orci, non elementum urna. Cras sit amet sapien aliquam.
              </p>
              <ul className="contact-info-list">
                <li>
                  <div className="cf-left">Address</div>
                  <div className="cf-right">1481 Creekside Lane Avila Beach, CA 931</div>
                </li>
                <li>
                  <div className="cf-left">Phone</div>
                  <div className="cf-right">+53 345 7953 32453</div>
                </li>
                <li>
                  <div className="cf-left">E-mail</div>
                  <div className="cf-right">yourmail@gmail.com</div>
                </li>
              </ul>
              <div className="social-links">
                <a href="#" aria-label="Pinterest">📌</a>
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="Dribbble">🏀</a>
                <a href="#" aria-label="Behance">🎨</a>
                <a href="#" aria-label="LinkedIn">💼</a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="contact-form-warp">
                <h4 className="comment-title">Leave a Reply</h4>
                <form className="comment-form">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="col-lg-12">
                      <input type="text" placeholder="Subject" />
                      <textarea placeholder="Message" rows={5} />
                      <button type="submit" className="site-btn btn-sm">Send</button>
                    </div>
                  </div>
                </form>
              </div>
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
        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 25px;
        }
        .social-links a {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-elevated);
          border-radius: 50%;
          font-size: 18px;
          transition: background 0.3s;
        }
        .social-links a:hover { background: var(--accent); }
        .comment-form input,
        .comment-form textarea {
          width: 100%;
          padding: 14px 20px;
          margin-bottom: 20px;
          background: var(--bg-elevated);
          border: 1px solid var(--border);
          color: white;
          border-radius: 4px;
        }
        .comment-form textarea { resize: vertical; min-height: 120px; }
      `}</style>
    </>
  );
}
