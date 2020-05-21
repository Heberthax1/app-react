import React from "react";

export default class PlacarContainer extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <h1>Flamengo</h1>
                    <h2>0</h2>
                    <button>Gol!</button>
                </div>
                <div>
                    <div>Maracanã</div>
                    <div>
                        <span>01/06/2016</span>
                        <span> - </span>
                        <span>19:00h</span>
                    </div>
                </div>
                <div>
                    <h1>Vasco</h1>
                    <h2>0</h2>
                    <button>Gol!</button>
                </div>
            </div>
        )
    }
}