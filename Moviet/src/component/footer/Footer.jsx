import './styles/style.css'
import logo from '../../shareImg/logocsc.svg'

export const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='links-container'>
            <a href="/home">About Us</a>
            <a href="/home">Contact</a>
            <a href="/home">Info</a>
        </div>
        <div className='created-by'>
          <div className="text-footer">
            <h4>CREATED BY</h4>
          </div>
            <div className="logo">
                <img src= {logo} alt="logo" width={120} />
            </div>
        </div>
    </div>
    
  )
}
