import React from "react"

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

const MyAssessmentCopyData = ({ title, subTitle, isbn, lang }) => {
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
                      <span className="block text-sm pt-4">ISBN: {isbn}</span>
                    </div>
                  </div>
                  <div className="text-right text-sm min-w-0 flex-1 space-x-4">
                    <span className="block text-sm text-right">{lang}</span>
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

const MyAssessmentCopy = () => {
  return (
    <section className="pb-4">
      <div className="xl mx-auto py-6 sm:px-6 lg:px-8 m-auto bg-white rounded-lg ">
        <div className="ml-3 flex flex-col cursor-pointer">
          <span className="text-3xl font-bold pb-3">Mine vurderingseksemplarer</span>
        </div>
        {Books.map((data) => (
          <MyAssessmentCopyData
            title={data.title}
            subTitle={data.subTitle}
            isbn={data.ISBN}
            lang={data.lang}
          ></MyAssessmentCopyData>
        ))}
      </div>
    </section>
  )
}

export default MyAssessmentCopy
