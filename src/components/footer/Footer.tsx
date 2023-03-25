import './footer.scss'

type Props = {}

const Footer = (props: Props) => {
  return (
    <section className="footer">
      <div className="socialIcons">
        <h3>facebook</h3>
        <h3>Instagram</h3>
        <h3>Twitter</h3>
      </div>
      <div className="copyRight">
        <span>@ copyRight 2023</span>
      </div>
    </section>
  )
}

export default Footer
