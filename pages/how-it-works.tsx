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
import { benefits } from '@/data/benefits'
import { samples } from '@/data/samples'
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
						<h2 className='mb-2'>Hiring a developer is a chore...</h2>
						<p className='mb-2 sm:text-lg'>
							You want to modernize your business. And you <em>know</em> it
							takes a proper web application to do so.
						</p>
						<p className='mb-2 sm:text-lg'>
							But hiring a developer presents a ton of challenges which are hard
							to solve all at once:
						</p>
						<ul className='sm:text-lg'>
							<li className='sm:text-lg'>
								Developers are <em>expensive</em> because there is a shortage of
								them—raising the demand.
							</li>
							<li className='sm:text-lg'>
								With a strong technical background, developers often{' '}
								<em>lack the business skills</em> necessary to understand your
								needs.
							</li>
							<li className='sm:text-lg'>
								Because of this, you—as the business owner or manager—have a{' '}
								<em>hard time communicating</em> your overarching goals with
								developers.
							</li>
							<li className='sm:text-lg'>
								Instead of getting something usable within weeks,{' '}
								<em>the project ends up lasting months</em> and the delivered
								product is often unfinished.
							</li>
							<li className='sm:text-lg'>
								There&apos;s <em>lots of back-and-forth</em>, which could be
								minimized by setting the right expectations.
							</li>
						</ul>
						<p className='mb-2 sm:text-lg'>
							If this all sounds like the typical experience of hiring a
							developer to you, Frontendster is here to help.
						</p>
					</Explainer>
				</section>
				<section className='pt-8 mx-auto sm:max-w-xl'>
					<Explainer
						explainerHeading='What is Frontendster?'
						background={false}
					>
						<p className='-mt-10 mb-2 sm:text-lg'>
							Frontendster is a cost-effective web development service that
							allows you to get a fully-functional web application in less than
							8 weeks.
						</p>
						<p className='mb-2 sm:text-lg'>
							The service focuses on achieving a beautiful, functional UI
							powered by open-source managed backends such as Strapi and
							Supabase.
						</p>
						<p className='mb-2 sm:text-lg'>
							That way, you not only control the end-user experience, but you
							also own 100&percnt; of your application!{' '}
							<mark>No middlemen required.</mark>
						</p>
					</Explainer>
				</section>
				<section className='px-12'>
					<ThreeCards data={benefits} />
				</section>
				<section className='pt-8 mx-auto sm:max-w-xl'>
					<Explainer
						explainerHeading='Ok, but what can you build with Frontendster?'
						background={false}
					>
						<p className='-mt-10 mb-2 sm:text-lg'>
							Great question! Since Frontendster focuses on{' '}
							<mark>delivering great end-user experiences</mark>, you can build
							anything that is meant to augment your brand:
						</p>
					</Explainer>
				</section>
				<section className='px-12'>
					<TwoCards data={samples} />
				</section>
				<section className='py-8 mx-auto sm:max-w-xl'>
					<Explainer explainerHeading='' background={false}>
						<p className='-mt-10 mb-2 sm:text-lg'>
							Each application is built starting from your specific
							requirements, and with your end-users&apos; needs in mind.{' '}
							<mark>They are not templated nor duplicated.</mark>
						</p>
						<p className='mb-2 sm:text-lg'>
							To make our (and your) life easier, we use open-source managed
							backend services that allow us to focus exclusively on achieving a{' '}
							great UI.
						</p>
					</Explainer>
				</section>
				<section className='px-12'>
					<BottomCTA
						mainHeading='Take the first step today'
						subHeading='...'
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
