import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './routers/routers'
import TeamFlowProvier from './ContextApi/AuthContext'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a QueryClient instance
const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TeamFlowProvier >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routers}>

        </RouterProvider>
      </QueryClientProvider>
    </TeamFlowProvier>
  </StrictMode>,
)
