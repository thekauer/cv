import { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components';
import {TextInput} from '../../containers/AdminEdit/AdminEdit'
import gfm from 'remark-gfm';
import '../../index.css'


interface MDProps  {
    content : string
}
export const MD = ({content} : MDProps) => {
    return (
        <ReactMarkdown plugins={[gfm]} children={content} />
        );
}