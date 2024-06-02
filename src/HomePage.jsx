import React from 'react'
import { Link } from 'react-router-dom'
function HomePage() {
  return (
    <div>
        <h1>hello</h1>
        <Link to={"/login"}>produto</Link>
    </div>
  )
}

export default HomePage