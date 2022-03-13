import { NextSeo } from 'next-seo'
import PageInfo from '@/models/PageInfo'

export default function SEO(props: PageInfo) {
	return (
		<>
			<NextSeo
				title={props.title}
				description={props.description}
				canonical={props.route}
				openGraph={{
					url: props.route,
					title: props.title,
					images: [
						{
							url: props.thumbnailUrl,
							width: 1024,
							height: 512,
							alt: props.thumbnailAlt,
							type: 'image/jpeg',
						},
					],
					site_name: 'Frontendster',
				}}
				twitter={{
					handle: '@ArrigoLupori',
					cardType: 'summary_large_image',
				}}
			/>
		</>
	)
}
