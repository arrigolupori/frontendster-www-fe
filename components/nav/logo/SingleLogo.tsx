import Link from "next/link"

export default function SingleLogo() {
	return (
			<Link href='/'>
				<a>
					<span className='font-normal hover:font-normal font-headline text-4xl text-main'>Frontendster</span>
				</a>
			</Link>
	)
}
