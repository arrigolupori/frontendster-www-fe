import type { NextPage } from 'next'
import Link from 'next/link'
import { useRef } from 'react'
import { Video, CloudinaryContext } from 'cloudinary-react'
import Explainer from '@/components/body/Explainer'
import SEO from '@/components/head/SEO'
import Container from '@/components/layout/Container'
import AltHeader from '@/components/nav/AltHeader'
import Footer from '@/components/nav/Footer'

const ThanksPage: NextPage = () => {
	const videoRef = useRef()
	return (
		<>
			<SEO
				title='Thank You!'
				description="You have successfully booked a 45-minute consultation with Frontendster. Exciting times! Here's a quick message from Arrigo..."
				route='https://www.frontendster.com/thank-you'
				thumbnailUrl={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/preview.jpg`}
				thumbnailAlt='frontendster your web application less than 8 weeks'
			/>
			<Container>
				<AltHeader />
				<article>
					<section className='transform -skew-x-6 px-4 max-w-2xl mx-auto'>
						<h1 className='z-10 pt-8 text-xl sm:text-3xl text-center text-main font-semibold'>
							Great, we&apos;re all ready!
						</h1>
						<p className='text-center pt-2 pb-8 sm:pb-0 text-base sm:text-xl font-thin'>
							You have successfully booked a 45-minute consultation with
							Frontendster to build your web app. Exciting times ahead!
						</p>
						<p className='text-center pt-2 pb-8 sm:pb-0 text-base sm:text-xl font-thin'>
							Here&apos;s a quick message from Arrigo:
						</p>
					</section>
					<section className='px-4 max-w-2xl mx-auto text-center'>
						<CloudinaryContext cloud_name='arrigolupori'>
							<div className='mt-8 border-8 border-main rounded-md'>
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
						<div className='mt-8 mb-12'>
							<Explainer explainerHeading='What now?'>
								<p className='text-left leading-6'>
									I&apos;m going to reach out directly to you with additional
									questions if something is missing. Don&apos;t worry, I&apos;ll
									be brief. Once I have all the information necessary,
									we&apos;ll have a live call together to discuss your overall
									business goals as well as what the app should do.{' '}
								</p>
								<p className='pt-2 text-left leading-6'>
									If you&apos;re interested in having a direct contact with me
									(other than via email), I&apos;m very active on Twitter. You
									can reach out at{' '}
									<a
										href='https://twitter.com/ArrigoLupori'
										target='_blank'
										rel='noreferrer'
									>
										@ArrigoLupori
									</a>
									, DMs are always open! You can also ask any follow up question
									using the email address provided during your booking session.
								</p>
								<p className='pt-2 text-left leading-6'>
									Excited to learn more about your project!
								</p>
							</Explainer>
							<p className='mt-8'>
								<Link href='/'>
									<a>« go back home</a>
								</Link>
							</p>
						</div>
					</section>
				</article>
				<Footer />
			</Container>
		</>
	)
}

export default ThanksPage
