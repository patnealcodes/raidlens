import { useState } from 'react';
import Link from 'next/link';
import PageWrapper from '../layouts/PageWrapper';

export default function DashboardPage () {
  const [guild, setGuild] = useState('VP');
  const [server, setServer] = useState('Herod');
  const [region, setRegion] = useState('US');

  return (
    <PageWrapper>
      <section className="dashboard">
        <h1>Dashboard</h1>

        <div className="query-fields">
          <input value={guild} onChange={e => setGuild(e.target.value)} placeholder="Guild" />
          <input value={server} onChange={e => setServer(e.target.value)} placeholder="Server" />
          <select value={region} onChange={e => setRegion(e.target.value)}>
            <option value="US">US</option>
            <option value="EU">EU</option>
            <option value="KR">KR</option>
            <option value="TW">TW</option>
            <option value="CN">CN</option>
          </select>

          <Link href={`/raids?version=classic&guild=${guild}&server=${server}&region=${region}`}>
            <button disabled={!guild || !server || !region}>View raids</button>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .query-fields {
          align-items: flex-start;
          display: flex;
          flex-direction: column;
        }

        .query-fields input,
        .query-fields select {
          margin: 0 0 1em;
        }
      `}</style>
    </PageWrapper>
  )
}
