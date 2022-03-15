import SingleLogo from './logo/SingleLogo'
import Link from 'next/link'

export default function Footer() {
	return (
		<nav className='mt-6 transform -skew-x-6 text-center'>
			<SingleLogo />
			<p className='mt-2 text-sm'>
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
		</nav>
	)
}
