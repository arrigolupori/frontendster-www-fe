import ExplainerInfo from '@/models/ExplainerInfo'

export default function Explainer(props: ExplainerInfo) {
	return (
		<div className='relative py-16 bg-white overflow-hidden'>
			<div className='relative px-4 sm:px-6 lg:px-8'>
				<div className='text-lg max-w-prose mx-auto'>
					<h1>
						<span className='text-center mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
							{props.explainerHeading}
						</span>
					</h1>
					<p className='transform -skew-x-6 rounded-md bg-background mt-8 text-xl text-copy leading-8 p-8'>
						{props.explainerCopy}
					</p>
				</div>
			</div>
		</div>
	)
}
