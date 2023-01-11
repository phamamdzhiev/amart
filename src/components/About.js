import BaseHeadingSection from "../inc/BaseHeadingSection";

export default function About() {
  const background = {
    image:
      "url('https://shtheme.com/demosd/pixer/wp-content/uploads/2019/02/15.png')",
  };
  return (
    <section
      style={{ backgroundImage: background.image }}
      className="bg-no-repeat bg-cover container my-8"
    >
      <BaseHeadingSection
        heading="we are happy to assist
        you all time"
        subheading="WE ARE PIXER"
        italicsHeading="moment"
      />
      <div className="mb-6">
        <img src="https://shtheme.com/demosd/pixer/wp-content/uploads/2019/02/image-1.png" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">
          The purpose of lorem ipsum is to create Lorem ipsum dolor sit amet,
        </h3>
        <p className="text-sm text-gray-600">
          consectetur adipiscing elit. Vivamus dui orci, sodales a pellentesque
          vel, pharetra quis elit. In scelerisque lacinia diam eget egestas.
          Etiam non dui eu felis vestibulum.
        </p>
      </div>
      <div className="text-center text-2xl mt-6">
        HERE SHOW TECHNOLOGIES THAT WE USE
      </div>
    </section>
  );
}
