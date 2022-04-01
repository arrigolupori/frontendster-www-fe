import type { NextPage } from 'next'
import Script from 'next/script'
import SEO from '@/components/head/SEO'
import Container from '@/components/layout/Container'
import AltHeader from '@/components/nav/AltHeader'
import Footer from '@/components/nav/Footer'

const ConsultationPage: NextPage = () => {
	return (
		<>
			<SEO
				title='Get a Free 45-Min Consultation with Frontendster'
				description="You're one step away from booking your 45-minute consultation with Frontendster. Fill out this short form and get your own web app built!"
				route='https://www.frontendster.com/consultation'
				thumbnailUrl={`https://www.frontendster.com/preview.jpg`}
				thumbnailAlt='frontendster your web application less than 8 weeks'
			/>
			<Container>
				<AltHeader />
				<article className='max-w-2xl mx-auto px-4'>
					<section className='transform px-4'>
						<h1 className='z-10 pt-8 text-xl sm:text-3xl text-center text-main font-semibold'>
							Your free 45-minute consultation
						</h1>
						<p className='text-center pt-2 pb-8 sm:pb-0 text-base sm:text-xl font-thin'>
							You are just one step away from scheduling your free consultation
							with Frontendster. Submit the form below and pick a time.
						</p>
					</section>
					<section className='-mt-24 sm:-mt-16'>
						<Script src='https://static.airtable.com/js/embed/embed_snippet_v1.js' />
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
