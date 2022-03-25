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
				<article className='px-4'>
					<section className='transform px-4 max-w-2xl mx-auto'>
						<h1 className='z-10 pt-8 text-xl sm:text-3xl text-center text-main font-semibold'>
							Pick a time that suits you below
						</h1>
						<p className='text-center pt-2 pb-8 sm:pb-0 text-base sm:text-xl font-thin'>
							Frontendster is based in Europe. If you can&apos;t find a time
							that suits you, reach out at{' '}
							<a href='mailto:arrigo@frontendster.com'>
								arrigo@frontendster.com
							</a>{' '}
							to arrange a custom time.
						</p>
					</section>
					<section className='-mt-6 mb-12'>
						<InlineWidget url='https://calendly.com/frontendster/45-min-consultation?text_color=061009&primary_color=3aa25e' />
					</section>
				</article>
				<Footer />
			</Container>
		</>
	)
}

export default TimePage
