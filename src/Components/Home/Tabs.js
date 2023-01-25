import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Tabs.css'

//import Sonnet from '../../components/Sonnet';

function TabLayout() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 justify-content-center tabText"
    >
      <Tab eventKey="home" title="Oro">
       {/* <Sonnet />*/}
      </Tab>
      <Tab eventKey="profile" title="Plata">
        {/* <Sonnet />*/}
      </Tab>
      <Tab eventKey="contact" title="Acero">
        {/* <Sonnet />*/}
      </Tab>
    </Tabs>
  );
}

export default TabLayout;