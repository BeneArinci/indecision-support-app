import { createRoot } from 'react-dom/client'
import IndecisionSupportApp from './components/IndecisionSupportApp'
import { Header } from './components/Header'
import 'normalize.css'
import './styles/styles.scss'

const AppLayout = ({ children }) => {
  return (
    <div>
      <Header
        title={'Indecision support app'}
        subtitle={'Let your computer help you making a decision!'}
      />
      {children}
    </div>
  )
}

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <AppLayout>
    <IndecisionSupportApp />
  </AppLayout>
)
