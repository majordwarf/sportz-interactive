import "./player.css";

export default function Player({ data }) {
  return (
    <div className="player-card">
      <img src={`/player-images/${data.Id}.jpg`} alt={data.PFName} />
      <p className="player-name">{data.PFName}</p>
      <p className="player-skill">{data.SkillDesc}</p>
      <p className="player-value">
        <span className="dollar-green">$</span> {data.Value}
      </p>
      <p className="upcoming-match">
        Upcoming Match:
        <span className="me">{data.UpComingMatchesList[0].CCode}</span> vs{" "}
        <span className="you">{data.UpComingMatchesList[0].VsCCode}</span>
      </p>
      <p className="upcoming-time">
        Upcoming Match Time: {data.UpComingMatchesList[0].MDate}
      </p>
    </div>
  );
}
