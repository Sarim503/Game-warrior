'use client';

import Image from 'next/image';

const latestPosts = [
  { img: '/img/latest-blog/1.jpg', date: 'June 21, 2018', text: 'Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum', author: 'By Admin' },
  { img: '/img/latest-blog/2.jpg', date: 'June 21, 2018', text: 'Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum', author: 'By Admin' },
  { img: '/img/latest-blog/3.jpg', date: 'June 21, 2018', text: 'Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum', author: 'By Admin' },
];

const topComments = [
  { img: '/img/authors/1.jpg', text: 'James Smith', on: 'Lorem ipsum dolor sit amet, co', date: 'June 21, 2018' },
  { img: '/img/authors/2.jpg', text: 'James Smith', on: 'Lorem ipsum dolor sit amet, co', date: 'June 21, 2018' },
  { img: '/img/authors/3.jpg', text: 'James Smith', on: 'Lorem ipsum dolor sit amet, co', date: 'June 21, 2018' },
  { img: '/img/authors/4.jpg', text: 'James Smith', on: 'Lorem ipsum dolor sit amet, co', date: 'June 21, 2018' },
];

export default function FooterTop() {
  return (
    <section className="footer-top-section">
      <div className="container">
        <div className="footer-top-bg">
          <Image src="/img/footer-top-bg.png" alt="" width={1140} height={200} />
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="footer-logo text-white">
              <Image src="/img/footer-logo.png" alt="Game Warrior" width={120} height={40} />
              <p>
  Our 3D studio delivers professional modeling, animation, and visual effects for gaming and cinematic projects, combining creativity with technical precision.
</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            {/* <div className="footer-widget mb-5 mb-md-0">
              <h4 className="fw-title">Latest Posts</h4>
              <div className="latest-blog">
                {latestPosts.map((post, i) => (
                  <div key={i} className="lb-item">
                    <div className="lb-thumb set-bg" style={{ backgroundImage: `url(${post.img})` }} />
                    <div className="lb-content">
                      <div className="lb-date">{post.date}</div>
                      <p>{post.text}</p>
                      <a href="#" className="lb-author">{post.author}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
          {/* <div className="col-lg-4 col-md-6">
            <div className="footer-widget">
              <h4 className="fw-title">Top Comments</h4>
              <div className="top-comment">
                {topComments.map((c, i) => (
                  <div key={i} className="tc-item">
                    <div className="tc-thumb set-bg" style={{ backgroundImage: `url(${c.img})` }} />
                    <div className="tc-content">
                      <p><a href="#">{c.text}</a> <span>on</span> {c.on}</p>
                      <div className="tc-date">{c.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <style jsx>{`
        .footer-top-section {
          background: var(--bg-secondary);
          padding: 60px 0 40px;
          border-top: 1px solid var(--border);
        }
        .footer-top-bg {
          margin-bottom: 40px;
          opacity: 0.3;
        }
        .footer-logo p, .lb-content p, .tc-content p {
          color: var(--text-secondary);
        }
        .fw-title {
          margin-bottom: 25px;
          font-size: 18px;
        }
        .lb-item, .tc-item {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }
        .lb-thumb, .tc-thumb {
          width: 80px;
          min-width: 80px;
          height: 80px;
          border-radius: 8px;
        }
        .lb-date, .tc-date {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 5px;
        }
        .lb-author {
          font-size: 12px;
          color: var(--accent);
        }
      `}</style>
    </section>
  );
}
