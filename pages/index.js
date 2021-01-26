import {useEffect} from 'react';
import axios from 'axios'
import Link from 'next/link'

const baseURL = 'https://dummyapi.io/data/api'
const Home = () => {
  return (
      <>
      <div className="structure">
      <Link href={`./portfolio`}><button type="button" class="btn btn-outline-primary">PORTFOLIO</button></Link>
      <Link href={`/post`}><button type="button" class="btn btn-outline-primary">POST</button></Link>
      <Link href={`./GPAcalculator`}><button type="button" class="btn btn-outline-primary">GPA CALCULATOR</button></Link>
      </div>
      </>
  )
}

export default Home