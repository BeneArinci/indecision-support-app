export const Header = ({ title, subtitle }) => {
  return (
    <div className="app-header">
      <div className="container">
        <h1 className="app-header__title">{title}</h1>
        <h2 className="app-header__subtitle">{subtitle}</h2>
      </div>
    </div>
  )
}
