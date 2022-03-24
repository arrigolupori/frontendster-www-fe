import type { NextPage } from 'next'
import SEO from '@/components/head/SEO'
import Container from '@/components/layout/Container'
import AltHeader from '@/components/nav/AltHeader'
import Explainer from '@/components/body/Explainer'
import Footer from '@/components/nav/Footer'

const PrivacyPage: NextPage = () => {
	return (
		<>
			<SEO
				title='Privacy Policy from Frontendster'
				description="These is Frontendster's privacy policy. Please read them carefully to understand what data we collect from you as part of our service."
				route='https://www.frontendster.com/privacy'
				thumbnailUrl={`${process.env.NEXT_PUBLIC_FRONTEND_URL}/preview.jpg`}
				thumbnailAlt='frontendster your web application less than 8 weeks'
			/>
			<Container>
				<AltHeader />
				<Explainer explainerHeading='Privacy Policy'>
					<p className='leading-6'>
						As of April 2022, Frontendster (www.frontendster.com) does not
						collect any personal or business data from you without you being
						informed. All data collection is done through explicit forms, such
						as asking for a free consultation, for which we need information to
						provide a good service.
					</p>
					<h2 className='pt-4'>Does Frontendster use any analytics?</h2>
					<p className='leading-6'>
						Yes, but not Google Analytics or any highly-intrusive suites. We
						currently use Fathom Analytics (
						<a href='https://usefathom.com/' target='_blank' rel='noreferrer'>
							usefathom.com
						</a>
						). They provide a fully GDPR-compliant, cookieless solution.
						Therefore, we currently do not need to show any cookie banners,
						either in Europe or around the world.
					</p>
					<h2 className='pt-4'>
						Does Frontendster collect data without my consent?
					</h2>
					<p className='leading-6'>
						No, and we will never do it. The only time we ask for information is
						when we actually need it to provide a service, or for legal and
						regulatory purposes. Other than those few cases, you can rest
						assured that we do not collect data without first informing you.{' '}
					</p>
					<h2 className='pt-4'>
						Does Frontendster sell my data to third-parties?
					</h2>
					<p className='leading-6'>
						No, and we will never do it. Your data is extremely important to us.
						When you provide information based on your business needs, we
						implement a "walled garden" policy; your data is never shared
						outside of our internal servers. If we need to move your data to a
						third-party service to improve some of our capabilities, we will
						inform you. But we will never sell your data for profit.
					</p>
				</Explainer>
				<Footer />
			</Container>
		</>
	)
}

export default PrivacyPage
