import { navigate } from "gatsby"
import React from "react"

const Users = [
  {
    fname: "Ola",
    lname: "Normann",
    email: "ola.normann@ammerudskole.no",
    phone: "+4798765432",

    school: {
      schoolName: "Ammerud Skole",
      address: "Ammerudveien 49, 0958 Oslo",
      subject: "Matematikk",
      grade: "4. klasse",
    },
  },
]

const UserInfo = () => {

  const onVerify = () => {
    // TODO: check if assessmentCopy or SampleAccess from url param, navigate to the respective page
    return navigate("/minside/vurderingseksemplar")
  }

  return (
    <section aria-labelledby="userprofile" className="lg:col-start-3 lg:col-span-1 pb-4">
      <div className="bg-white px-8 py-5 shadow sm:rounded-lg sm:px-6 ">
        <div className="mt-6 flow-root">
          <ul className="-mb-5">
            <div className="border-b pb-4">
              <li>
                <div className="relative pb-4">
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  <div className="relative flex space-x-3">
                    <div className="flex justify-between">
                      <p className="text-lg font-bold text-black">Profil</p>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-end space-x-4">
                      <p className="text-lg text-indigo-500 underline">Endre</p>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative pb-4">
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  <div className="relative flex space-x-3">
                    <p>{Users[0].fname + " " + Users[0].lname}</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative pb-4">
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  <div className="relative flex space-x-3">
                    <p>{Users[0].email}</p>
                  </div>
                </div>
              </li>

              <li>
                <div className="relative pb-4">
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  <div className="relative flex space-x-3">
                    <p>{Users[0].phone}</p>
                  </div>
                </div>
              </li>
            </div>
            <div className="pt-8">
              <li>
                <div className="relative pb-4">
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  <div className="relative flex space-x-3">
                    <div className="flex justify-between">
                      <p className="text-lg font-bold text-black">Skole</p>
                    </div>
                    <div className="min-w-0 flex-1 pt-1.5 flex justify-end space-x-4">
                      <p className="text-lg text-indigo-500 underline">Endre</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-4">
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  <div className="relative flex space-x-3">
                    <p>{Users[0].school.schoolName}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-4">
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  <div className="relative flex space-x-3">
                    <p>{Users[0].school.address}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-4">
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  <div className="relative flex space-x-3">
                    <p>{Users[0].school.subject}</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="relative pb-4">
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                  <div className="relative flex space-x-3">
                    <p>{Users[0].school.grade}</p>
                  </div>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <div className="flex justify-start justify-end">
          <button
            onclick="location.href='http://www.gyldendal.no'"
            className="h-10 m-2 underline bg-transparent text-black font-semibold hover:text-gray py-2 px-6 borde-none"
          >
            Abryt
          </button>
          <button
            onClick={onVerify}
            className="h-10 m-2 bg-red-500 hover:bg-red-800 text-white font-semibold hover:text-white py-2 px-6 border border-red-500 rounded-2xl"
          >
            Bekreft
              </button>
        </div>
      </div>
    </section>
  )
}
export default UserInfo
