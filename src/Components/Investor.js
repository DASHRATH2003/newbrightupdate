import React from 'react';
import './DisclosureDisclaimer.css';

const AccordionItem = ({ title, content }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={() => setIsActive(!isActive)}>
        {title}
      </div>
      <div className={`accordion-content ${isActive ? 'active' : ''}`}>
        {content}
      </div>
    </div>
  );
};

export default function Investor() {
  return (
    <div className="disclaimer-container">
      <div>
        <img
          src="/investor.jpg" // Make sure investor.jpg is in your public folder
          alt="Investor"
          style={{ width: "100%", height: "400px" }}
        />
      </div>

      <h1 className="disclaimer-title">
        Investor Charter in respect of Research Analyst (RA)
      </h1>

      <div className="accordion">
        <AccordionItem
          title="A. Vision and Mission Statements for investors"
          content={
            <div>
              <h3>VISION:</h3>
              <ul>
                <li>Invest with knowledge & safety.</li>
              </ul>
              <h3>MISSION:</h3>
              <ul>
                <li>
                  Every investor should be able to invest in right investment
                  products based on their needs, manage and monitor them to meet
                  their goals, access reports and enjoy financial wellness.
                </li>
              </ul>
            </div>
          }
        />

        <AccordionItem
          title="B. Details of business transacted by the Research Analyst with respect to the ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES: INH000010566:"
          content={
            <ul>
              <li>To provide an independent, unbiased view on securities.</li>
              <li>
                To offer unbiased recommendations, disclosing the financial
                interests in recommended securities.
              </li>
              <li>
                To provide research recommendations, based on analysis of
                publicly available information and known observations.
              </li>
              <li>To conduct audit annually</li>
              <li>
                To ensure that all advertisements/ marketing/ promotional
                material are in adherence to the provisions of the Advertisement
                Code for Research Analysts.
              </li>
              <li>
                To maintain records of interactions, with all clients including
                prospective clients (prior to onboarding), where any
                conversation related to the research services has taken place.
              </li>
            </ul>
          }
        />

        <AccordionItem
          title="C. Details of services provided to investors (No Indicative Timelines)"
          content={
            <div>
              <h4>Onboarding of Clients</h4>
              <ul>
                <li>Sharing of terms and conditions of research services</li>
                <li>Completing KYC of clients</li>
              </ul>
              <h4>Disclosure to Clients</h4>
              <ul>
                <li>
                  To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any
                </li>
                <li>To disclose the extent of use of Artificial Intelligence tools in providing research services</li>
                <li>To disclose, while distributing a third-party research report, any material conflict of interest of such third-party research provider or provide web address that directs a recipient to the relevant disclosures</li>
                <li>To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.</li>
                <li>To distribute research reports and recommendations to the clients without discrimination.</li>
                <li>To maintain confidentiality w.r.t publication of the research report until it is made available in the public domain.</li>
              </ul>
            </div>
          }
        />

        <AccordionItem
          title="D. Details of grievance redressal mechanism and how to access it"
          content={
            <div>
              <h4>1. Investor can lodge complaint/grievance against Research Analyst in the following ways:</h4>
              <p><strong>Mode of filing the complaint with research analyst:</strong></p>
              <p>
                In case of any grievance / complaint, an investor may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance.
              </p>
              <p><strong>Mode of filing the complaint on SCORES or with RAASB:</strong></p>
              <ol type="i">
                <li>
                  SCORES 2.0 (
                  <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer">
                    https://scores.sebi.gov.in
                  </a>
                  )
                  <p>Two level review for complaint/grievance against Research Analyst:</p>
                  <ul>
                    <li>First review done by designated body (RAASB)</li>
                    <li>Second review done by SEBI</li>
                  </ul>
                </li>
                <li>Email to designated email ID of RAASB</li>
              </ol>
              <h4>2. If not satisfied, use SMARTODR for resolution via online conciliation or arbitration:</h4>
              <a href="https://smartodr.in/" target="_blank" rel="noopener noreferrer">
                https://smartodr.in/
              </a>
              <p>Send physical complaints to:</p>
              <p>
                Office of Investor Assistance and Education,<br />
                Securities and Exchange Board of India,<br />
                SEBI Bhavan, Plot No. C4-A, 'G' Block,<br />
                Bandra-Kurla Complex, Bandra (E),<br />
                Mumbai - 400 051
              </p>
            </div>
          }
        />

        <AccordionItem
          title="E. Rights of investors"
          content={
            <ul>
              <li>Right to Privacy and Confidentiality</li>
              <li>Right to Transparent Practices</li>
              <li>Right to fair and Equitable Treatment</li>
              <li>Right to Adequate Information</li>
              <li>
                Right to Initial and Continuing Disclosure - information about all statutory and regulatory disclosures
              </li>
              <li>Right to Fair & True Advertisement</li>
              <li>Right to Awareness about Service Parameters and Turnaround Times</li>
              <li>Right to be informed of the timelines for each service</li>
              <li>Right to be Heard and Satisfactory Grievance Redressal</li>
              <li>Right to have timely redressal</li>
              <li>Right to Exit from Financial product or service</li>
              <li>
                Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services
              </li>
              <li>
                Additional Rights to vulnerable consumers - access to services in a suitable manner even if differently abled
              </li>
              <li>Right to provide feedback on financial products and services used</li>
              <li>
                Right to enforceability and holding the Research Analyst responsible for monitoring, enforcing investor rights.
              </li>
            </ul>
          }
        />

        <AccordionItem
          title="F. Expectations from the investors (Responsibilities of investors)"
          content={
            <ul>
              <h2>Do’s:</h2>
              <li>Always deal with SEBI-registered Research Analysts.</li>
              <li>Ensure that the Research Analyst has a valid registration certificate.</li>
              <li>
                Check for SEBI registration number from SEBI website:{" "}
                <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer">
                  https://scores.sebi.gov.in
                </a>
              </li>
              <li>Read disclosures in research reports before investing.</li>
              <li>Pay through banking channels with signed receipts. Prefer CeFCoM if available.</li>
              <li>Refer to research recommendations before trading.</li>
              <li>Ask questions and clear doubts with your Research Analyst.</li>
              <li>Seek clarity on high-risk products/services.</li>
              <li>Know your right to stop the service at any time.</li>
              <li>Know your right to give feedback on services.</li>
              <li>Refuse any unfair clause from the analyst.</li>
              <li>Report analysts promising guaranteed returns.</li>

              <h2>Don’ts:</h2>
              <li>Don’t give funds to the Research Analyst for investment.</li>
              <li>Don’t fall for flashy ads or rumors.</li>
              <li>Don’t be influenced by limited-time offers or gifts.</li>
              <li>Never share your login credentials with any Research Analyst.</li>
            </ul>
          }
        />
      </div>

      <br />
      <div>
        <h3 style={{ color: "green" }}>Research Analyst (RA)</h3>
        <h6>: ANITHA M PROPRIETOR OF BRIGHTWAYS FINANCIAL SERVICES: INH000010566</h6>
      </div>

      <p>
        For details about Customer Support, Compliance Officer, Research Services, Risk Disclosures, Disclaimers,
        Refund Policies, Terms and Conditions, and others, visit our website:{" "}
        <a href="https://www.brightwaysfinancial.com/" target="_blank" rel="noopener noreferrer">
          https://www.brightwaysfinancial.com
        </a>
      </p>
    </div>
  );
}
