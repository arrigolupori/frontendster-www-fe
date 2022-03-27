import type { NextPage } from 'next'
import SEO from '@/components/head/SEO'
import Container from '@/components/layout/Container'
import Header from '@/components/nav/Header'
import Explainer from '@/components/body/Explainer'
import ThreeCards from '@/components/body/ThreeCards'
import TwoCards from '@/components/body/TwoCards'
import BottomCTA from '@/components/body/BottomCTA'
import FAQ from '@/components/body/FAQ'
import Footer from '@/components/nav/Footer'
import { faqs } from '@/data/faqs'

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
				<section className='px-6 mx-auto sm:max-w-xl sm:px-0'>
					<Explainer explainerHeading=''>
						<h2 className='mb-2'>Get a functional web app in under 8 weeks</h2>
						<p className='mb-2 sm:text-lg'>
							Contrary to popular belief, building a modern web application
							doesn&apos;t <em>have</em> to be complex.
						</p>
						<p className='mb-2 sm:text-lg'>
							Over the years, developer tools have evolved to allow for more
							streamlined development and lower costs.
						</p>
						<p className='mb-2 sm:text-lg'>
							Frontendster leverages these tools to speed up development while
							delivering a great product.
						</p>
						<p className='mb-2 sm:text-lg'>
							Here are the <strong>6 steps to your web app</strong>:
						</p>
						<ol className='sm:text-lg'>
							<li className='sm:text-lg'>
								Start with a <strong>free consultation</strong>
							</li>
							<li className='sm:text-lg'>
								<strong>Get a quote</strong> and full project breakdown
							</li>
							<li className='sm:text-lg'>
								<strong>Visualize your app</strong> with a wireframe and mockup
							</li>
							<li className='sm:text-lg'>
								Approved? The <strong>3 cycles of development</strong> start!
							</li>
							<li className='sm:text-lg'>
								The <strong>app is thoroughly tested</strong> before launch
							</li>
							<li className='sm:text-lg'>
								<strong>Launch the application</strong> and get support
							</li>
						</ol>
						<p className='mb-2 sm:text-lg'>
							Let&apos;s look at each of the steps in detail to better
							understand the value of Frontendster.
						</p>
					</Explainer>
				</section>
				<section className='pt-8 mx-auto sm:max-w-xl'>
					<Explainer
						explainerHeading='Step #1: Your free consultation'
						background={false}
					>
						<p className='-mt-10 mb-2 sm:text-lg'>
							Frontendster is a cost-effective web development service that
							allows you to get a fully-functional web application in less than
							8 weeks.
						</p>
					</Explainer>

					<Explainer
						explainerHeading='Step #2: Full project breakdown'
						background={false}
					>
						<p className='-mt-10 mb-2 sm:text-lg'>
							Frontendster is a cost-effective web development service that
							allows you to get a fully-functional web application in less than
							8 weeks.
						</p>
					</Explainer>

					<Explainer
						explainerHeading='Step #3: Wireframes &amp; mockups'
						background={false}
					>
						<p className='-mt-10 mb-2 sm:text-lg'>
							Frontendster is a cost-effective web development service that
							allows you to get a fully-functional web application in less than
							8 weeks.
						</p>
					</Explainer>

					<Explainer
						explainerHeading='Step #4: Developing your app'
						background={false}
					>
						<p className='-mt-10 mb-2 sm:text-lg'>
							Frontendster is a cost-effective web development service that
							allows you to get a fully-functional web application in less than
							8 weeks.
						</p>
					</Explainer>

					<Explainer
						explainerHeading='Step #5: Final revisions &amp; testing'
						background={false}
					>
						<p className='-mt-10 mb-2 sm:text-lg'>
							Frontendster is a cost-effective web development service that
							allows you to get a fully-functional web application in less than
							8 weeks.
						</p>
					</Explainer>

					<Explainer
						explainerHeading='Step #6: Launching your MVP'
						background={false}
					>
						<p className='-mt-10 mb-2 sm:text-lg'>
							Frontendster is a cost-effective web development service that
							allows you to get a fully-functional web application in less than
							8 weeks.
						</p>
					</Explainer>
				</section>
				<section className='px-12'>
					<BottomCTA
						mainHeading='Take the first step today'
						subHeading='Book a friendly live chat with Arrigo and learn if Frontendster is right for your business. No strings attached, you decide.'
						ctaText='Get a free 45-min consultation'
						ctaSlug='/free-consultation'
					/>
				</section>
				<section className='px-10'>
					<FAQ data={faqs} />
				</section>
			</Container>
			<Footer />
		</>
	)
}

export default HowItWorksPage
