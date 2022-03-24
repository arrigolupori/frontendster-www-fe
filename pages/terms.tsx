import Link from 'next/link'
import type { NextPage } from 'next'
import SEO from '@/components/head/SEO'
import Container from '@/components/layout/Container'
import AltHeader from '@/components/nav/AltHeader'
import Explainer from '@/components/body/Explainer'
import Footer from '@/components/nav/Footer'

const TermsPage: NextPage = () => {
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
				<Explainer explainerHeading='Terms of Service'>
					<p className='leading-6 pb-4'>
						<strong>Last updated:</strong> 24 Mar, 2022
					</p>
					<p className='leading-6'>
						Frontendster (www.frontendster.com) is an online service run by
						Arrigo Lupori (Lupori Arrigo, registered in Italy with VAT number
						IT06953190482) with the sole purpose of helping customers launch a
						custom web application from scratch. Currently, Frontendster only
						operates as a web development service; we do not offer marketing,
						customer support, or other business services.
					</p>
					<h2 className='pt-4'>General terms</h2>
					<p className='leading-6'>
						These terms determine your use of the Frontendster website, NOT the
						service itself. Each web application is built on a custom basis
						through a process of discovery and contracting.
					</p>
					<p className='pt-2 leading-6'>
						Frontendster.com (the "Site") is only meant to be used as a form of
						request for consultation and project discovery. It is also a place
						where you can browse useful content on how to design, develop, and
						launch a web application for your own startup—free of charge.
					</p>
					<h2 className='pt-4'>Consultation requests</h2>
					<p className='leading-6'>
						If you decide to submit your business information to request a free
						consultation (see{' '}
						<Link href='/privacy'>
							<a>our privacy policy</a>
						</Link>{' '}
						to learn more), you should note the following:
					</p>
					<ul>
						<li>
							Frontendster reserves the right to refuse offering consultation if
							the information provided is inconclusive, offensive, not relevant
							(i.e. asking for services we do not provide) or in any way not
							appropriate for the type of service that we offer.
						</li>
						<li>
							You may only request one free consultation during the lifetime of
							your relationship with Frontendster. Subsequent consultations will
							be offered at $100/hour, with pre-consultation questions and
							post-consultation reports.
						</li>
						<li>
							You may not ask for work based on commission (i.e. a % of future
							profits or revenues), future partnerships, cryptocurrencies, or
							any form of payment that isn't USD. We only offer services in USD
							and will never accept payments in other forms or currencies.
						</li>
						<li>
							Each web application is developed based on custom contracts. The
							average cost of a web app built by Frontendster is between $12,000
							and $18,000. We strive to keep it that way but please know that
							the more complex the requirements, the higher the cost.
						</li>
					</ul>
					<p className='leading-6'>
						These points are subject to change and/or expansion. We will inform
						existing customers of changes to our Terms of Service, as well as
						any change to our services that will affect them.{' '}
					</p>
					<p className='pt-2 leading-6'>
						If you're a recurring visitor, we invite you to check back regularly
						to understand the latest changes to our Terms of Service. We reserve
						full rights to change the terms at any time.
					</p>
				</Explainer>
				<Footer />
			</Container>
		</>
	)
}

export default TermsPage
