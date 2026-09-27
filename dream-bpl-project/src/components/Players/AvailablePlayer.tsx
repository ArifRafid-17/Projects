import React from 'react';
import PlayerCard from './PlayerCard';
import type {PlayerType} from "../types";

interface playersT {
    players: PlayerType[];
}

const AvailablePlayer = ({players}: playersT) => {

    // console.log(players, "Available Players")

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                players.map((player : PlayerType, ind: number) => {

                    const playerPerson = player;
                    return (
                      <PlayerCard player = {playerPerson} key ={ind}/>

                    )
                })
            }
        </div>
    );
};

export default AvailablePlayer;