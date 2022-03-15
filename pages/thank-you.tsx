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
					<section className=' px-4 max-w-2xl mx-auto text-center'>
						<CloudinaryContext cloud_name='arrigolupori'>
							<div className='mt-8 border-8 border-main rounded-md'>
								<Video
									publicId='https://res.cloudinary.com/arrigolupori/video/upload/v1647363165/1_-_nextjs_setup_e0d8a4.mov'
									width='100%'
									controls
									innerRef={videoRef}
								/>
							</div>
						</CloudinaryContext>
						<div className='mt-8 mb-12'>
							<Explainer explainerHeading='What now?' explainerCopy='' />
						</div>
					</section>
				</article>
				<Footer />
			</Container>
		</>
	)
}

export default ThanksPage
