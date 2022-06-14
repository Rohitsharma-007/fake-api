import { useLocation } from "react-router-dom"
import Button from "react-bootstrap/Button"
import React from "react"

function About(props) {
  const location = useLocation()
  const data = location.state
  return (
    <>
      {data.map((item) => {
        const { name, email, body, title } = item
        return (
          <React.Fragment key={email}>
            <div
              className="card   text-dark bg-light border-primary"
              style={{ maxWidth: "540px" }}
            >
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h2>{name}</h2>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                    <p className="card-text">
                      <small className="text-muted">{email}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      })}
      <Button href="/" variant="outline-primary" size="lg" className="m-3 p-2">
        GO Back
      </Button>
    </>
  )
}

export default About
