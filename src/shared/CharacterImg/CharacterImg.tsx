import { useState } from 'react';

import characterImgPlaceholder from './character-img-placeholder.png';

interface ICharacterImgProps {
  width?: string;
  height?: string;
  alt: string;
  src: string;
}

export const CharacterImg = ({ width = '100%', height = '100%', alt, src }: ICharacterImgProps) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <>
      <img
        onLoad={() => setImgLoaded(true)}
        src={src}
        alt={alt}
        style={{ display: imgLoaded ? 'block' : 'none', width, height }}
        crossOrigin="anonymous"
      />
      <img
        srcSet={characterImgPlaceholder}
        alt={alt}
        style={{ display: imgLoaded ? 'none' : 'block', width, height }}
      />
    </>
  );
};
