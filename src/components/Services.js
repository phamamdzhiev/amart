import ServiceContainer from "../inc/ServiceContainer";
import BaseHeadingSection from "../inc/BaseHeadingSection";

export default function Services() {
  return (
    <div className="container my-8">
      <BaseHeadingSection
        heading="Most prominent side is our devoted"
        subheading="WE HELP YOU"
        italicsHeading="services"
      />
      <div className="grid grid-cols-1 gap-6">
        <ServiceContainer
          heading="Fully Responsive for all devices"
          subheading="We use a customized application specifically designed a testing gnose
          to keep away for people."
          image="https://shtheme.com/demosd/pixer/wp-content/uploads/2019/02/service-1.png"
        />
        <ServiceContainer
          heading="SEO Friendly and Optimized"
          subheading="We use a customized application specifically designed a testing gnose to keep away for people."
          image="https://shtheme.com/demosd/pixer/wp-content/uploads/2019/02/service-2.png"
        />
        <ServiceContainer
          heading="Super Fast and Secure"
          subheading="We use a customized application specifically designed a testing gnose to keep away for people."
          image="https://shtheme.com/demosd/pixer/wp-content/uploads/2019/02/service-3.png"
        />
      </div>
    </div>
  );
}
