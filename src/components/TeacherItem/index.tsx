import React from 'react'

import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://avatars2.githubusercontent.com/u/15216271?s=460&u=7bdca4693336b714b12caffa56cb4b2eb92678a2&v=4" alt="Wellington P"/>
            <div>
              <strong>Wellington Fogo</strong>
              <span>Química</span>
            </div>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <br/><br/>
            Donec luctus vitae ex vitae dignissim. Aenean libero sem, pretium sit amet volutpat ac, porttitor in orci. Nulla facilisi.
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button>
              <img src={whatsappIcon} alt="WhatsApp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  )
}

export default TeacherItem