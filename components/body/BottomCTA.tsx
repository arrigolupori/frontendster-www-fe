/* This example requires Tailwind CSS v2.0+ */
import HeaderInfo from '@/models/HeaderInfo'

export default function BottomCTA(props: HeaderInfo) {
	return (
		<div className='px-0 bg-main mb-10 sm:max-w-6xl mx-auto lg:rounded-md'>
			<div className='max-w-4xl mx-auto text-center py-16 px-10 sm:py-20'>
				<h2 className='text-3xl font-extrabold text-white sm:text-5xl'>
					<span className='block'>{props.mainHeading}</span>
				</h2>
				<p className='mt-4 text-lg sm:text-2xl leading-6 text-white'>
					{props.subHeading}
				</p>
				<a
					href={props.ctaSlug}
					className='mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-main bg-white hover:bg-gray-100 sm:w-auto'
				>
					{props.ctaText}
				</a>
			</div>
		</div>
	)
}
