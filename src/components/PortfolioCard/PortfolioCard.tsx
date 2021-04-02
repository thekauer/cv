import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './PortfolioCard.css'
import '../../index.css'
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useHistory } from 'react-router-dom';

interface PortfolioCardProps {
    title : string;
    desc : string;
    color : string;
    icon : any | null;
    path : string;
};

const PortfolioCard : React.FC<PortfolioCardProps>  = ({title,desc,color,icon,path}) => {
    const handleClick = () => {
           window.location.href=path;
    }
    return (
        <div className="portfolio-card" style={{borderBottomColor:color}}>
            <Fade triggerOnce fraction={1}>
            <div className="portfolio-card-content">
            <SkeletonTheme color="#888" highlightColor="var(--font-color)">
            <div className="portfolio-header">
            <div>
            <h1>{title || <Skeleton/>}</h1>
            <p>{desc || <Skeleton count={4}/>}</p>
            </div>
            {icon && <Fade><img src={icon} alt={title}></img></Fade>}
            </div>
            </SkeletonTheme>
            </div>
            </Fade>
            <div className="portfolio-card-footer">
            <SkeletonTheme color="#888" highlightColor="var(--font-color)">
                <button onClick={handleClick}>Read More</button>
            </SkeletonTheme>
            </div>
        </div>

    );
}
export default PortfolioCard;