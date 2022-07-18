import { useState } from 'react'

export default function Loader(){
  const [isLoading, setIsLoading] = useState(false);

  return (
    <span class="loader"></span>
  )
}
