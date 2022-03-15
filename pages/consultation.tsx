import type { NextPage } from 'next'
import SEO from '@/components/head/SEO'
import Container from '@/components/layout/Container'
import AltHeader from '@/components/nav/AltHeader'
import Footer from '@/components/nav/Footer'

const ConsultationPage: NextPage = () => {
	return (
		<>
			<SEO
				title='Get a Free 45-Min Consultation with Frontendster'
				description='Thank you for your interest in Frontendster. Pick a time with Arrigo to discuss your web application and see if Frontendster is the right fit.'
				route='https://www.frontendster.com/consultation'
				thumbnailUrl={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/preview.jpg`}
				thumbnailAlt='frontendster your web application less than 8 weeks'
			/>
			<Container>
				<AltHeader />
				<article className='max-w-2xl mx-auto'>
					<section className='transform -skew-x-6 px-4'>
						<h1 className='z-10 pt-8 text-2xl text-center text-main font-semibold'>
							Your free 45-minute consultation
						</h1>
						<p className='text-center pt-2 text-xl font-thin'>
							You are just one step away from scheduling your free consultation
							with Frontendster. Submit the form below and pick a time.
						</p>
					</section>
					<section className='-mt-16'>
						<script src='https://static.airtable.com/js/embed/embed_snippet_v1.js'></script>
						<iframe
							className='z-0 airtable-embed airtable-dynamic-height'
							src='https://airtable.com/embed/shrw5zdLHSMonhxu1?backgroundColor=cyan'
							width='100%'
							height='559'
						></iframe>
					</section>
				</article>
				<Footer />
			</Container>
		</>
	)
}

export default ConsultationPage
