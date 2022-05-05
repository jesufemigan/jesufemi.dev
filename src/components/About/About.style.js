import styled from 'styled-components';

export const AboutStyle = styled.section`
  padding: 0 30px;
  margin-bottom: 60px;
  padding-top: 80px;
  h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    .about-me {
      
      button {
        padding: 10px 20px;
        background-color: #ef9273;
        border-radius: 20px;
        border: none;
        color: #ffffff;
        margin-top: 20px;
      }
    }
  }

  .skill-container {
    margin-top: 40px;

    .skill-box {
      max-width: 1000px;
      margin: 0 auto;
      background-color: #ef9273;
      padding: 15px;
      overflow: hidden;
      border-radius: 20px;

      .skills {
        display: flex;
        align-items: center;
        gap: 25px;
        animation: project-anime 10s linear infinite;
        

        .each-skill {
          img {
            width: 70px;
            height: 70px;
          }
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }

  @keyframes project-anime {
    from {
      transform: translateX(0);
    } 

    to {
      transform: translateX(calc(-129px * 6 ));
    }
  }

  @media (min-width:768px) {
    padding: 0 120px;
    padding-top: 100px;
    h1 {
      font-size: 32px;
      font-weight: 600;
    }
    .main-content {
      flex-direction: row;
      justify-content: space-around;
    
      .aboutme-bg {
        /* flex: 50%; */
        width: 305px;
        text-align: center;
      }

      .about-me {
        flex: 50%;
        max-width: 400px;
      }
    }

    .skill-container {
      .skill-box {
        padding-left: 50px;
        padding-right: 50px;
        .skills {
          gap:100px;
        }
      }
    }
    margin-bottom: 80px;
  }
 
`