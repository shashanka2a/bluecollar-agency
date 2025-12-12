import { ImageResponse } from 'next/og';

export const alt = 'BlueCollar Agency - Web + SEO for Home Services';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: '#000000',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FAFAF9',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              color: '#E8B4A0',
            }}
          >
            BLUECOLLAR
          </div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 600,
              textAlign: 'center',
              maxWidth: 1000,
            }}
          >
            Web + SEO for Home Services
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#9CA3AF',
              textAlign: 'center',
              maxWidth: 900,
            }}
          >
            Grow home service businesses with high-trust websites + SEO
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

