import {
	PhoneIcon,
	DocumentTextIcon,
	SearchIcon,
	CodeIcon,
	CalculatorIcon,
	PencilIcon,
} from '@heroicons/react/outline'

export const sections = [
	{
		name: 'Consultation report',
		description:
			"A report of all that's been discussed during the free consultation, with key action points.",
		icon: PhoneIcon,
	},
	{
		name: 'Project summary',
		description:
			"A high-level view of Frontendster's proposed solution to your web development needs.",
		icon: DocumentTextIcon,
	},
	{
		name: 'Detailed requirements',
		description:
			'A detailed specification of each requirement, with the proposed individual solution.',
		icon: SearchIcon,
	},
	{
		name: 'Technology breakdown',
		description:
			'What technology is going to be used for the purpose and why. What the pros and cons are.',
		icon: CodeIcon,
	},
	{
		name: 'Pricing and timeline',
		description:
			'A timeline of delivery (~8 weeks for most web apps) as well as pricing for each stage.',
		icon: CalculatorIcon,
	},
	{
		name: 'Contracting details',
		description:
			'An overview of the contractual terms offered by Frontendster, to be signed at project start.',
		icon: PencilIcon,
	},
]
