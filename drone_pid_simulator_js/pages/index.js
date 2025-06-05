
import Head from "next/head";
import { useState } from "react";
import DroneSimulator from "../components/DroneSimulator";
import PIDControls from "../components/PIDControls";

export default function Home() {
  const [kp, setKp] = useState(0.1);
  const [ki, setKi] = useState(0.01);
  const [kd, setKd] = useState(0.1);

  return (
    <>
      <Head>
        <title>Drone PID Simulator</title>
      </Head>
      <main style={{ background: "#121212", color: "white", minHeight: "100vh", padding: "2rem" }}>
        <h1>🚁 Drone PID Control</h1>
        <DroneSimulator kp={kp} ki={ki} kd={kd} />
        <PIDControls kp={kp} ki={ki} kd={kd} setKp={setKp} setKi={setKi} setKd={setKd} />
      </main>
    </>
  );
}
