import Link from 'next/link';
import PageWrapper from '../layouts/PageWrapper';

export default function DashboardPage () {

  return (
    <PageWrapper>
      <section className="dashboard">
        <h1>Dashboard</h1>

        {/* TEMP */}
        <Link href="/raids?version=classic&guild=vp&server=herod&region=us">
          <a>TEMP link to VP raids...</a>
        </Link>
        {/* TEMP */}
      </section>
    </PageWrapper>
  )
}
