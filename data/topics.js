import {
	CreditCardIcon,
	UserCircleIcon,
	CheckIcon,
	CogIcon,
	CashIcon,
} from '@heroicons/react/outline'

export const topics = [
	{
		name: 'Target audience',
		description:
			"The first thing for us to understand is who's going to use the application: customers, team members, general users, etc.",
		icon: UserCircleIcon,
	},
	{
		name: 'Jobs to be done',
		description:
			'What jobs need to be done? What are the primary tasks that your target audience need to carry out via your app?',
		icon: CheckIcon,
	},
	{
		name: 'App architecture',
		description:
			"Based on the jobs to be done, Frontendster tells you what technology is best suited for your target audience's needs.",
		icon: CogIcon,
	},
	{
		name: 'Pricing & timeline',
		description:
			'You get a rough estimate of how much the app is going to cost, together with an estimated timeline and next steps.',
		icon: CashIcon,
	},
]
