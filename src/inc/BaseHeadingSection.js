export default function BaseHeadingSection({heading, subheading, italicsHeading}) {
  return (
    <div className="text-center mb-6">
      <p className="text-xs text-secondary capitalize mb-2 font-bold tracking-wide ">
        {subheading}
      </p>
      <h2 className="text-2xl font-semibold">
        {heading}
        <em className="text-main block font-normal leading-4"> {italicsHeading}</em>
      </h2>
    </div>
  );
}
