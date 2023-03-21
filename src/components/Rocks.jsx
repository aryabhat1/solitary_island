import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Rocks(){
    const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + "models/floating_rock_1.glb");

    return (
        <primitive object={gltf.scene} />
    )
}