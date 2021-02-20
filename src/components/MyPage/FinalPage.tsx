import React from "react"
import SEO from "../SEO/SEO"
import MyOrders from "./MyOrders"
import MySampleAccess from "./MySampleAccess"
import MyAssessmentCopy from "./MyAssessmentCopy"
import MiniUserInfo from "./MiniUserInfo"

const FinalPage = () => {
  return (
    <>
      {/* Header tag from */}
      {/* Main here */}
      <div className=" ">
        <SEO title="MinSide" description="Gyldendal sin hjem side." />
        <div className="md:container md:mx-auto ">
          <div className="p-4 flex px-4">
            <div className="px-4">
              <MiniUserInfo></MiniUserInfo>
            </div>
            <div>
              <MyOrders></MyOrders>
              <MySampleAccess></MySampleAccess>
              <MyAssessmentCopy></MyAssessmentCopy>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FinalPage
