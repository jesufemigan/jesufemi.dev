import styled from 'styled-components';

export const FooterStyle = styled.section`
  background-color: black;
  color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .logo {
    display: flex;
    align-items: center;
    gap:10px;
    img {
      border-radius: 50%;
    }
  }

  .location {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .social-links {
    display: flex;
    align-items: center;
    gap:10px
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding: 50px 80px;

    .social-links {
      justify-self: flex-end;
      gap: 20px;
    }

    .location {
      justify-self: center;
    }

    >p {
      grid-column: 1/4;
      justify-self: center;
    }
  }

`