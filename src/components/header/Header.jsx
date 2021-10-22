import  './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="headertitles">
                  <span className="headerTitleSm">React & Node</span>
                  <span className="headerTitlesLg">Blog</span>
            </div>
            <div>
                <img
                className="headerImg" 
                    src="https://images3.alphacoders.com/183/thumb-1920-183425.jpg"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Header
