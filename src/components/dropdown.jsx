import { Dropdown, ButtonToolbar } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const App = () => (
  <ButtonToolbar>
    <Dropdown title="Filter by Region" activeKey="e-2">
      <Dropdown.Item eventKey="a">Item A</Dropdown.Item>
      <Dropdown.Item eventKey="b">Item B</Dropdown.Item>
      <Dropdown.Item eventKey="c">Item C</Dropdown.Item>
      <Dropdown.Item eventKey="d">Item D</Dropdown.Item>      
    </Dropdown>
  </ButtonToolbar>
);
