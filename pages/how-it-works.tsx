import type { NextPage } from 'next'
import SEO from '@/components/head/SEO'
import Container from '@/components/layout/Container'
import Header from '@/components/nav/Header'
import Footer from '@/components/nav/Footer'

const HowItWorksPage: NextPage = () => {
	return (
		<>
			<SEO
				title='How Frontendster Works: 6 Simple Steps'
				description='Frontendster works based on 6 simple steps: consultation, technical discovery, wireframing, development, testing, and post-MVP support.'
				route='https://www.frontendster.com/how-it-works'
				thumbnailUrl={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/preview.jpg`}
				thumbnailAlt='frontendster your web application less than 8 weeks'
			/>
			<Container>
				<Header
					mainHeading='The 6 steps to your web app'
					subHeading='Building a web app is complex on its own. Why should hiring a developer be the same? Frontendster makes it simple.'
					ctaText='Get a free 45-min consultation'
					ctaSlug='/free-consultation'
				/>
			</Container>
			<Footer />
		</>
	)
}

export default HowItWorksPage
