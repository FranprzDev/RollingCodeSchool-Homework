import React from 'react'

function Footer() {
  return (
    <>
        <div className="my-2 bg-dark text-center text-light">
            <h4>Rolling Project</h4>
            <p>Hecho por Francisco Perez</p>
            <p>&copy; {new Date().getFullYear()} RollingCode School. Todos los derechos reservados.</p>
        </div>
    </>
  )
}

export default Footer