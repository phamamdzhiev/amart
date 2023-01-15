export default function ServiceContainer({ image, heading, subheading }) {
  return (
    <div className="px-3 py-6 text-center bg-gray-50">
      <div>
        <img className="mx-auto max-w-full" src={image} alt="" />
      </div>
      <div>
        <h3 className="text-xl font-bold mb-3">{heading}</h3>
        <p className="text-black text-xs font-normal">{subheading}</p>
      </div>
    </div>
  );
}
