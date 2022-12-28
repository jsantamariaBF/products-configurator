import { Canvas } from '@react-three/fiber';

import Experience from './components/Experience';

import './styles/App.css'
import Configurator from './components/Configurator';
import { CustomizationProvider } from './contexts/Customization';

function App() {

  return (
    <CustomizationProvider>
      <div className="App">
        <Canvas dpr={[1, 2]}>
          <color attach="background" args={["#212121"]} />
          <fog attach="fog" args={["#213547", 10, 20]} />
          <Experience />
        </Canvas>
        <Configurator />
      </div>
    </CustomizationProvider>
  )
};

export default App;
