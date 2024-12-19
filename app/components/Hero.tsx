import BgTmp from '~/assets/tmp-bg.png';

const Hero = () => {
  return (
    <>
      {/* ClipPath Definition (Wave SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: '0', height: '0' }}
        preserveAspectRatio="none"
      >
        <defs>
          <clipPath id="mask">
            <path
              d="M0,0h1889.05v644.11c-105.59,18.47-275.68,41.48-486.12,36.95-357.7-7.69-513.79-84.72-854.5-94-127.15-3.46-315.35.99-548.43,57.05"
              fill="#010101"
            />
          </clipPath>
        </defs>
      </svg>

      <div
        className="absolute top-0 w-full"
        style={{
          height: '600px', // The height of the bottom clipped section
          backgroundImage: `url(${BgTmp})`, // Background Image
          backgroundSize: 'cover',

          clipPath:
            'polygon(100% 0%, 0% 0% , 0.00% 86.67%, 2.00% 86.62%, 4.00% 86.46%, 6.00% 86.21%, 8.00% 85.87%, 10.00% 85.46%, 12.00% 84.98%, 14.00% 84.44%, 16.00% 83.88%, 18.00% 83.29%, 20.00% 82.71%, 22.00% 82.15%, 24.00% 81.62%, 26.00% 81.14%, 28.00% 80.74%, 30.00% 80.41%, 32.00% 80.18%, 34.00% 80.04%, 36.00% 80.00%, 38.00% 80.07%, 40.00% 80.23%, 42.00% 80.50%, 44.00% 80.85%, 46.00% 81.27%, 48.00% 81.76%, 50.00% 82.30%, 52.00% 82.87%, 54.00% 83.46%, 56.00% 84.04%, 58.00% 84.60%, 60.00% 85.12%, 62.00% 85.58%, 64.00% 85.98%, 66.00% 86.29%, 68.00% 86.52%, 70.00% 86.64%, 72.00% 86.66%, 74.00% 86.58%, 76.00% 86.40%, 78.00% 86.13%, 80.00% 85.76%, 82.00% 85.33%, 84.00% 84.83%, 86.00% 84.28%, 88.00% 83.71%, 90.00% 83.12%, 92.00% 82.55%, 94.00% 81.99%, 96.00% 81.48%, 98.00% 81.02%, 100.00% 80.64%);', // Apply the wave clip
        }}
      />

      {/* Your additional content here */}
      <div className="content w-screen h-screen" />
    </>
  );
};

export default Hero;
