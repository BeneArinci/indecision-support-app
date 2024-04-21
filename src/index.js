import { createRoot } from 'react-dom/client'
import IndecisionSupportApp from './App'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(<IndecisionSupportApp />)
