import styled from 'styled-components';

export const ProjectStyle = styled.section`
  margin-bottom: 50px;
  padding-top: 80px;
  >h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .project-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 50px;
    padding: 0 30px;

    .each-project {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;

      .screenshot {
        width: 300px;
        height: 337px;
        object-fit: cover;
        overflow: hidden;
        img {
          transform: translateX(-150px);
          height: 100%;
        }
      }

      .details {
        h1 {
          margin-bottom: 10px;
        }
        .description {
          padding-left: 10px;
          max-width: 400px;
        }

        .tools {
          padding-left: 10px;
          margin-bottom: 20px;
          
          span {
            font-weight: 600;
          }
        }

        .action {
          display: flex;
          align-items: center;
          gap: 20px;

          .live, .code {
            display: flex;
            align-items: center;
            gap: 5px;
            text-decoration: none;
            color: inherit;
          }
        }
      }
    }
  }

  .button {
    text-align: center;
    margin-top: 20px;
    button {
      padding: 10px;
      background-color: #ef9273;
      border-radius: 10px;
      border: none;
      color: white;
    }
  }

  @media (min-width:768px) {
    padding: 0 70px;
    padding-top: 100px;
    margin-bottom: 100px;
    >h1 {
      margin-bottom: 70px;
      font-size: 32px;
      font-weight: 600;
    }
    .project-container {
      gap: 50px;

      >div:nth-of-type(odd) {
        flex-direction: row;
      }

      >div:nth-of-type(even) {
        flex-direction: row-reverse;
      }
      .each-project {
        gap: 200px;
      }
    }
  }

  .button {
    text-align: center;
    margin-top: 30px;
    button {
      padding: 10px;
      background-color: #ef9273;
      border-radius: 10px;
      border: none;
      color: white;
      font-size: 20px;
    }
  }
`