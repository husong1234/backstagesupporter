import styled from 'styled-components';

export const Header = styled.section`
  width:100%;
  height:100%;
  display:flex;
  justify-content:space-between;
  .left{
    width:500px;
    h1{
      color:#fff;
      font-weight:700;
      font-size:24px;
    }
  }
  .right{
    min-width:200px;
    display:flex;
    justify-content:space-between;
    div{
      img{
        width:40px;
        height:40px;
        border-radius:50%;
      }
    }
    a{
      width:75px;
      display:block;
      text-align:center;
      color:#fff;
      transition:all .3s linear;
    }
    a:hover{
      background:yellowgreen;
    }
  }
`
