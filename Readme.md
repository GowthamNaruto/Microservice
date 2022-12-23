# Post App

Post App is a simple microservie app made with Node.js, React, Docker, Kubernetes, nginx and skaffold.
The reason to build this project is purely for learning by doing

## App functionality

- Create a new post by writing into the form
- Comment on a post
- And this comment is checked of any blacklisted words given and remove
  them automatically.
- Each service of this app is isolated and deployed in kubernetes cluster.

## App structure

- React is used as a front-end framework
- Express and Nodejs is used as a backend

## Tools used

Front end - Reactjs\
Backend - Express and Nodejs\
Microservice - Docker, Kubernetes, nginx and skaffold.

## Steps to use this boiler plate

Use the package manager [npm](https://www.npmjs.com/) to install React app.

### Step-1

```bash
npx create-react-app my-app
```

and use npm to install any neccessary packages

```bash
npm init
```

### Step-2

Download [Docker desktop](https://www.docker.com/products/docker-desktop/) for windows and mac.And enable Kubernetes engine inside the docker desktop settings. It'll take several minutes to start this engine.

### Notes

This purpose of this project is to learn Kubernetes and Docker container

## Docker

Containers are only isolated groups of processes running on a single host, which fulfill a set of “common” features.\

So containers have to fulfill four major requirements to be acceptable as such:

- Not negotiable: They have to run on a single host. Okay, so two computers cannot run a single container.
- Clearly: They are groups of processes. You might know that Linux processes live inside a tree structure, so we can say containers must have a root process.
- Okay: They need to be isolated, whatever this means in detail.
- Not so clear: They have to fulfill common features. Features in general seem to change over time, so we have to point out what the most common features are.

### Docker Image

An image is a single file containing all the dependencies and all the configuration required to run a very specific program. This is a single file that gets stored on your hard drive, and at some point in time you can use this image to create something called a **container**.

### Docker Container

A container is an instance of an image, and you can kind of think of it as being like a running program, in short a container is a program with its own isolated set of hardware resources, so it kind of has its own little set or its own little space of memory as its own little space of networking technology and its own little space of hard drive space as well.

### Docker Client

Is also known as the **Docker CLI**, is a program that used to interact with docker, the Docker client itself, doesn't actually do anything with containers or images. Instead, the Docker client is really just a tool or a portal of sorts to help us interact with another piece of software that is included in this Docker for windows or Mac package called the **Docker Server**.

### Docker Server

This is also called the Docker Daemon. This program is the actual tool or the actual piece of software that is responsible for creating containers, images, maintaining containers, uploading images and doing just about everything you can possibly imagine around the world of Docker.

### Namespacing

- With Namespacing, we can look at all of the different hardware resources connected to our computer, and we can essentially segment out portions of those resources.
- With Namespacing, we are allowed to isolate resources per a process or a group of processes.
- Namespacing is not only used for hardware, it can be also used for software elements as well. So for example, we can namespace a process to restrict the area of a hard drive that is available or the network devices that are available.

### Control Groups

- A Control Groups can be used to limit the amount of resources that a particular process can use.
- It can be used to limit the amount of memory that a process can use, the amount of CPU, the amount of hard drive, input-input or input-output, and the amount of network bandwidth as well.

## Essential commands for docker

```bash
docker run hello-world

# console anything
docker run busybox echo aruljothi

docker start [instance ID]

# -a flag take the output from the container and print into the terminal
docker start -a [instance ID]

# shutdown a container gently
docker stop [containerID]

# shutdown a container forcly
docker kill [containerID]

#  to list all container ran in the machine
docker ps --all
```

## Container based commands for Docker

```bash
#to list all container ran in the machine
docker ps --all

#  to delete all image cache
docker system prune

# used to get output from an image when
# you forget to use -a when starting a container.
docker logs [instance ID]

# exec - execute an additional command in a running container.
# -it - is a combination of -i(take as input whatever is given)
# -t(bring back the output to the terminal in a nice formatted way)
#input given to the command and command means to
#run a specific function.
docker exec -it [containerID] [command]

# to open a shell(sh) or command prompt in a running container
docker exec -it [containerID] sh

# This series commands is to tag a name into the created container.
# This process is called “Tagging an Image”
docker build -t [dockerid]/[foldername]:version

# Example
docker build -t gowtham1995/redis

# Docker run with port mapping
docker run -p 8080:8080 gowtham1995/simpleweb

```

## Kubernetes

Kubernetes(**K8s**) is a tool for running a bunch of different containers. When we make use of kubernetes, we’re going to give it some configuration to run and interact with each other.

To make it simple, When we make use of kubernetes, we’re going to give it some configuration files, these configuration files are going to tell Kubernetes about the different containers that we want to run in our application. Kubernetes is then going to create these containers that are going to run our programs for us, and it’s going to handle communication or essentially network requests between all these different containers as well.

So we can really imagine Kubernetes as a tool to run some different programs and make communication between those programs very easy and straightforward.

### Kubernetes Cluster

A cluster is a set of different virtual machines. It can have as few as one virtual machine, or it can have many hundreds or thousands of virtual machines. All these different virtual machines we refer to as nodes, they are all managed by something called a **Maste**. Master is essentially a program that’s going to manage everything inside of our cluster, all the different programs that are running, all the different aspects of these virtual machines and many other things.

When we tell kubernetes to run some programs for us it’ll take our program and then more or less randomly assign it to be executed by one of these nodes (a virtual machine). The big thing that Kubernetes does for us is give us the ability to just kind of arbitrarily send requests or communicate between these different services with some kind of third party thing that we are going to create. So in short, we can kind of imagine down here that we’re going to create something inside our cluster that we can just send requests to, and it will automatically figure out how to route requests off to the appropriate service that is running inside of our application.

Kubernetes is also going to creating services like launching new copies and scaling the number of copies we’re running very easy and straightforward as well.

###Terminology

**Kubernetes Cluster** - A collection of nodes + a master to manage them. Effectively it is the entire set of infrastructure that’s going ro run our code. A single cluster might have many, many nodes assigned to it.

**Node** - A Node is a virtual machine that’s going to run all the different containers that we throw at our Kubernetes cluster.

**Pod** - A Pod, technically, it wraps up a container and technically a pod can have multiple containers inside of it.

**Deployment** - Monitors a set of pods, makes sure they are running and restarts them if they crash.

**Service**- A Kubernetes service is something that provides a very easy to remember URL so that other running pods or containers inside of our cluster can very easily access another pod.
Types of Services

- **Cluster IP** - Sets up an easy-to-remember URL to access a pod. Only exposes pods in the cluster.
- **Node Port** - Makes a pod accessible from outside the cluster. Usually only used for development purposes.
- **Load Balancer** - Makes a pod accessible from outside the cluster. This is the right way to expose a pod to the outside world.
- **External Name** - Redirects an in-cluster request to a CNAME url.

## Essential commands for Kubernetes

```bash
#  Tell Kubernetes to process the config.
kubectl apply -f [yaml file]

#   Print out information about all the running pods in our  machine.
kubectl get pods

#  Execute the given command in a running pod.
Kubectl exec -it [pod_name] [cmd]

# Print out logs from the given pod.
kubectl logs [pod_name]

# Deletes the given pod.
kubectl delete pod [pod_name]

# Print out some information about the running pod.
kubectl describe pod [pod_name]
```

## Deployments commands

```bash
#  List all the running deployments.
kubectl get deployments

#   To list all listening port in windows OS
netstat -anb

#  EPrint out details about a specific deployment
kubectl describe deployment [depl_name]

# Create a deployment out of a config file
kubectl apply -f config_file_name

#  to deploy multiple files in folder at once
kubectl apply -f .

# Delete a deploymen
kubectl delete deployment [depl_name]

# Delete all running deployments
kubectl delete deployments –all
```

## Updating the image used in a deployment

```bash
# 1. The deployment must be using the ‘latest’ tag in the pod spec section.
# 2. Make an update to your code
# 3. Build the image
docker build -t gowtham1995/[container_name]

# 4. Push the image to Docker hub
docker push gowtham1995/[container_name]

# 5. Restart the deployment
kubectl rollout restart deployment [depl_name]
```

## Load Balancer

Tells Kubernetes to reach out to its provider and provision a load balancer. Gets traffic into a single pod.

The goal of load balancer service is to have one single point of entry into our entire cluster.

## Skaffold

- Automates many tasks in a Kubernetes dev environment.
- Makes it really easy to update code in a running pod.
- Makes it really easy to create/delete all objects tied to a project at once.
  To install Skaffold on your local machine

```bash
choco install -y skaffold
```

### Skaffold Config file

This config file is going to tell "Skaffold" how to manage all the different sub-projects inside our cluster.by adding in this manifest line, we are telling skaffold that we want it to watch all of these different "YAML" files Any time that we make changes to one of those file, skaffold is going to automatically reapply that config file to our Kubernetes cluster.

Initiate the skaffold file

```bash
skaffold init
```

Now run the skaffold file by

```bash
skaffold dev
```

Reference for config file, [Refer skaffold docs](https://skaffold.dev/docs/references/yaml/)

## License

[MIT](https://choosealicense.com/licenses/mit/)
