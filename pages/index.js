import { useState } from 'react';
import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted text:', text);
    // 这里可以将文本提交到服务器或进行其他操作
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <form onSubmit={handleSubmit}>
          <label>
            Enter text:
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
          </label>
          <button type="submit">Submit</button>
        </form>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
