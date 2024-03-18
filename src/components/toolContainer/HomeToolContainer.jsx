import React from 'react';
import ToolContainer from './ToolContainer'; 
import CustomCard from '../home/CustomCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AemIdGenIndex from '../aem-id-gen/AemIdGenIndex';
import AemIDAssistantIndex from '../aem-id-assistant/aemIDAssistantIndex';

function HomeToolContainer() { 
  const tabs = [
    {
      eventKey: 'home',
      title: 'Home',
      content: (
        <>
         
            <p>Using the power of React.js I am using this technology to rebuild the existing tools created taking advantage of modular and dynamic libraries. This will future proof the forms making worktime light when IDs are restructured. <br /><br />Select the tabs at the top to dynamically switch bewtween tabs.</p>
            <Row >
              <Col>
                <CustomCard
                  header="What's New?"
                  title="New React Components"
                  text="Using Reacts Library and Bootstrap powerful CSS framework creating reuseable components."
                />
              </Col>
              <Col>
                <CustomCard 
                  header="Placeholder Inserted"
                  title="Top Nav"
                  text="Navigations Links will be populated later in development."
                  bg="success"
                />
              </Col>
              <Col>
                <CustomCard 
                  header="Placeholder Container"
                  title="Dynamic Tabs"
                  text="The Tools will appear when selecting the dynamic tabs."
                  bg="dark"
                />
              </Col>
            </Row>
   
          
        </>
      ),
    },
    {
      eventKey: 'aemIdAssistant',
      title: 'AEM ID Assistant',
      content: <AemIDAssistantIndex />,
    },
    {
      eventKey: 'aemIdGenerator',
      title: 'AEM ID Generator',
      content: <AemIdGenIndex />,
    }
  ];

  return <ToolContainer tabs={tabs} />; // Removed the theme prop
}

export default HomeToolContainer;
