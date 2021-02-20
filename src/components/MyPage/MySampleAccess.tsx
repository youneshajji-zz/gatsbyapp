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

const MySampleAccessData = ({ title, isbn, expiredDate }) => {
  return (
    <section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
      <div className="bg-white px-4 border-b pb-4 sm:px-6">
        <div className="mt-6 flow-root">
          <ul className="-mb-8">
            <li>
              <div className="relative pb-4">
                <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                <div className="relative flex space-x-3">
                  <div className="min-w-0 flex-1 flex space-x-4 justify-between">
                    <div>
                      <span className="block font-semibold text-md">{title}</span>
                      <span className="block text-sm pt-2">ISBN: {isbn}</span>
                    </div>
                    <div className="text-right justify-end">
                      <span className="text-right text-sm text-indigo-800 pb-4">
                        {" "}
                        Utløper <time dateTime="04.02.2021">{expiredDate}</time>{" "}
                      </span>
                      <div className="flex pt-2">
                        <span className="text-right text-sm text-gray-800 ">Gå til produktet </span>
                        <div>
                          <span className="h-8 w-8 rounded-full flex items-center justify-end transform -rotate-45">
                            <a href="https://prosesspilotene.no/">
                              <svg
                                className="h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="tomato"
                                aria-hidden="true"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M10.2929 0.292893C10.6834 -0.0976311 11.3166 -0.0976311 11.7071 0.292893L15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.7071 9.70711C11.3166 10.0976 10.6834 10.0976 10.2929 9.70711C9.90238 9.31658 9.90238 8.68342 10.2929 8.29289L12.5858 6H1C0.447716 6 -2.41411e-08 5.55228 0 5C2.41411e-08 4.44772 0.447716 4 1 4H12.5858L10.2929 1.70711C9.90238 1.31658 9.90238 0.683418 10.2929 0.292893Z"
                                  clip-rule="evenodd"
                                />
                              </svg>
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    // <section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
    //   <<div className="mt-6 flow-root">
    //       <ul className="-mb-8">
    //         <li>
    //           <div className="relative pb-8">
    //             <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
    //             <div className="relative flex space-x-3">
    //               <label htmlFor="settings-option-0" className="ml-3 flex flex-col cursor-pointer pl-5">
    //                 {/* <!-- On: "text-indigo-900", Off: "text-gray-900" --> */}
    //                 <span className="block font-semibold text-md">{title}</span>
    //                 {/* <!-- On: "text-indigo-700", Off: "text-gray-500" --> */}
    //                 <span className="block text-sm pt-4">ISBN: {isbn}</span>
    //               </label>

    //       <div className="min-w-0 flex-1 pt-1.5 flex text-right text-sm whitespace-nowrap text-gray-500 justify-between space-x-4">
    //         <div>
    //           <div>
    //             <p className="text-sm text-gray-500">Utløper {expiredDate}</p>
    //           </div>
    //           <div className="min-w-0 flex-1 pt-1.5 flex text-right justify-between space-x-4">
    //             <span className="text-sm text-gray-500">Gå til dokumentet </span>
    //             <span className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center ring-8 ring-white">
    //               <a href="https://www.prosesspilotene.no">
    //                 {/* <!-- Heroicon name: solid/check --> */}
    //                 <svg
    //                   className="h-5 w-5 text-white"
    //                   xmlns="http://www.w3.org/2000/svg"
    //                   viewBox="0 0 20 20"
    //                   fill="currentColor"
    //                   aria-hidden="true"
    //                 >
    //                   <path
    //                     fill-rule="evenodd"
    //                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    //                     clip-rule="evenodd"
    //                   />
    //                 </svg>
    //               </a>
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

const MySampleAccess = () => {
  return (
    <section className="pb-4">
      <div className="xl mx-auto py-6 sm:px-6 lg:px-8 m-auto bg-white rounded-lg">
        <div className="">
          <span className="text-3xl font-bold">Mine prøvetilganger </span>
        </div>
        <div>
          <div className="">
            {Books.map((data) => (
              <MySampleAccessData
                title={data.title}
                isbn={data.ISBN}
                expiredDate={data.expiredDate}
              ></MySampleAccessData>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MySampleAccess
