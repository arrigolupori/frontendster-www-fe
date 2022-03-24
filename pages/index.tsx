import type { NextPage } from 'next'
import SEO from '@/components/head/SEO'
import Container from '@/components/layout/Container'
import Header from '@/components/nav/Header'
import { useRef } from 'react'
import { Video, CloudinaryContext } from 'cloudinary-react'
import Explainer from '@/components/body/Explainer'
import Benefits from '@/components/body/Benefits'
import Footer from '@/components/nav/Footer'

import {
	ClockIcon,
	OfficeBuildingIcon,
	DesktopComputerIcon,
	CreditCardIcon,
	CloudDownloadIcon,
	ThumbUpIcon,
} from '@heroicons/react/outline'

const benefitsOne = [
	{
		name: 'Ready in < 8 weeks',
		description:
			'Frontendster strives to deliver your Minimum Viable Product within 8 weeks from project start.',
		icon: ClockIcon,
	},
	{
		name: 'Made for small firms',
		description:
			'The service is catered specifically to the needs of small service firms or entrepreneurs.',
		icon: OfficeBuildingIcon,
	},
	{
		name: 'No hassle hiring devs',
		description:
			'Get all you need in one place. No jumping around from one platform to another.',
		icon: DesktopComputerIcon,
	},
]

const benefitsTwo = [
	{
		name: 'Know the cost upfront',
		description:
			'Get a detailed quote of all the costs right after your first consultation. Zero hidden fees.',
		icon: CreditCardIcon,
	},
	{
		name: 'Own the entire app',
		description:
			'Hire Frontendster with the comfort of knowing that all infrastructure will be owned by you.',
		icon: CloudDownloadIcon,
	},
	{
		name: 'Designed to be low risk',
		description:
			'Deferred payments and bi-weekly delivery make Frontendster a low-risk, high-value investment.',
		icon: ThumbUpIcon,
	},
]

const Home: NextPage = () => {
	const videoRef = useRef()
	return (
		<>
			<SEO
				title='Frontendster: Your Web Application in Less Than 8 Weeks'
				description='Frontendster is a web development service that helps you launch your own web application in less than 8 weeks. And you own the entire thing.'
				route='https://www.frontendster.com'
				thumbnailUrl={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/preview.jpg`}
				thumbnailAlt='frontendster your web application less than 8 weeks'
			/>
			<Container>
				<Header
					mainHeading='Your web app in 8 weeks'
					subHeading='Frontendster is the all-in-one frontend development service that helps you launch your own web app in less than 8 weeks.'
					ctaText='See how it works'
					ctaSlug='/how-it-works'
				/>
				<section className=' -top-12 -mb-20 px-10 max-w-2xl mx-auto text-center relative sm:-top-20 sm:px-4'>
					<CloudinaryContext cloud_name='arrigolupori'>
						<div className='border-8 border-white rounded-md'>
							<Video
								publicId='https://res.cloudinary.com/arrigolupori/video/upload/v1648122864/Frontendster_-_Thank_you_bh3pix.mp4'
								width='100%'
								controls
								autoPlay
								muted
								innerRef={videoRef}
							/>
						</div>
					</CloudinaryContext>
				</section>
				<section className='mx-auto sm:max-w-xl'>
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
							also own 100% of your application!{' '}
							<mark>No middlemen required.</mark>
						</p>
					</Explainer>
				</section>
				<Benefits benefits={benefitsOne} />
				<Benefits benefits={benefitsTwo} />
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
							also own 100% of your application! No middlemen required.
						</p>
					</Explainer>
				</section>
				<Footer />
			</Container>
		</>
	)
}

export default Home
