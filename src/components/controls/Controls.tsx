import { useEffect, useState } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { Vector3 } from "three";

interface MousePosition {
  x: number;
  y: number;
}

export const Controls = () => {
  const { camera, size } = useThree();

  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 400,
    y: 400
  });

  const updateMousePosition = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  useFrame(() => {
    camera.position.x = -0.2 - (mousePosition.x - size.width / 2) * 0.001;
    camera.position.y = 0.2 - (mousePosition.y - size.height / 2) * 0.001;
    camera.position.z =
      0.5 - 0.8 * Math.sin((mousePosition.x * 0.01 - camera.position.y) / 10);
    camera.lookAt(new Vector3(0, 0, 0));
  });

  return null;
};
