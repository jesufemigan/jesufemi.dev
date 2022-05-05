import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background-color: inherit;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  .hamburger {
    width: 35px;
    height: 35px;
    background-color: #e5e7eb;
    padding: 8px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    img {
      width: 20px;
      height: 20px;
      background: none;
    }
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      font-family: proxima-nova;
      font-size: 18px;
    }
    img {
      border-radius: 50%;
      width: 20px;
    }
  }

  nav {
    a {
      text-decoration: none;
      color: #0d0d0d;
      font-weight: 400;
      cursor: pointer;
    }

    a.highlight {
      font-weight: 700;
      color: #e55e31;
    }

    position: absolute;
    width: 300px;
    top: 80px;
    right: 35px;
    z-index: 2;
    
    ul {
      display: none;
      flex-direction: column;
      gap: 30px;
      background-color: #ef9273;
      border-radius: 10px;
      padding: 15px 20px;

      span {
        position: relative;
        padding: 5px 0;
        padding-left: 50px;
        background-color: #e5e7eb;
        border-radius: 30px;
      }

      span::after {
        content: 'Toggle Theme';
        position: absolute;
        top: 2px;
        margin-left: 10px;
      }
    }

    ul.show {
      display: flex;
    }
  }

  @media (min-width:768px) {
    padding: 10px 80px;
    justify-content: space-evenly;

    @media (min-width:900px) {
      padding: 10px 120px;
    }

    .logo {
      margin-right: auto;
    }
    .hamburger {
      display: none;
    }

    nav {
      display: block;
      position: static;
      width: auto;

      @media (min-width:1200px) {
        margin-right: 120px;
      }

      ul {
        display: flex;
        flex-direction: row;
        background: none;
        align-items: center;
        gap: 20px;


        span {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          padding: 0;
          cursor: pointer;

          ::after {
            content: '';
          }

          img {
            background-color: #e5e7eb;
            padding: 10px;
            border-radius: 50%;
          }
        }

        img {
          margin-left: 70px;
        }
      }
    }
    nav.dark ul a {
      color: white;
    }

    nav.dark ul a.highlight {
      color: #e55e31;
    }
  }
`