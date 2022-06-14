import Row from "react-bootstrap/Row"
import React, { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import { Loader } from "@mantine/core"

function App() {
  const [data, setdata] = useState([])

  let urlss = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
  ]
  async function getAllurls(urlss) {
    try {
      var data = await Promise.all(
        urlss.map((url) => fetch(url).then((response) => response.json()))
      )

      return setdata(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getAllurls(urlss)
  }, [])

  if (data.length === 0) {
    return <Loader className="cent" color="teal" size="sm" variant="dots" />
  }

  const res1 = data[0]
  const res2 = data[1]

  const merged = res2.map((item) => {
    const resp1item = res1.find((r) => r.id === item.userId)
    return { ...item, ...resp1item }
  })

  return (
    <Container>
      <Row xs={2} md={2} className="m-2">
        {merged.map((item) => {
          const { id, name, body, title, email } = item

          const myData = [{ name }, { body }, { email }, { title }]

          return (
            <div
              key={title}
              className="card   text-dark bg-light border-primary"
              style={{ maxWidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h2>{name}</h2>
                    <Link to={`/About/${id}`} state={myData}>
                      <h5 className="card-title">{title}</h5>
                    </Link>

                    <p className="card-text">{body}</p>
                    <p className="card-text">
                      <small className="text-muted">{id}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Row>
    </Container>
  )
}

export default App
