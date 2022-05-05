import styled from 'styled-components';

import handsome from '../../assets/handsome_face.jpg';

export const HomeStyle = styled.section`
  margin-bottom: 50px;
  background-color: inherit;
  padding-top: 80px;
  @media (min-width: 1000px) {
    margin-bottom: 170px;
  }
  .main-home-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0 30px;
    .my-description {
      grid-column: span 2;
      h1 {
        font-size: 32px;
        font-weight: 600;
      }

      h3 {
        font-size: 18px;
        margin-bottom: 10px;
        font-weight: 400;
      }

      p {
        line-height: 1.3;
        font-size: 14.5px;
        max-width: 400px;
        margin-bottom: 20px;
      }

      button {
        padding: 10px 20px;
        background-color: #ef9273;
        border-radius: 20px;
        border: none;
        color: #ffffff;
      }
    }

    .social-links {
      grid-column: 1/2;
      grid-row: 2/3;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      margin-top: 20px;

      a {
        width: fit-content;
      }
    }

    figure {
      grid-column: 2/3;
      width: 201.27px;
      height: 224.76px;
      background-color: rgba(211, 143, 121, 0.72);
      margin-top: 20px;
      span {
        width: 201.27px;
        height: 224.76px;
        background-image: url(${handsome});
        display: block;
        transform: translate(-15px, -15px);
        background-size: cover;

      }
    }
  }

  @media (min-width:768px) {
    padding-top: 100px;
    .main-home-container {
      grid-template-columns: auto 1fr;
      padding: 0 120px;
      align-content: center;
      margin-top: 90px;
      @media (min-width:768px) {
        /* padding-top: 100px; */
      }

      .my-description {
        grid-column: 2/3;

        h1 {
          font-size: 48px;
        }

        h3 {
          font-size: 24px;
        }

        p {
          font-size:  16px;
        }
      }

      figure {
        grid-column: 3/4;
        margin-right: auto;
        width: 250px;
        height: 280px;

        @media (min-width: 1200px) {
          margin-right: 150px;
        }

        span {
          width: inherit;
          height: inherit;
        }
      }

      .social-links {
        margin-top: 100px;
        margin-right: 80px;
        grid-column: 1/2;
        grid-row: 1/2;
        width: fit-content;
      }
    }
  }
`