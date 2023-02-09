import Dropdown from 'react-bootstrap/Dropdown';

function DropdownSelector() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="transparent" id="dropdown-basic" className='dropdownBtn'>
        Seleccionar Talla
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">9</Dropdown.Item>
        <Dropdown.Item href="#/action-2">10</Dropdown.Item>
        <Dropdown.Item href="#/action-3">11</Dropdown.Item>
        <Dropdown.Item href="#/action-3">12</Dropdown.Item>
        <Dropdown.Item href="#/action-3">13</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownSelector;