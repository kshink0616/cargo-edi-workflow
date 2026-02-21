import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/" style={{ marginLeft: -200 }}>Cargo EDI Workflow</Navbar.Brand>
                <Nav className="me-auto" style={{ marginLeft: 900 }}>
                    <Nav.Link className='ms-3' href="shipment">Shipment</Nav.Link>
                    <Nav.Link className='ms-4' href="messageHistory">Message Histroy</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar