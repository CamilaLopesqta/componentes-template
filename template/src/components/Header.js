import logo from '../img/logo.png'

function Header () {

    return (
<div>
    <header className='cabecalho'>
        
    <img src={logo} className="logo" alt="logo"/>
    <h3>Este é o Header</h3>
    </header>
</div>
    )
}

export default Header;