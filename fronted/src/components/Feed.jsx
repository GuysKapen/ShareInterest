import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'
import Axios from 'axios'

function Feed() {
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams()
  const [pins, setPins] = useState([]);

  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem("token")
    if (token) {
      Axios.get("http://localhost:9000/users/62f1b6d43a40702f8594af60/pins", { params: { token: token } }).then(res => {
        setPins(res.data)
        setLoading(false);
      })
      return
    }
    Axios.post("http://localhost:9000/authenticate", { email: "admin@mail.com", password: "password" }).then(res => {
      localStorage.setItem("token", res.data["token"])
      Axios.get("http://localhost:9000/users/62f1b6d43a40702f8594af60/pins", { params: { token: res.data["token"] } }).then(res => {
        setPins(res.data)
        setLoading(false);
      })
    })
    if (categoryId) {

    } else {

    }
  }, []);

  return (
    <div>
      {loading ? <Spinner message={"we are adding new ideas for you"} /> : <div>{pins && (
        <MasonryLayout pins={pins} />
      )}</div>}
    </div>
  )
}

export default Feed