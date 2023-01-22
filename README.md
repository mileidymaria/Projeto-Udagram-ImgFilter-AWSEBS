# Udagram Image Filtering Microservice

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

### Steps

- Create an eb profile
- Eb init a new application
- Added the deploy artifact to .elasticbeanstask/config.yml
- Eb create a new env
- Eb deploy

### URL's
- BASE URL -> http://img-filter-ebs-env.us-east-1.elasticbeanstalk.com/
- Cases examples:
    - No image url ->  http://img-filter-ebs-env.us-east-1.elasticbeanstalk.com/filteredimage?image_url=
    - Img not found url -> http://img-filter-ebs-env.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://timedotcom.files.wordpress.com/2019/03/kitten-rert.jpg
    - Valid img -> http://img-filter-ebs-env.us-east-1.elasticbeanstalk.com/filteredimage?image_url=https://assets.pokemon.com/assets/cms2/img/misc/countries/pt/country_detail_pokemon.png   
