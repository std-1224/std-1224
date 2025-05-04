import { CardProps, RigProps, CarouselProps, BannerProps } from '../types/threeCard'
import { worksArr } from '../schema/work'
import { useRef, useState } from 'react'
import { easing } from 'maath'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Image, useScroll, useTexture, } from '@react-three/drei'
import '../util'
import { MeshSineMat } from './MeshSineMaterial'
import { BentPlane } from './BentPlaneGeometry'

export function Rig({ rotation, children }: RigProps) {
    const ref = useRef<THREE.Group>(null)
    const scroll = useScroll()

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
        }
        easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta) // Move camera
        state.camera.lookAt(0, 0, 0) // Look at center
    })

    return <group ref={ref} rotation={rotation}>{children}</group>
}

export function Carousel({ radius = 1.9, count = 10 }: CarouselProps) {
    return (
        <>
            {worksArr.map((work, i) => (
                <Card
                    key={i}
                    url={work.url}
                    website={work.website}
                    title={work.title}
                    description={work.description}
                    position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
                    rotation={[0, (i / count) * Math.PI * 2, 0]}
                />
            ))}
        </>
    )
}

// Extending the ImageProps with our custom properties
export function Card({ url, website, ...props }: CardProps) {
    // Define type for the ref - it will be an Image component from @react-three/drei
    // which has scale, material properties, etc.
    interface ImageWithMaterial extends THREE.Mesh {
        material: {
            radius: number;
            zoom: number;
            time?: { value: number };
        } & THREE.Material;
    }

    const ref = useRef<ImageWithMaterial>(null)
    const [hovered, hover] = useState<boolean>(false)

    const pointerOver = (e: any) => {
        e.stopPropagation()
        hover(true)
    }

    const pointerOut = () => hover(false)

    useFrame((state, delta) => {
        if (ref.current) {
            easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
            easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
            easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta)
        }
    })

    return (
        <Image
            ref={ref}
            url={url}
            transparent
            side={THREE.DoubleSide}
            onPointerOver={pointerOver}

            onClick={(e) => {
                e.stopPropagation()
                window.open(website, '_blank')
            }}
            onPointerOut={pointerOut}
            {...props}
        >
            <BentPlane args={[0.1, 1, 1, 20, 20]} />
        </Image>
    )
}

export function Banner(props: BannerProps) {
    interface MeshWithTimeMaterial extends THREE.Mesh {
        material: {
            time: { value: number };
            map: THREE.Texture & { offset: THREE.Vector2 };
        } & THREE.Material;
    }

    const ref = useRef<MeshWithTimeMaterial>(null)
    const texture = useTexture('./alphagroup-ai.png')
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping

    const scroll = useScroll()

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.material.time.value += Math.abs(scroll.delta) * 4
            ref.current.material.map.offset.x += delta / 2
        }
    })

    return (
        <mesh ref={ref} {...props}>
            <cylinderGeometry args={[2.4, 2.4, 0.14, 128, 16, true]} />
            <MeshSineMat map={texture} map-anisotropy={16} map-repeat={[30, 1]} side={THREE.DoubleSide} toneMapped={false} />
        </mesh>
    )
}