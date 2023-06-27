import React from 'react'
import imagenes from '../assets/images/images'
import 'animate.css'

function Home() {
    const empleados = [
      {
        id: 1,
        fullName: "Laya Dueñas",
        title: "CEO",
        department: "Business",
        pic: "empleado01.png",
      },
      {
        id: 2,
        fullName: "Astryd Vallés",
        title: "CMO",
        department: "Marketing",
        pic: "empleado02.png",
      },
      {
        id: 3,
        fullName: "Shantell Meza",
        title: "CFO",
        department: "Business",
        pic: "empleado03.png",
      },
      {
        id: 4,
        fullName: "Sergio Ocampo",
        title: "CTO",
        department: "Engineering",
        pic: "empleado04.png",
      },
      {
        id: 5,
        fullName: "Ares Jiménez",
        title: "Art Director",
        department: "Marketing",
        pic: "empleado05.png",
      },
      {
        id: 6,
        fullName: "Marta Pérez",
        title: "Frontend Dev",
        department: "Engineering",
        pic: "empleado06.png",
      },
      {
        id: 7,
        fullName: "Ellen Balderas",
        title: "Digital Strategist",
        department: "Marketing",
        pic: "empleado07.png",
      },
      {
        id: 8,
        fullName: "Cynthia Valentín",
        title: "Backend Dev",
        department: "Engineering",
        pic: "empleado08.png",
      },
      {
        id: 9,
        fullName: "Bernard Jung",
        title: "DevOps Engineer",
        department: "Engineering",
        pic: "empleado09.png",
      },
    ];
      
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">

            {empleados.map((empleado) => (
              <div className="text-dark card my-2 custom-card" key={empleado.id}>
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <img src={imagenes.img2} id="avatarImg" alt={empleado.fullName} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="card-title"><b>{empleado.fullName}</b></div>
                            <p className='card-text animate__animated animate__bounce'>
                                Titulo: {empleado.title} <br></br>
                                Department: {empleado.department}
                            </p>
                        </div>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home