import React from "react";
import { Link } from "react-router-dom";

function Agreement() {
  return (
    <div className="font-roboto flex flex-col min-h-screen m-8 pt-8 lg:pt-12  lg:p-52 ">
      <h1 className="text-customBlue flex text-center font-bold text-xl ml-6 sm:ml-4 md:ml-8 pt-4 p-12 lg:text-4xl">
        User Agreement for Helgg Scooters LTD Mobile App
      </h1>
      <p className="-tracking-2 leading-loose mb-4">
        Welcome to the Helgg Scooters LTD Mobile App (“Helgg App” or “App”),
        operated by Helgg Scooters LTD (“Helgg” or “Company”). The following
        User Agreement (the “Agreement”) outlines the terms and conditions that
        govern your access to and use of the Helgg App, including all content,
        services, features, and functionality offered through the App.
      </p>
      <p className="-tracking-2 leading-loose mb-4">
        By accessing or using the Helgg App, you agree to be bound by this
        Agreement, and any additional terms, policies, and guidelines
        incorporated herein by reference. If you do not agree with any of the
        terms of this Agreement, you may not use the Helgg App.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Description of Services
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        The Helgg App provides a ride-sharing service that allows users to sign
        up, sign in, add their debit card, share their location using electric
        scooters or electric bikes. The App enables users to locate and rent
        available vehicles, pay for rides, and track their ride history. Helgg
        reserves the right to modify or discontinue, temporarily or permanently,
        the Helgg App (or any part thereof) at any time without notice.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        User Eligibility
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        By using the Helgg App, you agree to comply with all applicable laws,
        rules, and regulations regarding your use of the App.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        User Account and Debit Card
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        To use the Helgg App, you must create an account and provide accurate,
        complete, and up-to-date information. You are responsible for
        maintaining the confidentiality of your account login credentials and
        for all activities that occur under your account. You agree to notify
        Helgg immediately of any unauthorized use of your account or any other
        breach of security.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Use of the Helgg App
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        By using the Helgg App, you agree to comply with all applicable laws,
        rules, and regulations. You agree to use the App for lawful purposes
        only and to not engage in any conduct that may harm Helgg, its users, or
        any third party. Specifically, you agree to:
        <ul className="list-disc pl-8">
          <li>
            Only use the Helgg App to rent vehicles for personal transportation.
          </li>
          <li>
            Follow all traffic laws and regulations while using the rented
            vehicles.
          </li>
          <li>
            Not use the Helgg App to rent vehicles for commercial purposes, or
            to provide transportation services to others.
          </li>
          <li>
            Not use the Helgg App to harass, stalk, or harm any other user, or
            to engage in any unlawful, abusive, or discriminatory conduct.
          </li>
        </ul>
        Helgg provides liability insurance coverage to users for damages or
        injuries to third parties caused by the use of the rented vehicles.
        However, this insurance coverage does not cover damages or injuries.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Intellectual Property
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        The Helgg App and all content, features, and functionality are owned by
        Helgg or its licensors, and are protected by copyright, trademark, and
        other intellectual property laws. You may not copy, modify, distribute,
        or reproduce any content or material from the Helgg App without Helgg’s
        prior written consent.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Privacy Policy
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        Your use of the Helgg App is subject to Helgg’s{" "}
        <Link to="/privacy-policy" className="text-customBlue">
          Privacy Policy
        </Link>
        , which is incorporated into this Agreement by reference. The Privacy
        Policy outlines how Helgg collects, uses, and shares your personal
        information. By using the Helgg App, you consent to the collection, use,
        and disclosure of your personal information in accordance with the
        Privacy Policy.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Termination
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        This Agreement will remain in effect until terminated by either party.
        Helgg may terminate this Agreement and your access to the Helgg App at
        any time for any reason, without notice. You may also terminate this
        Agreement by deleting your account and ceasing to use the Helgg App.
      </p>
      <p>
        Upon termination, you agree to immediately stop using the Helgg App and
        to delete all copies of the App from your devices. Termination of this
        Agreement will not relieve you of any liability or obligations that
        arose prior to the termination, including any payment obligations or
        indemnification obligations.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Disclaimer of Warranties
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        The Helgg App is provided “as is” and “as available” without any
        warranties, representations, or guarantees of any kind, express or
        implied, including but not limited to warranties of merchantability,
        fitness for a particular purpose, or non-infringement. Helgg does not
        warrant that the Helgg App will be uninterrupted or error-free, or that
        any defects or errors will be corrected.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Limitation of Liability
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        In no event shall Helgg’s total liability to you exceed the amount of
        fees paid by you to Helgg for your use of the Helgg App.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Entire Agreement and Amendments
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        This Agreement constitutes the entire agreement between you and Helgg
        regarding your use of the Helgg App, and supersedes all prior agreements
        or understandings, whether written or oral. Helgg may amend this
        Agreement at any time by posting a revised version on the Helgg App or
        by sending you a notification. Your continued use of the Helgg App after
        any changes to this Agreement constitutes your acceptance of the revised
        Agreement.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Contact Information
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
      <p className="-tracking-2 leading-loose mb-4">
        By using the Helgg App, you acknowledge that you have read, understood,
        and agreed to all of the terms and conditions of this Agreement,
        including the Privacy Policy. If you do not agree to any of these terms,
        you should not use the Helgg App.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Severalbility
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        If any provision of this Agreement is held to be invalid, illegal, or
        unenforceable, the validity, legality, and enforceability of the
        remaining provisions shall not in any way be affected or impaired
        thereby.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">Walver</h2>
      <p className="-tracking-2 leading-loose mb-4">
        The failure of Helgg to enforce any right or provision of this Agreement
        shall not constitute a waiver of such right or provision unless
        acknowledged and agreed to by Helgg in writing.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Assignment
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        You may not assign or transfer this Agreement or any of your rights or
        obligations hereunder, whether by operation of law or otherwise, without
        Helgg’s prior written consent. Any attempted assignment or transfer
        without such consent will be null and void.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">Headings</h2>
      <p className="-tracking-2 leading-loose mb-4">
        The headings used in this Agreement are for convenience only and shall
        not affect the interpretation of this Agreement.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Independent Contractors
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        Nothing in this Agreement shall be construed as creating an
        employer-employee relationship, a partnership, or a joint venture
        between you and Helgg. You are an independent contractor, and nothing in
        this Agreement shall be construed to make you an agent or representative
        of Helgg.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Force Majeurs
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        Helgg shall not be liable for any failure or delay in performance of its
        obligations under this Agreement due to any cause beyond its reasonable
        control, including but not limited to acts of God, acts of government,
        acts of war, natural disasters, or internet outages.
      </p>
      <h2 className="text-customBlue text-left font-bold text-lg">
        Acknowledgment of Understanding
      </h2>
      <p className="-tracking-2 leading-loose mb-4">
        You acknowledge that you have read this Agreement, understand it, and
        agree to be bound by its terms and conditions. You further acknowledge
        that this Agreement represents the complete and exclusive statement of
        the agreement between you and Helgg, and that it supersedes any proposal
        or prior agreement, oral or written, and any other communications
        between you and Helgg relating to the subject matter of this Agreement.
      </p>
      <p className="-tracking-2 leading-loose mb-4">
        By clicking “I Agree” or by using the Helgg App, you acknowledge that
        you have read and understood this Agreement, and that you agree to be
        bound by all of its terms and conditions. If you do not agree to this
        Agreement, you should not use the Helgg App.
      </p>
    </div>
  );
}

export default Agreement;
