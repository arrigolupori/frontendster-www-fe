/* This example requires Tailwind CSS v2.0+ */

export default function TwoCards({ data }) {
	return (
		<div className='mt-12 max-w-3xl mx-auto'>
			<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2'>
				{data.map((data) => (
					<div key={data.name} className='pt-6'>
						<div className='flow-root rounded-lg bg-gray-50 px-6 pb-8'>
							<div className='-mt-6 text-center'>
								<div>
									<span className='inline-flex items-center justify-center rounded-full bg-main p-3 shadow-lg'>
										<data.icon
											className='h-6 w-6 text-white'
											aria-hidden='true'
										/>
									</span>
								</div>
								<h3 className='mt-8 text-lg font-bold tracking-tight text-main'>
									{data.name}
								</h3>
								<p className='text-left mt-5 text-base text-gray-500'>
									{data.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
