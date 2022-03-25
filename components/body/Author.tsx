/* This example requires Tailwind CSS v2.0+ */
export default function Author() {
	return (
		<section className='py-8 overflow-hidden'>
			<div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='relative'>
					<h3 className='text-center text-2xl text-main font-bold'>
						Why use Frontendster?
					</h3>
					<blockquote className='mt-4'>
						<div className='px-12 max-w-3xl mx-auto text-center leading-8 text-gray-900'>
							<p className='text-lg leading-8 text-left sm:text-base sm:text-center'>
								As a small business owner, I&apos;ve seen endless examples of
								companies spending huge amounts of budget on third-party
								software that didn&apos;t fit their purpose. With Frontendster,
								you get to build and retain all the value for yourself. No
								middlemen, no budget leak.
							</p>
						</div>
						<div className='mt-8'>
							<div className='md:flex md:items-center md:justify-center'>
								<div className='md:flex-shrink-0'>
									<img
										className='mx-auto h-14 w-14 rounded-full shadow-sm border-4 border-background'
										src='https://pbs.twimg.com/profile_images/1504415760344625155/BihbIFi3_400x400.jpg'
										alt=''
									/>
								</div>
								<div className='mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center'>
									<div className='text-lg font-bold text-main'>
										Arrigo Lupori
									</div>

									<svg
										className='hidden md:block mx-1 h-5 w-5 text-main'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path d='M11 0h3L9 20H6l5-20z' />
									</svg>

									<div className='text-lg font-medium text-copy'>
										Founder at Frontendster
									</div>
								</div>
							</div>
						</div>
					</blockquote>
				</div>
			</div>
		</section>
	)
}
