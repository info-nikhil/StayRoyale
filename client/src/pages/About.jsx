import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
import roomImg1 from '../assets/roomImg1.jpg'
import roomImg2 from '../assets/roomImg2.jpg'
import roomImg3 from '../assets/roomImg3.jpg'

const About = () => {
  const benefits = [
    {
      icon: '🏨',
      title: 'Comfortable Stays',
      description:
        'Discover thoughtfully selected rooms and resorts designed to make every stay comfortable and memorable.',
    },
    {
      icon: '💰',
      title: 'Affordable Prices',
      description:
        'Explore accommodation options for different budgets without compromising on the essentials.',
    },
    {
      icon: '📅',
      title: 'Easy Booking',
      description:
        'Find your ideal stay, check availability, choose your dates and manage your bookings in one place.',
    },
    {
      icon: '✨',
      title: 'Memorable Getaways',
      description:
        'From relaxing weekend breaks to special celebrations, find a stay that suits your next escape.',
    },
  ]

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:px-12">
          <div className="flex flex-col items-start">
            <span className="rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
              GET TO KNOW US
            </span>

            <h1 className="mt-5 max-w-xl font-playfair text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
              About <span className="text-orange-500">StayRoyale</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
              Your next great getaway starts here. We make discovering and
              booking comfortable, affordable stays easier, so you can spend
              less time planning and more time enjoying your journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/rooms"
                className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Explore Hotels
              </Link>

              <Link
                to="/experience"
                className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-800 transition hover:border-orange-400 hover:text-orange-600"
              >
                Discover Experiences
              </Link>
            </div>
          </div>

          <div className="relative">
            {/* Hero image */}
            <img
                src={roomImg1}
                alt="A beautiful hotel destination for your next getaway"
                className="h-72 w-full rounded-2xl object-cover shadow-xl sm:h-96 lg:h-[430px]"
            />

            <div className="absolute -bottom-5 left-4 rounded-xl bg-white p-4 shadow-lg sm:left-8 sm:p-5">
              <p className="text-sm font-semibold text-gray-900">
                Your journey, your way.
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Find a stay that feels right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Our Story
            </p>

            <h2 className="mt-3 font-playfair text-3xl font-bold leading-snug text-gray-900 md:text-4xl">
              Every great journey deserves a great place to stay.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              StayRoyale is built around a simple idea: finding the right
              accommodation should be straightforward. Whether you are
              planning a short weekend break, a family holiday or a relaxing
              escape, we help you explore available stays and make informed
              booking decisions.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Our platform brings accommodation discovery, room information,
              availability and booking together in one convenient experience.
              We want every traveller to find an option that fits their plans,
              preferences and budget.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Story images */}
            <img
                src={roomImg2}
                alt="Comfortable hotel room"
                className="h-52 w-full rounded-xl object-cover sm:h-64"
            />

            <img
                src={roomImg3}
                alt="A relaxing hotel interior"
                className="mt-8 h-52 w-full rounded-xl object-cover sm:h-64"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 px-4 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Why StayRoyale
            </p>

            <h2 className="mt-3 font-playfair text-3xl font-bold text-gray-900 md:text-4xl">
              A better way to plan your stay
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Everything you need to discover a suitable stay and plan your
              next getaway with confidence.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
                  {benefit.icon}
                </div>

                <h3 className="mt-5 text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

            {/* The StayRoyale Difference */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-8 md:pb-20 lg:px-12">
        <div className="rounded-2xl border border-[#EAE5DD] bg-[#F7F5F0] px-6 py-9 sm:px-10 md:px-12 md:py-11">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B87543]">
              The StayRoyale Difference
            </p>
            <span className="text-xl text-[#B87543]">✳</span>
          </div>

          <h2 className="mt-4 font-playfair text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
            Travel should feel effortless.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">
            The little things that make finding your next stay easier.
          </p>

          <div className="mt-8 grid gap-7 border-t border-[#DED7CC] pt-7 sm:grid-cols-3 sm:gap-5">
            {[
              {
                number: '01',
                title: 'Discover',
                description: 'Explore stays that fit your plans and preferences.',
              },
              {
                number: '02',
                title: 'Choose',
                description: 'Compare rooms, amenities and prices in one place.',
              },
              {
                number: '03',
                title: 'Experience',
                description: 'Spend less time searching and more time enjoying your trip.',
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-4">
                <span className="pt-1 font-playfair text-sm text-[#B87543]">
                  {item.number}
                </span>

                <div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  )
}

export default About