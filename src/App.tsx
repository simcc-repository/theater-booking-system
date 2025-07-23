import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { LoginForm } from '@/components/auth/LoginForm'
import { Layout } from '@/components/layout/Layout'
import { PartnerDashboard } from '@/pages/PartnerDashboard'
import { PartnerBooking } from '@/pages/PartnerBooking'
import { AdminDashboard } from '@/pages/AdminDashboard'
import { EventsManagement } from '@/pages/EventsManagement'
import { VenueManagement } from '@/pages/VenueManagement'
import { TicketTemplateManagement } from '@/pages/TicketTemplateManagement'
import { TicketManagement } from '@/pages/TicketManagement'
import { useAuth } from '@/hooks/useAuth'
import { AuthDebugger } from '@/components/debug/AuthDebugger'

// Create a query client for React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
})

function AppRouter() {
  const { isAdmin, isAuthenticated } = useAuth()
  

  return (
    <Routes>
      {/* Public routes */}
      <Route 
        path="/login" 
        element={
          isAuthenticated ? (
            <Navigate to={isAdmin ? '/admin' : '/dashboard'} replace />
          ) : (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <LoginForm />
            </div>
          )
        } 
      />

      {/* Protected partner routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Layout>
              <PartnerDashboard />
            </Layout>
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/events/:eventId/book" 
        element={
          <ProtectedRoute>
            <Layout>
              <PartnerBooking />
            </Layout>
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/bookings" 
        element={
          <ProtectedRoute>
            <Layout>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">My Bookings</h1>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                  <p className="text-gray-600">Booking history page coming soon...</p>
                </div>
              </div>
            </Layout>
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <Layout>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile</h1>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                  <p className="text-gray-600">Profile management page coming soon...</p>
                </div>
              </div>
            </Layout>
          </ProtectedRoute>
        } 
      />

      {/* Protected admin routes */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute requireAdmin>
            <Layout>
              <AdminDashboard />
            </Layout>
          </ProtectedRoute>
        } 
      />


      <Route 
        path="/admin/events" 
        element={
          <ProtectedRoute requireAdmin>
            <Layout>
              <EventsManagement />
            </Layout>
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/admin/venues" 
        element={
          <ProtectedRoute requireAdmin>
            <Layout>
              <VenueManagement />
            </Layout>
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/admin/ticket-templates" 
        element={
          <ProtectedRoute requireAdmin>
            <Layout>
              <TicketTemplateManagement />
            </Layout>
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/admin/tickets" 
        element={
          <ProtectedRoute requireAdmin>
            <Layout>
              <TicketManagement />
            </Layout>
          </ProtectedRoute>
        } 
      />

      {/* Partner ticket management */}
      <Route 
        path="/my-tickets" 
        element={
          <ProtectedRoute>
            <Layout>
              <TicketManagement />
            </Layout>
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/admin/reports" 
        element={
          <ProtectedRoute requireAdmin>
            <Layout>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Reports</h1>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                  <p className="text-gray-600">Reports page coming soon...</p>
                </div>
              </div>
            </Layout>
          </ProtectedRoute>
        } 
      />

      {/* Default redirects */}
      <Route 
        path="/" 
        element={
          <Navigate 
            to={isAuthenticated ? (isAdmin ? '/admin' : '/dashboard') : '/login'} 
            replace 
          />
        } 
      />
      
      {/* 404 page */}
      <Route 
        path="*" 
        element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
              <p className="text-gray-600 mb-6">Page not found</p>
              <a 
                href="/" 
                className="text-primary-600 hover:text-primary-500"
              >
                Go back home
              </a>
            </div>
          </div>
        } 
      />
    </Routes>
  )
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <AppRouter />
          {/* <AuthDebugger /> */}
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App