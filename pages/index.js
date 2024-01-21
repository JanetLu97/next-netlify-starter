import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    <Header title="Welcome to my app!" />
    <p className="description">
        Welcome to ISIC overlay pro Můj Vlak, where your privacy is our top priority!
    </p>
    <section className="policy-section">
        <h2>Data Collection</h2>
        <p>None: Our app does not collect or store any personal data. We believe in complete privacy, so you can use our app without any concerns about your personal information being collected or shared.</p>
    </section>
    <section className="policy-section">
        <h2>Data Usage</h2>
        <p>Since we do not collect any data, there is no usage of data to describe.</p>
    </section>
    <section className="policy-section">
        <h2>Data Sharing</h2>
        <p>As we do not collect any data, there is no sharing of personal data with any third parties.</p>
    </section>
    <section className="policy-section">
        <h2>Data Security</h2>
        <p>Our commitment to not collecting data means there is no risk of your personal data being compromised or accessed, as it is never stored or transmitted by our app.</p>
    </section>
</main>


      <Footer />
    </div>
  )
}
