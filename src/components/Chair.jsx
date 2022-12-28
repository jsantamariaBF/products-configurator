import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { useCustomization } from '../contexts/Customization';

function Chair(props) {

  const { material, legs, chairColor, cushionColor } = useCustomization();

  const { nodes, materials } = useGLTF('./models/chair.gltf');

  const leatherTextureProps = useTexture({
    // map: './textures/leather/Leather_Padded_001_basecolor.jpg',
    normalMap: './textures/leather/Leather_Padded_001_normal.jpg',
    roughnessMap: './textures/leather/Leather_Padded_001_roughness.jpg',
    aoMap: './textures/leather/Leather_Padded_001_ambientOcclusion.jpg',
  });

  const fabricTextureProps = useTexture({
    // map: './textures/fabric/Fabric_Lace_022_basecolor.jpg',
    normalMap: './textures/fabric/Fabric_Lace_022_normal.jpg',
    roughnessMap: './textures/fabric/Fabric_Lace_022_roughness.jpg',
    aoMap: './textures/fabric/Fabric_Lace_022_ambientOcclusion.jpg',
  });

  // leatherTextureProps.map.repeat.set(4, 4);
  leatherTextureProps.normalMap.repeat.set(4, 4);
  leatherTextureProps.roughnessMap.repeat.set(4, 4);
  leatherTextureProps.aoMap.repeat.set(4, 4);

  // leatherTextureProps.map.wrapS = leatherTextureProps.map.wrapT = THREE.RepeatWrapping;
  leatherTextureProps.normalMap.wrapS = leatherTextureProps.normalMap.wrapT = THREE.RepeatWrapping;
  leatherTextureProps.roughnessMap.wrapS = leatherTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  leatherTextureProps.aoMap.wrapS = leatherTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  // fabricTextureProps.map.repeat.set(4, 4);
  fabricTextureProps.normalMap.repeat.set(4, 4);
  fabricTextureProps.roughnessMap.repeat.set(4, 4);
  fabricTextureProps.aoMap.repeat.set(4, 4);

  // fabricTextureProps.map.wrapS = fabricTextureProps.map.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.normalMap.wrapS = fabricTextureProps.normalMap.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.roughnessMap.wrapS = fabricTextureProps.roughnessMap.wrapT = THREE.RepeatWrapping;
  fabricTextureProps.aoMap.wrapS = fabricTextureProps.aoMap.wrapT = THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Chair.geometry} material={materials.Chair}>
        <meshStandardMaterial {...leatherTextureProps} {...(material === 'leather' ? leatherTextureProps : fabricTextureProps)} color={chairColor} />
      </mesh>
      <mesh geometry={nodes.Cushion.geometry} material={materials.Cushion} position={[0, 0.06, 0.04]}>
        <meshStandardMaterial {...fabricTextureProps} color={cushionColor} />
      </mesh>
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} visible={legs === 1 ? true : false} />
      <mesh geometry={nodes.Legs2.geometry} material={materials.Legs} visible={legs === 2 ? true : false} />
    </group>
  )
};

export default Chair;

useGLTF.preload('./models/chair.gltf');
