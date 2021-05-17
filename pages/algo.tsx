import React, { createRef, useEffect, useState } from 'react';
import styled from "styled-components";

const CanvasContainer = styled.div`
    width:90%;
    height:16em;
    overflow:auto;
`

const BinaryTreeCanvas = () => {
    const bgColor = '#1e1e1e';
    const strokeColor = '#007acc';
    const fillColor = '#002e4d';
    const newStrokeColor = '#002e4d';
    const circleRadius = 25;
    const lineHeight = 50;
    const margin = 5;
    const pythagoras = (x : number, y:number) => {
        return Math.sqrt( Math.pow(x,2) + Math.pow(y,2));
    }
    const canvas = createRef<HTMLCanvasElement>();
    const [filled,setFilled] = useState(false);
    const [ctx,setCtx] = useState<CanvasRenderingContext2D>();
    class Node {
        left? : Node;
        right? : Node
        val? : string|number
        constructor(val? : string|number) {
            if(val)
            this.val = val;
        }
    }
    const head : Node = new Node();
    head.val = 1;
    head.left = new Node();
    head.right = new Node();
    
    const getTreeDepth = () => {
        const helper = (curr? : Node) : number => {
            if(!curr) {
                return 0;
            }
            return Math.max(helper(curr.left),helper(curr.right))+1;
        }
        return helper(head);
    }
    let startX = getTreeDepth()*lineHeight+margin;
    let startY = circleRadius+margin;
    const getHovered = (insideCircle : (x : number, y:number)=>boolean) =>  {
        const helper = (curr : Node|undefined,x:number,y:number,depth:number) : number[]|null  => {
            if(!curr) {return null;}
            if(insideCircle(x,y)) {
                return [x,y];
            }
            const left = helper(curr.left,x-circleRadius*Math.pow(2,(getTreeDepth()-depth)),y+lineHeight,depth+1);
            const right = helper(curr.right,x+circleRadius*Math.pow(2,(getTreeDepth()-depth)),y+lineHeight,depth+1);
            return left ?? right;
        }
        return helper(head,startX,startY,0)
    }
    let lastHovered;
    const mouseOver = (e:React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {

        
    }
    const canvasClick = (e:React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
        const rect = canvas.current?.getBoundingClientRect();
        if(!rect){return;}
        const mouseX = e.clientX - rect.x;
        const mouseY = e.clientY - rect.y
        const insideCircle = (x : number, y:number)  => pythagoras(mouseX-x,mouseY-y) <= circleRadius;
        const hovered = getHovered(insideCircle);
        if(hovered) {
            console.log('click')
        }
    }
    const fillHovered = (hovered : number[]) => {
        if(ctx) {
            ctx.fillStyle = fillColor;
            ctx.moveTo(hovered[0],hovered[1]);
            ctx.fill();
        }
    }
    const clearHoveredFill = (hovered : number[]) => {
        if(ctx) {
                ctx.moveTo(hovered[0],hovered[1]);
                ctx.fillStyle = bgColor;
                ctx.fill()
        }
    }
    const drawNode = (node : Node,x : number, y : number,depth : number) => {
        if(ctx) {
            ctx.fillStyle = bgColor;
            ctx.lineWidth = 2;
            ctx.font = "16px Aria"

            
            if(node.val) {
            ctx.strokeStyle = strokeColor;
            ctx.beginPath();
            ctx.arc(x, y, circleRadius, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
            ctx.fillStyle = "white"
            ctx.fillText(node.val.toString(),x-4,y+4);
            ctx.closePath();
            //draw possible new nodes
            const bottomLeft = Math.PI*2-Math.PI/4;
            const bottomRight =Math.PI/4;
            const top = Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(circleRadius*Math.sin(bottomLeft)+x,circleRadius*Math.cos(bottomLeft)+y); 
            ctx.lineTo(circleRadius*Math.sin(top)+x-circleRadius*Math.pow(2,(getTreeDepth()-depth)),circleRadius*Math.cos(top)+y+lineHeight/2); 
            ctx.stroke();
            ctx.closePath();

            ctx.beginPath()
            ctx.moveTo(circleRadius*Math.sin(bottomRight)+x,circleRadius*Math.cos(bottomRight)+y); 
            ctx.lineTo(circleRadius*Math.sin(top)+x+circleRadius*Math.pow(2,(getTreeDepth()-depth)),circleRadius*Math.cos(top)+y+lineHeight/2); 
            ctx.stroke();
            ctx.closePath();
            
            } else {
                ctx.strokeStyle = newStrokeColor;
                ctx.beginPath();
                ctx.arc(x, y, circleRadius, 0, 2 * Math.PI);
                ctx.stroke();
                ctx.fill();
                ctx.fillStyle = "white"
                ctx.fillText("",x-4,y+4) 
                ctx.closePath()
            }
        }

        
    }
    const setCanvasSize = () => {
        if(canvas.current) {
            canvas.current.width = Math.pow(2,2*getTreeDepth())*lineHeight;
            canvas.current.height = lineHeight* (getTreeDepth()+2);
            startX = Math.pow(2,getTreeDepth())*lineHeight;

        }
    }
    const drawTree = () => {
        const helper = (curr : Node|undefined,x : number,y:number,depth:number) => {
            if(!curr) {return;}
            drawNode(curr,x,y,depth);
            helper(curr.left,x-circleRadius*Math.pow(2,(getTreeDepth()-depth)),y+lineHeight,depth+1);
            helper(curr.right,x+circleRadius*Math.pow(2,(getTreeDepth()-depth)),y+lineHeight,depth+1);
        }
        helper(head,startX,startY,0);
    }
    useEffect(()=> {
        const Ctx = canvas.current?.getContext("2d");
        if(Ctx) {
            setCtx(Ctx);
            setCanvasSize();
            drawTree();
        }
    },[canvas])
    return (
        <>
        <CanvasContainer>
        <canvas ref={canvas} onMouseMove={(e)=>mouseOver(e)} onClick={(e)=>canvasClick(e)} ></canvas>
        </CanvasContainer>
        </>
    );
}

const BinaryTree = () => {
    return (
        <>
        <h2>Bináris fa</h2>
        <BinaryTreeCanvas/>
        </>
    );
}

const HashTableContainer = styled.div`
margin:1em;
& fieldset {
    border: none;
    display:flex;
    flex-direction:row;
    gap:1em;
    margin-bottom:1em;
    align-items:center;
}
& table {
    border-collapse:collapse;
    margin:1em;
}
& td {
    padding:0.5em;
    margin:0;
    border:1px solid var(--theme-light);
}
& td.active {
    //border: 1px solid var(--blue);
    background-color: var(--blue);
}
& select {
    background-color: var(--theme-mid);
    border:none;
}
& input {
    background-color: var(--theme-mid);
    border:none;
    padding:0.5em;
}
& button {
    background-color:var(--theme-mid);
    padding:0.5em;
    border: 1px solid var(--theme-light);
}
& button:hover {
    background-color:var(--theme-light);
    border:1px solid var(--theme-mid);
    box-shadow: 0 0 8px var(--theme-dark);
}

`

interface HashOptions {
    type : number;
    size : number;
    m? : number;
    c1? : number,
    c2? : number,
    number? : number,
    activeIdx? : number,
    attempt : number
}
const HashTables = () => {
    const [options,setOptions] = useState<HashOptions>({type:0,size:0,attempt:0})
    const [hashtable,setHashTable] = useState<(number|string|(number|string)[])[]>([]);
    const row = createRef<HTMLTableRowElement>();

    const hash = (i? :number) => {
        if(options.number && options.m) {
            if(i) {
                if(options.attempt==0) {
                    return (options.number + i)===0 ? 0 : (options.number + i) % options.m;
                }
                if(options.attempt==1 && options.c1 && options.c2) {
                    return (options.number + options.c1*i + +options.c2* i*i) % options.m;
                }
            } else {
                return options.number === 0 ? 0 : options.number % options.m;
            }
        }
        return -1;
    }
    const directInsert = () => {
        if(options.number) {
            if(hashtable[options.number] == ' ' ) {
                hashtable[options.number]=options.number;
                setOptions({...options,number:undefined,activeIdx:undefined});
            } else {
                alert('nem sikerült beilleszteni')
            }
            if(!(options.number<hashtable.length && options.number>=0)) {
                alert('nem sikerült beileszteni');
            }
        }
    }
    const directDelete = () => {
        if(options.number) {
            hashtable[options.number]=' ';
            setOptions({...options,number:undefined,activeIdx:undefined});
        }
    }
    const directSearch = () => {
        if(options.number) {
            setOptions({...options,activeIdx:options.number,number:undefined})
        }
    }

    const directLLInsert = () => {
        if(options.number) {
            if(hashtable[hash()]===' ') {
                hashtable[hash()]=options.number;
                setOptions({...options,number:undefined,activeIdx:undefined});
            } else {
                if(typeof(hashtable[hash()]) != typeof([])) {
                    const val = hashtable[hash()];
                    if(val!==options.number) {
                        hashtable[hash()]=[val as string|number,options.number];
                        setOptions({...options,number:undefined,activeIdx:undefined});
                    } else {
                        alert('már van ilyen elem a táblában');
                    }
                } else {
                    let arr = (hashtable[hash()] as (string|number)[]);
                    if(!arr.includes(options.number))  {
                        arr.push(options.number);
                        setOptions({...options,number:undefined,activeIdx:undefined});
                    } else {
                        alert('már be lett szúrva')
                    }
                }
            }
        }
    }
    const directLLDelete = () => {
        if(options.number) {
            if(hashtable[hash()]==' ') {
                alert('nincs ilyen elem a táblában');
            } else {
                if(hashtable[hash()]===options.number) {
                    hashtable[hash()]=' ';
                    setOptions({...options,number:undefined,activeIdx:undefined});
                } else {
                    if(typeof(hashtable[hash()])==typeof([])) {
                        let ht = hashtable[hash()] as (number|string)[];
                        if(ht.includes(options.number)) {
                            ht.splice(ht.indexOf(options.number),1);
                            setOptions({...options,number:undefined,activeIdx:undefined});
                        } else {
                            alert('nincs ilyen elem a táblában')
                        }
                    }
                }
            }
        }
    }
    const directLLSearch = () => {
        if(options.number) {
            if(hashtable[hash()]===' ') {
                alert('nincs ilyen elem a táblában');
            } else {
                if(hashtable[hash()]===options.number) {
                    setOptions({...options,activeIdx:hash(),number:undefined});
                } else {
                    if(typeof(hashtable[hash()])==typeof([])) {
                        let ht = hashtable[hash()] as (number|string)[];
                        if(ht.includes(options.number)) {
                            setOptions({...options,activeIdx:hash(),number:undefined});
                        } else {
                            alert('nincs ilyen elem a táblában')
                        }
                    }
                }
            }
        }
    }
    const openInsert = ()  => {
        if(options.number) {
            let i=0;
            while(hashtable[hash(i)] != ' ' && hashtable[hash(i)] != 'D' && i < hashtable.length && hashtable[hash(i)]!=options.number) {
                i++;
            }
            if(hashtable[hash(i)]==options.number) {
                alert('már benne van a hasító táblában');
            } else {
                if(i<hashtable.length) {
                    hashtable[hash(i)]=options.number;
                    alert(i + " próbálkozás után sikerült beileszteni");
                    setOptions({...options,number:undefined,activeIdx:undefined});
                } else {
                    alert('nem tudtam beletenni a hasító táblába')
                }
            }

        }
    }
    const openDelete = () => {
        if(options.number) {

            let i =0;
            while(hashtable[hash(i)] !== options.number && i < hashtable.length) {
                i++;
            }
            if(i< hashtable.length) {
                hashtable[hash(i)]='D';
                alert(i + " próbálkozás után sikerült törölni");
                setOptions({...options,number:undefined,activeIdx:undefined});
            } else {
                alert('nem volt ilyen elem a hasító táblában');
            }
        }
    }
    const openSearch = () => {
        if(options.number) {
            let i =0;
            while(hashtable[hash(i)] !== options.number && i < hashtable.length) {
                i++;
            }
            if(i< hashtable.length) {
                alert(i + " próbálkozás után sikerült megkeresni");
                setOptions({...options,activeIdx:hash(i),number:undefined});
            } else {
                alert('nem volt ilyen elem a hasító táblában');
            }
        }
    }
    return (
        <>
        <h2>Hasítótáblák</h2>
        <HashTableContainer>
        <div>
        <fieldset>
        <label htmlFor="addressing">címzés</label>
        <select name="addressing" onChange={(e)=>{setOptions({...options,activeIdx:undefined,type:Number(e.target.value)});setHashTable([]); } }>
            <option value="0">Direkt</option>
            <option value="1">Direkt Láncolt listával</option>
            <option value="2">Nyílt</option>
        </select>
        </fieldset>
        <fieldset>
        <label htmlFor="size">Méret</label>
        <input type="number" min="1" name="size" value={options.size} onChange={(e)=>setOptions({...options,size:Number(e.target.value)})}></input>
        </fieldset>
        {options.type!=0 && (<>
        <fieldset>
            <label htmlFor="func">Hash funkció</label>
            <select name="func">
                <option value="div">Osztó (k mod m)</option>
            </select>
        </fieldset>
        <fieldset>
        <label htmlFor="m">m</label>
        <input type="number" min="1" name="m" value={options.m} onChange={(e:any) => setOptions({...options,m:Number(e.target.value)})}></input>
        </fieldset>
        </>)}
        {options.type==2 && (
            <>
            <fieldset>
            <label htmlFor="attempt">Próba típusa</label>
        <select name="attempt" onChange={(e)=>setOptions({...options,attempt:Number(e.target.value)}) }>
            <option value="0">Lineáris</option>
            <option value="1">Négyzetes</option>
            <option value="2">Kettős</option>
        </select>
            </fieldset>
            {options.attempt==1 && (
                <>
                <fieldset>
                    <label htmlFor="c1">c1</label>
                    <input type="number" value={options.c1} name="c1" onChange={(e)=> {
                        const n = Number(e.target.value);
                            setOptions({...options,c1:n});
                    }}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="c2">c1</label>
                    <input type="number" value={options.c2} name="c2" onChange={(e)=> {
                        const n = Number(e.target.value);
                            setOptions({...options,c2:n});
                    }}></input>
                </fieldset>
                </>
            )}
            </>
        )}
        <fieldset>
            <button onClick={()=>{
                const ht : (number|string)[] = [];
                ht.length=options.size;
                ht.fill(' ',0,options.size);
                setHashTable(ht);
                }}>Készít</button>
        </fieldset>
        </div>
        <table>
            <tbody>
            <tr ref={row}>
                {options.size >0 && hashtable.map( (x,idx)=><td key={idx} className={idx==options.activeIdx?"active":""}>{typeof(x)==typeof([])?(x as (string|number)[]).join(','):x}</td>)}
            </tr>
            </tbody>
        </table>
        {hashtable.length!=0 && (<>
        <fieldset>
            <input type="number" min="0" name="num" onChange={(e)=>setOptions({...options,number:Number(e.target.value)})}></input>
        </fieldset>
        <fieldset>
            <button onClick={options.type==2? (e)=>openInsert() : options.type== 1 ? (e)=>directLLInsert() : (e)=>directInsert() }>Beszúr</button>
            <button onClick={options.type==2? (e)=>openDelete() : options.type== 1 ? (e)=>directLLDelete() : (e)=>directDelete()}>Töröl</button>
            <button onClick={options.type==2? (e)=>openSearch() : options.type== 1 ? (e)=>directLLSearch() : (e)=>directSearch()}>Keres</button>
        </fieldset>
        </>)}
        </HashTableContainer>
        </>
    )
}

const MenuItem = styled.a`
    padding:0.5em;
    color:var(--nav-font-color);
    border-right:solid 1px var(--nav-border);
    background-color: var(--theme-light);
    &.active {
        background-color:var(--theme-dark);
        color:var(--active-font-color);
    }
    &:hover {
        cursor: pointer;
    }
`
const MenuBar = styled.nav`
padding:0.5em 0;
`

const Topic = styled.div`
display:none;
 &.active {
     display:block;
 }
`


const Algo = () => {
    const [activeIdx,setActiveIdx] = useState(0);
    const menuItems : React.RefObject<HTMLAnchorElement>[]= []
    const topicItems : React.RefObject<HTMLDivElement>[]= []
    const topics = [
        "Bináris Fa",
        "Bináris Kereső Fa",
        "Kupacok",
        "Lineáris idejű rendezések",
        "Hasítótáblák",
        "Aszimptotika"
    ]; 
    const topicContents = [
        <BinaryTree/>,
        "Bináris Kereső Fa",
        "Kupacok",
        "Lineáris idejű rendezések",
        <HashTables/>,
        "Aszimptotika"
    ]
    const menuClick = (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        menuItems[activeIdx].current?.classList.remove('active');
        topicItems[activeIdx].current?.classList.remove('active');

        const currId = +e.currentTarget?.id.replace("menu","");
        setActiveIdx(currId);

        e.currentTarget?.classList.add('active');
        topicItems[currId].current?.classList.add("active");
    }
    return (
        <>
            <h1>Algo</h1>
            <MenuBar>
                {
                    topics.map((topic,idx) => {
                        menuItems.push(createRef<HTMLAnchorElement>());
                    return (<MenuItem className={idx==0?"active":""} key={idx} id={"menu" + idx} ref={menuItems[idx]} onClick={(e)=>menuClick(e)}>{topic}</MenuItem>)
                })
                }
            </MenuBar>
            {
                topicContents.map((topic,idx)=>{
                    topicItems.push(createRef<HTMLDivElement>());
                    return (
                        <Topic className={idx==0?"active":""} key={idx} ref={topicItems[idx]} id={"topic"+idx}>{topic}</Topic>
                    )
                })
            }
        </>
    );
}

export default Algo;