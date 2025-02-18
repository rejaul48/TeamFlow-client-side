import React from 'react';

const AboutUs = () => {
    return (
        <>
            <section className=''>
                <div className="relative flex size-full min-h-screen flex-col bg-slate-50  group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
                    <div className="layout-container flex h-full grow flex-col">
                       
                        <div className="container  w-full mx-auto   flex flex-1 justify-center py-5">
                            <div className="container flex flex-col mx-auto flex-1">
                                <div className="@container">
                                    <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
                                         
                                         <div className='flex items-center justify-center mt-12'>
                                            <img src="https://img.freepik.com/free-photo/close-up-young-colleagues-having-meeting_23-2149060234.jpg?t=st=1739903459~exp=1739907059~hmac=36ccdfbe428eecd6a21a636ac4c9cf9349776686d893cb7c22d07eedbc31f623&w=740" alt="about-us-image" />
                                         </div>

                                        <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                                            <div className="flex flex-col gap-2 text-left">
                                                <h1
                                                    className="text-[#0e141b] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                                                >
                                                   TeamFlow
                                                </h1>
                                                <h2 className="text-[#0e141b] text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal tracking-wide">
                                                This web application streamlines employee task submissions, HR workflow monitoring, and payments. Admins manage roles, verify employees, and process payments efficiently using Stripe for enhanced productivity and accountability.
                                                </h2>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-10 px-4 py-10 @container">
                                    <h1
                                        className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
                                    >
                                        Our Goals
                                    </h1>
                                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                                        <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
                                            <div className="text-[#0e141b]" data-icon="Target" data-size="24px" data-weight="regular">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path
                                                        d="M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h2 className="text-[#0e141b] text-base font-bold leading-tight">Our Mission</h2>
                                                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                                                    To democratize artificial intelligence by making it accessible to everyone, regardless of their technical background.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
                                            <div className="text-[#0e141b]" data-icon="GlobeHemisphereWest" data-size="24px" data-weight="regular">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path
                                                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.62,87.62,0,0,1-6.4,32.94l-44.7-27.49a15.92,15.92,0,0,0-6.24-2.23l-22.82-3.08a16.11,16.11,0,0,0-16,7.86h-8.72l-3.8-7.86a15.91,15.91,0,0,0-11-8.67l-8-1.73L96.14,104h16.71a16.06,16.06,0,0,0,7.73-2l12.25-6.76a16.62,16.62,0,0,0,3-2.14l26.91-24.34A15.93,15.93,0,0,0,166,49.1l-.36-.65A88.11,88.11,0,0,1,216,128ZM143.31,41.34,152,56.9,125.09,81.24,112.85,88H96.14a16,16,0,0,0-13.88,8l-8.73,15.23L63.38,84.19,74.32,58.32a87.87,87.87,0,0,1,69-17ZM40,128a87.53,87.53,0,0,1,8.54-37.8l11.34,30.27a16,16,0,0,0,11.62,10l21.43,4.61L96.74,143a16.09,16.09,0,0,0,14.4,9h1.48l-7.23,16.23a16,16,0,0,0,2.86,17.37l.14.14L128,205.94l-1.94,10A88.11,88.11,0,0,1,40,128Zm102.58,86.78,1.13-5.81a16.09,16.09,0,0,0-4-13.9,1.85,1.85,0,0,1-.14-.14L120,174.74,133.7,144l22.82,3.08,45.72,28.12A88.18,88.18,0,0,1,142.58,214.78Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h2 className="text-[#0e141b] text-base font-bold leading-tight">Our Vision</h2>
                                                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                                                    To create a world where anyone can use AI to solve problems, improve their lives, and shape the future.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
                                            <div className="text-[#0e141b]" data-icon="Drop" data-size="24px" data-weight="regular">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path
                                                        d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Zm55.89-62.66a57.6,57.6,0,0,1-46.56,46.55A8.75,8.75,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h2 className="text-[#0e141b] text-base font-bold leading-tight">Our Values</h2>
                                                <p className="text-[#4e7397] text-sm font-normal leading-normal">
                                                    Empowerment: We believe that AI can be a force for good, and we're committed to using it to empower people and organizations.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 gap-3 rounded-lg border border-[#d0dbe7] bg-slate-50 p-4 flex-col">
                                            <div className="text-[#0e141b]" data-icon="Users" data-size="24px" data-weight="regular">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path
                                                        d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h2 className="text-[#0e141b] text-base font-bold leading-tight">Our Objectives</h2>
                                                <p className="text-[#4e7397] text-sm font-normal leading-normal">Innovation: We're always looking for new ways to use AI to solve problems and improve lives.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Frequently Asked Questions</h2>
                                <div className="flex flex-col p-4 gap-3">
                                    <details className="flex flex-col rounded-xl border border-[#d0dbe7] bg-slate-50 px-[15px] py-[7px] group" open="">
                                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                                            <p className="text-[#0e141b] text-sm font-medium leading-normal">How does the employee task submission process work?</p>
                                            <div className="text-[#0e141b] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                                </svg>
                                            </div>
                                        </summary>
                                        <p className="text-[#4e7397] text-sm font-normal leading-normal pb-2">
                                        Employees can log in to their accounts and submit tasks directly through the platform. They can provide details such as task descriptions, deadlines, and attachments. Once submitted, tasks are automatically routed to the relevant manager or HR for review and approval. The system also allows employees to track the status of their tasks in real-time.
                                        </p>
                                    </details>
                                    <details className="flex flex-col rounded-xl border border-[#d0dbe7] bg-slate-50 px-[15px] py-[7px] group">
                                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                                            <p className="text-[#0e141b] text-sm font-medium leading-normal">How does HR monitor workflows and employee progress?</p>
                                            <div className="text-[#0e141b] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                                </svg>
                                            </div>
                                        </summary>
                                        <p className="text-[#4e7397] text-sm font-normal leading-normal pb-2">
                                        HR personnel have access to a centralized dashboard where they can view all ongoing tasks, employee progress, and pending approvals. The system provides real-time updates, notifications, and analytics to help HR monitor workflows efficiently. HR can also generate reports to assess productivity and identify bottlenecks.
                                        </p>
                                    </details>
                                    <details className="flex flex-col rounded-xl border border-[#d0dbe7] bg-slate-50 px-[15px] py-[7px] group">
                                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                                            <p className="text-[#0e141b] text-sm font-medium leading-normal">How are payments processed through the system?</p>
                                            <div className="text-[#0e141b] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                                </svg>
                                            </div>
                                        </summary>
                                        <p className="text-[#4e7397] text-sm font-normal leading-normal pb-2">
                                        Payments are processed securely using Stripe integration. Admins can review completed tasks, verify hours worked, and approve payments directly through the platform. Once approved, payments are automatically processed and disbursed to employees' accounts. The system also maintains a payment history for transparency and accountability.
                                        </p>
                                    </details>
                                    <details className="flex flex-col rounded-xl border border-[#d0dbe7] bg-slate-50 px-[15px] py-[7px] group">
                                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                                            <p className="text-[#0e141b] text-sm font-medium leading-normal">How do admins manage employee roles and permissions?</p>
                                            <div className="text-[#0e141b] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                                </svg>
                                            </div>
                                        </summary>
                                        <p className="text-[#4e7397] text-sm font-normal leading-normal pb-2">
                                        Admins have full control over employee roles and permissions. They can assign roles (e.g., employee, manager, HR) and define access levels for each role. Admins can also verify new employees during onboarding and update roles or permissions as needed. This ensures that only authorized personnel can access sensitive information or perform specific actions.
                                        </p>
                                    </details>
                                    <details className="flex flex-col rounded-xl border border-[#d0dbe7] bg-slate-50 px-[15px] py-[7px] group">
                                        <summary className="flex cursor-pointer items-center justify-between gap-6 py-2">
                                            <p className="text-[#0e141b] text-sm font-medium leading-normal">Is my data secure on this platform?</p>
                                            <div className="text-[#0e141b] group-open:rotate-180" data-icon="CaretDown" data-size="20px" data-weight="regular">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                                                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                                                </svg>
                                            </div>
                                        </summary>
                                        <p className="text-[#4e7397] text-sm font-normal leading-normal pb-2">
                                        Yes, your data is secure. We use industry-standard encryption protocols to protect all sensitive information. Additionally, role-based access control ensures that only authorized users can access specific data. Payment processing is handled securely through Stripe, which complies with PCI DSS standards for secure transactions.
                                        </p>
                                    </details>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;