import SingleLogo from './logo/SingleLogo'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
	return (
		<nav className='mt-6 pb-8 text-center'>
			<SingleLogo />
			<p className='mt-2 mb-6 text-sm'>
				<span>
					<Link href='/terms'>
						<a>Terms</a>
					</Link>{' '}
					|{' '}
					<Link href='/privacy'>
						<a>Privacy</a>
					</Link>
				</span>
			</p>
			<a
				href='https://www.designrush.com/agency/user-experience-design'
				target='_blank'
				rel='noreferrer'
			>
				<Image
					src='/designrush.png'
					width='100'
					height='88'
					alt='designrush top ux companies'
				/>
			</a>
		</nav>
	)
}
