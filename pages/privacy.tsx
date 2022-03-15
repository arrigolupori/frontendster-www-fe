import type { NextPage } from 'next'
import SEO from '@/components/head/SEO'
import Container from '@/components/layout/Container'
import AltHeader from '@/components/nav/AltHeader'
import Footer from '@/components/nav/Footer'

const Home: NextPage = () => {
	return (
		<>
			<SEO
				title='Privacy Policy from Frontendster'
				description="These is Frontendster's privacy policy. Please read them carefully to understand what data we collect from you as part of our service."
				route='https://www.frontendster.com/privacy'
				thumbnailUrl={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/preview.jpg`}
				thumbnailAlt='frontendster your web application less than 8 weeks'
			/>
			<Container>
				<AltHeader />
				<Footer />
			</Container>
		</>
	)
}

export default Home
