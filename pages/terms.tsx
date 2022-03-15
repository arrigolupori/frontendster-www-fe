import type { NextPage } from 'next'
import SEO from '@/components/head/SEO'
import Container from '@/components/layout/Container'
import AltHeader from '@/components/nav/AltHeader'
import Footer from '@/components/nav/Footer'
import Explainer from '@/components/body/Explainer'

const Home: NextPage = () => {
	return (
		<>
			<SEO
				title='Terms of Service from Frontendster'
				description="These are Frontendster's terms of service. Please read them carefully before using our online services as they are a binding agreement."
				route='https://www.frontendster.com/terms'
				thumbnailUrl={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/preview.jpg`}
				thumbnailAlt='frontendster your web application less than 8 weeks'
			/>
			<Container>
				<AltHeader />
				<Explainer explainerHeading='Terms of Service' explainerCopy='' />
				<Footer />
			</Container>
		</>
	)
}

export default Home
