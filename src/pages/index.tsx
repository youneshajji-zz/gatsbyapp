import * as React from "react"
import UserInfo from "../components/MyPage/UserInfo"
import { userInfo } from "../components/Security/UserContext"
// import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <>
      {/* Header tag from */}

      {/* Main here */}
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <UserInfo />
        </div>
      </main>
    </>
  )
}

export default IndexPage
