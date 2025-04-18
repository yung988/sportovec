"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	CheckCircle,
	ArrowRight,
	ChevronLeft,
	ChevronRight,
	Users,
	BookOpen,
	Globe,
	User,
} from "lucide-react";
import Image from "next/image";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
	return (
		<div className="min-h-screen bg-white overflow-hidden relative">
			<main className="relative z-10">
				{/* Hero sekce */}
				<Hero />

				{/* O nás */}
				<section id="about" className="py-20 bg-white relative" style={{ zIndex: 20 }}>
					<div className="max-w-6xl mx-auto px-4">
						<div className="flex flex-col lg:flex-row gap-16">
							<div className="lg:w-1/2">
								<h2 className="text-5xl font-bold mb-6">O Sportovec 2.0</h2>
								<p className="text-lg text-gray-700 mb-6">
									V centru Sportovec 2.0 jsme vášnivě oddáni poskytování
									špičkového prostředí pro profesionální sportovce všech úrovní,
									kteří se připravují na přechod do civilního života.
								</p>
								<p className="text-lg text-gray-700 mb-6">
									Náš program kombinuje vzdělávání, mentoring, psychologickou
									podporu a networking, aby sportovci mohli plynule přejít do
									své druhé kariéry.
								</p>
								<Button className="rounded-full bg-black hover:bg-gray-800 mt-4">
									Kontaktujte nás <ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</div>
							<div className="lg:w-1/2 grid grid-cols-2 gap-4">
								<div className="relative rounded-3xl overflow-hidden h-[300px]">
									<Image
										src="/fotbal.jpg"
										alt="Fotbalista v akci"
										fill
										className="object-cover"
									/>
								</div>
								<div className="relative rounded-3xl overflow-hidden h-[300px]">
									<Image
										src="/fotbal2.jpg"
										alt="Fotbalový tým"
										fill
										className="object-cover"
										style={{ objectPosition: 'center' }}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Služby */}
				<section id="services" className="py-20 bg-gray-50">
					<div className="max-w-6xl mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-5xl font-bold mb-4">Naše služby</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Nabízíme komplexní podporu, která pokrývá všechny aspekty
								přechodu do nové životní etapy.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<ServiceCard 
								title="Vzdělávací kurzy"
								description="Objevte naše specializované kurzy zaměřené na finanční gramotnost, podnikání a osobní rozvoj."
								content="Naše online kurzy jsou navrženy tak, aby vám poskytly praktické dovednosti a znalosti potřebné pro úspěšný přechod do civilního života."
								imageSrc="/kurzy.jpg"
								imageAlt="Vzdělávací kurzy"
								icon={<BookOpen className="w-16 h-16 text-white" aria-label="Ikona vzdělávacích kurzů" />}
							/>

							<ServiceCard 
								title="Mentoring"
								description="Individuální podpora od bývalých sportovců a úspěšných podnikatelů."
								content="Naši mentoři vás provedou celým procesem přechodu a pomohou vám najít novou cestu, která bude využívat vaše jedinečné dovednosti a zkušenosti."
								imageSrc="/mentoring.jpg"
								imageAlt="Mentoring"
								icon={<Users className="w-16 h-16 text-white" aria-label="Ikona mentoringu" />}
							/>

							<ServiceCard 
								title="Psychologická podpora"
								description="Odborná pomoc při zvládání změn identity a životních priorit."
								content="Naši psychologové specializovaní na sportovní psychologii vám pomohou zvládnout emocionální výzvy spojené s ukončením sportovní kariéry."
								imageSrc="/therapy.jpg"
								imageAlt="Psychologická podpora"
								icon={<User className="w-16 h-16 text-white" aria-label="Ikona psychologické podpory" />}
							/>

							<ServiceCard 
								title="Networking a komunita"
								description="Pravidelná setkání, networking a tematické akce pro komunitu."
								content="Připojte se k naší rostoucí komunitě bývalých sportovců a profesionálů z různých oborů, kteří vám mohou pomoci s navázáním nových kontaktů."
								imageSrc="/network.jpg"
								imageAlt="Networking a komunita"
								icon={<Globe className="w-16 h-16 text-white" aria-label="Ikona networkingu a komunity" />}
							/>
						</div>
					</div>
				</section>

				{/* Testimonials */}
				<section id="testimonials" className="py-20">
					<div className="max-w-6xl mx-auto px-4">
						<div className="flex flex-col lg:flex-row gap-12">
							<div className="lg:w-1/3">
								<h2 className="text-5xl font-bold mb-6">
									Co říkají naši klienti
								</h2>
								<p className="text-lg text-gray-700 mb-6">
									Přečtěte si příběhy sportovců, kterým jsme pomohli s přechodem
									do nové životní etapy.
								</p>
								<div className="flex gap-2 mt-8">
									<Button
										variant="outline"
										size="icon"
										className="rounded-full border-gray-300 hover:bg-gray-100 hover:text-black"
									>
										<ChevronLeft className="h-5 w-5" />
									</Button>
									<Button
										variant="outline"
										size="icon"
										className="rounded-full border-gray-300 hover:bg-gray-100 hover:text-black"
									>
										<ChevronRight className="h-5 w-5" />
									</Button>
								</div>
							</div>
							<div className="lg:w-2/3">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{[{
										name: "Petra Svobodová",
										title: "Bývalá fotbalistka",
										image: "/woman.jpeg",
										quote: "Díky Sportovec 2.0 jsem našla odvahu začít podnikat. Kurzy finanční gramotnosti mi daly sebevědomí spravovat své finance a mentoring mi pomohl najít směr, kterým se vydat po skončení kariéry."
									}, {
										name: "Tomáš Hájek",
										title: "Bývalý fotbalista",
										image: "/man.jpeg",
										quote: "Když jsem musel kvůli zranění ukončit kariéru ve 28 letech, byl jsem ztracený. Program Sportovec 2.0 mi pomohl najít novou cestu a dnes úspěšně vedu vlastní sportovní akademii pro děti."
									}].map((testimonial) => (
										<Card key={testimonial.name} className="rounded-3xl border-0 shadow-lg">
											<CardContent className="pt-6">
												<div className="flex items-center mb-4">
													<div className="mr-4">
														<div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300 relative">
															<Image
																src={testimonial.image}
																alt={testimonial.name}
																width={64}
																height={64}
																className="object-cover rounded-full"
																style={{ objectPosition: testimonial.name === "Tomáš Hájek" ? "center top" : "center" }}
															/>
														</div>
													</div>
													<div>
														<p className="font-bold">{testimonial.name}</p>
														<p className="text-sm text-gray-500">{testimonial.title}</p>
													</div>
												</div>
												<p className="italic text-lg">{testimonial.quote}</p>
											</CardContent>
										</Card>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Plány a ceny */}
				<section id="pricing" className="py-20 bg-gray-50">
					<div className="max-w-6xl mx-auto px-4">
						<div className="text-center mb-16">
							<h2 className="text-5xl font-bold mb-4">
								Plány a cenové balíčky
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Vyberte si plán, který nejlépe odpovídá vašim potřebám a fázi
								kariéry.
							</p>
						</div>

						<div className="grid md:grid-cols-3 gap-8">
							<Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-shadow">
								<CardHeader>
									<CardTitle className="text-center">Základní</CardTitle>
									<CardDescription className="text-center text-2xl font-bold">
										1 990 Kč / měsíc
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-3">
										<li className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
											<span>Přístup k online kurzům</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
											<span>Měsíční skupinový mentoring</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
											<span>Přístup do komunity</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
											<span>Účast na 2 workshopech ročně</span>
										</li>
									</ul>
								</CardContent>
								<CardFooter>
									<Button className="w-full rounded-full bg-black hover:bg-gray-800">
										Vybrat plán
									</Button>
								</CardFooter>
							</Card>

							<Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-shadow relative">
								<div className="absolute top-0 right-0 bg-green-700 text-white px-3 py-1 text-sm font-bold rounded-bl-lg rounded-tr-3xl">
									Nejoblíbenější
								</div>
								<CardHeader>
									<CardTitle className="text-center">Profesionál</CardTitle>
									<CardDescription className="text-center text-2xl font-bold">
										3 990 Kč / měsíc
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-3">
										<li className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
											<span>Vše ze Základního plánu</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
											<span>2 individuální mentoringové schůzky měsíčně</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
											<span>Měsíční konzultace s psychologem</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
											<span>Účast na všech workshopech</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
											<span>Osobní finanční plán</span>
										</li>
									</ul>
								</CardContent>
								<CardFooter>
									<Button className="w-full rounded-full bg-green-700 hover:bg-green-800">
										Vybrat plán
									</Button>
								</CardFooter>
							</Card>

							<Card className="rounded-3xl border-0 shadow-lg hover:shadow-xl transition-shadow">
								<CardHeader>
									<CardTitle className="text-center">Elitní</CardTitle>
									<CardDescription className="text-center text-2xl font-bold">
										8 990 Kč / měsíc
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ul className="space-y-3">
										<li className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
											<span>Vše z Profesionálního plánu</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
											<span>Neomezený individuální mentoring</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
											<span>Týdenní konzultace s psychologem</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
											<span>VIP přístup na všechny akce</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckCircle className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
											<span>Kompletní kariérní plán na míru</span>
										</li>
									</ul>
								</CardContent>
								<CardFooter>
									<Button className="w-full rounded-full bg-black hover:bg-gray-800">
										Vybrat plán
									</Button>
								</CardFooter>
							</Card>
						</div>
					</div>
				</section>

				{/* FAQ */}
				<section className="py-20">
					<div className="max-w-6xl mx-auto px-4">
						<div className="flex flex-col lg:flex-row gap-12">
							<div className="lg:w-1/3">
								<h2 className="text-5xl font-bold mb-6">
									Často kladené otázky
								</h2>
								<p className="text-lg text-gray-700 mb-6">
									Odpovědi na nejčastější otázky o našem programu. Pokud zde
									nenajdete odpověď na svou otázku, neváhejte nás kontaktovat.
								</p>
								<Button className="rounded-full bg-black hover:bg-gray-800 mt-4">
									Kontaktujte nás <ArrowRight className="ml-2 h-4 w-4" />
								</Button>
							</div>
							<div className="lg:w-2/3">
								<Accordion type="single" collapsible className="w-full">
									<AccordionItem
										value="item-1"
										className="border-b border-gray-200 py-2"
									>
										<AccordionTrigger className="text-lg font-medium">
											Kdy je nejlepší čas začít s programem?
										</AccordionTrigger>
										<AccordionContent className="text-gray-700">
											Ideálně 2-3 roky před plánovaným koncem kariéry, ale
											pomáháme sportovcům v jakékoliv fázi jejich kariéry. Čím
											dříve začnete, tím lépe budete připraveni na přechod do
											nové životní etapy.
										</AccordionContent>
									</AccordionItem>

									<AccordionItem
										value="item-2"
										className="border-b border-gray-200 py-2"
									>
										<AccordionTrigger className="text-lg font-medium">
											Jak probíhá mentoring?
										</AccordionTrigger>
										<AccordionContent className="text-gray-700">
											Mentoring probíhá formou individuálních nebo skupinových
											setkání, buď osobně nebo online. Mentoři jsou bývalí
											sportovci, kteří úspěšně zvládli přechod do civilního
											života, nebo odborníci z různých oborů.
										</AccordionContent>
									</AccordionItem>

									<AccordionItem
										value="item-3"
										className="border-b border-gray-200 py-2"
									>
										<AccordionTrigger className="text-lg font-medium">
											Mohou se do programu zapojit i sportovní kluby?
										</AccordionTrigger>
										<AccordionContent className="text-gray-700">
											Ano, nabízíme speciální programy pro sportovní kluby,
											které chtějí podpořit své sportovce v přípravě na život po
											kariéře. Kontaktujte nás pro více informací o firemních
											balíčcích.
										</AccordionContent>
									</AccordionItem>

									<AccordionItem
										value="item-4"
										className="border-b border-gray-200 py-2"
									>
										<AccordionTrigger className="text-lg font-medium">
											Jak dlouho trvá program?
										</AccordionTrigger>
										<AccordionContent className="text-gray-700">
											Program je flexibilní a můžete ho využívat tak dlouho, jak
											potřebujete. Doporučujeme minimálně 12 měsíců pro dosažení
											viditelných výsledků a úspěšný přechod do nové kariéry.
										</AccordionContent>
									</AccordionItem>

									<AccordionItem
										value="item-5"
										className="border-b border-gray-200 py-2"
									>
										<AccordionTrigger className="text-lg font-medium">
											Co když musím ukončit kariéru nečekaně kvůli zranění?
										</AccordionTrigger>
										<AccordionContent className="text-gray-700">
											Pro sportovce, kteří musí ukončit kariéru nečekaně, máme
											speciální intenzivní program, který pomáhá rychleji se
											adaptovat na novou situaci. Součástí je i rozšířená
											psychologická podpora.
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
						</div>
					</div>
				</section>

				{/* Kontaktní formulář */}
				<section className="py-20 bg-gray-50" id="contact">
					<div className="max-w-6xl mx-auto px-4">
						<div className="flex flex-col lg:flex-row gap-12">
							<div className="lg:w-1/2">
								<h2 className="text-5xl font-bold mb-6">Kontaktujte nás</h2>
								<p className="text-lg text-gray-700 mb-6">
									Máte zájem o více informací nebo chcete začít s programem?
									Neváhejte nás kontaktovat. Rádi vám pomůžeme s jakýmikoli
									dotazy.
								</p>
								<form className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div>
											<label
												htmlFor="first-name"
												className="block text-sm font-medium text-gray-700 mb-1"
											>
												Jméno
											</label>
											<Input
												type="text"
												id="first-name"
												className="rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-500"
											/>
										</div>
										<div>
											<label
												htmlFor="last-name"
												className="block text-sm font-medium text-gray-700 mb-1"
											>
												Příjmení
											</label>
											<Input
												type="text"
												id="last-name"
												className="rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-500"
											/>
										</div>
									</div>
									<div>
										<label
											htmlFor="email"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Email
										</label>
										<Input
											type="email"
											id="email"
											className="rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-500"
										/>
									</div>
									<div>
										<label
											htmlFor="message"
											className="block text-sm font-medium text-gray-700 mb-1"
										>
											Zpráva
										</label>
										<Textarea
											id="message"
											rows={4}
											className="rounded-xl border-gray-300 focus:border-green-500 focus:ring-green-500"
										/>
									</div>
									<div>
										<Button className="w-full rounded-full bg-green-700 hover:bg-green-800">
											Odeslat zprávu <ArrowRight className="ml-2 h-4 w-4" />
										</Button>
									</div>
								</form>
							</div>
							<div className="lg:w-1/2">
								<div className="relative rounded-3xl overflow-hidden h-[500px]">
									<Image
										src="/fotbal3.jpg"
										alt="Sportovec v akci"
										fill
										className="object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Newsletter */}
				<section className="py-16 bg-black text-white">
					<div className="max-w-6xl mx-auto px-4">
						<div className="flex flex-col lg:flex-row items-center gap-8">
							<div className="lg:w-2/3">
								<h2 className="text-3xl font-bold mb-2">
									Získejte nejnovější aktualizace a exkluzivní pozvánky
								</h2>
								<p className="text-gray-300">
									Přihlaste se k odběru našeho newsletteru a buďte první, kdo se
									dozví o nových kurzech, akcích a příležitostech.
								</p>
							</div>
							<div className="lg:w-1/3 w-full">
								<div className="flex gap-2">
									<Input
										type="email"
										placeholder="Váš email"
										className="rounded-full bg-white/10 border-white/20 text-white placeholder:text-gray-400"
									/>
									<Button className="rounded-full bg-white text-black hover:bg-gray-200">
										Odebírat
									</Button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
