import { useEffect } from 'react';

const use3DCardEffect = (
  cardRef,
  options = {
    intensityFactor: 5,
    axisIntensity: 0.5,
    perspective: 800,
  }
) => {
  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const handleMouseMove = (e) => {
      const pointerX = e.clientX;
      const pointerY = e.clientY;

      const cardRect = card.getBoundingClientRect();

      const halfWidth = cardRect.width / 2;
      const halfHeight = cardRect.height / 2;

      const cardCenterX = cardRect.left + halfWidth;
      const cardCenterY = cardRect.top + halfHeight;

      const deltaX = pointerX - cardCenterX;
      const deltaY = pointerY - cardCenterY;

      const distanceToCenter = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      const maxDistance = Math.max(halfWidth, halfHeight);

      const degree = (distanceToCenter * options.intensityFactor) / maxDistance;
      const rx = (deltaY / halfHeight) * options.axisIntensity;
      const ry = (deltaX / halfWidth) * options.axisIntensity;

      card.style.transform = `perspective(${options.perspective}px) rotate3d(${-rx}, ${ry}, 0, ${degree}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = null;
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cardRef, options]);
};

export default use3DCardEffect;