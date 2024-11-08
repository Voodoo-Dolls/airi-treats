'use client'
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import ProductCard from "../Products/ProductCard/ProductCard"

export default function Slider({ list }: any) {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            mode: "free",
            slides: {
                perView: 2,
                spacing: 16
            },
            breakpoints: {
                '(min-width: 700px)': {
                    loop: true,
                    mode: "free",
                    slides: {
                        perView: 3,
                        spacing: 24
                    }
                },
                '(min-width: 1000px)': {
                    loop: true,
                    mode: "free",
                    slides: {
                        perView: 4,
                        spacing: 24
                    }
                },
            },
        },
        [
            (slider) => {
                let timeout: any
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                {list.map((uid: any, index: number) => {
                    return (
                        <div className="keen-slider__slide" key={index} >
                            <ProductCard uid={uid} />
                        </div>
                    )
                }
                )}
            </div >
        </>
    )
}
