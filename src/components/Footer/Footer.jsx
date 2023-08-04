import React from 'react'

const Footer = () => {
  return (
    <footer>
    <ul className="nav justify-content-center border-bottom pb-3 mb-1">
      <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="#" class="nav-link px-2 text-muted">Cities</a></li>
    </ul>
    <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4">

      <span className="mb-3 mb-md-0 text-muted">&copy; 2023 </span>
      <span className="mb-3 mb-md-0 text-muted"> MyTinerary</span>

    </div>
  </footer>
  )
}

export default Footer
