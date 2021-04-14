import styled from 'styled-components'
import '../../index.css'
import crossIcon from './static/cross.svg';
import tickIcon from './static/check.svg'

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
        <Icon><img src={crossIcon} /></Icon>
    );
    const tick = (
        <Icon><img src={tickIcon} /></Icon>
    );
    return (
    <Alert>
      {options.type === 'info' && '!'}
      {options.type === 'success' && tick}
      {options.type === 'error' && cross}
      {message}
    </Alert>
  );
}