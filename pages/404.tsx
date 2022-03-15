import type { NextPage } from 'next'
import Link from 'next/link'
import Container from '@/components/layout/Container'
import AltHeader from '@/components/nav/AltHeader'
import Footer from '@/components/nav/Footer'

const _404Page: NextPage = () => {
	return (
		<>
			<Container>
				<AltHeader />
				<article className='transform -skew-x-6 max-w-3xl mx-auto mt-12 mb-10 text-center'>
					<h1 className='text-3xl'>This page does not exist</h1>
					<p className='mt-4'>
						<Link href='/'>
							<a>« go back home</a>
						</Link>
					</p>
				</article>
				<Footer />
			</Container>
		</>
	)
}

export default _404Page
