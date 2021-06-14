import styled from 'styled-components'
import Image from 'next/image'

const Alert = styled.div`
    border-radius:5px;
    background-color: #252526;
    padding:0.5em;
    box-shadow: 0 0 16px black;
    color:white;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`

const Icon = styled.div`
    width:1em;
    height:1em;
    margin-right:1em;
`

export const AlertTemplate = ({ style, options, message, close }:any) => {
    const cross = (
        <Icon><Image src={"/static/cross.svg"} width={16} height={16} /></Icon>
    );
    const tick = (
        <Icon><Image src={"/static/check.svg"} width={16} height={16} /></Icon>
    );
    return (
    <Alert>
      {options?.type === 'info' && '!'}
      {options?.type === 'success' && tick}
      {options?.type === 'error' && cross}
      {message}
    </Alert>
  );
}