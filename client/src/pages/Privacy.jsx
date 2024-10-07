import React from "react";

function Privacy() {
  return (
    <div className="font-roboto flex flex-col min-h-screen m-8 pt-8 lg:pt-12  lg:p-52 ">
      <h1 className="text-customBlue flex text-center font-bold text-xl ml-6 sm:ml-4 md:ml-8 pt-4 p-12 lg:text-4xl">
        Privacy Policy for Helgg Mobile App
      </h1>
      <p className="-tracking-2 leading-loose mb-4">
        At Helgg, we take your privacy seriously. This Privacy Policy is
        intended to inform you about the information we collect, how we use it,
        and your choices regarding this information when you use our mobile
        application (“App”).
      </p>
      <p className="-tracking-2 leading-loose mb-4">
        By using our App, you consent to the practices described in this Privacy
        Policy. If you do not agree to this Privacy Policy, please do not use
        our App.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Information We Collect
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        We may collect personal information from you such as your name, email
        address, phone number, date of birth, and location when you use our App.
        We may also collect information about your use of our App, such as the
        time and duration of your visits, the pages you view, and your device
        information.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        How We Use Your Information
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        We may use the information we collect to provide and improve our App, to
        contact you about our services, to communicate with you about our App,
        and to personalize your experience with our App. We may also use the
        information we collect to respond to your inquiries or to address your
        concerns.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Sharing Your Information
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        We do not sell, trade, or rent your personal information to third
        parties. We may share your information with third-party service
        providers who perform services on our behalf, such as payment
        processing, data analysis, email delivery, hosting services, and
        customer service. We may also share your information with law
        enforcement agencies, government officials, or other third parties when
        we are required to do so by law or when we believe in good faith that
        the disclosure is necessary to protect our rights or the rights of
        others, to prevent harm, or to investigate illegal activity.{" "}
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Your Choice
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        You can choose not to provide us with certain information, but this may
        limit your ability to use our App. You can also choose to limit the
        information we collect about you by adjusting the settings on your
        mobile device.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">Security</h2>
      <p className="-tracking-2 leading-loose mb-4">
        We take reasonable measures to protect the information we collect from
        unauthorized access, disclosure, alteration, or destruction. However, no
        method of transmission over the internet or electronic storage is
        completely secure, and we cannot guarantee absolute security.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Children's Privacy
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        Our App is not intended for children under 13 years of age. We do not
        knowingly collect personal information from children under 13. If you
        are a parent or guardian and you believe your child has provided us with
        personal information, please contact us immediately.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Changes to this Privacy Policy
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        We may update this Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page. We
        encourage you to review this Privacy Policy periodically for any
        changes.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Contact Us
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        If you have any questions or concerns about this Privacy Policy, please
        contact us at
        <a
          href="mailto:contact@helgg.com"
          className="text-customBlue font-bold "
        >
          {" "}
          contact@helgg.com.
        </a>{" "}
      </p>
      <p className="-tracking-2 leading-loose">
        <em>This Privacy Policy is effective as of [01/06/2023].</em>
      </p>
    </div>
  );
}

export default Privacy;
