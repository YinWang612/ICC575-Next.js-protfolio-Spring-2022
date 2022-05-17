import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Paragraph from '../../components/Paragraph'

const ProjectTwoPage = () => {
    return <Layout>
        <Container>
            <Image
                src="/images/02.jpg"
                alt="Rocky coast landscape"
                width={1500}
                height={1000}
                Layout="rasponsive"
            />
        <Heading level = "1">project 2 Title</Heading>
        <Paragraph>This is a desciption about my project</Paragraph>
        </Container>
    </Layout>
}
export default ProjectTwoPage;