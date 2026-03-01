'use client';

import { CONTACT_CONFIG } from '@/config/contact';
const DEFAULT_MESSAGE = 'Hello! I would like to get in touch.';

export default function WhatsAppFloat() {
  const waUrl = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="whatsapp-icon"
      >
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.828.736 5.488 2.02 7.796L.667 30.667l7.071-1.858A15.93 15.93 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.612 0-5.075-.684-7.22-1.877l-.508-.301-2.644.694.705-2.576-.416-.439A13.26 13.26 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.316-10.833c-.392-.196-2.314-1.142-2.673-1.27-.358-.129-.62-.196-.88.196-.262.392-1.017 1.27-1.246 1.534-.23.261-.458.295-.85.099-.392-.196-1.654-.61-3.15-1.942-1.164-1.037-1.95-2.317-2.177-2.71-.228-.392-.024-.604.172-.797.176-.176.392-.458.587-.688.196-.229.261-.392.392-.655.131-.262.065-.49-.033-.687-.098-.196-.88-2.12-1.205-2.9-.318-.76-.64-.656-.88-.668l-.752-.015c-.251 0-.655.098-1 .49-.343.392-1.31 1.28-1.31 3.12s1.342 3.62 1.528 3.87c.186.248 2.633 4.02 6.378 5.638.892.384 1.588.615 2.13.787.855.276 1.633.237 2.246.144.688-.107 2.314-.945 2.639-1.859.325-.913.325-1.696.228-1.859-.098-.163-.358-.262-.75-.458z" />
      </svg>
      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 56px;
          height: 56px;
          background: #25d366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 12px rgba(37, 211, 102, 0.5);
          z-index: 9999;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .whatsapp-float:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
          color: white;
        }
        .whatsapp-icon {
          width: 30px;
          height: 30px;
        }
      `}</style>
    </a>
  );
}
