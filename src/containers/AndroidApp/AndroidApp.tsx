import { Helmet } from 'react-helmet';
import { appDesc, appName } from '../../content';
import '../../index.css';
import './AndroidApp.css';
export const AndroidApp = () => {
    return (
        <>
            <Helmet>
                <title>Android Alkalmazás - Kauer András</title>
            </Helmet>
            <article className="android">
                <header>
                    <div className="text">
                    <h1>{appName}</h1>
                    <em>{appDesc}</em>
                    </div>
                </header>
                <section>
                    <div className="row">
                        <div className="text">
                            <header>

                            </header>
                        </div>
                        <video>
                            <source type="video/mp4" />
                        </video>
                    </div>
                </section>

            </article>
        </>
    );
}