
import Home from './Home'
import Service from './Services'
import ContactUS from './ContactUs'
import Careers from './Careers'
import Post1 from '../Component/BlogDetails/post-1'
import Post3 from '../Component/BlogDetails/post-3'
import Post2 from '../Component/BlogDetails/post-2'

import ViewCaseStudyBlockChain from '../Component/ViewCaseStudy/ViewCaseStudyBlockChain'
import ViewCaseStudyHealthCare from '../Component/ViewCaseStudy/ViewCaseStudyHealthCare'
import ViewCaseStudyhealthFitness from '../Component/ViewCaseStudy/ViewCaseStudyhealthFitness'
import ViewCaseStudyInsurance from '../Component/ViewCaseStudy/ViewCaseStudyInsurance'
import BuildYourDedicatedTeam from '../Pages/BuildYourDedicatedTeam'
import JobDescriptionBusiness from '../Component/JobDescription/job-description-business-executive'
import JobDescriptionDevOps from '../Component/JobDescription/job-description-devops'
import JobDescriptionPython from '../Component/JobDescription/job-description-python'
import JobDescriptionRust from '../Component/JobDescription/job-description-rustengineer'
import JobDescriptionAutomation from '../Component/JobDescription/job-description-testautomation'
import PostResume from './post-resume'



const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    route: "/",
    component: <Home />,
  },
  {
    type: "collapse",
    name: "Service",
    key: "service",
    route: "/service",
    component: <Service />,
  },
  {
    type: "collapse",
    name: "ContactUS",
    key: "contact",
    route: "/contact",
    component: <ContactUS />,
  },
  {
    type: "collapse",
    name: "Careers",
    key: "careers",
    route: "/careers",
    component: <Careers />,
  },  {
    type: "collapse",
    name: "BuildYourDedicatedTeam",
    key: "BuildYourDedicatedTeam",
    route: "/build-your-dedicated-team",
    component: <BuildYourDedicatedTeam />,
  },  {
    type: "collapse",
    name: "Post1",
    key: "Post1",
    route: "/blog-product",
    component: <Post1 />,
  },  {
    type: "collapse",
    name: "Post2",
    key: "Post2",
    route: "/blog-infra",
    component: <Post2 />,
  },  {
    type: "collapse",
    name: "Post3",
    key: "Post3",
    route: "/blog-cloud",
    component: <Post3 />,
  },  {
    type: "collapse",
    name: "Post3",
    key: "Post3",
    route: "/hire-developers",
    component: <Post3 />,
  },  {
    type: "collapse",
    name: "ViewCaseStudyBlockChain",
    key: "ViewCaseStudyBlockChain",
    route: "/blockchain",
    component: <ViewCaseStudyBlockChain />,
  },  {
    type: "collapse",
    name: "ViewCaseStudyHealthCare",
    key: "ViewCaseStudyHealthCare",
    route: "/healthcare",
    component: <ViewCaseStudyHealthCare />,
  },  {
    type: "collapse",
    name: "ViewCaseStudyhealthFitness",
    key: "ViewCaseStudyhealthFitness",
    route: "/health-wealth-fitness",
    component: <ViewCaseStudyhealthFitness />,
  },  {
    type: "collapse",
    name: "ViewCaseStudyInsurance",
    key: "ViewCaseStudyInsurance",
    route: "/insurance",
    component: <ViewCaseStudyInsurance />,
  },  {
    type: "collapse",
    name: "PostResume",
    key: "PostResume",
    route: "/post-resume",
    component: <PostResume />,
  },  {
    type: "collapse",
    name: "ContacJobDescriptionBusinesstUS",
    key: "JobDescriptionBusiness",
    route: "/job-description-business-executive",
    component: <JobDescriptionBusiness />,
  },  {
    type: "collapse",
    name: "JobDescriptionAutomation",
    key: "JobDescriptionAutomation",
    route: "/job-description-automation",
    component: <JobDescriptionAutomation />,
  },  {
    type: "collapse",
    name: "JobDescriptionDevOps",
    key: "JobDescriptionDevOps",
    route: "/job-description-devops",
    component: <JobDescriptionDevOps />,
  },  {
    type: "collapse",
    name: "JobDescriptionPython",
    key: "JobDescriptionPython",
    route: "/job-description-python",
    component: <JobDescriptionPython />,
  },  {
    type: "collapse",
    name: "JobDescriptionRust",
    key: "JobDescriptionRust",
    route: "/job-description-rust",
    component: <JobDescriptionRust />,
  }
];

export default routes;
