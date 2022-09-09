import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { Navbar } from './Navbar'

export const MainApp = () => {
    return (
        <>
            <h1>MainApp</h1>
            <hr />

            <Navbar />


            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='login' element={<LoginPage />} />
                <Route path='about' element={<AboutPage />} />

                {/* <Route path='/*' element={<LoginPage />} /> */}

                {/* navegar a una ruta mas especifica. Navigate. componente q a penas se renderiza hace la navegacion al path  especificado*/}
                <Route path='/*' element={<Navigate to="/about" />} />
            </Routes>
        </>
    )
}
