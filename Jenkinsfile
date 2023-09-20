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
                kubernetesDeploy config: 'kubernetes-config.yml'
            }
        }
    }
}
