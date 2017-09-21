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
        <div className="bioSectionBody" style={{display: this.state.open ? 'block' : 'none'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

var SkillsTable = createReactClass({
  render: function() {
    return (
      <div className="tableWrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Languages</th>
              <th>Front End</th>
              <th>Back End</th>
              <th>Design</th>
              <th>Testing</th>
              <th>tools</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ul className="bioList">
                  <li>JavaScript</li><li>HTML</li><li>CSS</li><li>Bash</li><li>JSX</li>
                </ul>
              </td>
              <td>
                <ul className="bioList">
                  <li>React</li><li>Angular</li><li>jQuery</li>
                </ul>
              </td>
              <td>
                <ul className="bioList">
                  <li>Node</li> <li>MongoDB</li> <li>Express</li>
                </ul>
              </td>
              <td>
                <ul className="bioList">
                  <li>REST</li> <li>MVC</li> <li>Responsive</li> <li>CI/CD</li>
                </ul>
              </td>
              <td>
                <ul className="bioList">
                  <li>Mocha</li> <li>Chai</li> <li>Karma</li>
                </ul>
              </td>
              <td>
                <ul className="bioList">
                  <li>Git</li> <li>Webpack</li> <li>Babel</li> <li>Heroku</li><li>Gulp</li> <li>Superagent</li> <li>Bcrypt</li> <li>Passport</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

var SectionBody = createReactClass ({
  render: function() {
    return(
      <div className = "bioSectionBody">
        <ul className="bioList">
          <li><b>{this.props.title}</b> | <b>{this.props.institute}</b> | <b>{this.props.years}</b></li>
          <li className="smallerFont">{this.props.description}</li>
        </ul>
      </div>
    )
  }
})


var ProfileClicker = createReactClass({
  render: function() {
    return (
      <div className="bioTable">
        <BioSection sectionTitle="Technical Skills">
          <SkillsTable/>
        </BioSection>
        <BioSection sectionTitle="Work Experience">
          <SectionBody years="July 2017 - September 2017" title="Front End Web Developer (Contract)" institute="themeatempire.com" description="Implemented page-speed optimizations and UI customizations to beef jerky marketplace website that processes ~$4,000 in revenue/month. Customizations implemented primarily through jQuery in the Squarespace local development sever"/>
          <SectionBody years="January 2015 - August 2017" title="Project Coordinator" institute="Fred Hutchinson Cancer Research Center" description="Worked with a range of stakeholders to streamline and modernize the clinical trial implementation process for Fred Hutch’s Gene Therapy Program.  Led the organization of the Conference on Cell & Gene Therapy for HIV Cure and managed the content on the websites of Drs. Hans-Peter Kiem and Jennifer Adair. Created figures and graphics with Adobe Photoshop for utilization on posters, in oral presentations, and for publication in scientific manuscripts. Received promotion in March, 2016"/>
          <SectionBody years="December 2013 - January 2015" title="Staff Assistant" institute="United States House of Representatives" description="Managed constituent casework for Congressman Jim McDermott and acted as a liaison between constituents and federal agencies. Recruited and supervised interns and wrote letters and speeches for the Congressman. Represented and spoke on behalf of Congressman at various events."/>
        </BioSection>
        <BioSection sectionTitle="Education">
          <SectionBody years="2016 - 2017" institute="Code Fellows" title="Certificate" description="Advanced Software Development in Full Stack JavaScript (Nights & Weekends track)"/>
          <SectionBody years="2009 - 2013" institute="University of Washington" title="Bachelor of Science" description="Major: Environmental Science"/>
        </BioSection>
        <BioSection sectionTitle="Publications">
          <div className="bioSectionBody">
            <p className="bioParagraph"><b>Isenberg, JY.</b>, Quiñones, AR., Slatore, CG., Bryson, WC., Thielke, SM. <em>Trends in Cigarette Smoking and Cessation Among Medicare Managed Care Recipients.</em> Addictive Behaviors <u>58</u>, 155-160, 2016. <a href="https://ncbi.nlm.nih.gov/pubmed/26946446">https://ncbi.nlm.nih.gov/pubmed/26946446</a></p>
          </div>
        </BioSection>
        <BioSection sectionTitle="Awards/Recognitions">
          <SectionBody years="2017" institute="Code Fellows" title="Top Performer Honors" description="Recognized as a 'top performer' in the Code Fellows 401n3 class"/>
          <SectionBody years="2012 & 2013" institute="University of Washington School of Environmental and Forest Sciences" title="Academic Scholarship" description="Academic scholarship received twice as student in the UW Environmental Science program"/>
          <SectionBody years="2013" institute="University of Washington Jackson School of International Studies" title="2nd Prize - Germany in Europe op-ed competition" description="Placed 2nd in op-ed writing competition sponsored by UW and the Germany Emabassy to the United States"/>
          <SectionBody years="2012" institute="University of Washington Department of Communication" title="Jody Deering Nyquist Award for Excellence in Public Speaking" description="Awarded prize as a finalist in the annual public speaking contest sponsored by the UW Department of Communication"/>
        </BioSection>
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
        </div>
        <ProfileClicker/>
      </div>
    );
  }
});
