
import dynamic from "next/dynamic";
const Sketch = dynamic(() => import("react-p5").then(mod => mod.default), { ssr: false });

let altitude = 0;
let velocity = 0;
let acceleration = 0;
let errorSum = 0;
let lastError = 0;

export default function DroneSimulator({ kp, ki, kd }) {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(400, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(30);
    const target = 200;
    const error = target - altitude;
    errorSum += error;
    const dError = error - lastError;
    const output = kp * error + ki * errorSum + kd * dError;

    acceleration = output;
    velocity += acceleration;
    altitude += velocity;
    lastError = error;

    p5.fill(100, 200, 255);
    let y = p5.height - altitude;
    y = p5.constrain(y, 0, p5.height - 20);
    p5.rect(180, y, 40, 20);
  };

  return <Sketch setup={setup} draw={draw} />;
}
