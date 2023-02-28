import '../Styles/DashboardCard.css'

const DashboardCard = ({ children, title, className }) => {
  return (
    <article className={'dash-paper ' + className}>
      <div className="dash-inner-card">
        <div className="dash-subtitle">{title}</div>
        {children}
      </div>
    </article>
  )
}

export default DashboardCard
