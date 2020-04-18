import Link from 'next/link';
import PageWrapper from '../layouts/PageWrapper';

export default function DashboardPage () {

  return (
    <PageWrapper>
      <section className="dashboard">
        <h1>Dashboard</h1>

        {/* TEMP */}
        <Link href="/attendance">
          <a>Link to attendance page...</a>
        </Link>
        {/* TEMP */}
      </section>
    </PageWrapper>
  )
}
