import React, {useState} from "react";
import {ReadMoreContainer, ReadMoreText, ReadOrRide} from "./styled";

  // const ReadMore = ({ children }) => {
  //   const text = children;
  //
  //   const [isReadMore, setIsReadMore] = useState(true);
  //
  //   const toggleReadMore = () => {
  //     setIsReadMore(!isReadMore);
  //   }
  //
  //   return (
  //     <ReadMoreText>
  //       {isReadMore ? text.slice(0, 900) : text}
  //       <ReadOrRide onClick={toggleReadMore} >
  //         {isReadMore ? "...read more" : " show less"}
  //       </ReadOrRide>
  //     </ReadMoreText>
  //   )
  // }

const ResumeContent = () => {

    return (
      <ReadMoreContainer>
        <ReadMoreText>

          Prazer! Em transição de carreira, na minha área profissional anterior atuei desenvolvendo
            mestrado, doutorado e chegando a cargo de assessoria e coordenadoria. No final de 2019, quando resolvi
            transitar de carreira, foquei nos estudos em desenvolvimento de software, especialmente em Desenvolvimento
            Front-end.

          Possuo conhecimento em JavaScript, HTML, HTML5, CSS, CSS3, Styled-components, Web Design Responsivo, Sass
            e Compass, Flexbox, jQuery e React. Além de estudar C, C++ e algoritmos, a fim de compreender melhor os
            conceitos básicos da computação e lógica de programação.

          Também possuo: vivência internacional; experiência em gerenciamento de projeto; inteligência estratégica;
          competência para liderar pessoas e administrar conflitos; sólido histórico em contribuição ativa em discussões
          e compartilhamento de conhecimento com toda a equipe e empresa; comunicação oral e escrita; além de ser
          habituada a desenvolver
            projetos do zero.

          Atualmente, desenvolvo projetos web propostos em cursos e em comunidades. Sempre buscando aprimorar o conhecimento e trazer
            novos insights. Adoro programar, resolver problemas e
            desenvolver projetos. Sou uma profissional dedicada, curiosa, responsável, criativa, proativa e colaborativa.


          Tenho como missão compreender as regras de negócio do projeto em curso a fim de criar ideias e soluções
            para a produção de uma interface, site ou aplicativo funcional e atraente ao cliente e usuário,
            considerando as boas práticas e otimização do código.

        </ReadMoreText>
      </ReadMoreContainer>
    )
  }

export default ResumeContent;