import PageWrapper from "../../layouts/PageWrapper";

function AttendancePage ({ id }) {

  return (
    <PageWrapper>
      <section className="attendance">
        <h1>Attendance</h1>
        <p>TODO: Show attendance for raid with ID #{id}</p>
      </section>
    </PageWrapper>
  )
}

AttendancePage.getInitialProps = ({ query }) => {
  return {
    id: query.id
  }
}

export default AttendancePage;
