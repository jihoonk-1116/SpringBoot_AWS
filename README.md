# SpringBoot & React & AWS

# Backend
  Covered Skills set
  
  * Spring Boot
  * Lombok
  * Spring Security
  * JWT
    
# Frontend
  Covered Skills set
  
  * React 
    
# AWS Integration
  Covered Skills set
  
  * Elastic Bean Stack
  * Route 53
  * Load Balancer
  * Virtual Private Cloud(VPC)
  * MySQL
  * Auto Scaling Group(ACG)
  * IAM
  * Elastic Cloud Computing(EC2)
  * HTTPS communication
  
  ## Step 1 : Deploy backend application EBS
  ### Install of AWS CLI to access AWS resources with programatic way.
  https://awscli.amazonaws.com/AWSCLIV2.msi for Windows<br>
  https://awscli.amazonaws.com/AWSCLIV2.pkg for MAC <br>
  ![image](https://user-images.githubusercontent.com/76544061/148880697-45b554bf-5ea3-4cb1-8747-15aa8edec2ed.png)

  ### Setting IAM
  
  * Add user -> Programatic -> AdministratorAccess to access all resources of AWS <br>
  
  ![image](https://user-images.githubusercontent.com/76544061/148880944-0601718b-60e8-4ee0-9bf1-a0a71619872a.png)
  
  ### Install EB CLI
  The APP will be deployed by EBS <br>
  ![Screen Shot 2022-01-10 at 11 42 36 PM](https://user-images.githubusercontent.com/76544061/148882600-1b9d2a47-1483-4968-941a-303d123feb3b.png) <br>
  ![Screen Shot 2022-01-10 at 11 42 43 PM](https://user-images.githubusercontent.com/76544061/148882620-d244902e-87e0-461d-b49f-19a11d222b24.png)

  #### Utilizing Elastic Bean Stock 
  <strong> Step 1 - eb init </strong> <br>
  * Initializing Elastic Bean Stock applcation in Local machine <br>
  * Application Platform : JVM (Middleware), Linux 
  
  <br>
  Backend Initializing <br>
  
  ![Screen Shot 2022-01-10 at 11 59 23 PM](https://user-images.githubusercontent.com/76544061/148886255-3ed3c364-6764-40f9-937c-b4cff0efd76b.png) <br>
![Screen Shot 2022-01-10 at 11 58 37 PM](https://user-images.githubusercontent.com/76544061/148886270-bf8deac2-56d3-4e02-ac44-f62f33409de1.png) <br>


  
  #### Result : Successfully creating .elasticbeanstalk/config.yml <br>
  ![Screen Shot 2022-01-11 at 12 07 35 AM](https://user-images.githubusercontent.com/76544061/148884704-20d6a106-2b55-4770-bf1a-ba0a1862a137.png)

  ### Creation aplication-dev.yaml and application-prod.yaml
  * To manage application properties for developing version and production <br>
![Screen Shot 2022-01-11 at 12 25 30 AM](https://user-images.githubusercontent.com/76544061/148886190-d47d4c3b-2440-4b97-8997-8cbd3e841d1d.png)
 <application-prod.yaml>
 
  * Use port 5000
  * Use MySQL as DB
  * Show SQL log that is conducted by JPA
  * MySQL8Dialect : It's a library that maps Java type's data to database type's data<br>
  ex) Java's String -> DB's Varchar, It helps to handle @Id & @GeneratedValue <br>
  * ddl stands for Data Definition Language, such as Drop, Create, Alter
  * ddl-auto parameter asks how an user manages table of database when an app is initiated. (create,update,validate etc..)
  * url means database's address
  
  ### HealthCheck for Loadbalancer <br>
  * GetMapping at "/" : Loadbalancer uses HealthCheck API to check the app's status. 
  ![Screen Shot 2022-01-11 at 2 33 06 AM](https://user-images.githubusercontent.com/76544061/148899928-ad36c10f-f8b2-4ad5-8a69-18f01661b475.png)

 ### Create jar file for the application to be upload <br>
 ![Screen Shot 2022-01-11 at 2 36 54 AM](https://user-images.githubusercontent.com/76544061/148900530-9d5e4694-40a5-4669-99ea-2ac2b1f59796.png)
 
 Then, add deploy parameter in the config.yml<br>
 ![Screen Shot 2022-01-11 at 2 39 57 AM](https://user-images.githubusercontent.com/76544061/148900810-96e4dba3-58a7-45e8-aa3c-19e5788679a3.png)

 ### eb create
 * Command : eb create --database --elb-type application --instance-type t2.micro
 * --database : Database parameter to include new RDS in EBS
 * --elb-type <typename> : Elastic Load Balancer parameter to use LB and Auto Scaling Group
 * --instance-type <typename> : Instance type for the app <br>
 
 ![Screen Shot 2022-01-11 at 3 23 20 AM](https://user-images.githubusercontent.com/76544061/148906551-36f120eb-8186-4858-99d2-f9158eea79ad.png) <br>
 ![Screen Shot 2022-01-11 at 3 17 44 AM](https://user-images.githubusercontent.com/76544061/148906597-6e4fe932-095d-42eb-be6c-676824b822fb.png)

 ### eb setenv
  * Command : eb setenv SPRING_PROFILES_ACTIVE=prod
  * Set environment variable using spring app profile
  * Terminal access <br>
![Screen Shot 2022-01-11 at 7 02 38 PM](https://user-images.githubusercontent.com/76544061/149051496-beca4625-266c-4b86-9904-5c92145ba788.png) <br>
  * Console access
  <img width="680" alt="Screen Shot 2022-01-11 at 9 12 23 PM" src="https://user-images.githubusercontent.com/76544061/149051587-9efd5bb2-6a06-428e-ad25-ece5ed293b6e.png">

 #### Result : Successfully deployed backend application
  
  <img width="707" alt="Screen Shot 2022-01-11 at 9 11 05 PM" src="https://user-images.githubusercontent.com/76544061/149051769-6c4d6297-1e31-499e-8d44-c87e9e10620c.png">



  
