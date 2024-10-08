import { useEffect, useRef, useState } from 'react';
import '../styles/ecofriendly.css';

function Wave() {
  const waveRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const wavePath = waveRef.current;

    // Function to calculate the width of the parent element dynamically
    const updateWidth = () => {
      if (wavePath && wavePath.parentNode) {
        setWidth(wavePath.parentNode.offsetWidth);
      }
    };

    // Add a resize event listener to update the width dynamically
    window.addEventListener('resize', updateWidth);
    updateWidth(); // Initial width update

    // Create the wave animation function
    const createWave = (element, options) => {
      let start = 0;
      const { height, bones, amplitude, speed } = options;

      const updateWave = () => {
        start += speed;

        if (width === 0) return; // Prevent division by zero

        const d = Array.from({ length: bones + 1 }, (_, i) => {
          const point = (i / bones) * width;
          const waveHeight = amplitude * Math.sin((i / bones + start) * 3);
          return `${i === 0 ? 'M' : 'L'} ${point} ${waveHeight + height}`;
        }).join(' ');

        // Ensure that the path data is valid before setting it
        if (d.includes('NaN')) {
          console.error('Error: NaN detected in wave path calculation.');
          return;
        }

        // Path drawing
        element.setAttribute('d', `${d} L ${width} 0 L 0 0 Z`);

        requestAnimationFrame(updateWave); // Continue animation
      };

      updateWave(); // Call the animation function

      return () => {
        cancelAnimationFrame(updateWave);
      };
    };

    // Create the wave with specified parameters
    const cleanupWave = createWave(wavePath, {
      height: 30, // Set the height lower as per your spec
      bones: 4, // Number of points for the wave
      amplitude: 20, // Reduced amplitude for lower wave
      speed: 0.05, // Slower speed for animation
    });

    // Clean up on component unmount
    return () => {
      window.removeEventListener('resize', updateWidth);
      cleanupWave();
    };
  }, [width]);

  return (
    <svg
      width='100%'
      height='100px' /* Adjust height of the SVG container */
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      className='wave'
      style={{
        transform: 'scale(1, -1)', // Invert the wave vertically
        zIndex: -1, // Position behind other elements
      }}
    >
      <defs></defs>
      <path
        ref={waveRef}
        id='feel-the-wave'
        fill='#ACEDAB'
      />
    </svg>
  );
}

export default Wave;
