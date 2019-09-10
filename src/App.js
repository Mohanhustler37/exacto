import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/layout/Navbar';
import Notes from './components/Notes';
import Cards from './components/Cards';
import User from './components/User';
import Summary from './components/Summary';
import Skills from './components/Skills';
const list = [
  {
    title: 'Skills',
    points: ['Financial Audits', 'Company Law', 'Cost Accounting', 'Strategic IT Management']
  },
  {
    title: 'Interests',
    points: ['Tax Advisor', 'Corporate Finance', 'Stratergic Planning', 'Account Reconciliation']
  }
];

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="row">
        <div className="col-md-5">
          <div className="left">
            <User />
            <Notes />
            <Cards
              title="Skills"
              category="Low"
              color="#F33400"
              description="Customizing financial strategies for our clients, we are dedicated to help them properly a locate Customizing financial strategies for our clients, we are dedicated to help them properly a locate Customizing financial strategies."
            />
            <Cards
              title="Company"
              category="Medium"
              color="#F69900"
              description="Customizing financial strategies for our clients, we are dedicated to help them properly a locate Customizing financial strategies for our clients."
            />
            <Cards
              title="Industry"
              category="High"
              color="#65CF6A"
              description="Customizing financial strategies for our clients, we are dedicated to help them properly."
            />
            <Cards
              title="Education"
              category="Medium"
              color="#F69900"
              description="Customizing financial strategies for our clients, we are dedicated to help them properly."
            />
          </div>
        </div>
        <div className="col-md-7">
          <div className="right">
            <Summary
              title="Summary"
              description="Technology Entrepreneur with 13+ experience.Founded Zhopout - a smart app & website to discover local brands and deals with location based notification. As a product owner and CTO of Zhopout figured out the requirements, implemented the same with just the tech. team of 3, got the feedback from the users and re-implemented the important features, managed both on-field and offline marketing and sales team of 5. As one of the frequent learner of technology in the team, for the past four years learned/learning the following."
            />

            <Skills
              title={list[0].title}
              points={list[0].points}
            />
            <Summary
              title="Recommendations"
              description="Jose Reid is a kind of Data Scientist who brings multiple skills to the table which includes technical as well as entrepreneurial. His ability to think through the problems in depth and quick turnaround when solving a problem makes him a huge asset to the organization. His mentorship skills are exemplary. Would like to see more innovative ideas of his taking shape very soon Good luck."
            />
            <Skills
              title={list[1].title}
              points={list[1].points}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
