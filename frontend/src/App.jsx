import { useEffect, useState } from 'react'

export default function App() {
  const [status, setStatus] = useState('Checking API...')

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.message))
      .catch(() => setStatus('API not reachable'))
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-100 text-center">
        <h1 className="text-2xl font-bold text-brand-600">TaskFlow Pro</h1>
        <p className="mt-2 text-slate-500">Frontend setup complete</p>
        <p className="mt-6 rounded-lg bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
          {status}
        </p>
      </div>
    </main>
  )
}