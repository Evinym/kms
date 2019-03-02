import React, { Component } from 'react';
import Card from "./Card";
import dataSoon from "./dataSoons";

class Palette extends Component {
  render() {
      return (
          <div className="allPark">
              <h1 className="">Palèt Misikal</h1>
              <br/><br/><br/>
              <div className="allPark">
                {dataSoon.map((el,i)=>{
                  return(
                    <Card key={i}                                        
                    img={el.img}
                    alt={el.name}
                    name={el.name}
                    soons={el.soons}
                    editeur={el.editeur}
                    artist={el.artist}
                    anios={el.anios}
                    description={el.description}
                    onClick={() => this.showModal(i)} />
                    )
                  })}
              </div>
          </div>
      );
    }
  }
export default Palette;