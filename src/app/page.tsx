"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { presentationData } from "@/data/presentation-data"
import SlideIntroduction from "@/components/slides/slide-introduction"
import SlidePersonal from "@/components/slides/slide-personal"
import SlideTableOfContents from "@/components/slides/slide-table-contents"
import SlideImpact from "@/components/slides/slide-impact"
import SlideBenefits from "@/components/slides/slide-benefits"
import SlideComponents from "@/components/slides/slide-components"
import SlideInAction from "@/components/slides/slide-in-action"
import SlideToolbox from "@/components/slides/slide-toolbox"
import SlideRule from "@/components/slides/slide-rule"
import SlideLearning from "@/components/slides/slide-learning"
import SlideConclusions from "@/components/slides/slide-conclusions"
import SlideQuestions from "@/components/slides/slide-questions"
import SlideWorkflow from "@/components/slides/slide-workflow"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const totalSlides = presentationData.slides.length

  const goToNextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      goToNextSlide()
    } else if (e.key === "ArrowLeft") {
      goToPrevSlide()
    } else if (e.key === "f") {
      toggleFullscreen()
    }
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`)
      })
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentSlide])

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <SlideIntroduction slide={presentationData.slides[0]} />
      case 1:
        return <SlidePersonal slide={presentationData.slides[1]} />
      case 2:
        return <SlideTableOfContents />
      case 3:
        return <SlideImpact slide={presentationData.slides[3]} />
      case 4:
        return <SlideBenefits slide={presentationData.slides[4]} />
      case 5:
        return <SlideComponents slide={presentationData.slides[5]} />
      case 6:
        return <SlideInAction slide={presentationData.slides[6]} />
      case 7:
        return <SlideToolbox slide={presentationData.slides[7]} />
      case 8:
        return <SlideRule slide={presentationData.slides[8]} />
      case 9:
        return <SlideLearning slide={presentationData.slides[9]} />
      case 10:
        return <SlideConclusions slide={presentationData.slides[10]} />
      case 11:
        return <SlideQuestions slide={presentationData.slides[11]} />
      case 12:
        return <SlideWorkflow slide={presentationData.slides[12]} />
      default:
        return <SlideIntroduction slide={presentationData.slides[0]} />
    }
  }

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Navigation controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          className="bg-black/20 backdrop-blur-md border-white/20 hover:bg-white/20 text-white rounded-full h-10 w-10"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <div className="text-white/80 text-sm font-light">
          {currentSlide + 1} / {totalSlides}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="bg-black/20 backdrop-blur-md border-white/20 hover:bg-white/20 text-white rounded-full h-10 w-10"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Fullscreen button */}
      <Button
        variant="outline"
        onClick={toggleFullscreen}
        className="absolute bottom-6 right-6 z-50 bg-black/20 backdrop-blur-md border-white/20 hover:bg-white/20 text-white text-xs rounded-full"
      >
        {isFullscreen ? "Salir (F)" : "Pantalla Completa (F)"}
      </Button>

      {/* Slide content */}
      {renderSlide()}
    </main>
  )
}

