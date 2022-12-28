import React, { Suspense } from 'react';
import { PresentationControls, Stage } from '@react-three/drei';

import Chair from './Chair';
import Reflexion from './Reflexion';

const Experience = () => {

    return (
        <>
            <PresentationControls
                speed={1.5}
                global
                polar={[-0.1, Math.PI / 4]}
                rotation={[Math.PI / 8, Math.PI / 4, 0]}
            >
                <Stage environment="city" intensity={0.6} castShadow={false}>
                    <Chair />
                </Stage>
                <Reflexion />
            </PresentationControls>



        </>
    )
};

export default Experience;