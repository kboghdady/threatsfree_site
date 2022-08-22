import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Threats Free LLC for Cyber security services 
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
           Minimise risk exposure with a fully managed vulnerability scanning services
          </p>
          <p className="mt-8 md:mt-12">
            <Button size="lg">Get Started</Button>
          </p>
          <p className="mt-4 text-gray-600"></p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Our Services</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Vulnerability Scans</p>
              <p className="mt-4">
              Vulnerability scanning is vital to identifying security weaknesses and flaws in systems and codes running on them. Scanning is an integral component of a vulnerability management program,
               which aims to protect the organization from breaches and exposures of sensitive data.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Asset Security</p>
              <p className="mt-4">
              Asset security plays  important role in a cybersecurity program, that  lists the need to inventory and control hardware and software assets as its first two security measures. Along these lines, asset management is the first category in the NIST Cybersecurity Framework
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Network monitoring</p>
              <p className="mt-4">
              Providing a high-end insight to your network with rich visualization for better insight and analytical decisions. 
These high-end insights will allow us to give your team a full insight of your network in case of attack, and allow us to provide a recommendation to avoid attacks.                </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Helping you stay on top of cyber hygiene</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Vulnerability scanning is frequently used by hackers to help identify weak targets. Our managed vulnerability scanning service will help you to stay on top of cyber hygiene and avoid giving hackers an easy way to compromise your organisation.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
          Supplying actionable remediation guidance
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            
Supplying actionable remediation guidance
For each vulnerability scan conducted, Redscan’s experts produce a clear and easy to understand report that describes the vulnerabilities discovered, assesses the business impact and provides actionable and prioritised remediation guidance.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
          Guiding future security investments
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          By working closely alongside your in-house security team, Redscan’s offensive security professionals can help you to develop your long-term security strategy, channel future security investments and ensure that processes are compliant with the latest security standards.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />


<SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
          Reducing the strain on in-house teams
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
          Reducing the strain on in-house teams
Scheduling regular scans as well as analysing their outputs can be time and resource-intensive. A vulnerability management service alleviates the strain of undertaking these activities in-house and enables your in-house team to focus on addressing vulnerabilities rather than discovering them.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />

<SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
          Supplying actionable remediation guidance
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            
Supplying actionable remediation guidance
For each vulnerability scan conducted, Redscan’s experts produce a clear and easy to understand report that describes the vulnerabilities discovered, assesses the business impact and provides actionable and prioritised remediation guidance.
          </p>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    <section id="stats" className="py-20 lg:pt-32">
      <div className="container mx-auto text-center">
        <LabelText className="text-gray-600">Our customers get results</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>

    e
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
      <p className="mt-8 text-xl font-light">
        Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque fermentum dui faucibus in.
      </p>
      <p className="mt-8">
        <Button size="xl">Get Started Now</Button>
      </p>
    </section>
  </Layout>
);

export default Index;
