import React, { lazy, Suspense, useEffect,useRef, useState } from 'react';
import '../../../Components/Contentpage/ContentPage.css';
import  '../Python/Python.css';
import { Link, useNavigate, useParams ,useLocation  } from 'react-router';
import { FaArrowLeft , FaArrowRight} from "react-icons/fa";
import CreatorViews from '../../../SmallComponents/CreatorViewsSection/CreatorViews';
import NextPrevTopic from '../../../SmallComponents/NextPrevTopic/NextPrevTopic';
 

const Carousel = lazy(() => import('../../Carousel'))
const FaBars = lazy(() => import('react-icons/fa').then(module => ({ default: module.FaBars })));
const BASE_URL = import.meta.env.VITE_API_BASE_URL;



const AWS = () => {
  const {topic} = useParams();
  const formattedTopic = decodeURIComponent(topic?.replace(/-/g,' '));
  const [cont, setCont] = useState("");
  const location = useLocation();
  const title = location.state?.Title;
  const [searchtitle] = useState(formattedTopic);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  
   

const aws_topics = [
  "Introduction to AWS",
  "AWS Global Infrastructure (Regions, Availability Zones)",
  "AWS IAM (Identity and Access Management)",
  "AWS EC2 (Elastic Compute Cloud)",
  "EC2 Instance Types and Sizing",
  "EC2 Launching and Configuration",
  "Security Groups and Network ACLs",
  "Elastic Load Balancing (ELB)",
  "AWS Auto Scaling",
  "Amazon S3 (Simple Storage Service)",
  "S3 Bucket Management and Access Control",
  "AWS EBS (Elastic Block Store)",
  "AWS RDS (Relational Database Service)",
  "Amazon Aurora (MySQL/PostgreSQL Compatibility)",
  "AWS Lambda (Serverless Computing)",
  "AWS Elastic Beanstalk",
  "AWS CloudFormation",
  "AWS CloudWatch",
  "AWS VPC (Virtual Private Cloud)",
  "AWS Direct Connect",
  "Amazon Route 53 (DNS Management)",
  "Amazon CloudFront (CDN)",
  "Amazon SNS (Simple Notification Service)",
  "Amazon SQS (Simple Queue Service)",
  "AWS Kinesis (Real-time Data Processing)",
  "AWS DynamoDB (NoSQL Database)",
  "AWS Redshift (Data Warehousing)",
  "Amazon ElastiCache",
  "AWS API Gateway",
  "AWS Systems Manager",
  "AWS Security Hub",
  "AWS WAF and Shield",
  "Amazon Cognito (User Authentication)",
  "AWS CloudTrail (Audit Logs)",
  "AWS Config (Compliance and Monitoring)",
  "AWS Trusted Advisor",
  "AWS Cost Explorer and Billing",
  "AWS Organizations and Consolidated Billing",
  "AWS CloudFront and Edge Locations",
  "Amazon ECR (Elastic Container Registry)",
  "Amazon ECS (Elastic Container Service)",
  "Amazon EKS (Elastic Kubernetes Service)",
  "AWS Fargate (Serverless Containers)",
  "AWS CloudWatch Logs",
  "AWS Lambda Triggers and Events",
  "AWS KMS (Key Management Service)",
  "AWS Secrets Manager",
  "AWS Elastic File System (EFS)",
  "Amazon WorkSpaces (Virtual Desktops)",
  "AWS AppSync (GraphQL APIs)",
  "Amazon Elastic Search Service",
  "AWS Storage Gateway",
  "AWS Snowball (Data Transfer and Storage)",
  "Amazon MQ (Managed Message Brokers)",
  "AWS Outposts (On-premise Cloud Services)",
  "AWS Backup and Disaster Recovery",
  "AWS Auto Scaling Policies",
  "AWS CodeCommit (Version Control)",
  "AWS CodeBuild (Continuous Integration)",
  "AWS CodeDeploy (Continuous Delivery)",
  "AWS CodePipeline (CI/CD Pipeline)",
  "AWS Cloud9 (Cloud IDE)",
  "AWS X-Ray (Distributed Tracing)",
  "AWS Machine Learning Services (SageMaker, Polly, Rekognition)",
  "AWS AI Services (Lex, Comprehend, Translate, Transcribe)",
  "AWS IoT Core",
  "AWS Mobile Services (Amplify, Pinpoint, Device Farm)",
  "AWS Elastic Transcoder",
  "AWS Cost Optimization Best Practices",
  "AWS Compliance and Certification",
  "AWS Well-Architected Framework",
  "AWS Cloud Adoption Framework",
  "Preparing for AWS Certifications (Solution Architect, Developer, SysOps)",
  "AWS Serverless Architecture",
  "AWS Migration and Transfer (Database, Server, Application Migration)"
]



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMenu]);

  return (
    <>
    <Suspense fallback={<div>Loading ...</div>}>
      <Carousel b="Data Types" c="Constants" d="Comments" e="Sets" f="Lists" g="Tuple" h="Dictionary" i="Multithreading" />
      </Suspense>
      <button className='btn-17' >
      <Suspense fallback={null}><FaBars onClick={()=>setShowMenu(!showMenu)} />
      </Suspense></button>
      <div className='disp-cont'>
        <div ref={menuRef} className={`disp-cont-1 ${showMenu ? "show":""}`}>
          <div className='disp-cont-items'>
            <ul>

              {aws_topics.map((topics, index) => (
                <li key={index}><Link to={`/aws/${topics.replace(/\s+/g,'-')}`}>{topics}</Link></li>

              ))}
            </ul>
          </div>
        </div>

        <div className='disp-cont-2'>
        <CreatorViews formattedTopic={formattedTopic} tit="aws" tagn={38}/>

          <NextPrevTopic topics={aws_topics} currentTopic={formattedTopic} basePath="/aws"/>
        </div>

        <div className='disp-cont-3'>this is the right content</div>
      </div>
    </>
  )
}

export default AWS;
