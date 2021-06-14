import { db } from '@utils/firebase';
import { useState } from 'react';
import styled from 'styled-components';
import { MD } from './MD';


const Table = styled.table`
    text-align:left;
    max-height:400px;
    border-collapse:collapse;
    border-spacing:1px;
    width:100%;
`
const THead = styled.thead`
    line-height:4em;
`
const Tr = styled.tr`
    line-height:2em;
    cursor: pointer;
    border-top:solid 2px var(--theme-mid);
    border-bottom:solid 2px var(--theme-mid);
    &:hover {
        background-color:var(--theme-light);
        border-bottom:solid 2px var(--blue);
    }
`
const Td = styled.td`
    padding:0;
    margin:0;
`
const Body = styled.div`
    overflow-y:auto;
    overflow-x:hidden;
    height:400px;
`

const Icon = styled.div<{path :string,size?:string}>`
    width:${props => props.size ?? "2em"};
    height:${props => props.size ?? "2em"};
    margin-right:0.5em;
    background-color: var(--active-font-color);
    mask: url(${(props: any) => props.path}) no-repeat center / contain;
    cursor: pointer;
`
const MessageView = styled.div`
    & h2 {
        margin-bottom:0.5em;
    }
    & p {
        margin:1em 0;
        word-break:break-all;
        width:40ch;
    }
`
const MenuBar = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    margin-bottom:1em;
`
export interface Message {
    name: string;
    email: string;
    message: string;
    ticks: number
}

interface MailBoxProps {
    messages: Message[]
}
export const MailBox = ({ messages }: MailBoxProps) => {
    const [msg, setMsg] = useState<Message | null>(null);
    const back = () => {
        setMsg(null);
    }
    const del = async () => {
        const doc = await db.collection('mail').where('ticks','==',msg?.ticks).get();
        if(!doc.empty) {
            doc.docs.map((d)=>db.collection('mail').doc(d.id).delete());
        }
        back();
    }
    const displayDate = (ticks : number) => {
        const date = new Date(ticks);
        return date.toLocaleDateString() + " " + date.toLocaleTimeString();
    }
    const ViewMessage = (msg : Message) => {
        return (
            <>
            <MessageView>
            <MenuBar>
                <a onClick={back}><Icon path="/static/back.svg" /></a>
                <a onClick={del}><Icon path="/static/bin.svg" /></a>
            </MenuBar>
            <h2>{msg.name}</h2>
            <span>{msg.email}</span>
            <p>{msg.message}</p>
            <span>{displayDate(msg.ticks)}</span>
            </MessageView>
            </>
        );
    }
    const drawMessage = (message: Message) => {
        return (
            <Tr onClick={() =>setMsg(message)}>
                <Td style={{ width: "25%" }}><MD content={message.name} /></Td>
                <Td style={{ width: "25%" }}><MD content={message.email} /></Td>
                <Td style={{ width: "50%" }}><MD content={message.message.length > 40 ? message.message.slice(0, 40) + "..." : message.message} /></Td>
            </Tr>
        )
    }
    return (
        <>
        {   msg ?
            ViewMessage(msg)
            :
            <Table>
                <THead>
                    <tr>
                        <td>
                            <Table>
                                <tr>
                                    <th style={{ width: "25%" }}>Név</th><th style={{ width: "25%" }}>Email</th><th style={{ width: "50%" }}>Üzenet</th>
                                </tr>
                            </Table>
                        </td>
                    </tr>
                </THead>
                <tbody>
                    <tr><td>
                        <Body>
                            { messages.length > 0 ?
                            <Table>
                                {messages.map(drawMessage)}
                            </Table>
                            :
                            <a>Úgy látszik még nem kaptál üzenetet.</a>
                            }
                        </Body>
                    </td></tr>
                </tbody>
            </Table>
        }
        </>
    );
}