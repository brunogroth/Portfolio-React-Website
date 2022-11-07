
const ServiceList = ({serviceTitle, children}) => {
  return (
    <article className='service'>
      <div className="service-head">
        <h3>{serviceTitle}</h3>
      </div>
    <ul className='service-list'>
        {children}
    </ul>
  </article>
  )
}

export default ServiceList
