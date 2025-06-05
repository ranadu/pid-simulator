
export default function PIDControls({ kp, ki, kd, setKp, setKi, setKd }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <div>
        <label>Kp: {kp.toFixed(2)}</label>
        <input type="range" min="0" max="1" step="0.01" value={kp} onChange={(e) => setKp(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Ki: {ki.toFixed(2)}</label>
        <input type="range" min="0" max="0.1" step="0.001" value={ki} onChange={(e) => setKi(parseFloat(e.target.value))} />
      </div>
      <div>
        <label>Kd: {kd.toFixed(2)}</label>
        <input type="range" min="0" max="1" step="0.01" value={kd} onChange={(e) => setKd(parseFloat(e.target.value))} />
      </div>
    </div>
  );
}
