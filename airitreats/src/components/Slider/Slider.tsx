'use client'
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import ProductCard from "../Products/ProductCard/ProductCard"
import { useState } from "react"

export default function Slider({ list }: any) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider(
        {
            initial: 0,
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel)
            },
            loop: true,
            mode: "free",
            created() {
                setLoaded(true)
            },
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
                    }, 4000)
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
            <div className="navigation-wrapper">
                <div ref={sliderRef} className="keen-slider">
                    {list.map((uid: any, index: number) => {
                        return (
                            <div className="keen-slider__slide" key={index} >
                                <ProductCard uid={uid} />
                            </div>
                        )
                    }
                    )}
                </div>
                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </>
                )}
            </div>

            {/* <div ref={sliderRef} className="keen-slider">
                {list.map((uid: any, index: number) => {
                    return (
                        <div className="keen-slider__slide" key={index} >
                            <ProductCard uid={uid} />
                        </div>
                    )
                }
                )}
            </div > */}
        </>
    )
}

function Arrow(props: any) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}
