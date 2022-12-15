import React, { useState } from 'react';
// import { Link } from'react-router-dom';
import './Stats.css';
import data from '../../utils/stats.json';

const Stats = () => {    
    const [stats, setStats] = useState(data);

    return (
      <div className="stats">
        <h1>PLAYER STATS</h1>
        <table>
          <thead>
            <tr>
              <th>PLAYER</th>
              <th>PTS (LAST GAME)</th>
              <th>PTS (SEASON AV.)</th>
            </tr>
          </thead>
          <tbody>
            {stats.map((stats) => (
            <tr>
              <td>{stats.player}</td>
              <td>{stats.points}</td>
              <td>{stats.pointsAverage}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>

  );
};

export default Stats;