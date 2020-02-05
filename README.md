# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

### The Image Filtering Microservice
It is a Node-Express application which runs a simple script to process images. 

###  url

The Image Filtering Microserviceis deployed to aws elasticbeanstalk. You can test in this link.

http://uifm-dev3.us-east-1.elasticbeanstalk.com/

### How to use it

In order to fetch a public image from internet you have to add some query url as it is explained in the initial screen.

http://uifm-dev3.us-east-1.elasticbeanstalk.com/filteredimage?image_url=http://...

try with this

http://uifm-dev3.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://media.timeout.com/images/103461302/750/422/image.jpg
