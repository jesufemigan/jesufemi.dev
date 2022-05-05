import styled from 'styled-components';

export const ContactStyle = styled.section`
  text-align: center;
  margin-bottom: 50px;
  padding-top: 80px;
  position: relative;
  h1 {
    /* position: relative; */
    margin-bottom: 20px;
  }
  .container {
    padding: 0 30px;
    .contactme-bg {
      display: none;
    }

    form {
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
      >* {
        border-radius: 30px;
        padding: 15px;
        border: 1px solid #0d0d0d;
        color: #0d0d0d;
        font-weight: 500;
      }

      textarea {
        color: #0d0d0d;
      }

      input:last-child {
        background-color: rgba(238, 186, 168, 1);
        font-size: 16px;
        color: #0d0d0d;
        cursor: pointer;
      }
    }
  }

  .success {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 15px;
    border-radius: 5px;
    background-color: #f5c0ae;
    position: absolute;
    top: 45%;
    right: 4%;
    z-index: 3;
    animation: success 3s linear;
    animation-fill-mode: forwards;
  }

  @keyframes success {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
  @media (min-width: 768px) {
    padding: 0 60px;
    padding-top: 100px;
    h1 {
      margin-bottom: 70px;
    }
     .container {
       display: flex;
       justify-content: space-around;
       align-items: center;
       gap:30px;
       .contactme-bg {
        display: block;
        flex: 50%;
        max-width: 330px;
        img {
          width: 100%;
        }
      }

      form {
        flex: 50%;
      }

    }

    .success {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 5px 15px;
      border-radius: 5px;
      background-color: #f5c0ae;
      position: absolute;
      top: 55%;
      right: 4%;
      z-index: 3;
    }
  }

  @media (min-width: 1000px) {
    padding: 0 150px;
    padding-top: 100px;
    margin-bottom: 120px;
  }

  
`