import { useEffect, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform } from 'motion/react';

const IMGS = [
  'https://i.ibb.co/bM16y9Qt/photo-2025-10-23-21-42-01.jpg',
  'https://i.ibb.co/Z6rwg1NF/photo-2025-10-23-21-42-03.jpg',
  'https://i.ibb.co/nvvb0Zy/photo-2025-10-23-21-42-12.jpg',
  'https://i.ibb.co/cXMrq50L/photo-2025-10-23-21-42-14.jpg',
  'https://i.ibb.co/HLx6DWbF/photo-2025-10-23-21-42-19-2.jpg',
];

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  images = images.length > 0 ? images : IMGS;

  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);
  useEffect(() => {
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(rotation, val => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = startAngle => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 20,
        ease: 'linear',
        repeat: Infinity
      }
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay]);

  const handleUpdate = latest => {
    if (typeof latest.rotateY === 'number') {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);

    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      controls.stop();
    }
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden bg-orange-700"> {/* Changed h to 600px and added bg-black */}
      <div
        className="absolute top-0 left-0 h-full w-[48px] z-10"
        // style={{
        //   background: 'linear-gradient(to left, rgba(0,0,0,0) 0%, #000000 100%)' // Changed to black
        // }}
      />
      <div
        className="absolute top-0 right-0 h-full w-[48px] z-10"
        // style={{
        //   background: 'linear-gradient(to right, rgba(0,0,0,0) 0%, #000000 100%)' // Changed to black
        // }}
      />

      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d'
          }}
          className="flex min-h-[300px] cursor-grab items-center justify-center [transform-style:preserve-3d]" // Increased min-h
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`
              }}
            >
              <img
                src={url}
                alt="gallery"
                className="pointer-events-none h-[250px] w-[500px] rounded-[15px] border-[3px] border-white object-cover
                                 transition-transform duration-300 ease-out group-hover:scale-105
                                 sm:h-[200px] sm:w-[400px]" // Increased h and w for both sm and non-sm
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;