import axios from 'axios';

import PageWrapper from "../layouts/PageWrapper";
import RaidBlock from "../components/RaidBlock";

function RaidsPage ({ raids, error }) {
  function renderRaids() {
    return (
      <ul className="raid-list">
        {raids.map(r => {
          return r.zone !== -1 && (
            <div className="raid" key={r.id}>
              <RaidBlock
                id={r.id}
                title={r.title}
                zoneId={r.zone}
                date={r.start}
              />
            </div>
          )
        })}

        <style jsx>{`
          .raid-list {
            display: flex;
            flex-wrap: wrap;
          }

          .raid {
            margin: 0 1em 1em 0;
          }
        `}</style>
      </ul>
    )
  }

  return (
    <PageWrapper>
      <section className="raids">
        <h1>Raids</h1>

        {error ? error : renderRaids()}
      </section>
    </PageWrapper>
  )
}

RaidsPage.getInitialProps = async function({ query }) {
  const { version, guild, server, region } = query;
  const { WARCRAFT_LOGS_KEY } = process.env;
  const urlPrefix = version === 'classic' ? 'classic' : 'www';

  const URL = `https://${ urlPrefix }.warcraftlogs.com:443/v1/reports/guild/${guild}/${server}/${region}?api_key=${WARCRAFT_LOGS_KEY}`;

  if( !WARCRAFT_LOGS_KEY ) {
    return { error: 'Missing / invalid API key' }
  }

  try {
    const { data: raids } = await axios.get( URL );

    return { raids }
  } catch(e) {
    console.error('Error fetching raids:', e);
    return { error: 'Error fetching raids' }
  }
}

export default RaidsPage;
