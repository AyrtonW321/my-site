import type { ComponentType } from 'react'
import { createBrowserRouter } from 'react-router'
import HomePage from '../pages/HomePage'
import { RootLayout } from './RootLayout'

const page = (load: () => Promise<{ default: ComponentType }>) => ({
  lazy: async () => ({ Component: (await load()).default }),
})

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'projects', ...page(() => import('../pages/ProjectsPage')) },
      { path: 'projects/:slug', ...page(() => import('../pages/ProjectDetailPage')) },
      { path: 'experience', ...page(() => import('../pages/ExperiencePage')) },
      { path: '*', ...page(() => import('../pages/NotFoundPage')) },
    ],
  },
])
