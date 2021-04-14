import { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components';
import {TextInput} from '../../containers/AdminEdit/AdminEdit'
import gfm from 'remark-gfm';
import '../../index.css'

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    max-width:100ch;
    justify-content:space-between;
`
const MDWrap = styled.div`
    margin-left:1em;
    display:flex;
    flex-direction:column;
`

interface MDProps  {
    content : string
}
export const MD = ({content} : MDProps) => {
    return (
        <ReactMarkdown plugins={[gfm]} children={content} />
        );
}
interface EditorProps {
        initialContent : string
}
export const Editor = ({initialContent}:EditorProps) => {
    const [content,setContent]  = useState(initialContent);
    return (
        <>
        <Wrapper>
            <TextInput><textarea value={content} onChange={(e)=>setContent(e.target.value)} rows={10} cols={40} /></TextInput>
            <MDWrap><MD content={content} /></MDWrap>
        </Wrapper>
        </>
    );
}