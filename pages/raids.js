import axios from 'axios';

import PageWrapper from "../layouts/PageWrapper";
import RaidBlock from "../components/RaidBlock";

function generateURL({ version, guild, server, region }) {
  const { WARCRAFT_LOGS_KEY } = process.env;
  const urlPrefix = version === 'classic' ? 'classic' : 'www';

  return `https://${ urlPrefix }.warcraftlogs.com:443/v1/reports/guild/${guild}/${server}/${region}?api_key=${WARCRAFT_LOGS_KEY}`;
}

function RaidsPage ({ raids }) {
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

        {raids.length ? renderRaids() : 'ERROR: Unable to retrieve raids'}
      </section>
    </PageWrapper>
  )
}

RaidsPage.getInitialProps = async function({ query }) {
  const queryURL = generateURL(query);

  let raids;

  try {
    const { data } = await axios.get( queryURL );
    raids = data;
  } catch(e) {
    console.error('Error fetching raids:', e);
    raids = [];
  }

  return { raids }
}

export default RaidsPage;
