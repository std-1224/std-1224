import { Canvas } from '@react-three/fiber'
import { Environment, ScrollControls } from '@react-three/drei'
import '../util'
import { Banner, Carousel, Rig } from '../components/CardThree'
const WorksCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 100], fov: 15 }}  style={{scrollbarWidth: 'none'}}>
      <fog attach="fog" args={['#a79', 8.5, 12]} />
      <ScrollControls pages={10} infinite style={{scrollbarWidth: 'none'}}>
        <Rig rotation={[0, 0, 0.15]}>
          <Carousel />
        </Rig>
        <Banner position={[0, -0.15, 0]} />
      </ScrollControls>
      <Environment preset="dawn" background blur={0.5} />
    </Canvas>
  )
}
export default WorksCanvas;