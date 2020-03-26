import Layout from '../components/layout';
import React from 'react';

const Home = () => (
    <div className="container">
        <Layout>
            <h1> Home </h1>
        </Layout>

        <style jsx>{`
            .container {
                min-height: 100vh;
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            @media (max-width: 600px) {
                .grid {
                    width: 100%;
                    flex-direction: column;
                }
            }
        `}</style>

        <style jsx global>{`
            html,
            body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
                    Droid Sans, Helvetica Neue, sans-serif;
            }

            * {
                box-sizing: border-box;
            }
        `}</style>
    </div>
);

export default Home;
