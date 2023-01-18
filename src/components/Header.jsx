import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            
            <div>
              <h1><b className='symbol__kal'>💩</b>кулятор</h1>
            </div>
          </div>
        </Link>
        <div className="header__cart">
          
          
        </div>
      </div>
    </div>
  );
}

export default Header;
