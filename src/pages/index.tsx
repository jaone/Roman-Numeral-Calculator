import Head from 'next/head';
import React from 'react';
import IO from '@/components/io';
const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Roman Numeral Calculator</title>
      </Head>
      <div>
        <main>
          <h1>
            Roman Numeral <br />
            Calculator
          </h1>
          <IO />
        </main>
      </div>
    </>
  );
};

export default Home;
