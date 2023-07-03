import Head from 'next/head';
import {
	Presentation,
	Competence,
	Experience,
	Formation,
	Interet,
} from '@/sections';
import Footer from '@/components/footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>Portfolio Guillaume Blanchard</title>
				<meta
					name='description'
					content='Portfolio de Guillaume Blanchard'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>
			<main>
				<Presentation />
				<div className='content'>
					<Experience />
					<Formation />
					<Competence />
					<Interet />
				</div>

				<Footer />
			</main>
		</>
	);
}
