import styles from './footer.module.scss'
import Col from './Col'
import Container from './Container'
import Row from './Row'
import Logo from './Logo'

export default function Footer(){
    return <footer className={styles.footer}>
        <Container>
            <Row alignItems="center">
                <Col xs="6" sm="3">
                <Logo />
                </Col>
                <Col xs="6" sm="9">
                footer Nav
                </Col>
            </Row>
        </Container>
        </footer>
}