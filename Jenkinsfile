pipeline {
    agent any
        
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SanWukong/CICD.git'
            }
        }

        stage('Test Dokcer') {
            steps {
                sh 'docker version'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                sh 'docker login -u sanwukong -p Tryme@2000#'
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
                sh 'ssh root206.189.181.38 -p 81zW&|d9f<A'
                sh 'kubectl get pods'
                
            }
        }
    }
}
