import ProgressBar from "./ProgressBar.jsx";

export default function Stats() {
  const name = "Adam";
  const day = 16;

  return (
    <div className="stats">
      <div className="welcome-text">
        <h6>Welcome!</h6>
        <h4 className="text-large">{name}</h4>
      </div>

      <div className="stats-column">
        <div>
          <p>Streak 🔥</p>
          <h4>{day - 1}</h4>
        </div>
      </div>

      <div className="stats-column">
        <div>
          <p>Words seen</p>
          <h4>{101}</h4>
        </div>
      </div>

      <div className="stats-column">
        <div>
          <p>Accuracy</p>
          <h4>{(93.3).toFixed(2)} %</h4>
        </div>
      </div>
      <ProgressBar />
    </div>
  );
}
