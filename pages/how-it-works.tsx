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
import { topics } from '@/data/topics'
import { sections } from '@/data/sections'
import { uxcards } from '@/data/uxcards'
import { devcards } from '@/data/devcards'

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
							Here are the 6 steps to your web app:
						</p>
						<ol className='sm:text-lg'>
							<li className='sm:text-lg'>
								Start with a <a href='#consultation'>free consultation</a>
							</li>
							<li className='sm:text-lg'>
								<a href='#quote'>Get a quote</a> and full project breakdown
							</li>
							<li className='sm:text-lg'>
								<a href='#wireframing'>Visualize your app</a> with a wireframe
								and mockup
							</li>
							<li className='sm:text-lg'>
								Approved? The <a href='#development'>3 cycles of development</a>{' '}
								start!
							</li>
							<li className='sm:text-lg'>
								The <a href='#testing'>app is thoroughly tested</a> before
								launch
							</li>
							<li className='sm:text-lg'>
								<a href='#launch'>Launch the application</a> and get support
							</li>
						</ol>
						<p className='mb-0 sm:text-lg'>
							Let&apos;s look at each of the steps in detail to better
							understand the value of Frontendster.
						</p>
					</Explainer>
				</section>
				<section id='consultation' className='pt-8 mx-auto sm:max-w-xl'>
					<Explainer
						explainerHeading='1. Your free consultation'
						background={false}
					>
						<p className='-mt-10 mb-2 sm:text-lg'>
							Every web development project has its own set of requirements, and
							yours will likely be no different.
						</p>
						<p className='mb-2 sm:text-lg'>
							That&apos;s why Frontendster offers a{' '}
							<mark>free consultation</mark> for you to get started without
							taking a full plunge.
						</p>
						<p className='mb-2 sm:text-lg'>
							During our 45-minute session, we&apos;ll go through 4 major areas
							relevant to building a great web app:
						</p>
					</Explainer>
				</section>
				<section className='px-12'>
					<TwoCards data={topics} />
				</section>

				<section className='-mt-4 mx-auto sm:max-w-xl'>
					<Explainer explainerHeading='' background={false}>
						<p className='mb-2 sm:text-lg'>
							Going through these 4 areas, Frontendster will be able to generate
							a full project breakdown for you, so that you can consider whether
							to invest or not.
						</p>
					</Explainer>
				</section>
				<section id='quote' className='mx-auto sm:max-w-xl'>
					<Explainer
						explainerHeading='2. Full project breakdown'
						background={false}
					>
						<p className='-mt-10 mb-2 sm:text-lg'>
							If you choose to move ahead to step 2, Frontendster will charge
							you $250 for a <mark>full project breakdown</mark>.
						</p>
						<p className='mb-2 sm:text-lg'>
							This is a 6-part document which includes all the information you
							need to make an informed decision:
						</p>
					</Explainer>
				</section>
				<section className='px-12'>
					<ThreeCards data={sections} />
				</section>
				<section className='-mt-4 mx-auto sm:max-w-xl'>
					<Explainer explainerHeading='' background={false}>
						<p className='mb-2 sm:text-lg'>
							With the project breakdown in hand, you can choose whether or not
							Frontendster is right for you.
						</p>
						<p className='mb-2 sm:text-lg'>
							If you choose to move ahead, you will be sent a contract with the
							agreed terms to sign.
						</p>
						<p className='mb-2 sm:text-lg'>
							<mark>You won&apos;t have to pay the entire app upfront</mark>.
							Each step is individually billed to reduce your risk.
						</p>
					</Explainer>
				</section>
				<section id='wireframing' className='mx-auto sm:max-w-xl'>
					<Explainer
						explainerHeading='3. Wireframes &amp; mockups'
						background={false}
					>
						<p className='-mt-10 mb-0 sm:text-lg'>
							Step 3 is where the project officially starts. There are two
							components required before development:
						</p>
					</Explainer>
				</section>
				<section className='px-12'>
					<TwoCards data={uxcards} />
				</section>

				<section className='mx-auto sm:max-w-xl'>
					<Explainer explainerHeading='' background={false}>
						<p className='-mt-4 mb-2 sm:text-lg'>
							Frontendster first goes through the jobs to be done and creates a{' '}
							<mark>wireframe of your app</mark> against them.
						</p>
						<p className='mb-2 sm:text-lg'>
							Once approved, the app is then brought to life with all individual
							design elements through a mockup.
						</p>
						<p className='mb-2 sm:text-lg'>
							Depending on the size of your app, these will cost between $1,000
							to $2,000 to produce (combined).
						</p>
					</Explainer>
				</section>
				<section id='development' className='mx-auto sm:max-w-xl'>
					<Explainer
						explainerHeading='4. Developing your app'
						background={false}
					>
						<p className='-mt-10 mb-2 sm:text-lg'>
							Finally, we get to the more time-intensive step:{' '}
							<mark>development</mark>. Frontendster aims to deliver a &ldquo;Minimum
							Viable Product&rdquo; within 8 weeks.
						</p>
						<p className='mb-2 sm:text-lg'>
							To achieve this, the development is broken down in multiple
							&ldquo;sprints&rdquo;, which are focused timeslots dedicated exclusively to
							your web app.
						</p>
					</Explainer>
				</section>

				<section className='px-12'>
					<TwoCards data={devcards} />
				</section>
				<section className='mx-auto sm:max-w-xl'>
					<Explainer explainerHeading='' background={false}>
						<p className='-mt-4 mb-2 sm:text-lg'>
							Each sprint is designed to maximize productivity and deliver new
							functionality in just 2 weeks.
						</p>
						<p className='mb-2 sm:text-lg'>
							Standard sprints cost $3000. They are so effective that your web
							app might need as little as two of them.
						</p>
					</Explainer>
				</section>

				<section id='testing' className='mx-auto sm:max-w-xl'>
					<Explainer
						explainerHeading='5. Final revisions &amp; testing'
						background={false}
					>
						<p className='-mt-10 mb-2 sm:text-lg'>
							Before your app is launched, it needs to be{' '}
							<mark>tested across multiple browsers and devices</mark>.
						</p>
						<p className='mb-2 sm:text-lg'>
							This process takes around a week to be completed. It&apos;s also a
							good time to make small final changes.
						</p>
						<p className='mb-2 sm:text-lg'>
							Because of the shorter time span, this step is charged at half the
							cost of a standard sprint ($1,500).
						</p>
					</Explainer>
				</section>

				<section id='launch' className='mx-auto sm:max-w-xl'>
					<Explainer
						explainerHeading='6. Launching your MVP'
						background={false}
					>
						<p className='-mt-10 mb-2 sm:text-lg'>
							You&apos;ve done it! You&apos;ve officially reached the launch
							stage after 6 steps and can enjoy your new app.
						</p>
						<p className='mb-2 sm:text-lg'>
							At this point, you can decide whether to continue adding features
							to your app or <mark>get monthly support</mark>.
						</p>
						<p className='mb-2 sm:text-lg'>
							If you&apos;re happy with the result and don&apos;t need any
							additional help, the contract simply ends.
						</p>
					</Explainer>
				</section>
				<section className='-mt-10 mb-16 px-6 mx-auto sm:max-w-xl sm:px-0'>
					<Explainer explainerHeading=''>
						<p className='mb-0 sm:text-lg'>
							<strong>Note:</strong> Support is offered on a subscription basis
							starting at $100/mo. You can reach Frontendster at{' '}
							<a href='mailto:support@frontendster.com'>
								support@frontendster.com
							</a>{' '}
							if you want to learn more about how the support subscriptions
							work.
						</p>
					</Explainer>
				</section>
				<section className='pb-10 mx-auto sm:max-w-xl'>
					<Explainer
						explainerHeading='Ok, so how much is the web app going to cost you?'
						background={false}
					>
						<p className='-mt-10 mb-2 sm:text-lg'>Good question.</p>
						<p className='mb-2 sm:text-lg'>
							Frontendster doesn&apos;t try to hide any fees.
						</p>
						<p className='mb-2 sm:text-lg'>
							Depending on how many sprints your app&apos;s development will
							require, the cost can vary from a minimum of $9,000 to a maximum
							of $21,000.
						</p>
						<p className='mb-2 sm:text-lg'>
							In 80%+ of cases, the cost of your MVP will average out at{' '}
							<mark>around $12,000 to $15,000</mark>.
						</p>
						<p className='mb-2 sm:text-lg'>
							Each cost will be clarified in detail during the project breakdown
							step. There will be no surprise fees.
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
