
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
                <button className='cta'>
                    <li>book now</li>
                </button> 
      </header>
    </div>
  );
}

export default Nav;
