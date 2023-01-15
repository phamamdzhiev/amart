import { plans } from "../plans";

export default function Prices() {
  return (
    <div className="container">
      {plans.map((item) => {
        return (
          <div key={item.id} className="rounded-2xl shadow-custom mb-12">
            <div className="p-5">
              <h1 className="font-bold text-xl mb-3">{item.name} Plan</h1>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <div className="bg-gradient-to-r from-secondary to-tertiary p-3 my-3">
              <div className="font-bold text-white text-2xl text-center">
                {item.amount}
                <small className="text-lg">/ one-time</small>
              </div>
            </div>
            <div className="p-5">
              <ul className="mb-5 ">
                {item.perks.map((perk,index) => {
                  return (
                    <li key={perk} className={`p-1 text-sm font-semibold hover:bg-gray-100${index % 2 === 0 ? ' bg-gray-50' : ''}`}>
                      <i className="bi bi-check pr-1.5 text-lg text-green-600"/>
                      {perk}
                    </li>
                  );
                })}
              </ul>
              <a
                href="/"
                className="capitalize block max-w-xs mx-auto p-2 px-6 rounded-3xl text-lg font-bold text-white text-center bg-secondary"
              >
                Get it now
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
