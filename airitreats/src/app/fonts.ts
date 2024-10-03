import { Fjalla_One, Source_Sans_3 } from 'next/font/google'

export const headerFont = Fjalla_One({
    weight: '400',
    subsets: ['latin'],
    variable: '--headerFont'
})


export const bodyFont = Source_Sans_3({
    weight: '400',
    subsets: ['latin'],
    variable: '--bodyFont'
})