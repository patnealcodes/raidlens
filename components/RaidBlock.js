import moment from 'moment';
import Link from 'next/link';

import { getZoneById } from '../services/utils';

export default function RaidBlock({ id, title, date, zoneId }) {
  const zone = getZoneById(zoneId);
  const zoneURL = `https://dmszsuqyoe6y6.cloudfront.net/img/warcraft/zones/zone-${zoneId}.png`;

  return (
    <div>
      <Link href={`/attendance/${id}`} prefetch={false}>
        <a className="raid-block" title={title} style={{ backgroundImage: `url(${zoneURL})` }}>
          <p className="raid-title">{title}</p>
          <div className="raid-content">
            <div className="raid-details">
              <span className="raid-zone">{zone.long}</span>
              <sub className="raid-date">{moment(date).format('ddd, MM/DD')}</sub>
            </div>
          </div>
        </a>
      </Link>

      <style jsx>{`
        .raid-block {
          display: block;
          border-radius: .5em;
          background-size: cover;
          box-shadow: 0 0 0 rgba(0,0,0,.5);
          padding: 1em;
          text-shadow: .25em .25em .25em black;
          text-decoration: none;
          transition: .3s box-shadow;
          width: 200px;
        }

        .raid-block:hover {
          box-shadow: .25em .25em .25em rgba(0,0,0,.5);
        }

        .raid-title {
          text-align: center;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        .raid-content {
          display: flex;
        }

        .raid-details {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .raid-zone-img {
          width: 50px;
          padding: 0 .5em 0 0;
        }
      `}</style>
    </div>
  )
}
