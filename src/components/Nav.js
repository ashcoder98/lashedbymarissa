
import '../App.css';

function Nav() {
  return (
    <div className="Nav">
      <header>
          <nav>
              <ul>
                {/* <a href=""></a> */}
                <li>home</li>
                <li>services</li>
                <li>about me</li>
              </ul>
          </nav>
                <span className='cta'>
                    <li>book now</li>
                </span> 
      </header>
    </div>
  );
}

export default Nav;
