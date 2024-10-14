import { Fredoka, Open_Sans, Oswald } from 'next/font/google'

export const headerFont = Fredoka({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--headerFont'
})

export const subheadingFont = Oswald({
    weight: '500',
    subsets: ['latin'],
    variable: '--subheadingFont'
})


export const bodyFont = Open_Sans({
    weight: '400',
    subsets: ['latin'],
    variable: '--bodyFont'
})