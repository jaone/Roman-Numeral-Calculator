import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Home.module.css';
import IO from '@/components/io';
const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Numeral Calculator</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Roman Numeral <br />
          Calculator
        </h1>
        <IO />
      </main>
    </div>
  );
};

export default Home;
