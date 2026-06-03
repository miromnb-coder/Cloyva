import { useEffect, useState } from 'react';
import { Image } from 'react-native';

import { localAppImages, remoteAppImageUrls } from '../constants/appImages';

export function useAppImagesReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let active = true;

    const localUris = localAppImages.map((image) => Image.resolveAssetSource(image).uri);
    const allUris = [...localUris, ...remoteAppImageUrls];

    Promise.allSettled(allUris.map((uri) => Image.prefetch(uri))).finally(() => {
      if (active) {
        setReady(true);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return ready;
}
