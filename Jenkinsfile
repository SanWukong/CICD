pipeline {
    agent any
        
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SanWukong/CICD.git'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                sh 'Password=Tryme@2000# && Username=sanwukong'
                sh 'docker login -u $Username -p $Password'
              }
        }
        
        stage('Build') {
            steps {
                sh 'docker build -t sanwukong/jenkins:1.0 .'
             }
        }
        
        stage('Push') {
            steps {
                sh 'docker push sanwukong/jenkins:1.0'
            }
        }
        stage('Deploy') {
            steps {
                kubernetesDeploy config: 'kubernetes-config.yml'
            }
        }
    }
}
