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
  
  * Elastic Bean Stock
  * Route 53
  * Load Balancer
  * Virtual Private Cloud(VPC)
  * MySQL
  * Auto Scaling Group(ACG)
  * IAM
  * Elastic Cloud Computing(EC2)
  * HTTPS communication
  
  ## Step 1
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
  
  ### HealthCheck for Loadbalancer
  ![Screen Shot 2022-01-11 at 12 25 30 AM](https://user-images.githubusercontent.com/76544061/148899741-95e1456f-9e7b-41e0-a0fc-fd7e90f0b08a.png)

  
