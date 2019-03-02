import React, { Component } from 'react';
import Mmg from '../images/thekroi.png';

import Disque from './disk';

class Card extends Component {
  state={
    toggle:true, etat:"none",
    modalVisibility: false,
    position: 0,
    nbr: 0
  }

  showModal = (i) => {
    this.setState({
      modalVisibility: true,
      nbr: i,
    })

  }

  hideModal = () => {
    this.setState({
      modalVisibility: false
    })
  }

  onDescript=()=>{
    if (this.state.toggle===true){
      this.setState({toggle:false,etat:"block"})
      console.log(this.state.toggle)
    }else {
      this.setState({toggle:true,etat:"none"})
    }  
  };

  render() {
      const {img, alt, name, editeur, artist, anios, description, soons, onClick} = this.props;
      const { modalVisibility } = this.state; 
    
    return (
        <div className="">
                {   modalVisibility ?

                    <div id="" className="App-modal" onClick={this.hideModal}>
                      <div id="creatorprofile" onClick={e => {
                        e.stopPropagation();
                      }  // Do something
                      }>
                        <img alt="" id="theKroi" onClick={this.hideModal} src={Mmg} />
                        <div id="creatorinfo">
                        <br/>
                          <Disque/>
                          <br/>
                          <p>               
                            <b>Maison(s) : {editeur}</b><br/>
                            <b>Artist : {artist}</b><br/>
                            <b>Anios : {anios}</b><br/>
                            <b>description :<br/> {description}</b><br/>
                          </p>
                        </div>
                      </div>
                    </div>
                    : null
                }

          <div className="footin">
              <div className="profiL">
                <img className="profiLIMG" src={img} alt={alt} onClick={this.showModal} />
              </div>
              <div className="">
                <p>Title : {name}</p>
                <audio controls preload="auto" src={soons} id="" ></audio><br/><br/>
                <input type="button" className="" onClick={this.onDescript}  value="Description"/>
              </div>            
              <p style={{display:this.state.etat}}>
                  <b>Kroow(s) : {editeur}</b><br/>
                  <b>Artist : {artist}</b><br/>
                  <b>Anios : {anios}</b><br/>
                  <b>description :<br/> {description}</b><br/>
              </p>
          </div>
          <br/>
          <br/>

        </div>
    );
  }
}

export default Card;