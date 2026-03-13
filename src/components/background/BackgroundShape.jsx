import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import "./backgroundShape.css"

gsap.registerPlugin(ScrollTrigger)

export default function BackgroundShape() {

  const blobRef = useRef()

  useEffect(() => {

    const ctx = gsap.context(() => {

      const blob = blobRef.current

      gsap.fromTo(
        blob,
        {
          y: 400,
          scale: 0.3,
          rotation: -20,
          transformOrigin: "50% 50%"
        },
        {
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 1.8,
          ease: "power3.out"
        }
      )

      gsap.to(blob, {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%"
      })

      gsap.to(blob, {
        scale: 1.05,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

     
gsap.utils.toArray(".section").forEach((section,i)=>{

  gsap.to(blob,{
    y: i * 200,
    scale: 1 + i*0.05,
    scrollTrigger:{
      trigger: section,
      start:"top center",
      end:"bottom center",
      scrub:true
    }
  })

})

      gsap.utils.toArray(".section").forEach((section,i)=>{

  gsap.to(blobRef.current,{
    y: i * 200,
    scale: 1 + i*0.05,
    scrollTrigger:{
      trigger: section,
      start:"top center",
      end:"bottom center",
      scrub:true
    }
  })

})

      gsap.to(blob, {
        attr: {
          d: "M300,100C420,80,520,200,480,340C420,520,180,520,120,360C80,200,200,80,300,100Z"
        },
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })

    })

    return () => ctx.revert()

  }, [])

  return (
    <div className="background_shape">

      <svg viewBox="0 0 600 600">

        <path
          ref={blobRef}
          fill="#3d3329"
          d="M300,120C380,80,470,160,470,280C470,420,380,500,260,480C150,460,90,380,120,260C150,150,220,110,300,120Z"
        />

      </svg>

    </div>
  )
}