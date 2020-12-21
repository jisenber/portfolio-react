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
                  <li>LWC</li><li>Lightning (Aura)</li><li></li>Visualforce<li>React</li><li>Redux</li><li>Angular</li><li>jQuery</li>
                </ul>
              </td>
              <td>
                <ul className="bioList">
                  <li>Apex</li><li>Node</li><li>AWS</li><li>MongoDB</li> <li>Express</li>
                </ul>
              </td>
              <td>
                <ul className="bioList">
                  <li>Jest</li><li>Apex (again)</li><li>Mocha</li> <li>Chai</li>
                </ul>
              </td>
              <td>
                <ul className="bioList">
                  <li>Salesforce</li><li>Git</li><li>AWS</li><li>JIRA</li><li>Workbench</li>
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
          <SectionBody years="January 2019 - Present" title="Software Development Engineer II" institute="Expedia Group" description="Currently working in an independent contributor role supporting Expedia Group’s largest Salesforce environment. My primary efforts include LWC and Aura development in Sales Cloud for desktop and mobile. I have built scalable integrations with Dropbox and AWS, both of which are used by thousands of users and have UI and sever-side components. I serve on a technical interview panel for software developer recruits and have formally mentored current and aspiring developers within our team. Given merit-based equity award in February 2020"/>
          <SectionBody years="November 2017 - January 2019" title="Software Developer II" institute="Bluewolf, an IBM Company" description="Worked in a consulting role developing custom Salesforce applications for several large companies. Extensive experience with Lightning and the Aura JavaScript framework as well as Apex and Visualforce. Work in an agile setting using variety of project management tools including but not limited to tools from Atlassian, IBM, and Google. Received promotion in July, 2018"/>
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
        <BioSection sectionTitle="Certifications">
          <SectionBody years="2017 - present" institute="Salesforce" title="Certificate" description="Platform Developer I"/>
          <SectionBody years="2019 - present" institute="Salesforce" title="Certificate" description="Platform Developer II"/>
          <SectionBody years="2020 - present" institute="Salesforce" title="Certificate" description="Sharing and Visibility Designer"/>
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
          <h5>e: jisenber25@gmail.com </h5>
        </div>
        <ProfileClicker/>
      </div>
    );
  }
}
