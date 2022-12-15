import React from 'react';
import GameSchedule from '../../assets/gameschedule.png';
import './Fixture.css';

function Fixture() {
    return (
        <>
            <div className="fixture">
                <h1>GAMES</h1>
                <img src={ GameSchedule } alt="fixture" id="fixture" />
            </div>
        </>
    );
  }

export default Fixture;
