import React, {Component} from 'react';

class BioSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.accordion = this.accordion.bind(this);

  }

  accordion(e) {
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
  }

  render() {
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
}

export class SkillsTable extends Component {
  render() {
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
                  <li>Apex</li><li>JavaScript</li><li>HTML</li><li>CSS</li><li>Bash</li>
                </ul>
              </td>
              <td>
                <ul className="bioList">
                  <li>Lightning (Aura)</li><li></li>Visualforce<li>React</li><li>Redux</li><li>Angular</li><li>jQuery</li>
                </ul>
              </td>
              <td>
                <ul className="bioList">
                  <li>Apex</li><li>Node</li> <li>MongoDB</li> <li>Express</li>
                </ul>
              </td>
              <td>
                <ul className="bioList">
                  <li>REST</li> <li>MVC</li> <li>Responsive</li> <li>CI/CD</li>
                </ul>
              </td>
              <td>
                <ul className="bioList">
                  <li>Apex (again)</li><li>Mocha</li> <li>Chai</li>
                </ul>
              </td>
              <td>
                <ul className="bioList">
                  <li>Salesforce</li><li>Git</li><li>Workbench</li><li>JIRA</li><li>Webpack</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

class SectionBody extends Component {
  render () {
    return(
      <div className = "bioSectionBody">
        <ul className="bioList">
          <li><b>{this.props.title}</b> | <b>{this.props.institute}</b> | <b>{this.props.years}</b></li>
          <li className="smallerFont">{this.props.description}</li>
        </ul>
      </div>
    );
  }
}


class ProfileClicker extends Component {
  render () {
    return (
      <div className="bioTable">
        <BioSection sectionTitle="Technical Skills">
          <SkillsTable/>
        </BioSection>
        <BioSection sectionTitle="Work Experience">
          <SectionBody years="November 2017 - Present" title="Software Developer II" institute="Bluewolf, an IBM Company" description="Currently work in a consulting role developing custom Salesforce applications for several large companies. Extensive experience with Lightning and the Aura JavaScript framework as well as Apex and Visualforce. Work in an agile setting using variety of project management tools including but not limited to tools from Atlassian, IBM, and Google. Received promotion in July, 2018"/>
          <SectionBody years="July 2017 - September 2017" title="Front End Web Developer (Contract)" institute="themeatempire.com" description="Implemented page-speed optimizations and UI customizations to beef jerky marketplace website. Customizations implemented primarily through jQuery in the Squarespace local development sever"/>
          <SectionBody years="January 2015 - August 2017" title="Project Coordinator" institute="Fred Hutchinson Cancer Research Center" description="Worked with a range of stakeholders to streamline and modernize the clinical trial implementation process for Fred Hutch’s Gene Therapy Program.  Led the organization of the Conference on Cell & Gene Therapy for HIV Cure and managed the content on the websites of Drs. Hans-Peter Kiem and Jennifer Adair. Created figures and graphics with Adobe Photoshop for utilization on posters, in oral presentations, and for publication in scientific manuscripts. Received promotion in March, 2016"/>
          <SectionBody years="December 2013 - January 2015" title="Staff Assistant" institute="United States House of Representatives" description="Managed constituent casework for Congressman Jim McDermott and acted as a liaison between constituents and federal agencies. Recruited and supervised interns and wrote letters and speeches for the Congressman. Represented and spoke on behalf of Congressman at various events."/>
        </BioSection>
        <BioSection sectionTitle="Education">
          <SectionBody years="2017 - present" institute="Salesforce" title="Certificate" description="Platform Developer I"/>
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
}


export class Bio extends Component {
  render() {
    return (
      <div>
        <img src="https://i.imgur.com/T7wtxaV.png" className="bioImage" alt=""/>
        <div className="belowBioImage">
          <h3>Jacob Isenberg</h3>
          <h4>Software Developer</h4>
          <h5>p: (206) 909 2235 </h5>
          <h5>e: jisenber25@gmail.com </h5>
        </div>
        <ProfileClicker/>
      </div>
    );
  }
}
