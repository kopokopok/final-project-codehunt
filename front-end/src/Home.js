import React, {useState, useEffect} from "react"
import Contest from "./Contest"
import "./Home.css"
import axios from "axios"


const Home = () => {
  const [featuredContests, setData] = useState([])

  useEffect(() => {
    const getContests = async () => {
      const pullContests = await axios("https://my.api.mockaroo.com/contests.json?key=a36447e0")
      setData(pullContests.data)
    }


    getContests()
  }, [])


  return (
    <div className = "ContestsHome">

      <h1>Featured Contests</h1>

      <section className = "ContestsBlock">

        {featuredContests.map((contest) => (
          <Contest key={contest.id}
            name = {contest.name}
            platform={contest.platform}
            start_date={contest.start_date}
            end_date={contest.end_date}
            description={contest.description}
            link={contest.link}
          />
        ))}

      </section>
    </div>
  )
}


export default Home

