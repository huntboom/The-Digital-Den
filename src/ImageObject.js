import React, { useRef, useMemo } from "react";
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Create a texture cache
const textureCache = new Map();

const ImageObject = React.memo(function ImageObject(props) {
  const textureUrl = props.url;

  const texture = useMemo(() => {
    // Check if the texture is already in the cache
    if (textureCache.has(textureUrl)) {
      return textureCache.get(textureUrl);
    }

    // Load the texture using TextureLoader
    const loader = new THREE.TextureLoader();
    const loadedTexture = loader.load(textureUrl);
    loadedTexture.encoding = THREE.sRGBEncoding;

    // Add the loaded texture to the cache
    textureCache.set(textureUrl, loadedTexture);

    return loadedTexture;
  }, [textureUrl]);

  const materialWithTexture = useMemo(() => {
    return new THREE.MeshBasicMaterial({ map: texture });
  }, [texture]);

  const geometry = useMemo(() => {
    return new THREE.PlaneGeometry(2.5, 5.2, 1, 1);
  }, []);

  const ref = useRef();

  return (
    <mesh ref={ref} rotation={[0, Math.PI / 2, 0]} {...props} geometry={geometry} material={materialWithTexture} />
  );
});

export default ImageObject;
