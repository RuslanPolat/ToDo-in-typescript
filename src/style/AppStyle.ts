import styled from "styled-components";
export const StyledApp = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .div--wrapper {
    height: max-content;
    text-align: center;
    border: 1px solid;
    padding: 10px;
    box-shadow: 5px 1px 10px;
    width: 400px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .todo-input {
    width: 80%;
    height: 40px;
    border-radius: 12px;
    padding: 5px;
    border: 0.5px solid #252525
  }
  .todo-btn {
    background: royalblue;
    color: #FFFFFF
    width: 10%;
    height: 50px;
    border-radius: 12px;
    border: none;
    padding-left: 10px;
    padding-right: 10px
  }
  .todo-ul {
    list-style: none;
    text-align: left;
    padding: 15px;
    font-size: 20px
    display: flex;
}
.todo-li {
    box-shadow: 5px 1px 10px;
    padding: 15px;
    margin-top: 20px;
}

  
`;
