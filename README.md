## Application to store and share images without any database.
### TODO
- Make Swagger documentation
- Cover with tests all endpoint
- Use query params to return base64 agains plain image
- Add posibility to upload image using multipart/form-data

### Description
This is litle microservice that can help you store and share images.   
Microservice have just one route which you can easily configure, set your name of the route, by default it's ``` /api/images ```.   
By this route you can easily upload image and download it back.  
When you upload image to service, special ``` ID ``` will be generated for this image and you can download image back only with this unique ``` ID ```.
With this mechanism, privacy is ensured. Only the user who has image ``` ID ``` can have access to this image. You should store ``` ID's ``` and share them by your own rules and requirements.   
You can upload image by POST request using base64 or using multipart/form-data.
Upload image available using plain image or base64.   
All images is storing in JPEG format with 80% of quality to save disc space

### How to start
#### using docker image
``` docker run -p 2044:80 appshop/image-service ```   
This command will download image and start server on 2044 port your machine. Also you could configure all available environment.   
#### using source code
``` git clone https://github.com/AppDevelopmentShop/image-service ```   
``` cd image-service ```   
``` npm install ```   
``` npm run build ```   

After that you can start server in different way:   
``` npm start ``` - start server in development mode    

``` NODE_ENV=production npm run start:prod ``` - start server in production mode   

``` pm2 start ecosystem.config,js ``` - start server using PM2 (ensure you have PM2 installed)

### All available environment
``` NODE_ENV ``` (default: 'production')  
``` PORT ``` (default: 80)   
``` ROUTE ``` (default: '/api/images') - http route to upload and download images   
``` ID_LEN ``` (default: 32) - length of generated image unique name   
``` ID_PREFIX ``` (default: '' - empty) - prefix before image unique name   

Explanation about image configuration ``` ID ```.   
For example, if you will set ``` ID_LEN ``` to 4 and ``` ID_PREFIX ``` to 'p_', then program will generate names likes this one:
'p_N1'. Length of the ``` ID ``` will be strong equal to ``` ID_LEN ```.
Changing ``` ID_LENGTH ``` very useful when you want to save space in your DB (decrease id length) or increase security (increase id length).   
Changing ``` ID_PREFIX ``` useful when you want to give to your service some personalization and increase the recognition by users.

### logs
``` sudo docker exec -it [ID] tail -f logs/info.log ```   
``` sudo docker exec -it [ID] tail -f logs/error.log ```    
[ID] - id or name container

### URLs
[Github Repo](https://github.com/AppDevelopmentShop/image-service/)  
[Swagger API Documentation](https://app.swaggerhub.com/apis/astepano/)  
[Docker Cloud Repo](https://hub.docker.com/r/appshop/image-service/)  

### docker-compose
Example part of valid docker compose file:

```yml
image-service:
    image: appshop/image-service
    environment:
      ROUTE: "/images"
      ID_LEN: 16
      ID_PREFIX: "s"
    port:
      "2044:80
```
