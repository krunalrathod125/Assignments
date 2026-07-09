import { useState } from "react";

function Spotify() {
  const [votes, setVotes] = useState(0);

  return (
    <div>
    <h1 className="text-3xl mt-2">3. Spotify Song Vote</h1>
      <h2 className="text-2xl mt-5">🎵 Shape of You</h2>

      <button onClick={() => setVotes(votes + 1)} className="text-2xl">
        ⬆️
      </button>

      <h3 className="text-2xl">{votes}</h3>

      <button
        onClick={() => {
          if (votes > 0) {
            setVotes(votes - 1);
          }
        }}
      className="text-2xl">
        ⬇️
      </button>
    </div>
  );
}

export default Spotify;