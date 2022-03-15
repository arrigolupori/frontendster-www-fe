import type { NextPage } from 'next'
import SEO from '@/components/head/SEO'
import Container from '@/components/layout/Container'
import Header from '@/components/nav/Header'

const Home: NextPage = () => {
	return (
		<>
			<SEO
				title='Frontendster: Your Web Application in Less Than 8 Weeks'
				description='Frontendster is a web development service that helps you launch your own web application in less than 8 weeks. And you own the entire thing.'
				route='https://www.frontendster.com'
				thumbnailUrl={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/preview.jpg`}
				thumbnailAlt='frontendster your web application less than 8 weeks'
			/>
			<Container>
				<Header />
			</Container>
		</>
	)
}

export default Home
