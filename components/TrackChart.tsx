import { db } from "@utils/firebase";
import { useEffect, useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { todayToDays } from '@hooks/useTrack'
import styled from "styled-components";

const StyledTrackChart = styled.article`
    display:flex;
    flex-direction:column;
`
const Data = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    gap:1em;
    & em {
        margin-right:1em;
    }
`
const Table = styled.article`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`
const Column = styled.section`
    margin:0.5em 0;
    display:flex;
    flex-direction:column;
    & header {
        margin-bottom:1em;
        padding:0 !important;
    }
`
interface RowProps {
    value?:number;
    max?:number;
    name:string
}
    const StyledRow = styled.div`
        cursor: pointer;
        display:flex;
        flex-direction:row;
        align-items:center;
        padding:0.5em;
        gap:1em;
        border: 1px solid var(--theme-light);
        &:hover {
            background-color:var(--theme-mid);
        }
        &:focus {
            border-bottom:solid 1px var(--blue);
        }
    `
    const ProgessContainer = styled.div`
        display:grid;
        align-items:center;
        & progress,& em {
            grid-area:1 / 1 /2 / 2;
        }
        & em {
            z-index: 10;
            margin-left:1ch;
        }
    `
    const Progess = styled.progress`
        height:1.5em;
        appearance: none;
        &[value]::-webkit-progress-bar {
            background:transparent;
            border-radius:5px;
        }
        &[value]::-webkit-progress-value {
            background:var(--blue);
            filter:opacity(0.7);
            border-radius:5px;
        }
    `
    const Value = styled.div`
    `
const Row = ({value,max,name}:RowProps) => {
    return (
        <>
        <StyledRow>
            <ProgessContainer><Progess value={value} max={max}/><em>{name}</em></ProgessContainer><Value>{value}</Value>
        </StyledRow>
        </>
    );
}
interface Click {
    count : number;
    days : number;
    name : string;
}
interface TrackedNumber {
    today:number;
    thisMonth:number;
}
interface NamedTrackedNumber extends TrackedNumber{
    name : string;
}
interface TrackResult {
    visits : TrackedNumber;
    pages : NamedTrackedNumber[];
    buttons : NamedTrackedNumber[];
}
export const TrackChart = () => {
    const getCount = ( name : string, clicks : Click[] ) => {
        return clicks?.filter(click=>click.name===name).map(visit=>visit.count);
    }

    const [clicks, setClicks] = useState<Click[]>();
    const [results, setResults] = useState<TrackResult>(); 
    const [focused, setFocused] = useState<number[]>();
    const getClicks = async () => {
        const today = todayToDays();
        const last30days = await db.collection('clicks').orderBy('days','desc').where('days','>=',today-30).get();
        let clicks : Click[] = [];
        last30days.docs.map((doc)=>{
            clicks.push({...doc.data()} as Click)
        })
        return clicks;
    }
    const getTrackResultsForName = (name : string,clicks : Click[]) : TrackedNumber => {
        let [today,thisMonth] = [0,0];
        clicks.forEach((click)=>{
            if(click.name==name) {
                thisMonth+=click.count;
                if(click.days==todayToDays()) {
                    today = click.count;
                }
            }
        })
        return {
            today:today,
            thisMonth:thisMonth
        }
    }
    const getTrackedResultsForType = (prefix: string,clicks : Click[]) => {
        const names =  new Map<string,TrackedNumber>();
        let results : NamedTrackedNumber[] = [];
        const today = todayToDays();
        clicks.filter( click => click.name.startsWith(prefix)).forEach( click => {
            let current = names.get(click.name);
            if(current) {
                if(click.days==today) {
                    current.today=click.count;
                }
                current.thisMonth += click.count;
                names.set(click.name,current);
            } else {
                names.set(click.name,{today:click.count,thisMonth:click.count});
            }
        })
        names.forEach((val,key)=>{
            results.push({
                name:key.replace(prefix+":",""),
                today:val.today,
                thisMonth:val.thisMonth
            })
        })
        console.log('log:/',results.filter(elem => elem.name==='/'));
        return results;
    }
    const getVisists = (clicks : Click[]) => {
        return getTrackResultsForName("visit",clicks);
    }
    const getPages = (clicks: Click[]) => {
        return getTrackedResultsForType('page',clicks);
    }
    const getButtons = (clicks: Click[]) => {
        return getTrackedResultsForType('button',clicks);
    }
    useEffect(()=>{
        const getResults = async () => {
            const clicks = await getClicks();
            setClicks(clicks);
            setResults({
                visits:getVisists(clicks),
                pages:getPages(clicks),
                buttons:getButtons(clicks)
            })
            setFocused(getCount('visit',clicks));

        }

        getResults()
    },[]);
    return (
        <>
        <StyledTrackChart>
        <Data>
            <Data><h2>Ma</h2><h2>{focused && focused[focused.length-1]}</h2></Data>
            <Data><h2>Az elmúlt 30 napban</h2><h2>{focused && focused.reduce((a,b)=>a+b) }</h2></Data>
        </Data>
        <Sparklines data={focused} height={100}>
            <SparklinesLine color="var(--blue)"/>
        </Sparklines>
        <Table>
            <Column>
                <header><h3>Megtekintések</h3></header>
                <Row name={"megtekintések"} value={results?.visits.today} max={30}/>
            </Column>
            <Column>
                <header><h3>Lapok</h3></header>
                {
                    results?.pages.sort((a,b)=>a.today>=b.today?-1:1).map( (page,idx) => (
                        <Row name={page.name} value={page.today} key={idx} max={100}/>
                    ))
                }
            </Column>
            <Column>
                <header><h3>Gombok</h3></header>
                {
                    results?.buttons.sort((a,b)=>a.today>=b.today?-1:1).map( (button,idx) => (
                        <Row name={button.name} value={button.today} key={idx} max={100}/>
                    ))
                }
            </Column>
        </Table>
        </StyledTrackChart>
        </>
    );
}