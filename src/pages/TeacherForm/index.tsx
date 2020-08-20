import React from 'react'
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'



function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
        <PageHeader
          title="Que incrível que você quer dar aulas."
          description="O primeiro passo é preencher esse formulário de inscrição">
        </PageHeader>

        <main>
          <fieldset>
            <legend>Seus dados</legend>
            
            <Input name="name" label="Nome Completo"></Input>
            <Input name="avatar" label="Avatar"></Input>
            <Input name="whatsapp" label="WhatsApp"></Input>
            <Textarea name="bio" label="Biografia"></Textarea>
            
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            
            <Select
              name="subject"
              label="Matéria"
              options={[
                { value: "Artes", label:"Artes" },
                { value: "Biologia", label:"Biologia" },
                { value: "Ciências", label:"Ciências" },
                { value: "Educação Física", label:"Educação Física" },
                { value: "Física", label:"Física" },
                { value: "Geografia", label:"Geografia" },
                { value: "História", label:"História" },
                { value: "Matemática", label:"Matemática" },
                { value: "Português", label:"Português" },
                { value: "Química", label:"Química" },
              ]}  
            ></Select>
            <Input name="cost" label="Custo da sua hora por aula"></Input>            
          </fieldset>

          <fieldset>
            <legend>
              Horários Disponíveis
              <button type="button">+ Novo Horário</button>
            </legend>   
            <div className="schedule-item">
              <Select
                name="week_day"
                label="Dia da Semana"
                options={[
                  { value: "0", label:"Domingo" },
                  { value: "1", label:"Segunda-feira" },
                  { value: "2", label:"Terça-feira" },
                  { value: "3", label:"Quarta-feira" },
                  { value: "4", label:"Quinta-feira" },
                  { value: "5", label:"Sexta-feira" },
                  { value: "6", label:"Sábado" },
              ]}/>
                <Input name="from" label="Das" type="time"></Input>
                <Input name="to" label="Até" type="time"></Input>
              </div>         
          </fieldset>

          

          <footer>
            <p><img src={warningIcon} alt="Aviso Importante"/>
              Importante! <br/>
              Preencha todos os dados
            </p>
            <button type="button">
              Salvar Cadastro
            </button>
          </footer>
          
        </main>
    </div>
  )
}

export default TeacherForm
