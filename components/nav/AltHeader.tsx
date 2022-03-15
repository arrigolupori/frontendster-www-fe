import Link from 'next/link'

export default function AltHeader() {
	return (
		<nav className='mt-6 transform -skew-x-6 text-center'>
			<Link href='/'>
				<a>
					<span className='font-normal hover:font-normal font-headline text-4xl text-main'>
						Frontendster
					</span>
				</a>
			</Link>
		</nav>
	)
}
