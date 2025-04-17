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
	Search,
	ChevronLeft,
	ChevronRight,
	Users,
	BookOpen,
	Globe,
	User,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const [cursorX, setCursorX] = useState(50);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			// Získat kontejner hero sekce
			const hero = document.getElementById("hero-section");
			if (hero) {
				const rect = hero.getBoundingClientRect();
				// Vypočítat relativní pozici kurzoru v procentech
				const x = Math.max(
					0,
					Math.min(100, ((e.clientX - rect.left) / rect.width) * 100),
				);
				setCursorX(x);
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className="min-h-screen bg-white">
			{/* Navigace */}
			<header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur">
				<div className="max-w-6xl mx-auto px-4 flex h-20 items-center justify-between">
					<div className="flex items-center gap-2 font-bold text-xl text-green-700">
						<span className="tracking-wide">SPORTOVEC 2.0</span>
					</div>
					<div className="hidden md:flex items-center gap-8">
						<div className="relative">
							<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
							<Input
								type="search"
								placeholder="Hledat..."
								className="w-[200px] pl-9 rounded-full bg-gray-100 border-none"
							/>
						</div>
						<nav className="flex items-center gap-6">
							<a
								href="#about"
								className="text-sm font-medium hover:text-green-700 transition-colors"
							>
								O nás
							</a>
							<a
								href="#services"
								className="text-sm font-medium hover:text-green-700 transition-colors"
							>
								Služby
							</a>
							<a
								href="#testimonials"
								className="text-sm font-medium hover:text-green-700 transition-colors"
							>
								Reference
							</a>
							<a
								href="#pricing"
								className="text-sm font-medium hover:text-green-700 transition-colors"
							>
								Ceny
							</a>
						</nav>
						<Link
							href="#contact"
							className="rounded-full bg-black hover:bg-gray-800 px-6 text-white text-sm font-medium flex items-center"
						>
							Kontaktujte nás <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</div>
				</div>
			</header>

			<main>
				{/* Hero sekce */}
				<section id="hero-section" className="pt-20 relative overflow-hidden">
					<div className="absolute inset-0 z-0">
						<div className="relative w-full h-full">
							{/* První fotka (podnikatel) */}
							<div className="absolute inset-0">
								<Image
									src="/hero-second.jpg"
									alt="Podnikatel po kariéře sportovce"
									fill
									className="object-cover"
								/>
							</div>

							{/* Druhá fotka (fotbalista) s maskou */}
							<div
								className="absolute inset-0 bg-black/20"
								style={{
									clipPath: `polygon(0 0, ${cursorX}% 0, ${cursorX}% 100%, 0 100%)`,
									transition: "clip-path 0.1s ease",
								}}
							>
								<Image
									src="/hero-first.jpg"
									alt="Fotbalista v akci"
									fill
									className="object-cover"
								/>
							</div>

							{/* Linie předělu */}
							<div
								className="absolute top-0 bottom-0 w-1 bg-white shadow-xl"
								style={{
									left: `${cursorX}%`,
									transform: "translateX(-50%)",
									transition: "left 0.1s ease",
								}}
							/>

							{/* Tmavý gradient přes fotky */}
							<div className="absolute inset-0 bg-gradient-to-r from-green-800/70 to-green-600/70" />
						</div>
					</div>
					<div className="max-w-6xl mx-auto px-4 relative z-10 pt-20 pb-32">
						<div className="max-w-3xl">
							<span className="inline-block px-4 py-1 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm text-white rounded-full">
								Sportovní centrum
							</span>
							<h1 className="text-7xl md:text-8xl font-bold mb-6 text-white leading-[1.1] tracking-tight">
								Vaše hra, <br />
								Vaše cesta
							</h1>
							<p className="text-xl mb-8 text-white/90 max-w-xl">
								Pomáháme profesionálním sportovcům úspěšně přejít do života po
								sportovní kariéře a najít novou identitu.
							</p>
							<div className="flex flex-wrap gap-4">
								<Button className="rounded-full bg-white text-green-800 hover:bg-green-50 text-lg px-8 py-6">
									Začít s přípravou <ArrowRight className="ml-2 h-5 w-5" />
								</Button>
							</div>
						</div>
					</div>
					<div className="absolute bottom-0 right-0 z-10 p-4 flex items-center gap-2">
						<div className="flex -space-x-2">
							<div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white" />
							<div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white" />
							<div className="w-10 h-10 rounded-full bg-gray-500 border-2 border-white" />
						</div>
						<span className="text-sm text-white">
							Jsme odhodláni poskytovat
							<br />
							špičkové služby pro sportovce
						</span>
					</div>
				</section>

				{/* O nás */}
				<section id="about" className="py-20">
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
							<Card className="rounded-3xl overflow-hidden border-0 shadow-lg">
								<div className="relative h-[200px] overflow-hidden">
									<Image
										src="/kurzy.jpg"
										alt="Vzdělávací kurzy"
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
										<BookOpen
											className="w-16 h-16 text-white"
											aria-label="Ikona vzdělávacích kurzů"
										/>
									</div>
								</div>
								<CardHeader>
									<CardTitle>Vzdělávací kurzy</CardTitle>
									<CardDescription>
										Objevte naše specializované kurzy zaměřené na finanční
										gramotnost, podnikání a osobní rozvoj.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="text-gray-700">
										Naše online kurzy jsou navrženy tak, aby vám poskytly
										praktické dovednosti a znalosti potřebné pro úspěšný přechod
										do civilního života.
									</p>
								</CardContent>
								<CardFooter>
									<Button variant="ghost" className="rounded-full">
										Zjistit více <ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</CardFooter>
							</Card>

							<Card className="rounded-3xl overflow-hidden border-0 shadow-lg">
								<div className="relative h-[200px] overflow-hidden">
									<Image
										src="/mentoring.jpg"
										alt="Mentoring"
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
										<Users
											className="w-16 h-16 text-white"
											aria-label="Ikona mentoringu"
										/>
									</div>
								</div>
								<CardHeader>
									<CardTitle>Mentoring</CardTitle>
									<CardDescription>
										Individuální podpora od bývalých sportovců a úspěšných
										podnikatelů.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="text-gray-700">
										Naši mentoři vás provedou celým procesem přechodu a pomohou
										vám najít novou cestu, která bude využívat vaše jedinečné
										dovednosti a zkušenosti.
									</p>
								</CardContent>
								<CardFooter>
									<Button variant="ghost" className="rounded-full">
										Zjistit více <ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</CardFooter>
							</Card>

							<Card className="rounded-3xl overflow-hidden border-0 shadow-lg">
								<div className="relative h-[200px] overflow-hidden">
									<Image
										src="/therapy.jpg"
										alt="Psychologická podpora"
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
										<User
											className="w-16 h-16 text-white"
											aria-label="Ikona psychologické podpory"
										/>
									</div>
								</div>
								<CardHeader>
									<CardTitle>Psychologická podpora</CardTitle>
									<CardDescription>
										Odborná pomoc při zvládání změn identity a životních
										priorit.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="text-gray-700">
										Naši psychologové specializovaní na sportovní psychologii
										vám pomohou zvládnout emocionální výzvy spojené s ukončením
										sportovní kariéry.
									</p>
								</CardContent>
								<CardFooter>
									<Button variant="ghost" className="rounded-full">
										Zjistit více <ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</CardFooter>
							</Card>

							<Card className="rounded-3xl overflow-hidden border-0 shadow-lg">
								<div className="relative h-[200px] overflow-hidden">
									<Image
										src="/network.jpg"
										alt="Networking a komunita"
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
										<Globe
											className="w-16 h-16 text-white"
											aria-label="Ikona networkingu a komunity"
										/>
									</div>
								</div>
								<CardHeader>
									<CardTitle>Networking a komunita</CardTitle>
									<CardDescription>
										Pravidelná setkání, networking a tematické akce pro
										komunitu.
									</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="text-gray-700">
										Připojte se k naší rostoucí komunitě bývalých sportovců a
										profesionálů z různých oborů, kteří vám mohou pomoci s
										navázáním nových kontaktů.
									</p>
								</CardContent>
								<CardFooter>
									<Button variant="ghost" className="rounded-full">
										Zjistit více <ArrowRight className="ml-2 h-4 w-4" />
									</Button>
								</CardFooter>
							</Card>
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
									<Card className="rounded-3xl border-0 shadow-lg">
										<CardContent className="pt-6">
											<div className="flex items-center mb-4">
												<div className="mr-4">
													<div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300">
														<Image
															src="/fotbal.jpg"
															alt="Petra Svobodová"
															fill
															className="object-cover"
														/>
													</div>
												</div>
												<div>
													<p className="font-bold">Petra Svobodová</p>
													<p className="text-sm text-gray-500">
														Bývalá fotbalistka
													</p>
												</div>
											</div>
											<p className="italic text-lg">
												{
													"Díky Sportovec 2.0 jsem našla odvahu začít podnikat. Kurzy finanční gramotnosti mi daly sebevědomí spravovat své finance a mentoring mi pomohl najít směr, kterým se vydat po skončení kariéry."
												}
											</p>
										</CardContent>
									</Card>

									<Card className="rounded-3xl border-0 shadow-lg">
										<CardContent className="pt-6">
											<div className="flex items-center mb-4">
												<div className="mr-4">
													<div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300">
														<Image
															src="/fotbal2.jpg"
															alt="Tomáš Hájek"
															fill
															className="object-cover"
														/>
													</div>
												</div>
												<div>
													<p className="font-bold">Tomáš Hájek</p>
													<p className="text-sm text-gray-500">
														Bývalý fotbalista
													</p>
												</div>
											</div>
											<p className="italic text-lg">
												{
													"Když jsem musel kvůli zranění ukončit kariéru ve 28 letech, byl jsem ztracený. Program Sportovec 2.0 mi pomohl najít novou cestu a dnes úspěšně vedu vlastní sportovní akademii pro děti."
												}
											</p>
										</CardContent>
									</Card>
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
				<section className="py-20 bg-gray-50">
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

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="max-w-6xl mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div>
							<h3 className="text-xl font-bold mb-4">Sportovec 2.0</h3>
							<p className="text-gray-400">
								Pomáháme profesionálním sportovcům úspěšně přejít do života po
								sportovní kariéře.
							</p>
						</div>
						<div>
							<h3 className="text-xl font-bold mb-4">Odkazy</h3>
							<ul className="space-y-2">
								<li>
									<Link
										href="/"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Domů
									</Link>
								</li>
								<li>
									<Link
										href="#services"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Služby
									</Link>
								</li>
								<li>
									<Link
										href="#pricing"
										className="text-gray-400 hover:text-white transition-colors"
									>
										Ceník
									</Link>
								</li>
								<li>
									<Link
										href="#faq"
										className="text-gray-400 hover:text-white transition-colors"
									>
										FAQ
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-xl font-bold mb-4">Kontakt</h3>
							<ul className="space-y-2">
								<li className="text-gray-400">info@sportovec2.cz</li>
								<li className="text-gray-400">+420 777 888 999</li>
								<li className="text-gray-400">Sportovní 123, Praha 5</li>
							</ul>
						</div>
						<div>
							<h3 className="text-xl font-bold mb-4">Sledujte nás</h3>
							<div className="flex space-x-4">
								<Link
									href="/"
									className="text-gray-400 hover:text-white transition-colors"
									aria-label="Facebook"
								>
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											fillRule="evenodd"
											d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
											clipRule="evenodd"
										/>
									</svg>
								</Link>
								<Link
									href="/"
									className="text-gray-400 hover:text-white transition-colors"
									aria-label="Instagram"
								>
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											fillRule="evenodd"
											d="M12.315 2c2.43 0 2.784.013 3.808.06..."
											clipRule="evenodd"
										/>
									</svg>
								</Link>
								<Link
									href="/"
									className="text-gray-400 hover:text-white transition-colors"
									aria-label="Twitter"
								>
									<svg
										className="h-6 w-6"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675..." />
									</svg>
								</Link>
							</div>
						</div>
					</div>
					<div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
						<p>
							&copy; {new Date().getFullYear()} Sportovec 2.0. Všechna práva
							vyhrazena.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
