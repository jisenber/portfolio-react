import React from 'react';
import createReactClass from 'create-react-class';

//make expand collapse function


var BioSection = createReactClass({

  getInitialState: function() {
    return {
      open: false
    };
  },

  accordion: function(e) {
    e.preventDefault();
    if(this.state.open === false) {
      this.setState({
        open: true
      });
    } else {
      this.setState ({
        open: false
      });
    }
  },

  render: function() {
    return (
      <div className="bioSectionWrapper">
        <div className="bioSectionTitle">
          <a onClick={this.accordion}><h3>{this.props.sectionTitle}</h3></a>
        </div>
        <div className="bioSectionBody" style={{display: this.state.open ? 'inline-block' : 'none' }}>
          <p> {this.props.description} </p>
        </div>
      </div>
    );
  }
});

var ProfileClicker = createReactClass({
  render: function() {
    return (
      <div className="bioTable">
        <BioSection sectionTitle="Technical Skills" description="lorem ipsum dolor"/>
        <BioSection sectionTitle="Work Experience" description="hoppity hop hop hop"/>
        <BioSection sectionTitle="Publications" description="sumthin"/>
        <BioSection sectionTitle="Awards/Recognitions" description="eggwhites"/>

      </div>
    );
  }
});

export var Bio = createReactClass ({
  render: function() {
    return (
      <div>
        <img src="https://i.imgur.com/T7wtxaV.png" className="bioImage"/>
        <div className="belowBioImage">
          <h3>Jacob Isenberg</h3>
          <h4>Software Developer</h4>
          <p className="bioSummary"><b>summary:</b> text text text </p>
        </div>
        <ProfileClicker/>
      </div>
    );
  }
});
