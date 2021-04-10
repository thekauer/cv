import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './PortfolioCard.css'
import '../../index.css'
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useHistory } from 'react-router-dom';
import { MoreButton } from '../MoreButton/MoreButton';

interface PortfolioCardProps {
    title : string;
    desc : string;
    color : string;
    icon : any | null;
    path : string;
};

const PortfolioCard : React.FC<PortfolioCardProps>  = ({title,desc,color,icon,path}) => {
    return (
        <div className="portfolio-card" style={{borderBottomColor:color}}>
            <Fade triggerOnce fraction={1}>
            <div className="portfolio-card-content">
            <div className="portfolio-header">
            <div>
            <h3>{title}</h3>
            <p>{desc}</p>
            </div>
            {icon && <Fade><img src={icon} alt={title}></img></Fade>}
            </div>
            </div>
            </Fade>
            <div className="portfolio-card-footer">
                <MoreButton to={path}/>
            </div>
        </div>

    );
}
export default PortfolioCard;