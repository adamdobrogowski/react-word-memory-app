import Stats from "../Stats.jsx";
import Countdown from "../Countdown.jsx";
import History from "../History.jsx";

export default function Dashboard() {
  return (
    <section id="dashboard">
      <Stats />
      <Countdown />
      <History />
    </section>
  );
}
