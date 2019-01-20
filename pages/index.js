/* pages/index.js */
import { Container, Nav, NavItem } from "reactstrap";
import Layout from "../components/Layout";
import Link from "next/link";

import "../static/css/custom/main-containers.css";
import "../static/css/custom/ico-pad.css";

export default () => {
    return (
        <Layout>
            <div className="main-img">
                <Container>
                    <Nav className="navbar">
                        <NavItem>
                            <div className="ui horizontal list">
                                <Link href="/">
                                    <div className="item">
                                        <img
                                            className="ui mini circular image"
                                            src="../static/img/el-zelda.png"
                                        />
                                        <div className="content">
                                            <div className="ui sub header">
                                                João Morais
                                            </div>
                                            Student
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </NavItem>
                        <NavItem className="ml-auto">
                            <Link href="/">
                                <i className="ico-pad fab fa-github" />
                            </Link>
                            <Link href="/">
                                <i className="ico-pad fab fa-linkedin" />
                            </Link>
                            <Link href="/">
                                <i className="ico-pad fas fa-comments" />
                            </Link>
                        </NavItem>
                    </Nav>
                </Container>
                <Container>
                    <div className="name-div">
                        <div
                            align="center"
                            className="texttt uk-text-lead uk-text-bold blck"
                        >
                            Hello.
                        </div>
                        <hr className="blck" />
                        <div className="texttt-meta uk-text-meta uk-text-bold">
                            scroll me!{" "}
                            <i className="far fa-arrow-alt-circle-down" />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="what-ive-done">
                <Container>
                    <h1>
                        <span className=" uk-text-bold uk-text-background my-work-inner-title">
                            Who am I?
                        </span>
                    </h1>
                    <p>
                        <span className="uk-text-bold uk-text-justify uk-text-background my-work-inner-text">
                            I am curious and I am passionate about learning new
                            things. Mostly when building things. Highly
                            innovative software engineering student focused and
                            dedicated with a desire to gain a strong technical
                            and theoretical foundation.
                        </span>
                    </p>
                    <div className="row">
                        <div align="center" className="col-sm">
                            <h4>
                                <span className="uk-text-uppercase uk-text-bold uk-text-background my-work-inner-grid-title">
                                    software
                                </span>
                            </h4>
                            <p>
                                <span className="uk-text-bold uk-text-justify uk-text-background my-work-inner-grid-text">
                                    I have developed several college-based APIs,
                                    microservices. My last project was a
                                    closet-manager full-stack application.
                                </span>
                            </p>
                        </div>
                        <div align="center" className="col-sm">
                            <h4>
                                <span className="uk-text-uppercase uk-text-bold uk-text-background my-work-inner-grid-title">
                                    reading
                                </span>
                            </h4>
                            <p>
                                <span className="uk-text-bold uk-text-justify uk-text-background my-work-inner-grid-text">
                                    I have read several books.
                                </span>
                            </p>
                        </div>
                        <div align="center" class="col-sm">
                            <h4>
                                <span className="uk-text-uppercase uk-text-bold uk-text-background my-work-inner-grid-title">
                                    sports
                                </span>
                            </h4>
                            <p>
                                <span className="uk-text-bold uk-text-justify uk-text-background my-work-inner-grid-text">
                                    I like biking, F1, tennis, basketball,
                                    boxing and MMA.
                                </span>
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="notable-projects">
                <Container>
                    <h1>
                        <span className="uk-text-uppercase uk-text-bold uk-text-background notable-projects-title">
                            projects
                        </span>
                    </h1>
                    <div className="ui cards">
                        <div className="ui centered card">
                            <div className="content">
                                <i className="right floated mini ui image fab fa-java" />
                                <div className="header">Feedback Monkey</div>
                                <div className="meta">BIT by Sonae</div>
                            </div>
                            <div className="extra content">
                                <div className="ui two buttons">
                                    <div className="ui black basic button">
                                        BitBucket
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ui centered card">
                            <div className="content">
                                <img
                                    className="right floated mini ui image"
                                    src="../static/img/microsoft-dotnet.svg"
                                />
                                <div className="header">SIC-Catalog</div>
                                <div className="meta">Armários por Medida</div>
                            </div>
                            <div className="extra content">
                                <div className="ui two buttons">
                                    <div className="ui black basic button">
                                        BitBucket
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ui centered card">
                            <div className="content">
                                <i className="right floated mini ui image fab fa-node-js" />
                                <div className="header">SIC-Orders</div>
                                <div className="meta">Armários por Medida</div>
                            </div>
                            <div className="extra content">
                                <div className="ui two buttons">
                                    <div className="ui black basic button">
                                        BitBucket
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ui centered card">
                            <div className="content">
                                <i className="right floated mini ui image fab fa-react" />
                                <div className="header">SIC-Website</div>
                                <div className="meta">Armários por Medida</div>
                            </div>
                            <div className="extra content">
                                <div className="ui two buttons">
                                    <div className="ui black basic button">
                                        BitBucket
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ui centered card">
                            <div className="content">
                                <img
                                    className="right floated mini ui image"
                                    src="../static/img/cpp.png"
                                />
                                <div className="header">SIC-Visualizer</div>
                                <div className="meta">Armários por Medida</div>
                            </div>
                            <div className="extra content">
                                <div className="ui two buttons">
                                    <div className="ui black basic button">
                                        BitBucket
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1>
                        <span className="uk-text-uppercase uk-text-bold uk-text-background notable-projects-title">
                            2019 ventures
                        </span>
                    </h1>
                    <div className="ui cards">
                        <div className="ui centered card">
                            <div className="content">
                                <i className="right floated mini ui image fas fa-brain" />
                                <div className="header">Machine Learning</div>
                                <div className="meta">Why not? Future?</div>
                            </div>
                        </div>
                        <div className="ui centered card">
                            <div className="content">
                                <i className="right floated mini ui image fas fa-link" />
                                <div className="header">BlockChain</div>
                                <div className="meta">Floyd Mayweather?</div>
                            </div>
                        </div>
                        <div className="ui centered card">
                            <div className="content">
                                <i className="right floated mini ui image fas fa-bug" />
                                <div className="header">Security</div>
                                <div className="meta">h4ck3r m4n</div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="footer">
                <Container>
                    <div className="row">
                        <div className="ovrBs col-6 col-md">
                            <span className="uk-text-uppercase uk-text-bold uk-text-background my-work-inner-grid-title">
                                software
                            </span>
                        </div>
                        <div className="ovrBs col-6 col-md">
                            <span className="uk-text-uppercase uk-text-bold uk-text-background my-work-inner-grid-title">
                                projects
                            </span>
                        </div>
                        <div className="ovrBs col-6 col-md">
                            <span className="uk-text-uppercase uk-text-bold uk-text-background my-work-inner-grid-title">
                                contact
                            </span>
                        </div>
                    </div>
                </Container>
            </div>
        </Layout>
    );
};
