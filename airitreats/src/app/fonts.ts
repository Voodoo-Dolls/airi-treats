import { Fredoka, Open_Sans, Oswald, Irish_Grover } from 'next/font/google'

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

export const buttonFont = Irish_Grover({
    weight: '400',
    subsets: ['latin'],
    variable: '--buttonFont'
})