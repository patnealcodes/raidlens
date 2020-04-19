import axios from 'axios';

import PageWrapper from "../../layouts/PageWrapper";

function AttendancePage ({ friendlies, bossFights, error }) {
  function renderData() {
    const activeFriendlies = friendlies.map(fr => {
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

        <h2>Active Friendlies: {activeFriendlies.length}</h2>
        <ul>
          {activeFriendlies.map(af => <li><span className={af.class}>{af.name}</span> - {(af.bossKills.length / bossFights.length) * 100}%</li>)}
        </ul>

        <style jsx>{`
          .druid { color:rgb(100%,49%,4%) }
          .hunter { color:rgb(67%,83%,45%) }
          .mage { color:rgb(41%,80%,94%) }
          .paladin { color:rgb(96%,55%,73%) }
          .priest { color:rgb(100%,100%,100%) }
          .rogue { color:rgb(100%,96%,41%) }
          .shaman { color:rgb(14%,35%,100%) }
          .warlock { color:rgb(58%,51%,79%) }
          .warrior { color:rgb(78%,61%,43%) }
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

AttendancePage.getInitialProps = async ({ query }) => {
  //https://classic.warcraftlogs.com:443/v1/report/fights/wxh39Y2HpadkJVZB?api_key=1dfb9e9d555b9ea68c7ef280d18936e3

  const URL = `https://classic.warcraftlogs.com:443/v1/report/fights/${query.id}?api_key=${process.env.WARCRAFT_LOGS_KEY}`;

  if( !process.env.WARCRAFT_LOGS_KEY ) {
    return { error: 'Missing / invalid API key' }
  }

  try {
    const { data } = await axios.get( URL );

    const friendlies = data.friendlies.filter(f => f.type !== 'Unknown' && f.type !== 'Pet' && f.type !== 'NPC');
    const bossFights = data.fights.filter(f => f.kill);

    return { friendlies, bossFights }
  } catch(e) {
    const errorMessage = `Error fetching report for id ${query.id}`
    console.error(errorMessage, e);
    return { error: errorMessage }
  }
}

export default AttendancePage;
