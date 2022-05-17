import { useState } from 'react'
import ButtonUI from './ButtonUI.js'
import Col from './Col'
import Container from './Container'
import Row from './Row'
import Nav from './Nav'
import Logo from './Logo'
import NavOverlay from './NavOverlay'
import styles from './header.module.scss'



export default function Header(){
    const [isOverlayActive,setOverlayActive] = useState(false);

    return <header className={styles.header}>
        {isOverlayActive &&
             <NavOverlay closeHandler={() => {
                 setOverlayActive(false)
             }}/>
        }
        
        <Container>
            <Row alignItems="center">
                <Col xs="6" sm="3">
               <Logo />
                </Col>
                <Col xs="6" sm="9" textAlign="right">
                <Nav />
                <ButtonUI 
                    icon="menu"
                    clickHandler={()=>{
                        setOverlayActive(true)
                    }}
                />
                </Col>
            </Row>
        </Container>
        </header>
}
