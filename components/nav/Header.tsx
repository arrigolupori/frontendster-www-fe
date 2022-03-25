/* This example requires Tailwind CSS v2.0+ */
import Link from 'next/link'
import HeaderInfo from '@/models/HeaderInfo'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
	// { name: 'How it works', href: '/' }
]

export default function Header(props: HeaderInfo) {
	return (
		<div className='relative bg-main overflow-hidden font-copy sm:pb-12 pb-6 z-0'>
			<div className='relative px-6 pt-6 pb-16 sm:pb-24'>
				<Popover>
					<div className='max-w-7xl mx-auto px-4 sm:px-6'>
						<nav
							className='relative flex items-center justify-between sm:h-10 md:justify-center'
							aria-label='Global'
						>
							<div className='flex items-center flex-1 md:absolute md:inset-y-0 md:left-0'>
								<div className='flex items-center justify-between w-full md:w-auto'>
									<Link href='/'>
										<a>
											<span className='font-normal hover:font-normal font-headline text-4xl text-white'>
												Frontendster
											</span>
										</a>
									</Link>
									<div className='-mr-2 flex items-center md:hidden'>
										<Popover.Button className='bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-main hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-main'>
											<span className='sr-only'>Open main menu</span>
											<MenuIcon className='h-6 w-6' aria-hidden='true' />
										</Popover.Button>
									</div>
								</div>
							</div>
							<div className='hidden md:flex md:space-x-10'>
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className='font-medium text-white hover:text-gray-900'
									>
										{item.name}
									</a>
								))}
							</div>
							<div className='hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0'>
								<span className='inline-flex rounded-md shadow'>
									<a
										href='https://app.frontendster.com/signin'
										className='inline-flex items-center px-4 py-2 border border-transparent text-base font-bold rounded-md text-main bg-white hover:bg-gray-50'
										target='_blank'
										rel='noreferrer'
									>
										Customer login
									</a>
								</span>
							</div>
						</nav>
					</div>

					<Transition
						as={Fragment}
						enter='duration-150 ease-out'
						enterFrom='opacity-0 scale-95'
						enterTo='opacity-100 scale-100'
						leave='duration-100 ease-in'
						leaveFrom='opacity-100 scale-100'
						leaveTo='opacity-0 scale-95'
					>
						<Popover.Panel
							focus
							className='absolute z-10 top-0 inset-x-0 p-4 transition transform origin-top-right md:hidden'
						>
							<div className='rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden'>
								<div className='px-8 pt-4 flex items-center justify-between'>
									<div>
										<span className='font-headline text-4xl text-main'>
											Frontendster
										</span>
									</div>
									<div className='-mr-2'>
										<Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-main'>
											<span className='sr-only'>Close menu</span>
											<XIcon className='h-6 w-6' aria-hidden='true' />
										</Popover.Button>
									</div>
								</div>
								<div className='px-2 pt-2 pb-3'>
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
										>
											{item.name}
										</a>
									))}
								</div>
								<a
									href='https://app.frontendster.com/signin'
									className='block w-full px-5 py-3 text-center font-bold text-main bg-gray-50 hover:bg-gray-100'
									target='_blank'
									rel='noreferrer'
								>
									Customer login
								</a>
							</div>
						</Popover.Panel>
					</Transition>
				</Popover>

				<main className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24'>
					<div className='text-center'>
						<h1 className='text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl'>
							<span className='block xl:inline'>{props.mainHeading}</span>
						</h1>
						<p className='mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-2xl md:max-w-3xl'>
							{props.subHeading}
						</p>
						<div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
							<div className='rounded-md shadow'>
								<a
									href={props.ctaSlug}
									className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-main bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10'
								>
									{props.ctaText}
								</a>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
