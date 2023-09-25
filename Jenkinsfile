pipeline {
    agent any
    tools {
        Docker 'Docker'
        nodejs 'nodejs'
    }
        
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/SanWukong/CICD.git'
            }
        }

        stage('Login to Docker Hub') {
            steps {
                sh 'docker login -u Sanwukong -p Tryme@2000#'
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
