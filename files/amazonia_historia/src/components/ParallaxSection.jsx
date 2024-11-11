import React, { useEffect, useRef } from 'react';
import hill1 from './assets/hill1.png';
import hill2 from './assets/hill2.png';
import hill3 from './assets/hill3.png';
import hill4 from './assets/hill4.png';
import hill5 from './assets/hill5.png';
import tree from './assets/tree.png';
import leaf from './assets/leaf.png';
import plant from './assets/plant.png';

function ParallaxSection() {
  const textRef = useRef(null);
  const leafRef = useRef(null);
  const hill1Ref = useRef(null);
  const hill4Ref = useRef(null);
  const hill5Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      if (textRef.current) {
        textRef.current.style.marginTop = value * 2.5 + 'px';
      }
      if (leafRef.current) {
        leafRef.current.style.top = value * -1.5 + 'px';
        leafRef.current.style.left = value * 1.5 + 'px';
      }
      if (hill5Ref.current) {
        hill5Ref.current.style.left = value * 1.5 + 'px';
      }
      if (hill4Ref.current) {
        hill4Ref.current.style.left = value * -1.5 + 'px';
      }
      if (hill1Ref.current) {
        hill1Ref.current.style.top = value * 1 + 'px';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="parallax">
      <img src={hill1} id="hill1" ref={hill1Ref} alt="Hill 1" />
      <img src={hill2} id="hill2" alt="Hill 2" />
      <img src={hill3} id="hill3" alt="Hill 3" />
      <img src={hill4} id="hill4" ref={hill4Ref} alt="Hill 4" />
      <img src={hill5} id="hill5" ref={hill5Ref} alt="Hill 5" />
      <img src={tree} id="tree" alt="Tree" />
      <h2 id="text" ref={textRef}>Amazônia</h2>
      <img src={leaf} id="leaf" ref={leafRef} alt="Leaf" />
      <img src={plant} id="plant" alt="Plant" />
    </section>
  );
}

export default ParallaxSection;
