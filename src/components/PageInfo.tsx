'use client';

interface PageInfoProps {
  title: string;
  description: string;
  bgImage: string;
}

export default function PageInfo({ title, description, bgImage }: PageInfoProps) {
  return (
    <section
      className="page-info-section set-bg"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="pi-content">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 text-white">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .page-info-section {
          padding: 100px 0;
          position: relative;
        }
        .page-info-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
        }
        .pi-content {
          position: relative;
          z-index: 1;
        }
        .pi-content h2 {
          color: white;
          margin-bottom: 15px;
        }
        .pi-content p {
          color: rgba(255,255,255,0.9);
        }
      `}</style>
    </section>
  );
}
