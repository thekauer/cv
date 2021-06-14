import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { AdminBlogItem } from '../admin';
import { BlogArticleContainer, Cover, Description, Footer, StyledBlogArticle } from '../blog/article/[id]';
import formatDate from '../@utils/util';
import { Button } from '../../components/BlogCard';
import firebase,{ db } from '../@utils/firebase';
import { MD } from '../../components/MD';
import { useAlert } from 'react-alert';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { useFetchPost } from '@hooks/useFetchPost';


const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const IconContainer = styled.div`
    margin-left: 0.5em;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
`
const PencilIcon = styled.div`
    visibility:hidden;
    opacity:0;
    margin: 0 1em;
    transition:all var(--transition-time);
    ${RowContainer}:hover & {
        visibility:visible;
        opacity:1;
    }
`
const Icon = styled.div`
    fill:#888;
    transition: fill 100ms;
    margin-left: 0.5em;
    cursor: pointer;
    width: 1em;
    height: 1em;
    & svg path{
        fill:#888;
    }
    &:hover svg path {
        fill:white;
    }
`
export const TextInput = styled.div`
    & > * {
    background-color: var(--theme-mid);
    color:var(--font-color);
    padding:0.5em;
    border:none;
    }
    &>*:focus {
        border-bottom: solid 5px var(--theme-dark);
        box-shadow: 0 0 16px rgba(0,0,0,0.3);
    }
`

const EditRow = ({ children }: any) => {
    const [editing, setEditing] = useState(false);
    const toggleEditing = () => setEditing(!editing);
    const pencil = (
        <svg viewBox="0 0 640 640" onClick={toggleEditing}>
            <path d="M598.46 28.57C560.36 -9.52 498.37 -9.53 460.27 28.57C458.95 29.89 452.35 36.5 440.46 48.38C221.78 267.06 100.29 388.55 75.99 412.85C75.87 412.97 75.77 413.1 75.65 413.23C74.42 414.5 73.44 416.03 72.84 417.75C65.62 438.31 7.92 602.8 0.71 623.36C-0.89 627.89 0.27 632.94 3.66 636.34C6.05 638.72 9.24 640 12.5 640C13.89 640 15.29 639.77 16.64 639.29C20.78 637.84 53.87 626.23 58.01 624.78C64.52 622.5 67.95 615.36 65.66 608.85C63.38 602.33 56.24 598.9 49.73 601.19C48.61 601.58 43 603.55 32.91 607.09L89.85 444.78L195.21 550.15C139.77 569.6 108.97 580.41 102.81 582.57C96.29 584.85 92.86 591.99 95.15 598.5C97.44 605.02 104.57 608.45 111.08 606.16C122.2 602.26 211.13 571.06 222.25 567.16C223.97 566.56 225.49 565.58 226.76 564.36C226.89 564.24 227.03 564.13 227.15 564C263.6 527.56 555.16 235.99 591.61 199.54C591.61 199.54 591.61 199.54 591.62 199.54C593.6 197.56 609.44 181.71 611.42 179.73C649.52 141.63 649.52 79.64 611.43 41.54C608.83 38.95 599.76 29.87 598.46 28.57ZM102.51 421.69L449.3 74.9L565.1 190.7L218.31 537.49L102.51 421.69ZM582.78 173.02L524.88 115.12L466.98 57.22C473.56 50.64 477.22 46.98 477.95 46.25C506.3 17.9 552.43 17.9 580.78 46.25C582.08 47.55 592.45 57.92 593.75 59.22C622.1 87.57 622.1 133.7 593.75 162.05C592.28 163.51 588.63 167.17 582.78 173.02Z" />
            <path d="M166.63 410.28C161.75 415.16 161.75 423.08 166.63 427.96C169.07 430.4 172.27 431.62 175.47 431.62C178.67 431.62 181.87 430.4 184.31 427.96C205.34 406.93 373.59 238.67 394.63 217.64C399.51 212.76 399.51 204.85 394.63 199.96C389.74 195.08 381.83 195.08 376.95 199.96C334.88 242.03 187.66 389.25 166.63 410.28Z" />
            <path d="M418.77 158.14C413.89 163.02 413.89 170.94 418.77 175.82C421.21 178.26 424.41 179.48 427.61 179.48C430.81 179.48 434.01 178.26 436.45 175.82C438.48 173.79 454.73 157.54 456.77 155.5C461.65 150.62 461.65 142.71 456.77 137.83C451.89 132.94 443.97 132.94 439.09 137.83C435.02 141.89 420.8 156.11 418.77 158.14Z" />
        </svg>
    );

    const clickTick = () => {
        toggleEditing();
    }
    return (
        <RowContainer>
            {children}
            {editing ? <IconContainer></IconContainer> : <PencilIcon><Icon>{pencil}</Icon></PencilIcon>}
        </RowContainer>
    );
}

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    max-width:100ch;
    justify-content:end;
`
const MDWrap = styled.div`
    margin-left:1em;
    display:flex;
    flex-direction:column;
`
const Title = styled.input`
    background:transparent;
    border:none;
    font-size:2.5em;
    font-weight:bold;
`
const DescriptionInput = styled.textarea`
    background:transparent;
    border:none;
    font-size:1em;
    margin-top:0.25em;
    margin-bottom:2em;
`
const EditCover = styled(Cover)`
    &:hover {
        background: url('/static/add.svg');
        cursor: pointer;
        background-position:center center;
        background-repeat:no-repeat;
        background-size:contain;
    }
`
export const getServerSideProps: GetServerSideProps = async context => {
    const {id}  = context.params as any;
    return { props: {id:id as string} };
}

export default function AdminEdit({id}:{id:string}) {
    const item = useFetchPost(id);
    const [title, setTitle] = useState<string>()
    const [desc, setDesc] = useState<string>();
    const [content, setContent] = useState("");
    const [image,setImage] = useState<string>();
    useEffect(() => {
        if (item) {
            setTitle(item.title);
            setDesc(item.desc);
            setContent(item.content);
            setImage(item.image);
        }
    }, [item])
    const inputFile = useRef<HTMLInputElement>(null) 
    let router = useRouter();
    const back = () => {
        router.back();
    }
    const alert = useAlert();
    const alertUploadStatus = (promise : Promise<any>) => {
        promise.then(()=>{
            alert.success("Sikeresen frissítetted a postot.");
        }).catch(()=>{
            alert.error("Nem sikerült frissíteni a postot.");
        });
    }
    const upload = () => {
        const payload = {
            content: content,
            date: item?.date,
            desc: desc,
            image: image,
            title: title
        }
        const blogRef = db.collection('blog');
        if (item != undefined) {
            let promise = blogRef.doc(item.id).set(payload);
            alertUploadStatus(promise)
        } else {
            let date = firebase.firestore.Timestamp.now();
            let promise = blogRef.add({...payload,date:date});
            alertUploadStatus(promise);
        }
    }
    const changeTitle = (event: any) => {
        setTitle(event.target.value)
    }
    const changeDesc = (event: any) => {
        setDesc(event.target.value);
    }

    const handleFileUpload = () => {
       inputFile.current?.click();
    };
    const handleLoaded = (read:ProgressEvent<FileReader>) => {
        let bs = read.target?.result;
        setImage(btoa(bs as string));
        console.log(btoa(bs as string))
    }
    const onChangeFile = (event: any) => {
        event.stopPropagation();
        event.preventDefault();
        let file = event.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = handleLoaded;
            reader.readAsBinaryString(file);
        }
    }
    return (
        <>
            <BlogArticleContainer>
            <StyledBlogArticle>
                <EditCover src={image ?? ""} onClick={handleFileUpload}/>
                <input type='file' id='file' ref={inputFile} style={{display: 'none'}} accept="image/png" onChange={onChangeFile}/>
                <Description>
                    <EditRow><Title value={title} onChange={changeTitle} /></EditRow>
                    <EditRow><DescriptionInput value={desc} onChange={changeDesc} /></EditRow>
                    <Wrapper>
                        <TextInput><textarea value={content} onChange={(e) => setContent(e.target.value)} rows={10} cols={40} /></TextInput>
                        <MDWrap><MD content={content} /></MDWrap>
                    </Wrapper>
                </Description>
                <Footer>
                    <div>
                        {item && formatDate(item?.date)}
                    </div>
                    <div>
                        <Button onClick={back}>Vissza</Button>
                        <Button onClick={upload}>Feltölt</Button>
                    </div>
                </Footer>
            </StyledBlogArticle>
            </BlogArticleContainer>
        </>
    );
}