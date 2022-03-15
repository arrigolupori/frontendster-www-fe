import type { NextPage } from 'next'
import SEO from '@/components/head/SEO'
import Container from '@/components/layout/Container'
import AltHeader from '@/components/nav/AltHeader'
import { InlineWidget } from 'react-calendly'
import Footer from '@/components/nav/Footer'

const TimePage: NextPage = () => {
	return (
		<>
			<SEO
				title='Pick a Time for Your Consultation with Frontendster'
				description='Thank you for your interest in Frontendster. Pick a time with Arrigo to discuss your web application and see if Frontendster is the right fit.'
				route='https://www.frontendster.com/pick-a-time'
				thumbnailUrl={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/preview.jpg`}
				thumbnailAlt='frontendster your web application less than 8 weeks'
			/>
			<Container>
				<AltHeader />
				<div className='-mt-6 mb-12'>
					<InlineWidget url='https://calendly.com/frontendster/45-min-consultation?text_color=061009&primary_color=3aa25e' />
				</div>
				<Footer />
			</Container>
		</>
	)
}

export default TimePage
