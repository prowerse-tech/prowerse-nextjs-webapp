---
title: Hybrid Cloud - What, Why & How?
date: '2021-08-06'
author: content/data/team/pradyuman-zala.yaml
thumb_image: images/classic/blog-post-3.png
thumb_image_alt: Pradyuman Zala Blog image
image: images/classic/blog-post-3.png
image_alt: Post 3 placeholder image
image_position: right
seo:
  title: Hybrid Cloud - What, Why & How?
  description: Quae diligentissime contra Aristonem dicuntur a Chryippo
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Blog Post-3
      keyName: property
    - name: 'og:description'
      value: This is the 3rd blog post
      keyName: property
    - name: 'og:image'
      value: images/classic/blog-post-3.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Blog Post-3
    - name: 'twitter:description'
      value: This is the 3rd blog post
    - name: 'twitter:image'
      value: images/classic/blog-post-3.png
      relativeUrl: true
layout: post
---

### What is Hybrid Cloud?

A Hybrid Cloud amalgamates multiple cloud stacks to work seamlessly. Hybrid Cloud workload combine public and private clouds. It also includes on-premises infrastructure with cloud workloads. All practical Hybrid Clouds contain different cloud environments which are tightly interconnected with each other. 

Word 'hybrid' has its inspiration from concept of hybrid cars! Hybrid cars offer drivability through two different engines. A petrol and an electric motor. Each engine operates differently, but together both results in moving car in frugal way. Similarly, Hybrid Clouds leverage the benefits of multiple clouds for given scenario. For e.g., using SES from AWS and MS-SQL from Azure.


### Why is Hybrid Cloud required?

Hybrid Clouds solves many use cases. Following are few:

1. Direct move from legacy to public cloud may not be practical move in many scenarios. Here migration can start with moving less risky components such as storage, emailers etc.

2. Many times, public cloud offers services which are not possible in private infrastructure. Hybrid approach is best suited for such scenarios.

3. To reduce dependency on single independent public cloud service provider. It’s very risky to put service monitoring solution on same region/zone/cloud service provider. Hybrid Cloud resolves this by having monitoring stack in some other public cloud infrastructure.

4. Making public cloud infrastructure exposed to internet & then exposing private cloud to public cloud is very well accepted security trade-off.

5. Greater control over cost by choosing best suited option from all cloud providers.
   

### How Hybrid Cloud works?

So how Hybrid Cloud communicate within? For a Hybrid Cloud to work well, the connection between the separate clouds is key. Public clouds, private clouds, and on-premises infrastructure can connect to each other by API, VPN or WAN. Hybrid Cloud is all about mixing many types of hosting options. Following are usual cases of different type of environments. Any combination of infrastructure is known as Hybrid Cloud.

1. <i>Public Cloud:</i> A public cloud is a cloud service run by an independent company with multiple data centers. Public clouds usually offer 'slice' of infrastructure from much bigger infrastructure. AWS, Azure, GCP are popular Public Clouds.

2. <i>Hosted Private Cloud:</i> In contrast to Public Cloud, HPCs don't ger 'slice' of infra. Instead, they get the whole fruit. Usually, complete infrastructure is reserved for one customer. There are independent hosting providers offering service to host private cloud.

3. <i>On-premises Private Cloud:</i> These are like HPCs. Only difference here is that owner of infrastructure maintains it by themselves in private instance of Data Centre. Usually, financial data sets are a best case for these types of clouds.

4. <i>On-premises Non-cloud:</i> This is the model used by legacy systems. Owner of infrastructure buys software licenses, installs, and maintains hardware in private data center computers.