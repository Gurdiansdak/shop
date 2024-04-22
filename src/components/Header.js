import React from 'react'

function Header() {
  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>Про нас</li>
                <li>Кабинет</li>
                <li>Контакты</li>
            </ul>
        </div>
        <div className='presentation'></div>
    </header>
  )
}

export default Header