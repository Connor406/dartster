import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center;
  align-items: center;
`

export const Input: any = styled.input`
  border: 1px solid ${(props: any) => (props.$name ? "red" : "gray")};
  margin: 3px;
  border-radius: 2px;
  padding: 5px;
  background-color: white;
  text-decoration: none;
  width: 80%;
`

export const Button = styled.input`
  background-color: black;
  border: none;
  border-radius: 4px;
  padding: 4px 10px;
  margin: 0;
  color: white;
  max-width: 6rem;
  height: 1.6rem;
  text-decoration: none;
  justify-content: center;
  align-items: center;
`

export const NameBox = styled.div`
  display: flex;
  width: calc(80% + 18px);
  margin: 0px;
  padding: 0px;
`

export const Error = styled.div`
  color: red;
  font-size: 0.8rem;
`
