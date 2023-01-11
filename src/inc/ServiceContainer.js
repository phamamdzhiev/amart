export default function ServiceContainer({ image, heading, subheading }) {
  return (
    <div className="p-3 text-center bg-gray-50">
      <div>
        <img className="mx-auto max-w-full" src={image} alt="" />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-3">{heading}</h3>
        <p className="text-base text-gray-600 font-semibold">{subheading}</p>
      </div>
    </div>
  );
}
