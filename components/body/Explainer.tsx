import ExplainerInfo from '@/models/ExplainerInfo'

export default function Explainer(props: ExplainerInfo) {
	return (
		<div className='relative bg-white overflow-hidden'>
			<div className='relative px-4 sm:px-6 lg:px-8'>
				<div className='text-lg max-w-prose mx-auto'>
					<h2>
						<span className='transform -skew-x-6 text-center mt-2 block text-2xl leading-8 font-semibold tracking-tight text-copy sm:text-3xl'>
							{props.explainerHeading}
						</span>
					</h2>
					<p className='transform -skew-x-6 rounded-md bg-background mt-8 text-xl text-copy leading-8 p-8'>
						{props.explainerCopy}
					</p>
				</div>
			</div>
		</div>
	)
}
