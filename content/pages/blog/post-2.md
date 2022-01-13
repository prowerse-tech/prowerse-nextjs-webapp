---
title: Infrastructure As Code and it's Relevance
subtitle: >-
  Infrastructure as Code (IaC) provisions infrastructure through code instead of handling with manual efforts. IaC results into configuration files which contains infrastructure specifications. In the times of containerization, it is very essentials that same environment is provisioned every time.
date: '2021-07-29'
author: content/data/team/pradyuman-zala.yaml
thumb_image: images/classic/blog-post-2.png
thumb_image_alt: Pradyuman Zala Blog image
image: images/classic/blog-post-2.png
image_alt: Post 2 placeholder image
image_position: right
seo:
  title: Infrastructure As Code and it's Relevance
  description: Quae diligentissime contra Aristonem dicuntur a Chryippo
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Blog Post-2
      keyName: property
    - name: 'og:description'
      value: This is the 2ng blog page
      keyName: property
    - name: 'og:image'
      value: images/classic/blog-post-2.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Blog Post-2
    - name: 'twitter:description'
      value: This is the 2nd blog post
    - name: 'twitter:image'
      value: images/classic/blog-post-2.png
      relativeUrl: true
layout: post
---

### Every DevOps Engineer's nightmare is undocumented, ad-hoc configuration changes.

 Codifying configuration specifications ensures that latest versions are delivered in every build. Having infrastructure as code also means that infra is divided in meaningful reusable components. How about having common Kubernetes cluster specifications with all common stack preloaded?

Provisioning infra with IaC relieves developers from manually provisioning servers, storage, and other infrastructure components. There's a great set of tool set is available to accomplish the IaC. Tool set can be used to know desired state of infrastructure, which then can be provisioned. It can be used for configuration management to maintain systems in the desired state. Widely used tooling to implement IaC are

+ Terraform 

+ Chef

+ Puppet

+ Ansible

IaC can be achieved with different ways.

A <strong>Declarative</strong> approach maintains the desired state of the system, including resources required. Here list of the current state of system objects is maintained. This makes infrastructure simpler to manage.

An <strong>Imperative</strong> approach defines the commands needed to achieve the desired configuration. These commands are also required to be executed in the correct order. 

<u>Which one is better?</u> Majority IaC tools will automatically provision the desired infrastructure. This is declarative approach. If changes are made to the desired state, IaC tool will apply those changes. Whereas an imperative tool will require strategy to identify how those changes should be applied.

<strong>Benefits - </strong> With advancement in cloud computing, the number of infrastructure components has increased significantly. Agile practices & quest of being early in market results in delivery of frequent builds to production daily. Manually it becomes difficult to manage the multiple components and multi and hybrid cloud scenarios.

+ Reduced Downtimes with automation in controller's seat

+ Reduced Cost with support for hybrid and 

+ Improved time for Go to Market

+ Improved infrastructure consistency

+ Great tooling helps to focus on what is required