import { useCallback, useEffect, useState } from "react"

export const useCarousel = (carouselRef: React.RefObject<HTMLDivElement | null>, scrollAmountMultiplier: number = 0.3) => {
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const checkScrollability = useCallback(() => {
            if (carouselRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
                setCanScrollLeft(scrollLeft > 0)
                setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
            }
        }, [carouselRef])

    useEffect(() => {
        

        const handleResize = () => checkScrollability()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [carouselRef, checkScrollability])

    const scrollLeft = () => {
        if (carouselRef.current && canScrollLeft) {
            const scrollAmount = carouselRef.current.clientWidth * scrollAmountMultiplier
            carouselRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    const scrollRight = () => {
        if (carouselRef.current && canScrollRight) {
            const scrollAmount = carouselRef.current.clientWidth * scrollAmountMultiplier
            carouselRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return {
        canScrollLeft,
        canScrollRight,
        scrollLeft,
        scrollRight,
        checkScrollability
    }
}