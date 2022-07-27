import styled from 'styled-components';
import home from '../../assets/home.svg';

export const AllProjectStyle = styled.section`
 padding-bottom: 50px;
  header {
    background-color: #ef9273;
    display: flex;
    align-items: center;
    padding: 30px 30px;
    justify-content: center;
    margin-bottom: 40px;

    h1 {
      color: white;
      font-size: 30px;
      margin-right: auto;
    }

    .home {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: auto;
      background-image: url(${home});
      background-size: 50%;
      background-repeat: no-repeat;
      background-position: center;
      justify-self: flex-start;
      box-shadow: inset -5px -5px 10px #f49d80, inset 5px 5px 10px #e47955;
    }
  }

  @media (min-width: 600px) {
    padding-bottom: 100px;
    header {
      padding: 50px 30px;
      margin-bottom: 100px;
     
      h1 {
        font-size: 40px;
      }
    }
  }
   
`