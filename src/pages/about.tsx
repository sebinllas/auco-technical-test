import Image from 'next/image';

export const About = () => {
	return (
		<main className="[&>p]:my-4">
			<h1 className="flex gap-4 mb-4 text-3xl font-bold">Sobre Mí</h1>
			<p className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gray-500/10 sm:gap-8 md:flex-row xl:px-20">
				<span>
					A corto plazo, mi visión se centra en completar mi carrera en
					ingeniería de sistemas y lanzarme a trabajar en proyectos que me
					desafíen y enriquezcan tanto en términos técnicos como personales. Mi
					motivación principal es adquirir experiencia en el desarrollo de
					productos que no solo sean técnicamente sólidos, sino que también
					agreguen un valor real a las personas y resuelvan problemas concretos.
				</span>
				<Image width={250} height={250} src="/programmer.svg" alt="coding" />
			</p>

			<p className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gray-500/10 sm:gap-8 md:flex-row xl:px-20">
				<Image width={300} height={300} src="/growth.svg" alt="coding" />
				<span>
					Con las habilidades que he desarrollado en la universidad, mis ganas
					de estar continuamente aprendiendo y explorando las nuevas
					tecnologías, mi compromiso y mi experiencia previa como auxiliar de
					programación, estoy seguro de que puedo hacer aportes significativos
					para que <strong>Auco</strong> alcance sus objetivos.
				</span>
			</p>

			<p className="flex flex-col items-center gap-4 p-6 rounded-lg bg-gray-500/10 sm:gap-8 md:flex-row xl:px-20">
				<span>
					De <strong>Auco</strong>, me atrae su enfoque hacia la reducción en el
					uso de recursos, disminución de de costos operativos y mejora de los
					procesos de gestión documental a través de soluciones electrónicas. Me
					encantaría crecer junto con <strong>Auco</strong>, una startup que veo
					como un lugar lleno de oportunidades para mi desarrollo profesional y
					personal. Estoy emocionado por la posibilidad de ser parte de su
					equipo y espero poder colaborar con ustedes en la construcción de un
					futuro tecnológico brillante.
				</span>
				<Image width={250} height={250} src="/team.svg" alt="coding" />
			</p>
		</main>
	);
};

export default About;
