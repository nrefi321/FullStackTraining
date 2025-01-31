import { useEffect } from "react"

export default function Contact() {

   useEffect(() => {
      document.title = 'Contact - E-commerce'
    }, [])

  return (
    <h1>Contact Page</h1>
  )
}