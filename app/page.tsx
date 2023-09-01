import Image from 'next/image'

import BucketList from '../components/bucketList';
import { bucketList } from '@/resources/bucketList';

export default function Home() {
  return (
    <main className="">

      {/* <BucketList bucketList={bucketList} /> */}

      <div id="footer">
      	<p>
          Shamelessly inspired by <a href="https://neal.fun/life-checklist/" target="_blank">Neal Agrawal's Life Checklist</a>
	        <br />and hosted on a very overkill 14-nodes cluster in my basement.
        </p>

	      <p>
          <a href="https://morveus.com" target="_blank">Home</a> - <a href="https://github.com/Morveus/seau" target="_blank">Fork me on Github</a>
        </p>
      </div>
    </main>
  )
}
