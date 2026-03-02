'use client';


import PageInfo from '@/components/PageInfo';

const gameReviews = [
  { img: '/img/review/5.jpg', title: 'Overwatch Halloween', score: '9.3' },
  { img: '/img/review/6.jpg', title: 'Grand Theft Auto', score: '9.3' },
  { img: '/img/review/7.jpg', title: 'Avatar', score: '9.3' },
  { img: '/img/review/8.jpg', title: 'Anthem', score: '9.3' },
  { img: '/img/review/9.jpg', title: 'Cyberpunk 2077', score: '9.3' },
  { img: '/img/review/10.jpg', title: 'Spiderman', score: '9.3' },
];

const recentReviews = [
  { img: '/img/review/1.jpg', title: "Assassin's Creed", score: '9.3', scoreClass: 'yellow' },
  { img: '/img/review/2.jpg', title: 'Doom', score: '9.5', scoreClass: 'purple' },
  { img: '/img/review/3.jpg', title: 'Overwatch', score: '9.1', scoreClass: 'green' },
  { img: '/img/review/4.jpg', title: 'GTA', score: '9.7', scoreClass: 'pink' },
];

export default function ReviewPage() {
  return (
    <>
  
      <PageInfo
        title="Game reviews"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum."
        bgImage="/img/page-top-bg/3.jpg"
      />
      <section className="page-section review-page spad">
        <div className="container">
          <div className="row">
            {gameReviews.map((r, i) => (
              <div key={i} className="col-md-6">
                <div className="review-item">
                  <div className="review-cover set-bg" style={{ backgroundImage: `url(${r.img})` }}>
                    <div className="score yellow">{r.score}</div>
                  </div>
                  <div className="review-text">
                    <h4>{r.title}</h4>
                    <div className="rating">
                      {'★'.repeat(4)}<span className="is-fade">★</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit ame.
                      Lorem ipsum dolor sit amet, consectetur adipisc ing ipsum dolor sit ame.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
      
        </div>
      </section>
      <section
        className="review-section review-dark spad set-bg"
        style={{ backgroundImage: 'url(/img/review-bg-2.jpg)' }}
      >
        <div className="container">
          <div className="section-title text-white">
            <div className="cata new">new</div>
            <h2>Recent Reviews</h2>
          </div>
          <div className="row text-white">
            {recentReviews.map((r, i) => (
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
        .review-item { margin-bottom: 30px; }
        .review-cover {
          height: 250px;
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
        .rating { color: #fbb710; margin: 10px 0; }
        .rating .is-fade { color: rgba(255,255,255,0.3); }
        .review-dark .section-title h2 { color: white; }
        .review-dark .review-text h5 { color: white; }
        .review-dark .review-text p { color: rgba(255,255,255,0.8); }
      `}</style>
    </>
  );
}
