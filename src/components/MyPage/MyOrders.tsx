import React from "react"
import MyPageLayout from "../Layout/MyPageLayout"

const Books = [
  {
    title: "Multi 1A, Lærernes bok",
    ISBN: 9876543212343,
    subTitle: "Undertittel",
    inStorage: true,
    expectedIn: "",
    allreadySent: false,
  },
  {
    title: "Multi 2A",
    ISBN: 9876543212342,
    subTitle: "Undertittel",
    inStorage: true,
    expectedIn: "",
    allreadySent: true,
  },
  {
    title: "Multi 5A, Elevbok",
    ISBN: "9876543212341",
    subTitle: "Undertittel",
    inStorage: false,
    expectedIn: "04.05.21",
    allreadySent: false,
  },
]

const MyOrdersData = ({ title, subTitle, isbn, expectedIn, inStorage }) => {
  return (
    <section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
      <div className="bg-white px-4 border-b pb-4 sm:px-6">
        <div className="mt-6 flow-root">
          <ul className="-mb-8">
            <li>
              <div className="relative pb-4 ">
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                <div className="relative flex space-x-3">
                  <div className="min-w-0 flex-1 flex space-x-4 justify-between">
                    <div>
                      <span className="block font-semibold text-md">{title}</span>
                      <span className="block text-sm">{subTitle}</span>
                      <span className="block text-sm pt-4 pb-2">ISBN: {isbn}</span>
                    </div>
                  </div>
                  <div className="text-right text-sm min-w-0 flex-1 flex space-x-4 justify-between">
                    <span className="block text-sm text-right italic">
                      {inStorage ? "Forventet levering 5-10 virkedager" : "Forventet salgsdato " + expectedIn}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

const MyOrders = () => {
  return (
    <section className="pb-4">
      <div className="xl mx-auto py-6 sm:px-6 lg:px-8 m-auto bg-white rounded-lg pt-4">
        <div className="relative flex space-x-3">
          <div>
            <p className="text-3xl font-bold pb-3">Mine bestillinger</p>
            <p className="text-md">Din forespørsel er godkjent. Bekreftelsesemail er sendt til din e-post.</p>
          </div>{" "}
        </div>
        {Books.map((data) => (
          <MyOrdersData
            title={data.title}
            subTitle={data.subTitle}
            isbn={data.ISBN}
            expectedIn={data.expectedIn}
            inStorage={data.inStorage}
          ></MyOrdersData>
        ))}
      </div>
    </section>
  )
}

export default MyOrders
