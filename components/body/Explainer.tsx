import ExplainerInfo from '@/models/ExplainerInfo'

export default function Explainer({ explainerHeading, children }) {
	return (
		<article className='mt-8 relative bg-white overflow-hidden'>
			<div className='relative px-4 sm:px-6 lg:px-8'>
				<section className='text-lg max-w-prose mx-auto'>
					<h2>
						<span className='text-center mt-2 block text-2xl leading-8 font-semibold tracking-tight text-copy sm:text-3xl'>
							{explainerHeading}
						</span>
					</h2>
					<p className='rounded-md bg-background mt-8 text-xl text-copy leading-8 p-8'>
						{children}
					</p>
				</section>
			</div>
		</article>
	)
}
