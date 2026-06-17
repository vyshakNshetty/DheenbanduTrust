import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import DashboardLayout from '../components/dashboard/DashboardLayout'
import LoadingSpinner from '../components/common/LoadingSpinner'

const Overview = lazy(() => import('../components/dashboard/Overview'))
const Donations = lazy(() => import('../components/dashboard/Donations'))
const Volunteers = lazy(() => import('../components/dashboard/Volunteers'))
const Activities = lazy(() => import('../components/dashboard/Activities'))
const Gallery = lazy(() => import('../components/dashboard/Gallery'))
const Settings = lazy(() => import('../components/dashboard/Settings'))

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard — HopeBridge</title>
      </Helmet>

      <DashboardLayout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route index element={<Overview />} />
            <Route path="donations" element={<Donations />} />
            <Route path="volunteers" element={<Volunteers />} />
            <Route path="activities" element={<Activities />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </DashboardLayout>
    </>
  )
}

export default Dashboard