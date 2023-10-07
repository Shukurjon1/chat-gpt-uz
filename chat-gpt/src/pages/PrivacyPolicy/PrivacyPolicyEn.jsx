import { Link } from "react-router-dom";
import PersonalInformationSVG from "../../assets/personal_information_illustration.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLanguage } from "@fortawesome/free-solid-svg-icons";
import CustomImageButton from "./components/CustomImageButton";
import ContactLink from "../../components/ContactLink";

export default function PrivacyPolicyEn() {
    return (
        <div className=" max-w-xl bg-white p-10 mx-auto text-gray-700">
            <img
                className="w-full md2x:mb-5"
                src={PersonalInformationSVG}
                alt="Personal Information Image"
            />
            <h2 className=" text-3xl text-gray-900">Privacy Policy</h2>
            <p className="text-gray-600 my-2">Updated at 2023-02-02 </p>
            <p className=" mt-2 font-light text-lg">
                <span className=" font-bold">Chat-GPT</span> ("we," "our," or
                "us") is committed to protecting your privacy. This Privacy
                Policy explains how your personal information is collected,
                used, and disclosed by Chat-GPT. This Privacy Policy applies to
                our website,&nbsp;
                <Link
                    to="https://chat-gpt.uz"
                    className="text-indigo-600 hover:underline"
                >
                    https://chat-gpt.uz
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mx-1 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                    </svg>
                </Link>
                , and its associated subdomains (collectively, our "Service").
                By accessing or using our Service, you signify that you have
                read, understood, and agree to our collection, storage, use, and
                disclosure of your personal information as described in this
                Privacy Policy.{" "}
                <span className=" font-bold">
                    If you do not agree with our policies and practices, please
                    do not use our Services.
                </span>
            </p>
            <h2
                id="definitions"
                className="text-3xl text-gray-900 mt-4 capitalize"
            >
                Definitions and key terms
            </h2>
            <p className="mt-2">
                To help explain things as clearly as possible in this Privacy
                Policy, every time any of these terms are referenced, are
                strictly defined as:
            </p>
            <ul>
                <li className="mt-3 list-disc  ml-8">
                    <span className="font-bold mr-1">Cookie:</span>
                    small amount of data generated by a website and saved by
                    your web browser. It is used to identify your browser,
                    provide analytics, remember information about you such as
                    your language preference or login information.
                </li>
                <li className="mt-3 list-disc  ml-8">
                    <span className="font-bold mr-1">Company:</span>
                    when this policy mentions &ldquo;Company,&rdquo;
                    &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our,&rdquo; it
                    refers to Chat-GPT that is responsible for your information
                    under this Privacy Policy.
                </li>
                <li className="mt-3 list-disc  ml-8">
                    <span className="font-bold mr-1">Country:</span>
                    where Chat-GPT or the owners/founders of Chat-GPT are based,
                    in this case is Uzbekistan.
                </li>
                <li className="mt-3 list-disc  ml-8">
                    <span className="font-bold mr-1">Customer:</span>
                    refers to the company, organization or person that signs up
                    to use the Chat-GPT Service to manage the relationships with
                    your consumers or service users.
                </li>
                <li className="mt-3 list-disc  ml-8">
                    <span className="font-bold mr-1">Device:</span>
                    any internet connected device such as a phone, tablet,
                    computer or any other device that can be used to visit
                    Chat-GPT and use the services.
                </li>
                <li className="mt-3 list-disc  ml-8">
                    <span className="font-bold mr-1">IP address:</span>
                    Every device connected to the Internet is assigned a number
                    known as an Internet protocol (IP) address. These numbers
                    are usually assigned in geographic blocks. An IP address can
                    often be used to identify the location from which a device
                    is connecting to the Internet.
                </li>
                <li className="mt-3 list-disc  ml-8">
                    <span className="font-bold mr-1">Personnel:</span>
                    refers to those individuals who are employed by Chat-GPT or
                    are under contract to perform a service on behalf of one of
                    the parties.
                </li>
                <li className="mt-3 list-disc  ml-8">
                    <span className="font-bold mr-1">Personal Data:</span>
                    any information that directly, indirectly, or in connection
                    with other information &mdash; including a personal
                    identification number &mdash; allows for the identification
                    or identifiability of a natural person.
                </li>
                <li className="mt-3 list-disc  ml-8">
                    <span className="font-bold mr-1">Service:</span>
                    refers to the service provided by Chat-GPT as described in
                    the relative terms (if available) and on this platform.
                </li>
                <li className="mt-3 list-disc  ml-8">
                    <span className="font-bold mr-1">Third-party service:</span>
                    refers to advertisers, contest sponsors, promotional and
                    marketing partners, and others who provide our content or
                    whose products or services we think may interest you.
                </li>
                <li className="mt-3 list-disc  ml-8">
                    <span className="font-bold mr-1">Website:</span>
                    Chat-GPT&rsquo;s site, which can be accessed via this URL:
                    &nbsp;
                    <Link
                        to="https://chat-gpt.uz"
                        className="text-indigo-600 hover:underline"
                    >
                        https://chat-gpt.uz
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mx-1 inline-block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </Link>
                </li>
                <li className="mt-3 list-disc  ml-8">
                    <span className="font-bold mr-1">You:</span>a person or
                    entity that is registered with Chat-GPT to use the Services.
                </li>
            </ul>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">
                What Information Do We Collect?
            </h2>
            <p className=" mt-2">
                We collect information from you when you visit our service,
                register, place an order, subscribe to our newsletter, respond
                to a survey or fill out a form.
            </p>
            <ul>
                <li className="mt-3 list-disc  ml-8">Name / Username</li>
                <li className="mt-3 list-disc  ml-8">Email Addresses</li>
                <li className="mt-3 list-disc  ml-8">
                    Debit/credit card numbers
                </li>
                <li className="mt-3 list-disc  ml-8">Password</li>
            </ul>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">
                How Do We Use The Information We Collect?
            </h2>
            <p className=" mt-2">
                Any of the information we collect from you may be used in one of
                the following ways:
            </p>
            <ul>
                <li className="mt-3 list-disc  ml-8">
                    To personalize your experience (your information helps us to
                    better respond to your individual needs)
                </li>
                <li className="mt-3 list-disc  ml-8">
                    To improve our service (we continually strive to improve our
                    service offerings based on the information and feedback we
                    receive from you)
                </li>
                <li className="mt-3 list-disc  ml-8">
                    To improve customer service (your information helps us to
                    more effectively respond to your customer service requests
                    and support needs)
                </li>
                <li className="mt-3 list-disc  ml-8">
                    To process transactions To administer a contest, promotion,
                    survey or other site feature
                </li>
                <li className="mt-3 list-disc  ml-8">
                    To send periodic emails
                </li>
            </ul>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">
                Do we share the information we collect with third parties?
            </h2>
            <p className=" mt-2">
                No, we do not share any data with any third parties.
            </p>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">
                How Do We Use Your Email Address?
            </h2>
            <div className=" mt-2">
                <p>
                    By submitting your email address on our service, you agree
                    to receive emails from us. You can cancel your participation
                    in any of these email lists at any time by clicking on the
                    opt-out link or other unsubscribe option that is included in
                    the respective email.
                </p>
                <p className="mt-3">
                    We only send emails to people who have authorized us to
                    contact them, either directly, or through a third party. We
                    do not send unsolicited commercial emails, because we hate
                    spam as much as you do. Note: If at any time you would like
                    to unsubscribe from receiving future emails, we include
                    detailed unsubscribe instructions at the bottom of each
                    email.
                </p>
            </div>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">
                Is the information collected through our service secure?
            </h2>
            <p className=" mt-2">
                We take precautions to protect the security of your information.
                We have physical, electronic, and managerial procedures to help
                safeguard, prevent unauthorized access, maintain data security,
                and correctly use your information. However, neither people nor
                security systems are foolproof, including encryption systems. In
                addition, people can commit intentional crimes, make mistakes or
                fail to follow policies. Therefore, while we use reasonable
                efforts to protect your personal information, we cannot
                guarantee its absolute security. If applicable law imposes any
                non-disclaimable duty to protect your personal information, you
                agree that intentional misconduct will be the standards used to
                measure our compliance with that duty.
            </p>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">
                Can I update or correct my information?
            </h2>
            <p className=" mt-2">
                The rights you have to request updates or corrections to the
                information we collect depend on your relationship with us.
                Personnel may update or correct their information as detailed in
                our internal company employment policies. Customers have the
                right to request the restriction of certain uses and disclosures
                of personally identifiable information as follows. You can
                contact us in order to (1) update or correct your personally
                identifiable information, (2) change your preferences with
                respect to communications and other information you receive from
                us, or (3) delete the personally identifiable information
                maintained about you on our systems (subject to the following
                paragraph), by cancelling your account. Such updates,
                corrections, changes and deletions will have no effect on other
                information that we maintain, or information that we have
                provided to third parties in accordance with this Privacy Policy
                prior to such update, correction, change or deletion. To protect
                your privacy and security, we may take reasonable steps (such as
                requesting a unique password) to verify your identity before
                granting you profile access or making corrections. You are
                responsible for maintaining the secrecy of your unique password
                and account information at all times.You should be aware that it
                is not technologically possible to remove each and every record
                of the information you have provided to us from our system. The
                need to back up our systems to protect information from
                inadvertent loss means that a copy of your information may exist
                in a non-erasable form that will be difficult or impossible for
                us to locate. Promptly after receiving your request, all
                personal information stored in databases we actively use, and
                other readily searchable media will be updated, corrected,
                changed ordeleted, as appropriate, as soon as and to the extent
                reasonably and technically practicable.If you are an end user
                and wish to update, delete, or receive any information we have
                about you, you may do so by contacting the organization of which
                you are a customer.
            </p>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">
                How long do we keep your information?
            </h2>
            <p className=" mt-2">
                We keep your information only so long as we need it to provide
                service to you and fulfill the purposes described in this
                policy. This is also the case for anyone that we share your
                information with and who carries out services on our behalf.
                When we no longer need to use your information and there is no
                need for us to keep it to comply with our legal or regulatory
                obligations, we'll either remove it from our systems or
                depersonalize it so that we can't identify you.
            </p>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">
                How Do We Protect Your Information?
            </h2>
            <p className=" mt-2">
                We implement a variety of security measures to maintain the
                safety of your personal information when you place an order or
                enter, submit, or access your personal information. We offer the
                use of a secure server. All supplied sensitive/credit
                information is transmitted via Secure Socket Layer (SSL)
                technology and then encrypted into our Payment gateway providers
                database only to be accessible by those authorized with special
                access rights to such systems, and are required to keep the
                information confidential. After a transaction, your private
                information is never kept on file. We cannot, however, ensure or
                warrant the absolute security of any information you transmit to
                us or guarantee that your information on the Service may not be
                accessed, disclosed, altered, or destroyed by a breach of any of
                our physical, technical, or managerial safeguards.
            </p>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">
                Governing Law
            </h2>
            <p className=" mt-2">
                The laws of Uzbekistan, excluding its conflicts of law rules,
                shall govern this Agreement and your use of our service. Your
                use of our service may also be subject to other local, state,
                national, or international laws. Your Consent By using our
                service, registering an account, or making a purchase, you
                consent to this Privacy Policy.
            </p>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">
                Links to Other Websites
            </h2>
            <p className=" mt-2">
                This Privacy Policy applies only to the Services. The Services
                may contain links to other websites not operated or controlled
                by us. We are not responsible for the content, accuracy or
                opinions expressed in such websites, and such websites are not
                investigated, monitored or checked for accuracy or completeness
                by us. Please remember that when you use a link to go from the
                Services to another website, our Privacy Policy is no longer in
                effect. Your browsing and interaction on any other website,
                including those that have a link on our platform, is subject to
                that website&rsquo;sown rules and policies. Such third parties
                may use their own cookies or other methods to collect
                information about you.
            </p>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">Cookies</h2>
            <p className=" mt-2">
                We use "Cookies" to identify the areas of our website that you
                have visited. A Cookie is a small piece of data stored on your
                computer or mobile device by your web browser. We use Cookies to
                personalize the Content that you see on our website. Most web
                browsers can be set to disable the use of Cookies. However, if
                you disable Cookies, you may not be able to access functionality
                on our website correctly or at all. We never place Personally
                Identifiable Information in Cookies.
            </p>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">
                Payment Details
            </h2>
            <p className=" mt-2">
                In respect to any credit card or other payment processing
                details you have provided us, we commit that this confidential
                information will be stored in the most secure manner possible.
            </p>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">
                Kids' Privacy
            </h2>
            <p className=" mt-2">
                We do not address anyone under the age of 13. We do not
                knowingly collect personally identifiable information from
                anyone under the age of 13. If You are a parent or guardian and
                You are aware that Your child has provided Us with Personal
                Data, please contact Us. If We become aware that We have
                collected Personal Data from anyone under the age of 13 without
                verification of parental consent, We take steps to remove that
                information from our servers.
            </p>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">
                Changes To Our Privacy Policy
            </h2>
            <p className=" mt-2">
                If we decide to change our privacy policy, we will post those
                changes on this page, and/or update the Privacy Policy
                modification date below. Third-Party Services We may display,
                include or make available third-party content (including data,
                information, applications and other products services) or
                provide links to third-party websites or services ("Third- Party
                Services"). You acknowledge and agree that we shall not be
                responsible for any Third-Party Services, including their
                accuracy, completeness, timeliness, validity, copyright
                compliance, legality, decency, quality or any other aspect
                thereof. We do not assume and shall not have any liability or
                responsibility to you or any other person or entity for any
                Third-Party Services. Third-Party Services and links thereto are
                provided solely as a convenience to you and you access and use
                them entirely at your own risk and subject to such third
                parties' terms and conditions.
            </p>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">
                Tracking Technologies
            </h2>
            <ul>
                <li className="mt-3 list-disc  ml-8">
                    <span className=" font-mono bg-gray-200 rounded-sm p-1">
                        localStorage
                    </span>
                    &nbsp; - Local Storage sometimes known as DOM storage,
                    provides web apps with methods and protocols for storing
                    client-side data. Web storage supports persistent data
                    storage, similar to cookies but with a greatly enhanced
                    capacity and no information stored in the HTTP request
                    header.
                </li>
                <li className="mt-3 list-disc  ml-8">
                    <span className=" font-mono bg-gray-200 rounded-sm p-1">
                        sessionStorage
                    </span>
                    &nbsp;- uses "Sessions" to identify the areas of our website
                    that you have visited. A Session is a small piece of data
                    stored on your computer or mobile device by your web
                    browser.
                </li>
            </ul>
            <h2 className=" text-3xl text-gray-900 mt-4 capitalize">
                <span>Contact Us </span>
            </h2>
            <p className=" mt-2">
                Don't hesitate to contact us if you have any questions. You can
                either use the contact form on the web-site or you can send your
                messages directly to the following e-mail address:
                <ContactLink />
            </p>
            <CustomImageButton URL="/" icon={faArrowLeft} text="Bosh Sahifa" />
            &nbsp;&nbsp;
            <CustomImageButton
                URL="/privacy-policy?lang=uz"
                icon={faLanguage}
                text="O'zbekcha"
            />
        </div>
    );
}
