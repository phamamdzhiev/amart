import { plans } from "../plans";

export default function Prices() {
  return (
    <div>
      {plans.map((item) => {
        return (
          <div key={item.id} className="rounded-2xl shadow-xl border mb-12">
            <div className="p-3">
              <h1 className="font-bold text-2xl mb-3">{item.name} Plan</h1>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <div className="bg-gradient-to-r from-secondary to-tertiary p-3 my-3">
              <div className="font-bold text-white text-4xl text-center">
                {item.amount}
                <small className="text-xl font-semibold">/ one-time</small>
              </div>
            </div>
            <div className="p-3">
              <ul className="mb-5">
                {item.perks.map((perk) => {
                  return (
                    <li key={perk} className="p-2 hover:bg-gray-100">
                      <i className="bi bi-check pr-1 text-lg"></i>
                      {perk}
                    </li>
                  );
                })}
              </ul>
              <a
                href="/"
                className="capitalize block max-w-xs mx-auto p-2 px-6 rounded-3xl text-xl font-bold text-white text-center bg-secondary"
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
