import axios from 'axios';

import PageWrapper from "../../layouts/PageWrapper";

function AttendancePage ({ raiders, bossFights, error }) {
  function renderData() {
    const activeRaiders = raiders.map(fr => {
      const bossKills = fr.fights.filter(f => bossFights.find(bf => bf.id === f.id));

      if( bossKills.length ) {
        return { name: fr.name, class: fr.type.toLowerCase(), bossKills };
      }
    }).filter(af => !!af);

    return (
      <div>
        <h2>Boss Fights: {bossFights.length}</h2>
        <ul>
          {bossFights.length && bossFights.map(f => <li>{f.name}</li>)}
        </ul>

        <h2>Active Raiders: {activeRaiders.length}</h2>
        <table className="raider-table">
          <thead>
            <td>Name</td>
            <td>Bosses</td>
            <td>Percent</td>
          </thead>
          <tbody>
            {activeRaiders.map(af => {
              const attendancePct = af.bossKills.length / bossFights.length;
              let percentColorClass;

              if (attendancePct === 1)
                percentColorClass = 'artifact';
              else if (attendancePct >= .9)
                percentColorClass = 'astounding';
              else if (attendancePct >= .8)
                percentColorClass = 'legendary';
              else if (attendancePct >= .7)
                percentColorClass = 'epic';
              else if (attendancePct >= .5)
                percentColorClass = 'rare';
              else if (attendancePct >= .3)
                percentColorClass = 'uncommon';
              else
                percentColorClass = 'shit';
              
              return (
                <tr>
                  <td className={af.class}>{af.name}</td>
                  <td className={percentColorClass}>{af.bossKills.length} / {bossFights.length}</td>
                  <td className={percentColorClass}>{Math.round(attendancePct * 100)}%</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        <style jsx>{`
          .raider-table {
            border-spacing: 10px 5px;
          }
        `}</style>
      </div>
    )
  }

  return (
    <PageWrapper>
      <section className="attendance">
        <h1>Attendance</h1>

        {error ? error : renderData()}
      </section>
    </PageWrapper>
  )
}

export const getServerSideProps = async ({ query }) => { // Switch to getStaticProps / getServerProps
  //https://classic.warcraftlogs.com:443/v1/report/fights/wxh39Y2HpadkJVZB?api_key=1dfb9e9d555b9ea68c7ef280d18936e3

  const URL = `https://classic.warcraftlogs.com:443/v1/report/fights/${query.id}?api_key=${process.env.WARCRAFT_LOGS_KEY}`;

  if( !process.env.WARCRAFT_LOGS_KEY ) {
    return { error: 'Missing / invalid API key' }
  }

  try {
    const { data } = await axios.get( URL );

    const raiders = data.friendlies.filter(f => f.type !== 'Unknown' && f.type !== 'Pet' && f.type !== 'NPC');
    const bossFights = data.fights.filter(f => f.kill);

    return {
      props: {
        raiders, bossFights
      }
    }
  } catch(e) {
    const errorMessage = `Error fetching report for id ${query.id}`
    console.error(errorMessage, e);
    return { error: errorMessage }
  }
}

export default AttendancePage;
