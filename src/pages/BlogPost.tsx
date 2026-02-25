import { useParams } from "react-router-dom"

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div>
      <h1>{slug}</h1>
    </div>
  )
}
