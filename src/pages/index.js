import React from "react"
import "../styles/index.scss"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import HeroBackground from "../svg/hero-background.svg"
import Logo from "../svg/logo.svg"
import Checkmark from "../svg/checkmark.svg"

import Layout from "../components/layout"
import Signup from "../components/signup"

export default ({ location }) => {
    const data = useStaticQuery(graphql`
    query IndexQuery {
        demo: file(absolutePath: {regex: "/demo.png/"}) {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
    }
    `)


    return (
        <Layout location={location}>
            <section className="hero">
                <HeroBackground />
                <div className="flex">
                    <div className="left">
                        <div className="svg-wrap">
                            <Logo />
                        </div>
                    </div>
                    <h2>A beautiful website for your restaurant.</h2>
                    <div className="right">
                        <div className="container">
                            {
                                ["Fast", "Easy", "Tailored"].map((elem) => (
                                    <p key={elem} className="value-proposition"><Checkmark /> {elem}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className="message">
                <h3>Your customers are looking&nbsp;for&nbsp;you.</h3>
                <h3>Stop missing them.</h3>
                <Signup />
            </section>

            <section className="tri-column">
                <Column header="Your Menu, Online">
                    <p>Get your menu onto the web so your customers know what to expect before they ever pick up the phone or make it to your front door.</p>
                    <p>This added visibility can only lead to more revenue for your business. They're hungry, know your menu, and they're placing an order.</p>
                </Column>
                <Column header="Modern Design">
                    <p>Comero has gone through the work of making your site reflect the best parts of your physical space. Our design features the best in both form and function.</p>
                    <p>We'll make sure your site's design stays modern, clean, and a dazzling, digital representative of your restaurant.</p>
                </Column>
                <Column header="Ease of Use">
                    <p>Updating your website has never been easier. Our interface is simpler than Wordpress, Wix, or any other content manager you may have tried before.</p>
                    <p>We know you want a site that keeps up with your business without adding another difficult item to your to-do list. We're keeping it no-sweat for you.</p>
                </Column>
            </section>

            <section id="demo" className="demo">
                <div className="image-wrap">
                    <Image className="demo-image" fluid={data.demo.childImageSharp.fluid} alt="Comero Demo Site." />
                </div>
                <div className="text-wrap">
                    <h2>Comero In Action</h2>
                    <a href="https://comero-demo.netlify.app/" target="_blank" rel="noopener noreferrer">Visit the Demo</a>
                </div>
            </section>

            <section id="how-it-works" className="how-it-works">
                <h2>How It Works</h2>
                <Chunk stepHeader="Step 1: Contact Us">
                    Let us know you want to create your restaurant’s shiny, new web presence and we’ll do the heavy lifting of setting you up. We'll handle your domain setup, DNS configuration, and get things working behind the scenes.
                </Chunk>
                <Chunk stepHeader="Step 2: Setup">
                    We create the platform for your website. Creating a layout, making sure things look pretty, and all the other big stuff we will have done for you. We'll even get the magic internet gnomes put into a row and working for you for the best performance the web has to offer.
                </Chunk>
                <Chunk stepHeader="Step 3: Customize">
                    Edit your restaurant’s content and it will show up on your website formatted and laid out as beautiful as you always wanted it. Your menu, hours, address, phone number, your restaurant on the web.
                </Chunk>
            </section>

            <section id="pricing" className="pricing">
                <h2>Pricing</h2>
                <h3>Startup Fee: $0</h3>
                <p>We want our platform to be accessible to all local eateries. And we believe having no up front cost is a step in that direction.</p>
                <h3>Subscription: $50/month</h3>
                <p>Unlimited content updates, our fastest servers, and our support if you ever need it. We know you’ll end up with more than $50 of orders per month coming directly from your website to cover your costs!</p>
            </section>

            <section id="get-started" className="get-started">
                <h2>Get Started</h2>
                <Signup />
            </section>
        </Layout>
    )
}

const Column = ({ header, children }) => (
    <div className="column">
        <h3>{header}</h3>
        <div className="text">{children}</div>
    </div>
)

const Chunk = ({ stepHeader, children }) => (
    <div className="chunk">
        <h3>{stepHeader}</h3>
        <p>{children}</p>
    </div>
)