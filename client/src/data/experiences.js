import { assets } from '../assets/assets'

// Each experience is matched against rooms that already exist in your database.
// No backend change needed. Swap the images for your own whenever you like.

export const experiences = [
    {
        slug: 'luxury',
        title: 'Luxury & Comfort',
        tagline: 'Premium rooms for travellers who want the very best.',
        image: assets.experienceLuxury,
        match: (room) => room.roomType === 'Luxury Room',
    },
    {
        slug: 'romantic',
        title: 'Romantic Getaway',
        tagline: 'Intimate double rooms made for two.',
        image: assets.experienceRomance,
        match: (room) => room.roomType === 'Double Bed',
    },
    {
        slug: 'family',
        title: 'Family Stays',
        tagline: 'Spacious suites with room for everyone.',
        image: assets.experienceFamily,
        match: (room) => room.roomType === 'Family Suite',
    },
    {
        slug: 'nature',
        title: 'Nature & Escape',
        tagline: 'Wake up to mountain views and fresh air.',
        image: assets.experienceNature,
        match: (room) => room.amenities?.includes('Mountain View'),
    },
    {
        slug: 'relax',
        title: 'Pool & Relax',
        tagline: 'Slow down with pool access and room service.',
        image: assets.experiencePool,
        match: (room) => room.amenities?.includes('Pool Access'),
    },
]
